import{_ as c,r,o as p,c as l,a as e,b as a,w as t,F as d,d as n,e as o}from"./app.4f6a4bec.js";import{_ as u,a as h}from"./rviz-range.8f4314ca.js";const _={},g=e("h1",{id:"working-with-a-laser-rangefinder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#working-with-a-laser-rangefinder","aria-hidden":"true"},"#"),n(" Working with a laser rangefinder")],-1),m={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),k=n("Documentation for the "),v=n("image"),b=n(", versions, starting with "),y=e("strong",null,"0.20",-1),w=n(". For older versions refer to "),x={href:"https://github.com/CopterExpress/clover/blob/v0.19/docs/en/laser.md",target:"_blank",rel:"noopener noreferrer"},R=n("documentation for version "),S=e("strong",null,"0.19",-1),P=n("."),L=e("h2",{id:"vl53l1x-rangefinder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vl53l1x-rangefinder","aria-hidden":"true"},"#"),n(" VL53L1X Rangefinder")],-1),T=e("p",null,"The rangefinder model recommended for Clover is STM VL53L1X. This rangefinder can measure distances from 0 to 4 m while ensuring high measurement accuracy.",-1),C=n("The "),E=n("image for Raspberry Pi"),z=n(" contains pre-installed corresponding ROS driver."),I=o('<h3 id="connecting-to-raspberry-pi" tabindex="-1"><a class="header-anchor" href="#connecting-to-raspberry-pi" aria-hidden="true">#</a> Connecting to Raspberry Pi</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Before using the rangefinder, please remove the protective film from it.</p></div><p>Connect the rangefinder to the 3V, GND, SCL and SDA pins via the I\xB2C interface:</p><img src="'+u+'" alt="Connecting VL53L1X" height="600">',4),q=n("If the pin marked GND is occupied, you can use any other ground pin (look at the "),V={href:"https://pinout.xyz",target:"_blank",rel:"noopener noreferrer"},N=n("pinout"),D=n(" for reference)."),F=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"You can connect several peripheral devices via the I\xB2C interface simultaneously. Use a parallel connection for that.")],-1),X=e("h3",{id:"enabling-the-rangefinder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#enabling-the-rangefinder","aria-hidden":"true"},"#"),n(" Enabling the rangefinder")],-1),G=n("Connect via SSH"),B=n(" and edit file "),O=e("code",null,"~/catkin_ws/src/clover/clover/launch/clover.launch",-1),M=n(" so that the VL53L1X driver is enabled:"),U=o(`<div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rangefinder_vl53l1x<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>By default, the rangefinder driver sends the data to Pixhawk via the <code>/rangefinder/range</code> topic. To view data from the topic, use the following command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rostopic <span class="token builtin class-name">echo</span> /rangefinder/range
</code></pre></div><h3 id="px4-settings" tabindex="-1"><a class="header-anchor" href="#px4-settings" aria-hidden="true">#</a> PX4 settings</h3>`,4),Y={class:"custom-container tip"},A=e("p",{class:"custom-container-title"},"TIP",-1),K=n("We recommend using our "),H=n("custom PX4 firmware for Clover"),W=n(" for best laser rangefinder support."),j=n("PX4 should be properly "),J=n("configured"),Q=n(" to use the rangefinder data."),Z=o(`<p>Set the following parameters when EKF2 is used (<code>SYS_MC_EST_GROUP</code> = <code>ekf2</code>):</p><ul><li><code>EKF2_HGT_MODE</code> = <code>2</code> (Range sensor) \u2013 for flights over horizontal floor;</li><li><code>EKF2_RNG_AID</code> = <code>1</code> (Range aid enabled) \u2013 in other cases.</li></ul><p>Set the following parameters when LPE is used (<code>SYS_MC_EST_GROUP</code> = <code>local_position_estimator, attitude_estimator_q</code>):</p><ul><li>The &quot;pub agl as lpos down&quot; flag should be set in the <code>LPE_FUSION</code> parameter \u2013 for flights over horizontal floor.</li></ul><h3 id="receiving-data-in-python" tabindex="-1"><a class="header-anchor" href="#receiving-data-in-python" aria-hidden="true">#</a> Receiving data in Python</h3><p>In order to receive data from the topic, create a subscriber:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> rospy
<span class="token keyword">from</span> sensor_msgs<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Range

rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;flight&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">range_callback</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Process data from the rangefinder</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Rangefinder distance:&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span><span class="token builtin">range</span><span class="token punctuation">)</span>

rospy<span class="token punctuation">.</span>Subscriber<span class="token punctuation">(</span><span class="token string">&#39;rangefinder/range&#39;</span><span class="token punctuation">,</span> Range<span class="token punctuation">,</span> range_callback<span class="token punctuation">)</span>

rospy<span class="token punctuation">.</span>spin<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>Also it&#39;s possible to read one rangefinder measurement at a time:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">from</span> sensor_msgs<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Range

<span class="token comment"># ...</span>

dist <span class="token operator">=</span> rospy<span class="token punctuation">.</span>wait_for_message<span class="token punctuation">(</span><span class="token string">&#39;rangefinder/range&#39;</span><span class="token punctuation">,</span> Range<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">range</span>
</code></pre></div><h3 id="data-visualization" tabindex="-1"><a class="header-anchor" href="#data-visualization" aria-hidden="true">#</a> Data visualization</h3><p>You may use rqt_multiplot tool to plot rangefinder data.</p><p>rviz may be used for data visualization. To do this, add a topic of the <code>sensor_msgs/Range</code> type to visualization:</p><img src="`+h+'" alt="Range in rviz">',13),$=n("Read more "),nn=n("about rviz and rqt"),en=n(".");function an(sn,tn){const s=r("RouterLink"),i=r("ExternalLinkIcon");return p(),l(d,null,[g,e("div",m,[f,e("p",null,[k,a(s,{to:"/en/image.html"},{default:t(()=>[v]),_:1}),b,y,w,e("a",x,[R,S,a(i)]),P])]),L,T,e("p",null,[C,a(s,{to:"/en/image.html"},{default:t(()=>[E]),_:1}),z]),I,e("p",null,[q,e("a",V,[N,a(i)]),D]),F,X,e("p",null,[a(s,{to:"/en/ssh.html"},{default:t(()=>[G]),_:1}),B,O,M]),U,e("div",Y,[A,e("p",null,[K,a(s,{to:"/en/firmware.html#modified-firmware-for-clover"},{default:t(()=>[H]),_:1}),W])]),e("p",null,[j,a(s,{to:"/en/parameters.html"},{default:t(()=>[J]),_:1}),Q]),Z,e("p",null,[$,a(s,{to:"/en/rviz.html"},{default:t(()=>[nn]),_:1}),en])],64)}var cn=c(_,[["render",an],["__file","laser.html.vue"]]);export{cn as default};
