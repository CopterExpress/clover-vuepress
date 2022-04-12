import{_ as s,r as a,o as l,c,a as t,b as o,w as d,F as u,d as e,e as i}from"./app.4f6a4bec.js";import{_ as h,a as p,b as m,c as _,d as g,e as w,f,g as v,h as b}from"./09_netcfg.82b04d27.js";const y={},k=t("h1",{id:"simulation-vm-setup",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#simulation-vm-setup","aria-hidden":"true"},"#"),e(" Simulation VM setup")],-1),V=e("In addition to "),M=e("native installation instructions"),x=e(", we provide a "),B={href:"https://github.com/CopterExpress/clover_vm/releases/latest",target:"_blank",rel:"noopener noreferrer"},I=e("preconfigured developer virtual machine image"),C=e(". The image contains:"),S=i('<ul><li>Ubuntu 18.04 with XFCE lightweight desktop environment;</li><li>ROS packages required to develop for the Clover platform;</li><li>QGroundControl;</li><li>preconfigured Gazebo simulation environment;</li><li>Visual Studio Code with C++ and Python plugins.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The default username on the VM is <code>clover</code>, with password <code>clover</code>.</p></div><p>The VM is an easy way to set up a simulation environment, but can be used as a development environment for a real drone as well.</p><h2 id="downloading" tabindex="-1"><a class="header-anchor" href="#downloading" aria-hidden="true">#</a> Downloading</h2>',4),P=e("You can download the latest VM image "),q={href:"https://github.com/CopterExpress/clover_vm/releases",target:"_blank",rel:"noopener noreferrer"},T=e("in the VM releases repository"),E=e("."),U=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,"The virtual machine should be used when native installation is not feasible or possible. You may experience reduced performance in programs that use 3D rendering, like rviz and Gazebo.")],-1),D=t("h2",{id:"setting-up-the-vm",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#setting-up-the-vm","aria-hidden":"true"},"#"),e(" Setting up the VM")],-1),z=e("You need to use a VM manager that supports OVF format, like "),N={href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},Y=e("VirtualBox"),F=e(", "),O={href:"https://www.vmware.com/products/workstation-player.html",target:"_blank",rel:"noopener noreferrer"},R=e("VMware Player"),G=e(" or "),L={href:"https://www.vmware.com/products/workstation-pro.html",target:"_blank",rel:"noopener noreferrer"},W=e("VMware Workstation"),A=e("."),Q=i('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>At the time of writing VirtualBox had issues running the VM, particularly with 3D applications. We recommend using VMware Player or VMware Workstation if possible. The following steps assume you&#39;re using VMware Player.</p></div><p>Make sure that you have hardware virtualization enabled in your BIOS/UEFI (it may be supported by your hardware but turned off by default). The steps to enable virtualization differ from manufacturer to manufacturer, but should be described in your system manual. Consult your system&#39;s manufacturer if you&#39;re having trouble turning virtualization on.</p><ol><li><p>Import the OVA archive into your virtualization environment. Use the <strong>Open a Virtual Machine</strong> option in VMware Player:</p><p><img src="'+h+'" alt="Open dialog with clever-devel.ova selected"></p><blockquote><p><strong>Note</strong> You may see a dialog box with a warning about the VM format: <img src="'+p+'" alt="Import failure dialog"> You can safely ignore the warning and press <strong>Retry</strong>.</p></blockquote></li><li><p>Right-click on the VM name and select <strong>Virtual Machine Settings</strong>. In the new window, set the following parameters:</p><ul><li>increase the amount of memory available to the virtual machine (a good rule of thumb is 2048 MB per CPU core, but no less than 4 GB): <img src="'+m+'" alt="Increasing available memory"></li><li>increase the amount available CPU cores: <img src="'+_+'" alt="Increasing cpu cores"></li><li>enable 3D acceleration: <img src="'+g+'" alt="Enabling 3D acceleration"></li><li>enable USB 2.0/3.0 controller (if you plan to connect external devices to the VM): <img src="'+w+'" alt="USB 3.0 controller"></li><li>optionally enable the &quot;bridged&quot; network connection (if you plan to connect to a real drone): <img src="'+f+'" alt="Enabling bridge networking"></li></ul><blockquote><p><strong>Note</strong> Some host network adapters may not work well with the bridged network. Consider using external USB Wi-Fi adapters managed by your VM to connect to a real drone.</p></blockquote></li><li><p>&quot;Power on&quot; the virtual machine. You may see a warning message about your host system not providing 3D acceleration:</p><p><img src="'+v+`" alt="No 3D support from host"></p><p>Make sure you have the latest GPU drivers for your host system. If the warnings persist, add the following line to <code>clover-devel.vmx</code> (actual file name may differ based on the VM name):</p><div class="language-text ext-text"><pre class="language-text"><code>mks.gl.allowBlacklistedDrivers = &quot;TRUE&quot;
</code></pre></div><p>You can find this file in a folder where the VM is imported to.</p></li><li><p>(Bridged networking only) Set up network bridge configuration in VM settings or using <code>vmware-netcfg</code> utility (in Linux):</p><p><img src="`+b+'" alt="vmware-netcfg interface"></p><p>Select <code>vmnet0</code> in the networks list, set it to <em>Bridged</em>, and choose the adapter you are planning to use to connect to drone in the drop-down menu.</p></li></ol>',3);function X(j,H){const r=a("RouterLink"),n=a("ExternalLinkIcon");return l(),c(u,null,[k,t("p",null,[V,o(r,{to:"/en/simulation_native.html"},{default:d(()=>[M]),_:1}),x,t("a",B,[I,o(n)]),C]),S,t("p",null,[P,t("a",q,[T,o(n)]),E]),U,D,t("p",null,[z,t("a",N,[Y,o(n)]),F,t("a",O,[R,o(n)]),G,t("a",L,[W,o(n)]),A]),Q],64)}var Z=s(y,[["render",X],["__file","simulation_vm.html.vue"]]);export{Z as default};