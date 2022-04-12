import{_ as l,r,o as c,c as u,a,b as t,w as s,F as d,d as e,e as o}from"./app.4f6a4bec.js";import{_ as h,a as p,b as m,c as _,d as g,e as f}from"./06_gazebo_px4_launcher.6ffd1231.js";const v={},k=a("h1",{id:"using-the-simulator",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#using-the-simulator","aria-hidden":"true"},"#"),e(" Using the simulator")],-1),b=e("The Clover simulation environment allows the user to test their code without any risk of equipment damage. Additionally, the "),w=e("virtual machine"),x=e("-based environment has additional (non-ROS) services that are present on a real drone, like Monkey web server."),y=a("h2",{id:"running-the-simulation",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#running-the-simulation","aria-hidden":"true"},"#"),e(" Running the simulation")],-1),P=e("After "),q=e("setting up the simulation packages"),G=e(" or "),S=e("importing and running the VM"),T=e(", you can use "),I=a("code",null,"roslaunch",-1),z=e(" to start Gazebo simulation:"),C=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Be sure to activate your workspace first</span>
<span class="token builtin class-name">source</span> ~/catkin_ws/devel/setup.bash
roslaunch clover_simulation simulator.launch
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Alternatively, if you are using the VM, just double-click on the <code>Gazebo PX4</code> icon on the desktop.</p></div><p>This will launch Gazebo server and client, the PX4 SITL binary and Clover nodes. The terminal in which the command was run will display diagnostic messages from the nodes and PX4, and will accept input for the PX4 command interpreter:</p><p><img src="`+p+'" alt="Gazebo simulation screenshot"></p><p>You can use QGroundControl to configure the simulated drone parameters, plan missions (if GPS is simulated) and control the drone using a joystick:</p><p><img src="'+m+'" alt="Gazebo and QGC"></p>',6),R=e("You can also use "),E=e("our simplified OFFBOARD control"),X=e(" to control the drone, and traditional ROS GUI utilities like "),A=e("rviz and rqt"),M=e(" to analyze the drone state:"),F=a("p",null,[a("img",{src:h,alt:"Gazebo and RQT"})],-1),O=a("h2",{id:"configuring-the-simulation",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#configuring-the-simulation","aria-hidden":"true"},"#"),e(" Configuring the simulation")],-1),U=e("The simulation can be configured by passing additional arguments to the "),V=a("code",null,"roslaunch",-1),B=e(" command or by changing the "),D=a("code",null,"~/catkin_ws/src/clover/clover_simulation/launch/simulator.launch",-1),L=e(" file. Nodes that provide "),N=e("ArUco detection"),Y=e(", "),j=e("optical flow calculation"),Q=e(" and other services can be configured by changing their respective "),H=a("code",null,".launch",-1),J=e(" files, just like on a real drone."),K=o('<p><img src="'+_+`" alt="vscode with simulator.launch open"></p><h3 id="enabling-gps" tabindex="-1"><a class="header-anchor" href="#enabling-gps" aria-hidden="true">#</a> Enabling GPS</h3><p>In order to enable GPS sensor, set the <code>gps</code> argument in <code>simulator.launch</code> to <code>true</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gps<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="camera" tabindex="-1"><a class="header-anchor" href="#camera" aria-hidden="true">#</a> Camera</h3><p>If you don&#39;t need the camera when flying using GPS, it may be disabled in <code>simulator.launch</code> file:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main_camera<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="another-sensors" tabindex="-1"><a class="header-anchor" href="#another-sensors" aria-hidden="true">#</a> Another sensors</h3>`,8),W=e("If you wish to add additional sensors or change their placement, you will have to change the drone description. The description file is located in "),Z=a("code",null,"~/catkin_ws/src/clover/clover_description/urdf/clover/clover4.xacro",-1),$=e(", and uses the "),ee={href:"http://wiki.ros.org/xacro",target:"_blank",rel:"noopener noreferrer"},ae=e("xacro"),te=e(" format to build URDF description."),ne=o(`<h3 id="changing-the-default-world" tabindex="-1"><a class="header-anchor" href="#changing-the-default-world" aria-hidden="true">#</a> Changing the default world</h3><p>Gazebo plugins for the drone currently require the <code>real_time_update_rate</code> world parameter to be 250, and <code>max_step_size</code> to be 0.004. Using other values will not work. Consider using <code>~/catkin_ws/src/clover/clover_simulation/resources/worlds/clover.world</code> as a base.</p><h2 id="performance-suggestions" tabindex="-1"><a class="header-anchor" href="#performance-suggestions" aria-hidden="true">#</a> Performance suggestions</h2><p>Gazebo simulation environment is resource-intensive, and requires a fast CPU and a decent GPU for real-time execution. However, the simulation may still work on less powerful systems at slower-than-realtime rate. Below are some suggestions for running Gazebo on hardware that does not allow realtime execution.</p><h3 id="use-throttling-camera-plugin" tabindex="-1"><a class="header-anchor" href="#use-throttling-camera-plugin" aria-hidden="true">#</a> Use <code>throttling_camera</code> plugin</h3><p>By default, Gazebo does not slow simulation down for visual sensors. This can be remedied by using the <code>throttling_camera</code> plugin from <code>clover_simulation</code>.</p><p>You can enable it for the drone by changing the <code>maintain_camera_rate</code> argument to <code>true</code> in <code>clover_description/launch/spawn_drone.launch</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code>    <span class="token comment">&lt;!-- Slow simulation down to maintain camera rate --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maintain_camera_rate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>The plugin will collect publishing rate statistics and slow the simulation down so that the camera publishing rate is no less than requested. However, large slowdowns may negatively affect non-ROS software that connects to PX4. If your simulation is being slowed down to values lower than 0.5 of realtime, consider using the next suggestion.</p><h3 id="set-simulation-speed" tabindex="-1"><a class="header-anchor" href="#set-simulation-speed" aria-hidden="true">#</a> Set simulation speed</h3>`,10),se=e("Since v1.9 the PX4 SITL setup supports "),oe={href:"https://docs.px4.io/master/en/simulation/#run-simulation-faster-than-realtime",target:"_blank",rel:"noopener noreferrer"},ie=e("setting the simulation speed"),re=e(" by setting the "),le=a("code",null,"PX4_SIM_SPEED_FACTOR",-1),ce=e(" environment variable. Its value is picked up by PX4 startup scripts, which in turn reconfigure it to expect a certain speedup/slowdown."),ue=o('<p>You should set its value to the actual real time factor that you get with <code>throttling_camera</code>. The real time factor may be found in the Gazebo GUI window at the bottom:</p><p><img src="'+g+`" alt="Real Time Factor"></p><p>In this example you should set <code>PX4_SIM_SPEED_FACTOR</code> to <code>0.42</code> when launching the simulation:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">PX4_SIM_SPEED_FACTOR</span><span class="token operator">=</span><span class="token number">0.42</span> roslaunch clover_simulation simulator.launch
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you are using the VM, it may be convenient to put the value in the Gazebo desktop shortcut. Right-click on the Gazebo icon, select &quot;Properties...&quot; and add <code>PX4_SIM_SPEED_FACTOR=0.42</code> to the Command field as follows:</p><p>:::<img src="`+f+'" alt="Gazebo PX4 launcher command"></p><h3 id="allocate-more-resources-to-the-vm" tabindex="-1"><a class="header-anchor" href="#allocate-more-resources-to-the-vm" aria-hidden="true">#</a> Allocate more resources to the VM</h3><p>The virtual machine may benefit from several CPU cores, especially if the cores are not very performant. In our tests, a four-core machine with only a single core allocated to the VM was unable to run the simulation, with constant interface freezes and dropped ROS messages. The same machine with all four cores available to the VM was able to run the simulation at 0.25 real-time speed.</p><p>Do note that you should not allocate more resources than you have on your host hardware.</p></div>',5);function de(he,pe){const n=r("RouterLink"),i=r("ExternalLinkIcon");return c(),u(d,null,[k,a("p",null,[b,t(n,{to:"/en/simulation_vm.html"},{default:s(()=>[w]),_:1}),x]),y,a("p",null,[P,t(n,{to:"/en/simulation_native.html"},{default:s(()=>[q]),_:1}),G,t(n,{to:"/en/simulation_vm.html"},{default:s(()=>[S]),_:1}),T,I,z]),C,a("p",null,[R,t(n,{to:"/en/simple_offboard.html"},{default:s(()=>[E]),_:1}),X,t(n,{to:"/en/rviz.html"},{default:s(()=>[A]),_:1}),M]),F,O,a("p",null,[U,V,B,D,L,t(n,{to:"/en/aruco.html"},{default:s(()=>[N]),_:1}),Y,t(n,{to:"/en/optical_flow.html"},{default:s(()=>[j]),_:1}),Q,H,J]),K,a("p",null,[W,Z,$,a("a",ee,[ae,t(i)]),te]),ne,a("p",null,[se,a("a",oe,[ie,t(i)]),re,le,ce]),ue],64)}var ge=l(v,[["render",de],["__file","simulation_usage.html.vue"]]);export{ge as default};
