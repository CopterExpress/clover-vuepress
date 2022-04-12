import{_ as c,r as o,o as r,c as i,a,b as s,w as p,F as l,d as e,e as d}from"./app.4f6a4bec.js";const h={},_=a("h1",{id:"coex-packages-repository",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#coex-packages-repository","aria-hidden":"true"},"#"),e(" COEX packages repository")],-1),u=e("COEX provides an open "),g={href:"https://wiki.debian.org/DebianRepository",target:"_blank",rel:"noopener noreferrer"},k=e("Debian-repository"),f=e(" with ROS Noetic related prebuilt binary pacakges for "),b=a("code",null,"armhf",-1),m=e(" architecture."),y={class:"custom-container tip"},x=a("p",{class:"custom-container-title"},"TIP",-1),v=e("Repository URL: "),R={href:"http://packages.coex.tech",target:"_blank",rel:"noopener noreferrer"},w=e("http://packages.coex.tech"),O=e("."),C=e("The repository is already addedd in "),P=e("RPi image"),E=e(" and may be used for simple installation of additional ROS packages."),S=a("h2",{id:"packages-publishing",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#packages-publishing","aria-hidden":"true"},"#"),e(" Packages publishing")],-1),L=e("You can make a Pull Request in a "),N={href:"https://github.com/CopterExpress/packages",target:"_blank",rel:"noopener noreferrer"},V=e("git repository with packages"),B=e(", adding or updating your package (a file with "),I=a("code",null,".deb",-1),T=e(" extension), that relates to Clover or ROS. After merging your package will be available for installation with "),D=a("code",null,"apt",-1),F=e(" utility:"),U=d(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ros-noetic-clover-some-feature
</code></pre></div><p>Packages, that extend Clover functionality are recommended to be named with <code>clover_</code> prefix, e. g. <code>clover_some_feature</code>.</p><h2 id="using-on-a-normal-raspberry-pi-os" tabindex="-1"><a class="header-anchor" href="#using-on-a-normal-raspberry-pi-os" aria-hidden="true">#</a> Using on a normal Raspberry Pi OS</h2><p>On a normal Raspberry Pi OS, the repository may be added to the sources list, this way:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> -O - <span class="token string">&#39;http://packages.coex.tech/key.asc&#39;</span> <span class="token operator">|</span> apt-key <span class="token function">add</span> -
<span class="token builtin class-name">echo</span> <span class="token string">&#39;deb http://packages.coex.tech buster main&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/apt/sources.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre></div>`,5);function X(q,A){const t=o("ExternalLinkIcon"),n=o("RouterLink");return r(),i(l,null,[_,a("p",null,[u,a("a",g,[k,s(t)]),f,b,m]),a("div",y,[x,a("p",null,[v,a("a",R,[w,s(t)]),O])]),a("p",null,[C,s(n,{to:"/en/image.html"},{default:p(()=>[P]),_:1}),E]),S,a("p",null,[L,a("a",N,[V,s(t)]),B,I,T,D,F]),U],64)}var j=c(h,[["render",X],["__file","packages.html.vue"]]);export{j as default};