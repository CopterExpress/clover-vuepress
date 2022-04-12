import{_ as l,r as o,o as i,c as r,a,b as s,w as e,F as u,d as n,e as c}from"./app.4f6a4bec.js";import{_ as d,a as m,b as h,c as _,d as k,e as g,f,g as w,h as q,i as b,j as v}from"./camera_option_4_clever.4f394294.js";const x={},y=a("h1",{id:"camera-setup",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#camera-setup","aria-hidden":"true"},"#"),n(" Camera setup")],-1),z={class:"custom-container tip"},C=a("p",{class:"custom-container-title"},"TIP",-1),T=n("The following applies to "),I=n("image version"),E=n(),F=a("strong",null,"0.20",-1),j=n(" and up. See "),B={href:"https://github.com/CopterExpress/clover/blob/v0.19/docs/en/camera_frame.md",target:"_blank",rel:"noopener noreferrer"},L=n("previous version of the article"),N=n(" for older images."),S=n("Computer vision modules (like "),V=n("ArUco markers"),O=n(" and "),P=n("Optical Flow"),R=n(") require adjusting the camera focus and set up camera position and orientation relative to the drone body. Optional camera calibration can improve their quality of performance."),U=a("h2",{id:"focus",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#focus","aria-hidden":"true"},"#"),n(" Focusing the camera lens")],-1),A=a("p",null,"In order to focus the camera lens, do the following:",-1),M=a("img",{src:d,width:"180",class:"center zoom"},null,-1),Y=n("Open the live camera stream in your browser using "),D=n("web_video_server"),G=n("."),H=a("li",null,"Rotate the lens to adjust the image. Make sure the objects that are 2-3 m from the camera are in focus.",-1),J=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"Unfocused image"),a("th",null,"Focused image")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("img",{src:m,width:"300",class:"zoom"})]),a("td",null,[a("img",{src:h,width:"300",class:"zoom"})])])])],-1),K=a("h2",{id:"frame",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frame","aria-hidden":"true"},"#"),n(" Setting the camera position")],-1),Q=n("Position and orientation of the main camera is "),W=n("set in the"),X=n(),Z=a("code",null,"~/catkin_ws/src/clover/clover/launch/main_camera.launch",-1),$=n(" file:"),aa=c(`<div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_z<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>down<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- direction the camera points: down, up --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_y<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>backward<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- direction the camera cable points: backward, forward --&gt;</span>
</code></pre></div><p>To set the orientation, define:</p><ul><li>direction the camera lens points <code>direction_z</code>: <code>down</code> or <code>up</code>;</li><li>direction the camera cable points <code>direction_y</code>: <code>backward</code> or <code>forward</code>.</li></ul><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><h3 id="camera-faces-downward-cable-goes-backward" tabindex="-1"><a class="header-anchor" href="#camera-faces-downward-cable-goes-backward" aria-hidden="true">#</a> Camera faces downward, cable goes backward</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_z<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>down<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_y<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>backward<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><img src="`+_+'" width="300"><img src="'+k+`" width="300"><h3 id="camera-faces-downward-cable-goes-forward" tabindex="-1"><a class="header-anchor" href="#camera-faces-downward-cable-goes-forward" aria-hidden="true">#</a> Camera faces downward, cable goes forward</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_z<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>down<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_y<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>forward<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><img src="`+g+'" width="300"><img src="'+f+`" width="300"><h3 id="camera-faces-upward-cable-goes-backward" tabindex="-1"><a class="header-anchor" href="#camera-faces-upward-cable-goes-backward" aria-hidden="true">#</a> Camera faces upward, cable goes backward</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_z<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>up<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_y<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>backward<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><img src="`+w+'" width="300"><img src="'+q+`" width="300"><h3 id="camera-faces-upward-cable-goes-forward" tabindex="-1"><a class="header-anchor" href="#camera-faces-upward-cable-goes-forward" aria-hidden="true">#</a> Camera faces upward, cable goes forward</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_z<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>up<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direction_y<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>forward<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><img src="`+b+'" width="300"><img src="'+v+'" width="300">',20),na={class:"custom-container tip"},sa=a("p",{class:"custom-container-title"},"TIP",-1),ta=n("The "),ea=a("code",null,"selfcheck.py",-1),oa=n(" utility"),ca=n(" will describe your current camera setup in a human-readable fashion. Be sure to check whether this description corresponds to your actual camera position."),pa=c(`<h3 id="custom-camera-position" tabindex="-1"><a class="header-anchor" href="#custom-camera-position" aria-hidden="true">#</a> Custom camera position</h3><p>It&#39;s possible to set arbitrary camera position and orientation. In order to do that uncomment node, marked as <code>Template for custom camera orientation</code>:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- Template for custom camera orientation --&gt;</span>
<span class="token comment">&lt;!-- Camera position and orientation are represented by base_link -&gt; main_camera_optical transform --&gt;</span>
<span class="token comment">&lt;!-- static_transform_publisher arguments: x y z yaw pitch roll frame_id child_frame_id --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>node</span> <span class="token attr-name">pkg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tf2_ros<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>static_transform_publisher<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main_camera_frame<span class="token punctuation">&quot;</span></span> <span class="token attr-name">args</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.05 0 -0.07 -1.5707963 0 3.1415926 base_link main_camera_optical<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,3),la=n("This line describes how the camera is positioned relative to the drone body. Technically, it creates a static transform between the "),ia=a("code",null,"base_link",-1),ra=n(" frame ( which "),ua=n("corresponds to the flight controller housing"),da=n(") and the camera ("),ma=a("code",null,"main_camera_optical",-1),ha=n(") in the following format:"),_a=a("div",{class:"language-txt ext-txt"},[a("pre",{class:"language-txt"},[a("code",null,`shift_x shift_y shift_z yaw_angle pitch_angle roll_angle
`)])],-1),ka=n("Camera frame (that is, "),ga=n("frame of reference"),fa=n(") is aligned as follows:"),wa=a("ul",null,[a("li",null,[a("strong",null,[a("font",{color:"red"},"x")]),n(" points to the right side of the image;")]),a("li",null,[a("strong",null,[a("font",{color:"green"},"y")]),n(" points to the bottom of the image;")]),a("li",null,[a("strong",null,[a("font",{color:"blue"},"z")]),n(" points away from the camera matrix plane.")])],-1),qa=n("Shifts are set in meters, angles are in radians. You can check the transform for correctness using "),ba=n("rviz"),va=n("."),xa=a("h2",{id:"calibration",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#calibration","aria-hidden":"true"},"#"),n(" Calibration")],-1),ya=n("To improve the quality of computer vision related algorithms it's recommended to perform camera calibration, which is described in the "),za=n("appropriate article"),Ca=n(".");function Ta(Ia,Ea){const t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),r(u,null,[y,a("div",z,[C,a("p",null,[T,s(t,{to:"/en/image.html"},{default:e(()=>[I]),_:1}),E,F,j,a("a",B,[L,s(p)]),N])]),a("p",null,[S,s(t,{to:"/en/aruco.html"},{default:e(()=>[V]),_:1}),O,s(t,{to:"/en/optical_flow.html"},{default:e(()=>[P]),_:1}),R]),U,A,M,a("ol",null,[a("li",null,[Y,s(t,{to:"/en/web_video_server.html"},{default:e(()=>[D]),_:1}),G]),H]),J,K,a("p",null,[Q,s(t,{to:"/en/cli.html#editing"},{default:e(()=>[W]),_:1}),X,Z,$]),aa,a("div",na,[sa,a("p",null,[ta,s(t,{to:"/en/selfcheck.html"},{default:e(()=>[ea,oa]),_:1}),ca])]),pa,a("p",null,[la,ia,ra,s(t,{to:"/en/frames.html"},{default:e(()=>[ua]),_:1}),da,ma,ha]),_a,a("p",null,[ka,s(t,{to:"/en/frames.html"},{default:e(()=>[ga]),_:1}),fa]),wa,a("p",null,[qa,s(t,{to:"/en/rviz.html"},{default:e(()=>[ba]),_:1}),va]),xa,a("p",null,[ya,s(t,{to:"/en/camera_calibration.html"},{default:e(()=>[za]),_:1}),Ca])],64)}var Ba=l(x,[["render",Ta],["__file","camera_setup.html.vue"]]);export{Ba as default};
