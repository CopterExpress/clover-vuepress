import{_ as c,r as p,o as l,c as r,a as n,b as a,w as e,F as i,d as s,e as u}from"./app.4f6a4bec.js";import{_ as k,a as h}from"./web-gcs.d988d1fb.js";const m={},d=n("h1",{id:"work-with-ros-from-browser",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#work-with-ros-from-browser","aria-hidden":"true"},"#"),s(" Work with ROS from browser")],-1),_=s("Using the "),g={href:"http://wiki.ros.org/roslibjs",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"roslibjs",-1),f=s(" library it's possible to work with all the ROS resources (topics, services, parameters) from JavaScript code within the browser, which allows creating various interactive web applications for drone."),y=s("All the required software is preinstalled in "),b=s("RPi image"),v=s(" for Clover."),S=u(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>An example of a web page, working with <code>roslib.js</code>:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/roslib.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token comment">// Establish roslibjs connection</span>
		<span class="token keyword">var</span> ros <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ROSLIB<span class="token punctuation">.</span>Ros</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;ws://&#39;</span> <span class="token operator">+</span> location<span class="token punctuation">.</span>hostname <span class="token operator">+</span> <span class="token string">&#39;:9090&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		ros<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// Connection callback</span>
			<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Connected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// Declare get_telemetry service client</span>
		<span class="token keyword">var</span> getTelemetry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ROSLIB<span class="token punctuation">.</span>Service</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">ros</span><span class="token operator">:</span> ros<span class="token punctuation">,</span> <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;/get_telemetry&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">serviceType</span> <span class="token operator">:</span> <span class="token string">&#39;clover/GetTelemetry&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// Call get_telemetry</span>
		getTelemetry<span class="token punctuation">.</span><span class="token function">callService</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ROSLIB<span class="token punctuation">.</span>ServiceRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">frame_id</span><span class="token operator">:</span> <span class="token string">&#39;map&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// Service respond callback</span>
			<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Telemetry: &#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// Subscribe to \`/mavros/state\` topic</span>
		<span class="token keyword">var</span> stateSub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ROSLIB<span class="token punctuation">.</span>Topic</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">ros</span> <span class="token operator">:</span> ros<span class="token punctuation">,</span> <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;/mavros/state&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">messageType</span> <span class="token operator">:</span> <span class="token string">&#39;mavros_msgs/State&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		stateSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// Topic message callback</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;State: &#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),x=s("Taking off, landing and all the rest operations"),j=s(" can be implemented in a similar way."),R=n("p",null,[s("The page should be placed in the "),n("code",null,"/home/pi/catkin_ws/src/clover/clover/www/"),s(" directory. After that, it will be available at "),n("code",null,"http://192.168.11.1/clover/<page_name>.html"),s(". When the page is opened, browser should show an alert with the drone telemetry and constantly print the state of the flight controller to the console.")],-1),T=n("img",{src:k,class:"center zoom"},null,-1),q=s("See additional information in "),B={href:"http://wiki.ros.org/roslibjs/Tutorials/BasicRosFunctionality",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"roslibjs",-1),L=s(" tutorial"),O=s("."),I=n("h2",{id:"web-gcs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#web-gcs","aria-hidden":"true"},"#"),s(" Web GCS")],-1),E=s("See an example of simplified web ground control station on Clover at "),N={href:"http://192.168.11.1/clover/gcs.html",target:"_blank",rel:"noopener noreferrer"},V=s("http://192.168.11.1/clover/gcs.html"),A=s("."),F=n("img",{src:h,class:"center zoom"},null,-1);function W(z,G){const t=p("ExternalLinkIcon"),o=p("RouterLink");return l(),r(i,null,[d,n("p",null,[_,n("a",g,[w,a(t)]),f]),n("p",null,[y,a(o,{to:"/en/image.html"},{default:e(()=>[b]),_:1}),v]),S,n("p",null,[a(o,{to:"/en/programming.html"},{default:e(()=>[x]),_:1}),j]),R,T,n("p",null,[q,n("a",B,[C,L,a(t)]),O]),I,n("p",null,[E,n("a",N,[V,a(t)]),A]),F],64)}var P=c(m,[["render",W],["__file","javascript.html.vue"]]);export{P as default};
