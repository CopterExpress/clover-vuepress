import{_ as o,r as c,o as r,c as l,a as e,b as s,F as i,d as a,e as n}from"./app.4f6a4bec.js";const p={},d=e("h1",{id:"software-autorun",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#software-autorun","aria-hidden":"true"},"#"),a(" Software autorun")],-1),u={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"TIP",-1),_=a("In the image version "),m=e("strong",null,"0.20",-1),g=a(),v=e("code",null,"clever",-1),k=a(" package and service was renamed to "),f=e("code",null,"clover",-1),x=a(". See "),y={href:"https://github.com/CopterExpress/clover/blob/v0.19/docs/en/autolaunch.md",target:"_blank",rel:"noopener noreferrer"},b=a("previous version of the article"),w=a(" for older images."),q=e("h2",{id:"systemd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#systemd","aria-hidden":"true"},"#"),a(" systemd")],-1),T=a("Main documentation: "),S={href:"https://wiki.archlinux.org/title/Systemd",target:"_blank",rel:"noopener noreferrer"},C=a("https://wiki.archlinux.org/title/Systemd"),E=a("."),I=n(`<p>All automatically started Clover software is launched as a <code>clover.service</code> systemd service.</p><p>The service may be restarted by the <code>systemctl</code> command:</p><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl restart clover
</code></pre></div><p>Text output of the software can be viewed using the <code>journalctl</code> command:</p><div class="language-text ext-text"><pre class="language-text"><code>journalctl -u clover
</code></pre></div><p>To run Clover software directly in the current console session, you can use the <code>roslaunch</code> command:</p><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl restart clover
roslaunch clover clover.launch
</code></pre></div><p>You can disable Clover software autolaunch using the <code>disable</code> command:</p><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl disable clover
</code></pre></div><h2 id="roslaunch" tabindex="-1"><a class="header-anchor" href="#roslaunch" aria-hidden="true">#</a> roslaunch</h2>`,10),N=a("Main documentation: "),V={href:"http://wiki.ros.org/roslaunch",target:"_blank",rel:"noopener noreferrer"},B=a("http://wiki.ros.org/roslaunch"),j=a("."),F=n(`<p>The list of nodes / programs declared for running is specified in file <code>/home/pi/catkin_ws/src/clover/clover/launch/clover.launch</code>.</p><p>You can add your own node to the list of automatically launched ones. To do this, place your executable file (e.g. <code>my_program.py</code>) into folder <code>/home/pi/catkin_ws/src/clover/clover/src</code>. Then add the start of your node to <code>clover.launch</code>, for example:</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>node</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my_program<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pkg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my_program.py<span class="token punctuation">&quot;</span></span> <span class="token attr-name">output</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>The started file must have <em>permission</em> to run:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x my_program.py
</code></pre></div><p>When scripting languages are used, a <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)">shebang</a> should be placed at the beginning of the file, for example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env python3</span>
</code></pre></div>`,7);function L(M,Y){const t=c("ExternalLinkIcon");return r(),l(i,null,[d,e("div",u,[h,e("p",null,[_,m,g,v,k,f,x,e("a",y,[b,s(t)]),w])]),q,e("p",null,[T,e("a",S,[C,s(t)]),E]),I,e("p",null,[N,e("a",V,[B,s(t)]),j]),F],64)}var P=o(p,[["render",L],["__file","autolaunch.html.vue"]]);export{P as default};