import{_ as r,r as l,o as i,c as p,a as s,b as t,w as n,F as d,d as a,e as o}from"./app.4f6a4bec.js";import{_ as u,c as _,a as h,b as m,d as k,e as g}from"./06_gazebo_px4_launcher.6ffd1231.js";const f={},v=s("h1",{id:"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","aria-hidden":"true"},"#"),a(" \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430")],-1),b=a("\u0421\u0440\u0435\u0434\u0430 \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438 \u041A\u043B\u0435\u0432\u0435\u0440\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u043A\u043E\u0434 \u0431\u0435\u0437 \u043A\u0430\u043A\u043E\u0433\u043E-\u043B\u0438\u0431\u043E \u0440\u0438\u0441\u043A\u0430 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0432 "),x=a("\u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u0435"),G=a(" \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u044B \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 (\u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0438\u0435\u0441\u044F \u043A ROS) \u0441\u0435\u0440\u0432\u0438\u0441\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0434\u0440\u043E\u043D\u0435, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440 Monkey."),q=s("h2",{id:"\u0437\u0430\u043F\u0443\u0441\u043A-\u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u0437\u0430\u043F\u0443\u0441\u043A-\u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","aria-hidden":"true"},"#"),a(" \u0417\u0430\u043F\u0443\u0441\u043A \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430")],-1),P=a("\u041F\u043E\u0441\u043B\u0435 "),S=a("\u0441\u0431\u043E\u0440\u043A\u0438 \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441 \u043D\u0443\u043B\u044F"),z=a(" \u0438\u043B\u0438 "),R=a("\u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B"),w=a(", \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C "),F=s("code",null,"roslaunch",-1),C=a(" \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430 Gazebo:"),E=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0448\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E</span>
<span class="token builtin class-name">source</span> ~/catkin_ws/devel/setup.bash
roslaunch clover_simulation simulator.launch
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u0421\u041E\u0412\u0415\u0422</p><p>\u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0435\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u043C\u0430\u0448\u0438\u043D\u0443, \u043F\u0440\u043E\u0441\u0442\u043E \u0434\u0432\u0430\u0436\u0434\u044B \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 <code>Gazebo PX4</code> \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u0441\u0442\u043E\u043B\u0435.</p></div><p>\u042D\u0442\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442 Gazebo \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u043A\u043B\u0438\u0435\u043D\u0442, \u0431\u0438\u043D\u0430\u0440\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B PX4 \u0438 \u043D\u043E\u0434\u044B \u041A\u043B\u0435\u0432\u0435\u0440\u0430. \u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u044B\u043B\u0430 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0442 \u043D\u043E\u0434 \u0438 PX4, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0430\u0442\u043E\u0440\u0430 \u043A\u043E\u043C\u0430\u043D\u0434 PX4:</p><p><img src="`+h+'" alt="\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430 Gazebo"></p><p>\u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C QGroundControl \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0434\u0440\u043E\u043D\u0430 \u0432 \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0435, \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0438\u0441\u0441\u0438\u0439 \u043F\u043E\u043B\u0435\u0442\u0430 (\u0435\u0441\u043B\u0438 GPS \u0442\u0430\u043A\u0436\u0435 \u0441\u0438\u043C\u0443\u043B\u0438\u0440\u0443\u0435\u0442\u0441\u044F) \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0440\u043E\u043D\u043E\u043C \u0441 \u043F\u0443\u043B\u044C\u0442\u0430:</p><p><img src="'+m+'" alt="Gazebo \u0438 QGC"></p>',6),X=a("\u0422\u0430\u043A\u0436\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C "),O=a("simplified OFFBOARD"),T=a(" \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0440\u043E\u043D\u043E\u043C, \u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 ROS, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, "),A=a("rviz and rqt"),D=a(" \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0434\u0440\u043E\u043D\u0430:"),I=s("p",null,[s("img",{src:u,alt:"Gazebo \u0438 RQT"})],-1),M=s("h2",{id:"\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F-\u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F-\u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430","aria-hidden":"true"},"#"),a(" \u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430")],-1),V=a("\u0421\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C, \u043F\u0435\u0440\u0435\u0434\u0430\u0432 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B \u043A\u043E\u043C\u0430\u043D\u0434\u0435 "),B=s("code",null,"roslaunch",-1),L=a(" \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0438\u0432 \u0444\u0430\u0439\u043B "),N=s("code",null,"~/catkin_ws/src/clover/clover_simulation/launch/simulator.launch",-1),Q=a(". \u041D\u043E\u0434\u044B, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0435 "),U=a("\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 ArUco"),y=a(", "),j=a("\u0440\u0430\u0441\u0447\u0435\u0442 optical flow"),H=a(" \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u044B \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 "),J=s("code",null,".launch",-1),K=a(" \u0444\u0430\u0439\u043B\u043E\u0432, \u043A\u0430\u043A \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0434\u0440\u043E\u043D\u0435."),W=s("p",null,[s("img",{src:_,alt:"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0432 VSCode simulator.launch"})],-1),Y=s("h3",{id:"\u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435-gps",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435-gps","aria-hidden":"true"},"#"),a(" \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 GPS")],-1),Z=a("GPS \u0434\u0430\u0442\u0447\u0438\u043A \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u043F\u043E\u043B\u0435\u0442\u043E\u0432 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F "),$={href:"https://docs.px4.io/master/en/flight_modes/mission.html",target:"_blank",rel:"noopener noreferrer"},aa=a("\u043F\u043E\u043B\u0435\u0442\u043D\u044B\u0445 \u043C\u0438\u0441\u0441\u0438\u0439"),sa=a("."),ta=o(`<p>\u0427\u0442\u043E\u0431\u044B \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C GPS, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442 <code>gps</code> \u0432 \u0444\u0430\u0439\u043B\u0435 <code>simulator.launch</code> \u0432 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 <code>true</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gps<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="\u043A\u0430\u043C\u0435\u0440\u0430" tabindex="-1"><a class="header-anchor" href="#\u043A\u0430\u043C\u0435\u0440\u0430" aria-hidden="true">#</a> \u041A\u0430\u043C\u0435\u0440\u0430</h3><p>\u041F\u0440\u0438 \u043F\u043E\u043B\u0435\u0442\u0435 \u043F\u043E GPS \u043A\u0430\u043C\u0435\u0440\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0435 \u043D\u0443\u0436\u043D\u0430, \u0435\u0435 \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432 \u0444\u0430\u0439\u043B\u0435 <code>simulator.launch</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main_camera<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="\u0434\u0440\u0443\u0433\u0438\u0435-\u0434\u0430\u0442\u0447\u0438\u043A\u0438" tabindex="-1"><a class="header-anchor" href="#\u0434\u0440\u0443\u0433\u0438\u0435-\u0434\u0430\u0442\u0447\u0438\u043A\u0438" aria-hidden="true">#</a> \u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u0430\u0442\u0447\u0438\u043A\u0438</h3>`,6),ea=a("\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u0442\u0447\u0438\u043A\u0438 \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0445 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0434\u0440\u043E\u043D\u0430. \u042D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 "),na=s("code",null,"~/catkin_ws/src/clover/clover_description/urdf/clover/clover4.xacro",-1),oa=a(" \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 "),ca={href:"http://wiki.ros.org/xacro",target:"_blank",rel:"noopener noreferrer"},la=a("xacro"),ra=a(" \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F URDF."),ia=o(`<h3 id="\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435-\u043C\u0438\u0440\u0430-\u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E" tabindex="-1"><a class="header-anchor" href="#\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435-\u043C\u0438\u0440\u0430-\u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E" aria-hidden="true">#</a> \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043C\u0438\u0440\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E</h3><p>\u041F\u043B\u0430\u0433\u0438\u043D\u044B Gazebo \u0434\u043B\u044F \u0434\u0440\u043E\u043D\u0430 \u043D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0442\u0440\u0435\u0431\u0443\u044E\u0442, \u0447\u0442\u043E\u0431\u044B \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u043C\u0438\u0440\u0430 <code>real_time_update_rate</code> \u0431\u044B\u043B\u043E \u0440\u0430\u0432\u043D\u043E 250, \u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 <code>max_step_size</code> \u0431\u044B\u043B\u043E \u0440\u0430\u0432\u043D\u043E 0.004. \u0421 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C\u0438 \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u043D\u0435 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0444\u0430\u0439\u043B <code>~/catkin_ws/src/clover/clover_simulation/resources/worlds/clover.world</code> \u043A\u0430\u043A \u0448\u0430\u0431\u043B\u043E\u043D.</p><h2 id="\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438" tabindex="-1"><a class="header-anchor" href="#\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438" aria-hidden="true">#</a> \u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438</h2><p>\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C Gazebo \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u0430 \u043A \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043C, \u0438 \u0434\u043B\u044F \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F \u043C\u043E\u0449\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u0438 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u0438 \u043D\u0430 \u043C\u0435\u043D\u0435\u0435 \u043C\u043E\u0449\u043D\u043E\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0438, \u0436\u0435\u0440\u0442\u0432\u0443\u044F \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u0440\u0430\u0431\u043E\u0442\u044B. \u041D\u0438\u0436\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043E\u0432, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438.</p><h3 id="\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u043F\u043B\u0430\u0433\u0438\u043D\u0430-throttling-camera" tabindex="-1"><a class="header-anchor" href="#\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u043F\u043B\u0430\u0433\u0438\u043D\u0430-throttling-camera" aria-hidden="true">#</a> \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 <code>throttling_camera</code></h3><p>\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Gazebo \u043D\u0435 \u0437\u0430\u043C\u0435\u0434\u043B\u044F\u0435\u0442 \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044E \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u043E\u0439 \u0447\u0430\u0441\u0442\u043E\u0442\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u043D\u0441\u043E\u0440\u043E\u0432. \u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u043B\u0430\u0433\u0438\u043D\u0430 <code>throttling_camera</code> \u0438\u0437 \u043F\u0430\u043A\u0435\u0442\u0430 <code>clover_simulation</code>.</p><p>\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u0443\u0442\u0451\u043C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 <code>maintain_camera_rate</code> \u0432 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 <code>true</code> \u0432 \u0444\u0430\u0439\u043B\u0435 <code>clover_description/launch/spawn_drone.launch</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code>    <span class="token comment">&lt;!-- Slow simulation down to maintain camera rate --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maintain_camera_rate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>\u042D\u0442\u043E\u0442 \u043F\u043B\u0430\u0433\u0438\u043D \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u043F\u043E \u0447\u0430\u0441\u0442\u043E\u0442\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u0438 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u0434\u043B\u044F\u0442\u044C \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044E \u0434\u043E \u0442\u0435\u0445 \u043F\u043E\u0440, \u043F\u043E\u043A\u0430 \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0435 \u0441\u0442\u0430\u043D\u0435\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0438\u043B\u0438 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u0443\u044E. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D\u0438\u044F \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438 \u043C\u043E\u0433\u0443\u0442 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u043C \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043A PX4 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, QGroundControl). \u0415\u0441\u043B\u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438 \u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0438\u0436\u0435, \u0447\u0435\u043C 0.5 \u043E\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0435\u0439.</p><h3 id="\u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435-\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438-\u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438" tabindex="-1"><a class="header-anchor" href="#\u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435-\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438-\u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438" aria-hidden="true">#</a> \u0412\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438</h3>`,10),pa=a("PX4, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 \u0432\u0435\u0440\u0441\u0438\u0438 1.9, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 "),da={href:"https://docs.px4.io/master/en/simulation/#run-simulation-faster-than-realtime",target:"_blank",rel:"noopener noreferrer"},ua=a("\u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438"),_a=a(" \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F "),ha=s("code",null,"PX4_SIM_SPEED_FACTOR",-1),ma=a(". \u0412\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u043A \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C\u0443 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u044E/\u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D\u0438\u044E."),ka=o('<p>\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0435 Real Time Factor (\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438 \u043F\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044E \u043A \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438), \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u043E\u0439 \u043F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 <code>throttling_camera</code>. \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 Real Time Factor \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0432 \u043E\u043A\u043D\u0435 Gazebo \u043D\u0430 \u043D\u0438\u0436\u043D\u0435\u0439 \u043F\u0430\u043D\u0435\u043B\u0438:</p><p><img src="'+k+`" alt="Real Time Factor"></p><p>\u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 <code>PX4_SIM_SPEED_FACTOR</code> \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 <code>0.42</code> \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">PX4_SIM_SPEED_FACTOR</span><span class="token operator">=</span><span class="token number">0.42</span> roslaunch clover_simulation simulator.launch
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u0421\u041E\u0412\u0415\u0422</p><p>\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u0432 \u044F\u0440\u043B\u044B\u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0430 Gazebo \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u0441\u0442\u043E\u043B\u0435. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A Gazebo, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 &quot;Properties...&quot; \u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 <code>PX4_SIM_SPEED_FACTOR=0.42</code> \u0432 \u043F\u043E\u043B\u0435 Command, \u043A\u0430\u043A \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043D\u0430 \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u0438:</p><p>:::<img src="`+g+'" alt="Gazebo PX4 launcher command"></p><h3 id="\u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435-\u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432-\u0434\u043B\u044F-\u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0438-\u043C\u0430\u0448\u0438\u043D\u044B" tabindex="-1"><a class="header-anchor" href="#\u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435-\u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432-\u0434\u043B\u044F-\u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0438-\u043C\u0430\u0448\u0438\u043D\u044B" aria-hidden="true">#</a> \u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0434\u043B\u044F \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B</h3><p>\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u043D\u044B\u0445 \u044F\u0434\u0435\u0440 \u0434\u043B\u044F \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B \u043C\u043E\u0436\u0435\u0442 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438. \u0412 \u043D\u0430\u0448\u0438\u0445 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u044F\u0445 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u044B\u043B\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043E \u043E\u0434\u043D\u043E \u044F\u0434\u0440\u043E, \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u043B\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432 \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0435: \u043E\u043A\u043D\u043E Gazebo \u043D\u0435 \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u043B\u043E \u043D\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0432\u0432\u043E\u0434, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F ROS \u0442\u0435\u0440\u044F\u043B\u0438\u0441\u044C. \u041F\u043E\u0441\u043B\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0447\u0435\u0442\u044B\u0440\u0451\u0445 \u044F\u0434\u0435\u0440 \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0436\u0435 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F \u0441\u0442\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E 0.25 \u043E\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438.</p><p>\u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043F\u044B\u0442\u0430\u0442\u044C\u0441\u044F \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0434\u043B\u044F \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u0447\u0435\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435.</p></div>',5);function ga(fa,va){const e=l("RouterLink"),c=l("ExternalLinkIcon");return i(),p(d,null,[v,s("p",null,[b,t(e,{to:"/ru/simulation_vm.html"},{default:n(()=>[x]),_:1}),G]),q,s("p",null,[P,t(e,{to:"/ru/simulation_native.html"},{default:n(()=>[S]),_:1}),z,t(e,{to:"/ru/simulation_vm.html"},{default:n(()=>[R]),_:1}),w,F,C]),E,s("p",null,[X,t(e,{to:"/ru/simple_offboard.html"},{default:n(()=>[O]),_:1}),T,t(e,{to:"/ru/rviz.html"},{default:n(()=>[A]),_:1}),D]),I,M,s("p",null,[V,B,L,N,Q,t(e,{to:"/ru/aruco.html"},{default:n(()=>[U]),_:1}),y,t(e,{to:"/ru/optical_flow.html"},{default:n(()=>[j]),_:1}),H,J,K]),W,Y,s("p",null,[Z,s("a",$,[aa,t(c)]),sa]),ta,s("p",null,[ea,na,oa,s("a",ca,[la,t(c)]),ra]),ia,s("p",null,[pa,s("a",da,[ua,t(c)]),_a,ha,ma]),ka],64)}var Ga=r(f,[["render",ga],["__file","simulation_usage.html.vue"]]);export{Ga as default};
