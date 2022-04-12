import{_ as a,r as s,o as c,c as h,a as o,b as t,w as l,F as d,d as e,e as n}from"./app.4f6a4bec.js";import{_,a as m,b as p,c as u}from"./qgc-cal-level.2db626c1.js";const f={},g=o("h1",{id:"sensor-calibration",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#sensor-calibration","aria-hidden":"true"},"#"),e(" Sensor calibration")],-1),b=o("p",null,[e("In order to perform the sensor calibration, select the "),o("em",null,"Vehicle Setup"),e(" tab and choose the "),o("em",null,"Sensors"),e(" menu.")],-1),x={class:"custom-container warning"},w=o("p",{class:"custom-container-title"},"WARNING",-1),N=e("If you use the flight controller "),O=o("em",null,"COEX Pix",-1),y=e(", and it's installed with servo pins faced backwards, all "),v=o("em",null,"Autopilot Orientation",-1),R=e(" columns must specify "),k=o("code",null,"ROTATION_ROLL_180_YAW_90",-1),z=e(", otherwise the flight controller will not correctly perceive the tilt and rotation of the copter."),C=n('<h2 id="compass" tabindex="-1"><a class="header-anchor" href="#compass" aria-hidden="true">#</a> Compass</h2><img src="'+_+'" alt="QGroundControl compass calibration" class="zoom"><ol><li>Select the <em>Compass</em> submenu</li><li>Choose the flight controller orientation (<em>ROTATION_NONE</em> if the arrow on the flight controller is aligned with the arrow on the frame).</li><li>Press <em>OK</em>.</li><li>Put the drone in one of the orientations marked by the red outline and wait for the appropriate outline to turn yellow.</li><li>Spin the drone as required until the outline turns green. Do this for all orientations.</li></ol>',3),P=e("Read more in the PX4 docs: "),A={href:"https://docs.px4.io/master/en/config/compass.html",target:"_blank",rel:"noopener noreferrer"},I=e("https://docs.px4.io/master/en/config/compass.html"),T=e("."),S=n('<h2 id="gyroscope" tabindex="-1"><a class="header-anchor" href="#gyroscope" aria-hidden="true">#</a> Gyroscope</h2><img src="'+m+'" alt="QGroundControl gyroscope calibration" class="zoom"><ol><li>Select the <em>Gyroscope</em> submenu.</li><li>Place the drone on a flat, horizontal surface.</li><li>Press <em>OK</em>.</li><li>Wait for the calibration to finish.s</li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The drone should stay completely still during the calibration.</p></div>',4),G=e("Read more in the PX4 docs: "),L={href:"https://docs.px4.io/master/en/config/gyroscope.html",target:"_blank",rel:"noopener noreferrer"},E=e("https://docs.px4.io/master/en/config/gyroscope.html"),V=e("."),W=n('<h2 id="accelerometer" tabindex="-1"><a class="header-anchor" href="#accelerometer" aria-hidden="true">#</a> Accelerometer</h2><img src="'+p+'" alt="QGroundControl accelerometer calibration" class="zoom"><ol><li>Select the <em>Accelerometer</em> submenu.</li><li>Choose the flight controller orientation (<em>ROTATION_NONE</em> if the arrow on the flight controller is aligned with the arrow on the frame).</li><li>Put the drone in one of the orientations marked by the red outline and wait for the appropriate outline to turn yellow.</li><li>Hold the drone in this orientation until the outline turns green. Do this for all orientations.</li></ol>',3),X=e("Read more in the PX4 docs: "),Q={href:"https://docs.px4.io/master/en/config/accelerometer.html",target:"_blank",rel:"noopener noreferrer"},B=e("https://docs.px4.io/master/en/config/accelerometer.html"),K=e("."),D=n('<h2 id="level-horizon" tabindex="-1"><a class="header-anchor" href="#level-horizon" aria-hidden="true">#</a> Level horizon</h2><img src="'+u+'" alt="QGroundControl level horizon calibration" class="zoom"><ol><li>Select the <em>Level Horizon</em> submenu.</li><li>Choose the flight controller orientation (<em>ROTATION_NONE</em> if the arrow on the flight controller is aligned with the arrow on the frame).</li><li>Place the drone on a flat, horizontal surface.</li><li>Press <em>OK</em>.</li><li>Wait for the calibration to finish.</li></ol>',3),F=e("Read more in the PX4 docs: "),H={href:"https://docs.px4.io/master/en/config/level_horizon_calibration.html",target:"_blank",rel:"noopener noreferrer"},q=e("https://docs.px4.io/master/en/config/level_horizon_calibration.html"),Y=e("."),j=o("strong",null,"Next",-1),J=e(": "),M=e("RC setup"),U=e(".");function Z($,ee){const r=s("RouterLink"),i=s("ExternalLinkIcon");return c(),h(d,null,[g,b,o("div",x,[w,o("p",null,[N,t(r,{to:"/en/coex_pix.html"},{default:l(()=>[O]),_:1}),y,v,R,k,z])]),C,o("p",null,[P,o("a",A,[I,t(i)]),T]),S,o("p",null,[G,o("a",L,[E,t(i)]),V]),W,o("p",null,[X,o("a",Q,[B,t(i)]),K]),D,o("p",null,[F,o("a",H,[q,t(i)]),Y]),o("p",null,[j,J,t(r,{to:"/en/radio.html"},{default:l(()=>[M]),_:1}),U])],64)}var ie=a(f,[["render",Z],["__file","calibration.html.vue"]]);export{ie as default};
