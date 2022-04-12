import{_ as l,r as c,o as u,c as i,a as s,b as a,w as o,F as r,d as n,e}from"./app.4f6a4bec.js";const k={},d=s("h1",{id:"controlling-the-copter-from-arduino",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#controlling-the-copter-from-arduino","aria-hidden":"true"},"#"),n(" Controlling the copter from Arduino")],-1),m=n("For interaction with ROS topics and services on a Raspberry Pi, you can use the "),h={href:"http://wiki.ros.org/rosserial_arduino",target:"_blank",rel:"noopener noreferrer"},g=n("rosserial_arduino"),_=n(" library. This library is pre-installed on "),f=n("a Raspberry Pi image"),v=n("."),b=n("The main tutorial for rosserial: "),y={href:"http://wiki.ros.org/rosserial_arduino/Tutorials",target:"_blank",rel:"noopener noreferrer"},q=n("http://wiki.ros.org/rosserial_arduino/Tutorials"),w=s("p",null,"Arduino is to be installed on Clover and connected via a USB port.",-1),x=s("h2",{id:"configuring-arduino-ide",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuring-arduino-ide","aria-hidden":"true"},"#"),n(" Configuring Arduino IDE")],-1),R=n("To work with ROS and Arduino, you should understand the format of installed packages' messages. For this purpose "),T=n("on Raspberry Pi"),A=n(", build the ROS messages library:"),C=e(`<div class="language-text ext-text"><pre class="language-text"><code>rosrun rosserial_arduino make_libraries.py.
</code></pre></div><p>The obtained folder <code>ros_lib</code> is to be copied to <code>&lt;sketches folder&gt;/libraries</code> on a computer with Arduino IDE.</p><h2 id="configuring-raspberry-pi" tabindex="-1"><a class="header-anchor" href="#configuring-raspberry-pi" aria-hidden="true">#</a> Configuring Raspberry Pi</h2><p>To run the program on Arduino once, you can use command:</p><div class="language-text ext-text"><pre class="language-text"><code>roslaunch clover arduino.launch
</code></pre></div><p>To start the link with Arduino at the startup automatically, set argument <code>arduino</code> in the Clover launch file (<code>~/catkin_ws/src/clover/clover/launch/clover.launch</code>):</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arduino<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>After the launch file is edited, restart the <code>clover</code> service:</p><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl restart clover
</code></pre></div><h2 id="delays" tabindex="-1"><a class="header-anchor" href="#delays" aria-hidden="true">#</a> Delays</h2><p>When <code>rosserial_arduino</code> is used, the Arduino microcontroller should not be blocked for more than a few seconds (for example, using the <code>delay</code> function); otherwise communication between Raspberry Pi and Arduino will be broken.</p><p>During implementation of long <code>while</code> cycles, ensure periodic calling the <code>hn.spinOnce</code> function:</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token comment">/* condition */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... Perform required actions</span>
  nh<span class="token punctuation">.</span><span class="token function">spinOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>To organize long delays, use the delays in a loop with periodic calling of the <code>hn.spinOnce()</code> function:</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// 8 second delay</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  nh<span class="token punctuation">.</span><span class="token function">spinOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="working-with-clover" tabindex="-1"><a class="header-anchor" href="#working-with-clover" aria-hidden="true">#</a> Working with Clover</h2>`,16),N=n("The set of services and topics is similar to the regular set in "),S=n("simple_offboard"),O=n(" and "),z=n("mavros"),M=n("."),F=e(`<p>An example of a program that controls the copter by position using the <code>navigate</code> and <code>set_mode</code> services:</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token comment">// Connecting libraries for working with rosserial</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ros.h&gt;</span></span>

<span class="token comment">// Connecting Clover and MAVROS package message header files</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;clover/Navigate.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;mavros_msgs/SetMode.h&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> clover<span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> mavros_msgs<span class="token punctuation">;</span>

ros<span class="token double-colon punctuation">::</span>NodeHandle nh<span class="token punctuation">;</span>

<span class="token comment">// Declaring services</span>
ros<span class="token double-colon punctuation">::</span>ServiceClient<span class="token operator">&lt;</span>Navigate<span class="token double-colon punctuation">::</span>Request<span class="token punctuation">,</span> Navigate<span class="token double-colon punctuation">::</span>Response<span class="token operator">&gt;</span> <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&quot;/navigate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ros<span class="token double-colon punctuation">::</span>ServiceClient<span class="token operator">&lt;</span>SetMode<span class="token double-colon punctuation">::</span>Request<span class="token punctuation">,</span> SetMode<span class="token double-colon punctuation">::</span>Response<span class="token operator">&gt;</span> <span class="token function">setMode</span><span class="token punctuation">(</span><span class="token string">&quot;/mavros/set_mode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Initializing rosserial</span>
  nh<span class="token punctuation">.</span><span class="token function">initNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Initializing services</span>
  nh<span class="token punctuation">.</span><span class="token function">serviceClient</span><span class="token punctuation">(</span>navigate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  nh<span class="token punctuation">.</span><span class="token function">serviceClient</span><span class="token punctuation">(</span>setMode<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Waiting for connection to Raspberry Pi</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>nh<span class="token punctuation">.</span><span class="token function">connected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> nh<span class="token punctuation">.</span><span class="token function">spinOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  nh<span class="token punctuation">.</span><span class="token function">loginfo</span><span class="token punctuation">(</span><span class="token string">&quot;Startup complete&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Custom settings</span>
  <span class="token comment">// &lt;...&gt;</span>

  <span class="token comment">// Test program</span>
  Navigate<span class="token double-colon punctuation">::</span>Request nav_req<span class="token punctuation">;</span>
  Navigate<span class="token double-colon punctuation">::</span>Response nav_res<span class="token punctuation">;</span>
  SetMode<span class="token double-colon punctuation">::</span>Request sm_req<span class="token punctuation">;</span>
  SetMode<span class="token double-colon punctuation">::</span>Response sm_res<span class="token punctuation">;</span>

  <span class="token comment">// Ascending to 2 meters:</span>
  nh<span class="token punctuation">.</span><span class="token function">loginfo</span><span class="token punctuation">(</span><span class="token string">&quot;Take off&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>auto_arm <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>frame_id <span class="token operator">=</span> <span class="token string">&quot;body&quot;</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
  navigate<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>nav_req<span class="token punctuation">,</span> nav_res<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Waiting for 5 seconds</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	nh<span class="token punctuation">.</span><span class="token function">spinOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  nav_req<span class="token punctuation">.</span>auto_arm <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token comment">// Flying forward 3 meters:</span>
  nh<span class="token punctuation">.</span><span class="token function">loginfo</span><span class="token punctuation">(</span><span class="token string">&quot;Fly forward&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>auto_arm <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>frame_id <span class="token operator">=</span> <span class="token string">&quot;body&quot;</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span>
  navigate<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>nav_req<span class="token punctuation">,</span> nav_res<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Waiting for 5 seconds</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    nh<span class="token punctuation">.</span><span class="token function">spinOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Flying to point 1:0:2 in the marker field</span>
  nh<span class="token punctuation">.</span><span class="token function">loginfo</span><span class="token punctuation">(</span><span class="token string">&quot;Fly on point&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>auto_arm <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>frame_id <span class="token operator">=</span> <span class="token string">&quot;aruco_map&quot;</span><span class="token punctuation">;</span>
  nav_req<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span>
  navigate<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>nav_req<span class="token punctuation">,</span> nav_res<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Waiting for 5 seconds</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    nh<span class="token punctuation">.</span><span class="token function">spinOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Landing</span>
  nh<span class="token punctuation">.</span><span class="token function">loginfo</span><span class="token punctuation">(</span><span class="token string">&quot;Land&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sm_req<span class="token punctuation">.</span>custom_mode <span class="token operator">=</span> <span class="token string">&quot;AUTO.LAND&quot;</span><span class="token punctuation">;</span>
  setMode<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>sm_req<span class="token punctuation">,</span> sm_res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="getting-telemetry" tabindex="-1"><a class="header-anchor" href="#getting-telemetry" aria-hidden="true">#</a> Getting telemetry</h2>`,3),I=n("With Arduino, you can use the "),P=s("code",null,"get_telemetry",-1),W=n(" service"),D=n(". To do so, declare it similar to the "),G=s("code",null,"navigate",-1),L=n(" and "),E=s("code",null,"set_mode",-1),V=n(" services:"),H=e(`<div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ros.h&gt;</span></span>

<span class="token comment">// ...</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;clover/GetTelemetry.h&gt;</span></span>

<span class="token comment">// ...</span>

ros<span class="token double-colon punctuation">::</span>ServiceClient<span class="token operator">&lt;</span>GetTelemetry<span class="token double-colon punctuation">::</span>Request<span class="token punctuation">,</span> GetTelemetry<span class="token double-colon punctuation">::</span>Response<span class="token operator">&gt;</span> <span class="token function">getTelemetry</span><span class="token punctuation">(</span><span class="token string">&quot;/get_telemetry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

nh<span class="token punctuation">.</span><span class="token function">serviceClient</span><span class="token punctuation">(</span>getTelemetry<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

GetTelemetry<span class="token double-colon punctuation">::</span>Request gt_req<span class="token punctuation">;</span>
GetTelemetry<span class="token double-colon punctuation">::</span>Response gt_res<span class="token punctuation">;</span>


<span class="token comment">// ...</span>

gt_req<span class="token punctuation">.</span>frame_id <span class="token operator">=</span> <span class="token string">&quot;aruco_map&quot;</span><span class="token punctuation">;</span> <span class="token comment">// frame id for x, y, z</span>
getTelemetry<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>gt_req<span class="token punctuation">,</span> gt_res<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// gt_res.x is copter position on the x axis</span>
<span class="token comment">// gt_res.y is copter position on the y axis</span>
<span class="token comment">// gt_res.z is copter position on the z axis</span>
</code></pre></div><h2 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h2><p>When using Arduino Nano, RAM may be insufficient. In this case, messages will appear in the Arduino IDE like:</p><div class="language-text ext-text"><pre class="language-text"><code>Global variables use 1837 bytes (89%) of the dynamic memory, leaving 211 bytes for local variables. The maximum is 2048 bytes.
Not enough memory, the program may be unstable.
</code></pre></div><p>You can reduce RAM usage by reducing the size of the buffers allocated for sending and receiving messages. To do this, place the following line <strong>at the beginning</strong> the program:</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">__AVR_ATmega168__</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre></div><p>You can reduce the amount of used memory even more, if you manually configure the number publishers and subscribers, as well as the size of memory buffers allocated for messages, for example:</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ros.h&gt;</span></span>

<span class="token comment">// ...</span>

<span class="token keyword">typedef</span> ros<span class="token double-colon punctuation">::</span>NodeHandle_<span class="token operator">&lt;</span>ArduinoHardware<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">&gt;</span> NodeHandle<span class="token punctuation">;</span>

<span class="token comment">// ...</span>
NodeHandle nh<span class="token punctuation">;</span>
</code></pre></div>`,8);function B(U,Y){const p=c("ExternalLinkIcon"),t=c("RouterLink");return u(),i(r,null,[d,s("p",null,[m,s("a",h,[g,a(p)]),_,a(t,{to:"/en/image.html"},{default:o(()=>[f]),_:1}),v]),s("p",null,[b,s("a",y,[q,a(p)])]),w,x,s("p",null,[R,a(t,{to:"/en/ssh.html"},{default:o(()=>[T]),_:1}),A]),C,s("p",null,[N,a(t,{to:"/en/simple_offboard.html"},{default:o(()=>[S]),_:1}),O,a(t,{to:"/en/mavros.html"},{default:o(()=>[z]),_:1}),M]),F,s("p",null,[I,a(t,{to:"/en/simple_offboard.html"},{default:o(()=>[P,W]),_:1}),D,G,L,E,V]),H],64)}var J=l(k,[["render",B],["__file","arduino.html.vue"]]);export{J as default};
