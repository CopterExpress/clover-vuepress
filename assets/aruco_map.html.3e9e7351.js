import{_ as p,r as i,o as l,c as r,a as e,b as s,w as n,F as d,d as a,e as o}from"./app.4f6a4bec.js";import{_ as u,a as h,b as _,c as m}from"./IMG_4175.7da05184.js";const k={},g=e("h1",{id:"map-based-navigation-with-aruco-markers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#map-based-navigation-with-aruco-markers","aria-hidden":"true"},"#"),a(" Map-based navigation with ArUco markers")],-1),f={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"TIP",-1),b=a("The following applies to "),x=a("image versions"),y=a(),w=e("strong",null,"0.22",-1),q=a(" and up. Older documentation is still available for "),E={href:"https://github.com/CopterExpress/clover/blob/v0.20/docs/en/aruco_map.md",target:"_blank",rel:"noopener noreferrer"},P=a("for version "),I=e("strong",null,"0.20",-1),S=a("."),T={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"TIP",-1),L=a("Marker detection requires the camera module to be correctly plugged in and "),z=a("configured"),O=a("."),C={class:"custom-container tip"},M=e("p",{class:"custom-container-title"},"TIP",-1),A=a("We recommend using our "),F=a("custom PX4 firmware"),R=a("."),N=o(`<p><code>aruco_map</code> module detects whole ArUco-based maps. Map-based navigation is possible using vision position estimate (VPE).</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Set the <code>aruco</code> argument in <code>~/catkin_ws/src/clover/clover/launch/clover.launch</code> to <code>true</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aruco<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>In order to enable map detection set <code>aruco_map</code> and <code>aruco_detect</code> arguments to <code>true</code> in <code>~/catkin_ws/src/clover/clover/launch/aruco.launch</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aruco_detect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aruco_map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>Set <code>aruco_vpe</code> to <code>true</code> to publish detected camera position to the flight controller as VPE data:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aruco_vpe<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="marker-map-definition" tabindex="-1"><a class="header-anchor" href="#marker-map-definition" aria-hidden="true">#</a> Marker map definition</h2><p>Map is defined in a text file; each line has the following format:</p><div class="language-text ext-text"><pre class="language-text"><code>marker_id marker_size x y z z_angle y_angle x_angle
</code></pre></div><p><code>N_angle</code> is the angle of rotation along the <code>N</code> axis in radians.</p><p>Map files are located at the <code>~/catkin_ws/src/clover/aruco_pose/map</code> directory. Map file name is defined in the <code>map</code> argument:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,14),D=a("Some map examples are provided in "),U={href:"https://github.com/CopterExpress/clover/tree/master/aruco_pose/map",target:"_blank",rel:"noopener noreferrer"},Y=a("the directory"),K=a("."),X=o(`<p>Grid maps may be generated using the <code>genmap.py</code> script:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rosrun aruco_pose genmap.py length x y dist_x dist_y first -o test_map.txt
</code></pre></div><p><code>length</code> is the size of each marker, <code>x</code> is the marker count along the <em>x</em> axis, <code>y</code> is the marker count along the <em>y</em> axis, <code>dist_x</code> is the distance between the centers of adjacent markers along the <em>x</em> axis, <code>dist_y</code> is the distance between the centers of the <em>y</em> axis, <code>first</code> is the ID of the first marker (top left marker, unless <code>--bottom-left</code> is specified), <code>test_map.txt</code> is the name of the generated map file. The optional <code>--bottom-left</code> parameter changes the numbering of markers, making the bottom left marker the first one.</p><p>Usage example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rosrun aruco_pose genmap.py <span class="token number">0.33</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">0</span> -o test_map.txt
</code></pre></div><p>Additional information on the utility can be obtained using <code>-h</code> key: <code>rosrun aruco_pose genmap.py -h</code>.</p><h3 id="checking-the-map" tabindex="-1"><a class="header-anchor" href="#checking-the-map" aria-hidden="true">#</a> Checking the map</h3>`,7),G=a("The currently active map is posted in the "),W=e("code",null,"/aruco_map/image",-1),B=a(" ROS topic. It can be viewed using "),H=a("web_video_server"),j=a(" by opening the following link: "),Z={href:"http://192.168.11.1:8080/snapshot?topic=/aruco_map/image",target:"_blank",rel:"noopener noreferrer"},J=a("http://192.168.11.1:8080/snapshot?topic=/aruco_map/image"),Q=e("img",{src:u,width:"600"},null,-1),$=a("Current estimated pose (relative to the detected map) is published in the "),aa=e("code",null,"aruco_map/pose",-1),ea=a(" ROS topic. If the VPE is disabled, the "),sa=e("code",null,"aruco_map",-1),ta=a(),na=a("TF frame"),oa=a(" is created; otherwise, the "),ca=e("code",null,"aruco_map_detected",-1),ia=a(" frame is created instead. Visualization for the current map is also posted in the "),pa=e("code",null,"aruco_map/visualization",-1),la=a(" ROS topic; it may be visualized in "),ra=a("rviz"),da=a("."),ua=a("An easy to understand detected map visualization is posted in the "),ha=e("code",null,"aruco_map/debug",-1),_a=a(" ROS topic (live view is available on "),ma={href:"http://192.168.11.1:8080/stream_viewer?topic=/aruco_map/debug",target:"_blank",rel:"noopener noreferrer"},ka=a("http://192.168.11.1:8080/stream_viewer?topic=/aruco_map/debug"),ga=a("):"),fa=e("img",{src:h,width:"600"},null,-1),va=e("h2",{id:"coordinate-system",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#coordinate-system","aria-hidden":"true"},"#"),a(" Coordinate system")],-1),ba=a("The marker map adheres to the "),xa={href:"http://www.ros.org/reps/rep-0103.html",target:"_blank",rel:"noopener noreferrer"},ya=a("ROS coordinate system convention"),wa=a(", using the "),qa=e("abbr",{title:"East-North-Up"},"ENU",-1),Ea=a(" coordinate system:"),Pa=o('<ul><li>the <strong><font color="red">x</font></strong> axis points to the right side of the map;</li><li>the <strong><font color="green">y</font></strong> axis points to the top side of the map;</li><li>the <strong><font color="blue">z</font></strong> axis points outwards from the plane of the marker</li></ul><img src="'+_+'" width="600"><h2 id="vpe-setup" tabindex="-1"><a class="header-anchor" href="#vpe-setup" aria-hidden="true">#</a> VPE setup</h2>',3),Ia=a("In order to enable vision position estimation you should use the following "),Sa=a("PX4 parameters"),Ta=a("."),Va=o('<p>If you&#39;re using <strong>LPE</strong> (<code>SYS_MC_EST_GROUP</code> parameter is set to <code>local_position_estimator,attitude_estimator_q</code>):</p><ul><li><code>LPE_FUSION</code> should have <code>vision position</code> and <code>land detector</code> flags set. We suggest unsetting the <code>baro</code> flag for indoor flights.</li><li>External heading (yaw) weight: <code>ATT_W_EXT_HDG</code> = 0.5.</li><li>External heading (yaw) mode: <code>ATT_EXT_HDG_M</code> = 1 (<code>Vision</code>).</li><li>Vision position standard deviations: <code>LPE_VIS_XY</code> = 0.1 m, <code>LPE_VIS_Z</code> = 0.1 m.</li><li><code>LPE_VIS_DELAY</code> = 0 sec.</li></ul><p>If you&#39;re using <strong>EKF2</strong> estimator (<code>SYS_MC_EST_GROUP</code> parameter is set to <code>ekf2</code>), make sure the following is set:</p><ul><li><code>EKF2_AID_MASK</code> should have <code>vision position fusion</code> and <code>vision yaw fusion</code> flags set.</li><li>Vision angle observations noise: <code>EKF2_EVA_NOISE</code> = 0.1 rad.</li><li>Vision position observations noise: <code>EKF2_EVP_NOISE</code> = 0.1 m.</li><li><code>EKF2_EV_DELAY</code> = 0.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>We recommend using <strong>LPE</strong> for marker-based navigation.</p></div>',5),La=a("You may use "),za=a("the "),Oa=e("code",null,"selfcheck.py",-1),Ca=a(" utility"),Ma=a(" to check your settings."),Aa={class:"custom-container tip"},Fa=e("p",{class:"custom-container-title"},"TIP",-1),Ra=a("In order to use LPE with the Pixhawk v1 hardware you should download the "),Na=e("code",null,"px4fmu-v2_lpe.px4",-1),Da=a(" firmware"),Ua=e("h2",{id:"flight",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flight","aria-hidden":"true"},"#"),a(" Flight")],-1),Ya=a("If the setup is done correctly, the drone will hold its position in "),Ka=e("code",null,"POSCTL",-1),Xa=a(" and "),Ga=e("code",null,"OFFBOARD",-1),Wa=a(),Ba=a("flight modes"),Ha=a(" automatically."),ja=a("You will also be able to use "),Za=e("code",null,"navigate",-1),Ja=a(", "),Qa=e("code",null,"set_position",-1),$a=a(" and "),ae=e("code",null,"set_velocity",-1),ee=a(" ROS services for "),se=a("autonomous flights"),te=a(". In order to fly to a specific coordinate within the ArUco map you should use the "),ne=e("code",null,"aruco_map",-1),oe=a(" frame:"),ce=o(`<div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># Takeoff should be performed in the &quot;body&quot; frame; &quot;aruco_map&quot; frame will appear as soon as the drone detects the marker field</span>
navigate<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> z<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> frame_id<span class="token operator">=</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span> speed<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">,</span> auto_arm<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># Takeoff and hover 2 metres above the ground</span>

time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment"># Fly to the (2, 2) point on the marker field while being 2 metres above it</span>
navigate<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> z<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> speed<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> frame_id<span class="token operator">=</span><span class="token string">&#39;aruco_map&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="using-a-specific-marker-frame" tabindex="-1"><a class="header-anchor" href="#using-a-specific-marker-frame" aria-hidden="true">#</a> Using a specific marker frame</h3>`,2),ie=a("Starting with the "),pe=a("image"),le=a(" version 0.18, the drone also can fly relative to a marker in the map, even if it is not currently visible. Like with "),re=a("single-marker navigation"),de=a(", this works by setting the frame_id parameter to aruco_ID, where ID is the desired marker number."),ue=o(`<p>The following code will move the drone to the point 1 meter above the center of marker 5:</p><div class="language-python ext-py"><pre class="language-python"><code>navigate<span class="token punctuation">(</span>frame_id<span class="token operator">=</span><span class="token string">&#39;aruco_5&#39;</span><span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> z<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="additional-settings" tabindex="-1"><a class="header-anchor" href="#additional-settings" aria-hidden="true">#</a> Additional settings</h2><p>If the drone&#39;s position is not stable when VPE is used, try increasing the <em>P</em> term in the velocity PID regulator: increase the <code>MPC_XY_VEL_P</code> and <code>MPC_Z_VEL_P</code> parameters.</p><p>If the drone&#39;s altitude is not stable, try increasing the <code>MPC_Z_VEL_P</code> parameter and adjusting hover thrust via <code>MPC_THR_HOVER</code>.</p><h2 id="placing-markers-on-the-ceiling" tabindex="-1"><a class="header-anchor" href="#placing-markers-on-the-ceiling" aria-hidden="true">#</a> Placing markers on the ceiling</h2><p><img src="`+m+'" alt="Ceiling markers"></p>',7),he=a("In order to navigate using markers on the ceiling, mount the onboard camera so that it points up and "),_e=a("adjust the camera frame accordingly"),me=a("."),ke=o(`<p>You should also set the <code>placement</code> parameter to <code>ceiling</code> in <code>~/catkin_ws/src/clover/clover/launch/aruco.launch</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placement<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ceiling<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),ge=a("With such a camera orientation the "),fe=a("Optical Flow"),ve=a(" technology cannot work, so it should be disabled in the "),be=e("code",null,"~/catkin_ws/src/clover/clover/launch/clover.launch",-1),xe=a(" file:"),ye=o(`<div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>optical_flow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>Such setup will flip the <code>aruco_map</code> frame (making its <strong><font color="blue">z</font></strong> axis point downward). Thus, in order to fly 2 metres below ceiling, the <code>z</code> argument for the <code>navigate</code> service should be set to 2:</p><div class="language-python ext-py"><pre class="language-python"><code>navigate<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">1.1</span><span class="token punctuation">,</span> z<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> speed<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">,</span> frame_id<span class="token operator">=</span><span class="token string">&#39;aruco_map&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,3);function we(qe,Ee){const t=i("RouterLink"),c=i("ExternalLinkIcon");return l(),r(d,null,[g,e("div",f,[v,e("p",null,[b,s(t,{to:"/en/image.html"},{default:n(()=>[x]),_:1}),y,w,q,e("a",E,[P,I,s(c)]),S])]),e("div",T,[V,e("p",null,[L,s(t,{to:"/en/camera_setup.html"},{default:n(()=>[z]),_:1}),O])]),e("div",C,[M,e("p",null,[A,s(t,{to:"/en/firmware.html"},{default:n(()=>[F]),_:1}),R])]),N,e("p",null,[D,e("a",U,[Y,s(c)]),K]),X,e("p",null,[G,W,B,s(t,{to:"/en/web_video_server.html"},{default:n(()=>[H]),_:1}),j,e("a",Z,[J,s(c)])]),Q,e("p",null,[$,aa,ea,sa,ta,s(t,{to:"/en/frames.html"},{default:n(()=>[na]),_:1}),oa,ca,ia,pa,la,s(t,{to:"/en/rviz.html"},{default:n(()=>[ra]),_:1}),da]),e("p",null,[ua,ha,_a,e("a",ma,[ka,s(c)]),ga]),fa,va,e("p",null,[ba,e("a",xa,[ya,s(c)]),wa,qa,Ea]),Pa,e("p",null,[Ia,s(t,{to:"/en/parameters.html"},{default:n(()=>[Sa]),_:1}),Ta]),Va,e("p",null,[La,s(t,{to:"/en/selfcheck.html"},{default:n(()=>[za,Oa,Ca]),_:1}),Ma]),e("div",Aa,[Fa,e("p",null,[Ra,s(t,{to:"/en/firmware.html"},{default:n(()=>[Na,Da]),_:1})])]),Ua,e("p",null,[Ya,Ka,Xa,Ga,Wa,s(t,{to:"/en/modes.html"},{default:n(()=>[Ba]),_:1}),Ha]),e("p",null,[ja,Za,Ja,Qa,$a,ae,ee,s(t,{to:"/en/simple_offboard.html"},{default:n(()=>[se]),_:1}),te,ne,oe]),ce,e("p",null,[ie,s(t,{to:"/en/image.html"},{default:n(()=>[pe]),_:1}),le,s(t,{to:"/en/aruco_marker.html#working-with-detected-markers"},{default:n(()=>[re]),_:1}),de]),ue,e("p",null,[he,s(t,{to:"/en/camera_setup.html"},{default:n(()=>[_e]),_:1}),me]),ke,e("p",null,[ge,s(t,{to:"/en/optical_flow.html"},{default:n(()=>[fe]),_:1}),ve,be,xe]),ye],64)}var Se=p(k,[["render",we],["__file","aruco_map.html.vue"]]);export{Se as default};
