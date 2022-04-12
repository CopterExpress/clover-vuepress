import{_ as s,r as i,o as l,c,a as e,b as o,w as h,F as u,d as t,e as a}from"./app.4f6a4bec.js";import{_ as d,a as m}from"./simulation_ubuntu_account.788d2cc2.js";const p={},_=e("h1",{id:"running-simulator-on-m1-powered-computer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-simulator-on-m1-powered-computer","aria-hidden":"true"},"#"),t(" Running simulator on M1 powered computer")],-1),g=e("p",null,"There is no preconfigured VM image for ARM64 architecture of M1 chip (Apple Silicon), so the only possibility is to install the simulation software manually.",-1),f=t("The recommended virtual machine hypervisor is "),b={href:"https://mac.getutm.app/",target:"_blank",rel:"noopener noreferrer"},w=t("UTM app"),k=t(". Also it's possible to use "),y=e("strong",null,"VMware Fusion Public Tech Preview",-1),v=t(" with M1 support."),x=e("h2",{id:"simulation-installation-with-utm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#simulation-installation-with-utm","aria-hidden":"true"},"#"),t(" Simulation installation with UTM")],-1),M=e("img",{src:d,width:"500",class:"center zoom"},null,-1),I=t("Download UTM App from the official site "),T={href:"https://mac.getutm.app/",target:"_blank",rel:"noopener noreferrer"},U=t("mac.getutm.app"),L=t(" and install it."),R=t("Download Ubuntu Linux 20.04 installation iso-file for ARM64 architecture using the link: "),S={href:"https://cdimage.ubuntu.com/focal/daily-live/current/focal-desktop-arm64.iso",target:"_blank",rel:"noopener noreferrer"},B=t("https://cdimage.ubuntu.com/focal/daily-live/current/focal-desktop-arm64.iso"),C=t("."),E=a('<li><p>Create a new virtual machine in UTM, using the following settings:</p><ul><li><strong>Type</strong>: Virtualize.</li><li><strong>Operating System</strong>: Linux.</li><li><strong>Boot ISO Image</strong>: choose downloaded file <code>focal-desktop-arm64.iso</code>.</li><li><strong>Memory</strong>: 4096 MB or more.</li><li><strong>CPU Cores</strong>: 4 or more.</li><li>Turn on <em>Enable hardware OpenGL acceleration</em> option.</li><li><strong>Storage</strong>: 20 GB or more.</li></ul></li><li><p>Run the created virtual machine.</p></li><li><p>Choose <em>Install Ubuntu</em> in the menu and install it using the installation master.</p><ul><li><p>Recommended apps: <em>Minimal installation</em>.</p></li><li><p>Installation type: <em>Erase disk and install Ubuntu</em>.</p></li><li><p>Input your account parameters, for example:</p><img src="'+m+'" width="400" class="center zoom"></li></ul></li><li><p>Finish the installation and run the system.</p></li>',4),N=t("Install the simulation using the "),P=t("native setup manual"),V=t("."),A=a(`<h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><h4 id="black-screen" tabindex="-1"><a class="header-anchor" href="#black-screen" aria-hidden="true">#</a> Black screen</h4><p>If you see a black screen on your virtual machine, try to run the machine without the GPU support.</p><p>In virtual machine settings, choose <em>Display</em>, and set <em>Emulated Display Card</em> menu to <em>virtio-ramfb</em>. Run you machine. If it runs successfully, change the setting back to <em>virtio-ramfb-gl (GPU Supported)</em> and run it again.</p><h4 id="problem-with-git-clone" tabindex="-1"><a class="header-anchor" href="#problem-with-git-clone" aria-hidden="true">#</a> Problem with <code>git clone</code></h4><p>The following error can occur while performing <code>git clone</code>:</p><div class="language-txt ext-txt"><pre class="language-txt"><code>on git clone if error: RPC failed; curl 56 GnuTLS recv error (-54): Error in the pull function.
fatal: the remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed
</code></pre></div><p>In this case, change the type of the network card to bridged. In the virtual machine settings, choose <em>Network</em>, and set <em>Network Mode</em> menu to <em>Bridged (Advanced)</em>.</p><p>Later, if some network issues occur, change the network mode back to <em>Shared Network</em>.</p>`,9);function F(G,D){const n=i("ExternalLinkIcon"),r=i("RouterLink");return l(),c(u,null,[_,g,e("p",null,[f,e("a",b,[w,o(n)]),k,y,v]),x,M,e("ol",null,[e("li",null,[e("p",null,[I,e("a",T,[U,o(n)]),L])]),e("li",null,[e("p",null,[R,e("a",S,[B,o(n)]),C])]),E,e("li",null,[e("p",null,[N,o(r,{to:"/en/simulation_native.html"},{default:h(()=>[P]),_:1}),V])])]),A],64)}var j=s(p,[["render",F],["__file","simulation_m1.html.vue"]]);export{j as default};
