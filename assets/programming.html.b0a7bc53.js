import{_ as p,r as e,o as l,c as r,a as s,b as n,w as a,F as d,d as t,e as i}from"./app.4f6a4bec.js";import{_ as u}from"./programming.5ff090c0.js";const h={},_=s("h1",{id:"programming",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#programming","aria-hidden":"true"},"#"),t(" Programming")],-1),m=s("img",{src:u,width:"250",align:"right"},null,-1),f=t("The Clover platform allows a "),k=t("Raspberry Pi"),g=t(" computer to be used for programming autonomous flights. The flight program is typically written using the Python programming language. The program may "),y=t("receive telemetry data"),v=t(" (which includes battery data, attitude, position, and other parameters) and send commands like: "),b=t("fly to a point in space"),w=t(", "),x=t("set attitude"),P=t(", "),T=t("set angular rates"),S=t(", and others."),A=t("The platform utilizes the "),R=t("ROS framework"),I=t(", which allows the user program to communicate with the Clover services that are running as a "),C=s("code",null,"clover",-1),F=t(" systemd daemon. The "),O=t("MAVROS"),N=t(" package is used to interact with the flight controller."),B=t("PX4 uses "),G=t("OFFBOARD mode"),L=t(" for autonomous flights. The Clover API can be used to transition the drone to this flight mode automatically. If you need to interrupt the autonomous flight, use your flight mode stick on your RC controller to transition to any other flight mode."),V=s("h2",{id:"positioning",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#positioning","aria-hidden":"true"},"#"),t(" Positioning system")],-1),E=t("A drone has to use a positioning system to be able to hover still or to fly from point to point. The system should compute the drone position and feed this data into the flight controller. Clover allows using multiple positioning systems, such as "),D=t("optical flow"),U=t(" (requires a "),z=t("camera"),W=t(" and a "),q=t("rangefinder"),H=t("), "),M=t("fiducial markers"),X=t(" (requires a camera and markers), GPS and others."),Y=s("h3",{id:"optical-flow",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#optical-flow","aria-hidden":"true"},"#"),t(" Optical flow")],-1),j=s("p",null,"Optical flow is used to compute shifts between consecutive frames and to use this data to compute the drone shifting in space.",-1),J=t("Read more in the "),K=t("Optical Flow article"),Q=t("."),Z=s("h3",{id:"aruco-markers",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#aruco-markers","aria-hidden":"true"},"#"),t(" ArUco markers")],-1),$=s("p",null,"Fiducial markers allow the drone to compute its position relative to these markers. This data may then be transferred to the flight controller.",-1),tt=t("Read more about "),st=t("ArUco markers"),nt=t(" in our articles about them."),ot=s("h3",{id:"gps-outdoor-flight",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gps-outdoor-flight","aria-hidden":"true"},"#"),t(" GPS (outdoor flight)")],-1),at=t("GPS allows you to specify global Earth coordinates (latitude and longitude). The "),et=s("code",null,"navigate_global",-1),it=t(" function takes these as parameters instead of the usual cartesian coordinates."),ct=t("Read more in the "),pt=t("GPS connection"),lt=t(" article."),rt=s("h2",{id:"flight",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flight","aria-hidden":"true"},"#"),t(" Autonomous flight")],-1),dt={class:"custom-container tip"},ut=s("p",{class:"custom-container-title"},"TIP",-1),ht=t("For studying Python programming language, see "),_t={href:"https://www.learnpython.org/en/Welcome",target:"_blank",rel:"noopener noreferrer"},mt=t("tutorial"),ft=t("."),kt=t("After you've configured your positioning system, you can start writing programs for autonomous flights. Use the "),gt=t("SSH connection to the Raspberry Pi"),yt=t(" to run your scripts."),vt=t("Before the first flight it's recommended to check the Clover's configuration with "),bt=t("selfcheck.py utility"),wt=t(":"),xt=i(`<div class="language-bash ext-sh"><pre class="language-bash"><code>rosrun clover selfcheck.py
</code></pre></div><p>In order to run a Python script use the <code>python3</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>python3 flight.py
</code></pre></div><p>Below is a complete flight program that performs a takeoff, flies forward and lands:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> rospy
<span class="token keyword">from</span> clover <span class="token keyword">import</span> srv
<span class="token keyword">from</span> std_srvs<span class="token punctuation">.</span>srv <span class="token keyword">import</span> Trigger

rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;flight&#39;</span><span class="token punctuation">)</span>

get_telemetry <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;get_telemetry&#39;</span><span class="token punctuation">,</span> srv<span class="token punctuation">.</span>GetTelemetry<span class="token punctuation">)</span>
navigate <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;navigate&#39;</span><span class="token punctuation">,</span> srv<span class="token punctuation">.</span>Navigate<span class="token punctuation">)</span>
navigate_global <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;navigate_global&#39;</span><span class="token punctuation">,</span> srv<span class="token punctuation">.</span>NavigateGlobal<span class="token punctuation">)</span>
set_position <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;set_position&#39;</span><span class="token punctuation">,</span> srv<span class="token punctuation">.</span>SetPosition<span class="token punctuation">)</span>
set_velocity <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;set_velocity&#39;</span><span class="token punctuation">,</span> srv<span class="token punctuation">.</span>SetVelocity<span class="token punctuation">)</span>
set_attitude <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;set_attitude&#39;</span><span class="token punctuation">,</span> srv<span class="token punctuation">.</span>SetAttitude<span class="token punctuation">)</span>
set_rates <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;set_rates&#39;</span><span class="token punctuation">,</span> srv<span class="token punctuation">.</span>SetRates<span class="token punctuation">)</span>
land <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;land&#39;</span><span class="token punctuation">,</span> Trigger<span class="token punctuation">)</span>

<span class="token comment"># Takeoff and hover 1 m above the ground</span>
navigate<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> z<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> frame_id<span class="token operator">=</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span> auto_arm<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># Wait for 3 seconds</span>
rospy<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment"># Fly forward 1 m</span>
navigate<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> z<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> frame_id<span class="token operator">=</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Wait for 3 seconds</span>
rospy<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment"># Perform landing</span>
land<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,5),Pt={class:"custom-container tip"},Tt=s("p",{class:"custom-container-title"},"TIP",-1),St=t("The "),At=s("code",null,"navigate",-1),Rt=t(" function call is not blocking; that is, the program will continue executing the next commands before the drone arrives at the set point. Look at the "),It=s("code",null,"navigate_wait",-1),Ct=t(" snippet for a blocking function."),Ft=i("<p>Note that only the first <code>navigate</code> call has its <code>auto_arm</code> parameter set to <code>True</code>. This parameter arms the drone and transitions it to the OFFBOARD flight mode.</p><p>The <code>frame_id</code> parameter specifies which frame of reference will be used for the target point:</p><ul><li><code>body</code> is rigidly bound to the drone body;</li><li><code>navigate_target</code> has its origin at the last target point for <code>navigate</code>;</li><li><code>map</code> is the drone&#39;s local frame;</li><li><code>aruco_map</code> is bound to the ArUco marker map;</li><li><code>aruco_N</code> is bound to the marker with ID=N.</li></ul>",3),Ot=t("Read more in the "),Nt=t("coordinate systems"),Bt=t(" article."),Gt=t("You can also use the "),Lt=t('"Autonomous flight"'),Vt=t(" article as an API reference."),Et={class:"custom-container tip"},Dt=s("p",{class:"custom-container-title"},"TIP",-1),Ut=t("Clover supports "),zt=t("blocks-based programming"),Wt=t(" as well."),qt=s("h2",{id:"additional-periphery",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#additional-periphery","aria-hidden":"true"},"#"),t(" Additional periphery")],-1),Ht=s("p",null,"The Clover platform also exposes APIs for interacting with other peripherals. Read more in the following articles:",-1),Mt=t("LED strip"),Xt=t(";"),Yt=t("laser rangefinder"),jt=t(";"),Jt=t("GPIO"),Kt=t(";"),Qt=t("ultrasonic rangefinder"),Zt=t(";"),$t=t("camera"),ts=t(".");function ss(ns,os){const o=e("RouterLink"),c=e("ExternalLinkIcon");return l(),r(d,null,[_,m,s("p",null,[f,n(o,{to:"/en/raspberry.html"},{default:a(()=>[k]),_:1}),g,n(o,{to:"/en/simple_offboard.html#get_telemetry"},{default:a(()=>[y]),_:1}),v,n(o,{to:"/en/simple_offboard.html#navigate"},{default:a(()=>[b]),_:1}),w,n(o,{to:"/en/simple_offboard.html#set_attitude"},{default:a(()=>[x]),_:1}),P,n(o,{to:"/en/simple_offboard.html#set_rates"},{default:a(()=>[T]),_:1}),S]),s("p",null,[A,n(o,{to:"/en/ros.html"},{default:a(()=>[R]),_:1}),I,C,F,n(o,{to:"/en/mavros.html"},{default:a(()=>[O]),_:1}),N]),s("p",null,[B,n(o,{to:"/en/modes.html#auto"},{default:a(()=>[G]),_:1}),L]),V,s("p",null,[E,n(o,{to:"/en/optical_flow.html"},{default:a(()=>[D]),_:1}),U,n(o,{to:"/en/camera.html"},{default:a(()=>[z]),_:1}),W,n(o,{to:"/en/laser.html"},{default:a(()=>[q]),_:1}),H,n(o,{to:"/en/aruco.html"},{default:a(()=>[M]),_:1}),X]),Y,j,s("p",null,[J,n(o,{to:"/en/optical_flow.html"},{default:a(()=>[K]),_:1}),Q]),Z,$,s("p",null,[tt,n(o,{to:"/en/aruco.html"},{default:a(()=>[st]),_:1}),nt]),ot,s("p",null,[at,n(o,{to:"/en/simple_offboard.html#navigate_global"},{default:a(()=>[et]),_:1}),it]),s("p",null,[ct,n(o,{to:"/en/gps.html"},{default:a(()=>[pt]),_:1}),lt]),rt,s("div",dt,[ut,s("p",null,[ht,s("a",_t,[mt,n(c)]),ft])]),s("p",null,[kt,n(o,{to:"/en/ssh.html"},{default:a(()=>[gt]),_:1}),yt]),s("p",null,[vt,n(o,{to:"/en/selfcheck.html"},{default:a(()=>[bt]),_:1}),wt]),xt,s("div",Pt,[Tt,s("p",null,[St,At,Rt,n(o,{to:"/en/snippets.html#navigate_wait"},{default:a(()=>[It]),_:1}),Ct])]),Ft,s("p",null,[Ot,n(o,{to:"/en/frames.html"},{default:a(()=>[Nt]),_:1}),Bt]),s("p",null,[Gt,n(o,{to:"/en/simple_offboard.html"},{default:a(()=>[Lt]),_:1}),Vt]),s("div",Et,[Dt,s("p",null,[Ut,n(o,{to:"/en/blocks.html"},{default:a(()=>[zt]),_:1}),Wt])]),qt,Ht,s("ul",null,[s("li",null,[n(o,{to:"/en/leds.html"},{default:a(()=>[Mt]),_:1}),Xt]),s("li",null,[n(o,{to:"/en/laser.html"},{default:a(()=>[Yt]),_:1}),jt]),s("li",null,[n(o,{to:"/en/gpio.html"},{default:a(()=>[Jt]),_:1}),Kt]),s("li",null,[n(o,{to:"/en/sonar.html"},{default:a(()=>[Qt]),_:1}),Zt]),s("li",null,[n(o,{to:"/en/camera.html"},{default:a(()=>[$t]),_:1}),ts])])],64)}var is=p(h,[["render",ss],["__file","programming.html.vue"]]);export{is as default};