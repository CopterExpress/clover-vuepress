import{_ as r,r as c,o as d,c as p,a as e,b as s,w as o,F as l,d as n,e as i}from"./app.4f6a4bec.js";const h={},u=e("h1",{id:"configuring-wi-fi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuring-wi-fi","aria-hidden":"true"},"#"),n(" Configuring Wi-Fi")],-1),g=e("p",null,"The Raspberry Pi Wi-Fi adapter has two main operating modes:",-1),f=e("ol",null,[e("li",null,[e("strong",null,"Client mode"),n(" \u2013 RPi connects to an existing Wi-Fi network.")]),e("li",null,[e("strong",null,"Access point mode"),n(" \u2013 RPi creates a Wi-Fi network that you can connect to.")])],-1),_=n("On our "),m=n("RPi image"),w=n(" the Wi-Fi adapter is configured to use the "),k=n("access point mode"),b=n(" by default."),v=e("h2",{id:"changing-the-password-or-ssid-of-the-network-name",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#changing-the-password-or-ssid-of-the-network-name","aria-hidden":"true"},"#"),n(" Changing the password or SSID (of the network name)")],-1),x=n("Edit the "),y=e("code",null,"/etc/wpa_supplicant/wpa_supplicant.conf",-1),q=n(" file (using "),P=n("SSH connection"),R=n("):"),S=i(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/wpa_supplicant/wpa_supplicant.conf
</code></pre></div><p>In order to change the name of the Wi-Fi network, change the value of the <code>ssid</code> parameter; to change the password, change the <code>psk</code> parameter. For example:</p><div class="language-txt ext-txt"><pre class="language-txt"><code>network={
    ssid=&quot;my-super-ssid&quot;
    psk=&quot;cloverwifi123&quot;
    mode=2
    proto=RSN
    key_mgmt=WPA-PSK
    pairwise=CCMP
    group=CCMP
    auth_alg=OPEN
}
</code></pre></div>`,3),C=e("li",null,[e("p",null,"Restart Raspberry Pi.")],-1),I=i(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The Wi-Fi network password should be <strong>at least</strong> 8 characters.</p><p>If your <code>wpa_supplicant.conf</code> is not valid, Raspberry Pi will not allow Wi-Fi connections!</p></div><h2 id="switching-adapter-to-the-client-mode" tabindex="-1"><a class="header-anchor" href="#switching-adapter-to-the-client-mode" aria-hidden="true">#</a> Switching adapter to the client mode</h2><ol><li><p>Disable the <code>dnsmasq</code> service.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl stop dnsmasq
<span class="token function">sudo</span> systemctl disable dnsmasq
</code></pre></div></li><li><p>Enable DHCP client on the wireless interface to obtain IP address. In order to do this, remove the following lines from the <code>etc/dhcpcd.conf</code> file:</p><div class="language-conf ext-conf"><pre class="language-conf"><code>interface wlan0
static ip_address=192.168.11.1/24
</code></pre></div></li><li><p>Configure <code>wpa_supplicant</code> to connect to an existing access point. Change your <code>/etc/wpa_supplicant/wpa_supplicant.conf</code> to contain the following:</p><div class="language-text ext-text"><pre class="language-text"><code>ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=GB

network={
    ssid=&quot;SSID&quot;
    psk=&quot;password&quot;
}
</code></pre></div><p>where <code>SSID</code> is the name of the network, and <code>password</code> is its password.</p></li><li><p>Restart the <code>dhcpcd</code> service.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart dhcpcd
</code></pre></div></li></ol><h2 id="switching-the-adapter-to-the-access-point-mode" tabindex="-1"><a class="header-anchor" href="#switching-the-adapter-to-the-access-point-mode" aria-hidden="true">#</a> Switching the adapter to the access point mode</h2><ol><li><p>Enable the static IP address in the wireless interface. Add the following lines to your <code>/etc/dhcpcd.conf</code> file:</p><div class="language-conf ext-conf"><pre class="language-conf"><code>interface wlan0
static ip_address=192.168.11.1/24
</code></pre></div></li><li><p>Configure wpa_supplicant to work in the access point mode. Change your <code>/etc/wpa_supplicant/wpa_supplicant.conf</code> file to contain the following:</p><div class="language-text ext-text"><pre class="language-text"><code>ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=GB

network={
    ssid=&quot;clover-1234&quot;
    psk=&quot;cloverwifi&quot;
    mode=2
    proto=RSN
    key_mgmt=WPA-PSK
    pairwise=CCMP
    group=CCMP
    auth_alg=OPEN
}
</code></pre></div><p>where <code>clover-1234</code> is the network name and <code>cloverwifi</code> is the password.</p></li><li><p>Enable the <code>dnsmasq</code> service.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> dnsmasq
<span class="token function">sudo</span> systemctl start dnsmasq
</code></pre></div></li><li><p>Restart the <code>dhcpcd</code> service.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart dhcpcd
</code></pre></div></li></ol><hr><p>Below you can read more about how RPi networking is organized.</p><h2 id="rpi-network-organization" tabindex="-1"><a class="header-anchor" href="#rpi-network-organization" aria-hidden="true">#</a> RPi network organization</h2>`,8),F=n("Network operation in the "),W=n("image"),D=n(" is supported by two pre-installed services:"),A=i(`<ul><li><strong>networking</strong> \u2014 the service enables all network interfaces at startup [5].</li><li><strong>dhcpcd</strong> \u2014 the service ensures that configuration of addressing and routing on the interfaces is obtained dynamically or specified statically in the config file.</li></ul><p>To work in the router (access point) mode, RPi requires a DHCP server. It is used to automatically send the settings of the current network to connected clients. <code>isc-dhcp-server</code> or <code>dnsmasq</code> may be used for this.</p><h3 id="dhcpcd" tabindex="-1"><a class="header-anchor" href="#dhcpcd" aria-hidden="true">#</a> dhcpcd</h3><p>Starting with Raspbian Jessie, network settings are no longer defined in the <code>/etc/network/interfaces</code> file. Now <code>dhcpcd</code> is used for sending addressing and routing settings[4].</p><p>By default, a dhcp client is enabled in all interfaces. Settings for network interfaces are changed in the <code>/etc/dhcpcd.conf</code> file. An access point should have a static IP address. To specify one, add the following lines to the end of the file:</p><div class="language-text ext-text"><pre class="language-text"><code>interface wlan0
static ip_address=192.168.11.1/24
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the interface is wireless (wlan), the <code>dhcpcd</code> service triggers <code>wpa_supplicant</code> [13], which in turn works directly with the Wi-Fi adapter, and sets it to the specified state.</p></div><h3 id="wpa-supplicant" tabindex="-1"><a class="header-anchor" href="#wpa-supplicant" aria-hidden="true">#</a> wpa_supplicant</h3><p><strong>wpa_supplicant</strong> \u2014 the service configures the Wi-Fi adapter. The <code>wpa_supplicant</code> service does not run as a standalone service (although it exists as such), but is instead launched as a <code>dhcpcd</code> child process.</p><p>By default the config file is <code>/etc/wpa_supplicant/wpa_supplicant.conf</code>. An example of the configuration file:</p><div class="language-conf ext-conf"><pre class="language-conf"><code>ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=GB

network={
        ssid=\\&quot;my-clover\\&quot;
        psk=\\&quot;cloverwifi\\&quot;
        mode=2
        proto=RSN
        key_mgmt=WPA-PSK
        pairwise=CCMP
        group=CCMP
        auth_alg=OPEN
}
</code></pre></div><p>Inside the config file, general <code>wpa_supplicant</code> settings, and the settings for the adapter configuration are specified. The configuration file also contains <code>network</code> section with the basic settings of the Wi-Fi network, such as network SSID, password, adapter operating mode. There may be several <code>network</code> sections, but only the first valid one is used. For example, if the first section contains a connection to an unavailable network, the adapter will be configured according to a next valid section, if there is one. Read more about the syntax of <code>wpa_supplicant.conf</code> [TODO WIKI].</p><h4 id="wpa-passphrase" tabindex="-1"><a class="header-anchor" href="#wpa-passphrase" aria-hidden="true">#</a> wpa_passphrase</h4><p><code>wpa_passphrase</code> \u2014 a utility for creating the <code>network</code> section.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>wpa_passphrase SSID PASSWORD
</code></pre></div><p>After running the command, copy the resulting section to your config file. You may remove the commented field <code>psk</code>, and leave only the field with the password hash, or vice versa.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token punctuation">{</span>
	<span class="token assign-left variable">ssid</span><span class="token operator">=</span><span class="token string">&quot;SSID&quot;</span>
	<span class="token comment">#psk=&quot;PASSWORD&quot;</span>
	<span class="token assign-left variable">psk</span><span class="token operator">=</span>c2161655c6ba444d8df94cbbf4e9c5c4c61fc37702b9c66ed37aee1545a5a333
<span class="token punctuation">}</span>
</code></pre></div><h3 id="multiple-wi-fi-adapters" tabindex="-1"><a class="header-anchor" href="#multiple-wi-fi-adapters" aria-hidden="true">#</a> Multiple Wi-Fi adapters</h3><p>The system may use multiple Wi-Fi adapters. If drivers are properly connected to them, they may be viewed by calling <code>ifconfig</code> (e.g. <code>wlan0</code> and <code>wlan1</code>).</p><p>If you have multiple adapters, the same working <code>network</code> section will be used for all of them. This is due to the fact that for each interface, <code>dhcpcd</code> separately creates a child <code>wpa_supplicant</code> process, which runs the same code ( since the config is the same).</p><p>To make multiple adapters work with individual settings, the mechanism for running different configuration scripts is implemented in the called standard <code>dhcpcd</code> script. To use it, rename the standard config file as follows: <code>wpa_supplicant-&lt;interface name&gt;.conf</code>, for example <code>wpa_supplicant-wlan0.conf</code>.</p><p>To apply the settings, restart the parent process \u2014 the <code>dhcpcd</code> service. This can be done by running the following command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart dhcpcd
</code></pre></div><h3 id="dhcp-server" tabindex="-1"><a class="header-anchor" href="#dhcp-server" aria-hidden="true">#</a> DHCP server</h3><h4 id="dnsmasq-base" tabindex="-1"><a class="header-anchor" href="#dnsmasq-base" aria-hidden="true">#</a> dnsmasq-base</h4><p><code>dnsmasq-base</code> \u2014 a command-line utility, which is not a service. To use dnsmasq as a service, install the <code>dnsmasq</code> package.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> dnsmasq-base
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Calling dnsmasq-base</span>
<span class="token function">sudo</span> dnsmasq --interface<span class="token operator">=</span>wlan0 --address<span class="token operator">=</span>/clover/coex/192.168.11.1 --no-daemon --dhcp-range<span class="token operator">=</span><span class="token number">192.168</span>.11.100,192.168.11.200,12h --no-hosts --filterwin2k --bogus-priv --domain-needed --quiet-dhcp6 --log-queries

<span class="token comment"># More about dnsmasq-base</span>
dnsmasq --help

<span class="token comment"># or</span>
<span class="token function">man</span> dnsmasq
</code></pre></div><h4 id="dnsmasq" tabindex="-1"><a class="header-anchor" href="#dnsmasq" aria-hidden="true">#</a> dnsmasq</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> dnsmasq
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> -a /etc/dnsmasq.conf</span>
interface=wlan0
address=/clover/coex/192.168.11.1
dhcp-range=192.168.11.100,192.168.11.200,12h
no-hosts
filterwin2k
bogus-priv
domain-needed
quiet-dhcp6

EOF</span>
</code></pre></div><h4 id="isc-dhcp-server" tabindex="-1"><a class="header-anchor" href="#isc-dhcp-server" aria-hidden="true">#</a> isc-dhcp-server</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> isc-dhcp-server
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># https://www.shellhacks.com/ru/sed-find-replace-string-in-file/</span>
<span class="token function">sed</span> -i <span class="token string">&#39;s/INTERFACESv4=\\&quot;\\&quot;/INTERFACESv4=\\&quot;wlan0\\&quot;/&#39;</span> /etc/default/isc-dhcp-server
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/dhcp/dhcpd.conf</span>
subnet 192.168.11.0 netmask 255.255.255.0 {
  range 192.168.11.11 192.168.11.254;
  #option domain-name-servers 8.8.8.8;
  #option domain-name &quot;rpi.local&quot;;
  option routers 192.168.11.1;
  option broadcast-address 192.168.11.255;
  default-lease-time 600;
  max-lease-time 7200;
}

EOF</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/network/if-up.d/isc-dhcp-server <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">chmod</span> +x /etc/network/if-up.d/isc-dhcp-server</span>
#!/bin/sh
if [ &quot;\\<span class="token variable">$IFACE</span>&quot; = &quot;--all&quot; ];
then sleep 10 &amp;&amp; systemctl start isc-dhcp-server.service &amp;
fi

EOF</span>
</code></pre></div><h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h2>`,37),E={href:"https://habr.com/post/315960/",target:"_blank",rel:"noopener noreferrer"},T=n("habr.com Linux WiFi from the command line with wpa_supplicant"),O={href:"https://wiki.archlinux.org/index.php/WPA_supplicant_%28%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9%29",target:"_blank",rel:"noopener noreferrer"},N=n("wiki.archlinux.org WPA supplicant (Russian)"),B={href:"http://blog.hoxnox.com/gentoo/wifi-hotspot.html",target:"_blank",rel:"noopener noreferrer"},G=n("blog.hoxnox.com: WiFi access point with wpa_supplicant"),L={href:"http://dmitrysnotes.ru/raspberry-pi-3-prisvoenie-staticheskogo-ip-adresa",target:"_blank",rel:"noopener noreferrer"},M=n("dmitrysnotes.ru: Raspberry Pi 3. Assigning a static IP addresses"),U={href:"https://www.thegeekdiary.com/linux-os-service-network/",target:"_blank",rel:"noopener noreferrer"},H=n("thegeekdiary.com: Linux OS Service \u2018network\u2019"),z={href:"https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/",target:"_blank",rel:"noopener noreferrer"},K=n("frillip.com: Using your new Raspberry Pi 3 as a Wi-Fi access point with hostapt"),V=n(" (it also contains instructions for setting up forwarding for using RPi as an Internet gateway)"),J={href:"https://habr.com/sandbox/30433/",target:"_blank",rel:"noopener noreferrer"},Y=n("habr.com: Configuring a ddns server on a GNU/Linux Debian 6"),$=n(" (Good article on configuring a ddns server based on "),j=e("code",null,"bind",-1),Q=n(" and "),X=e("code",null,"isc-dhcp-server",-1),Z=n(")"),ee={href:"https://pro-gram.ru/dhcp-server-ubuntu.html",target:"_blank",rel:"noopener noreferrer"},ne=n("pro-gram.ru to: Setting up and configuring a DHCP server in Ubuntu 16.04."),se=n(" (setup isc-dhcp-server)"),ae={href:"http://expert-orda.ru/posts/liuxnewbie/125--dhcp-ubuntu",target:"_blank",rel:"noopener noreferrer"},te=n("expert-orda.ru: Configuring a DHCP server in Ubuntu"),oe=n(" (setup isc-dhcp-server)"),ie={href:"http://academicfox.com/raspberry-pi-besprovodnaya-tochka-dostupa-wifi-access-point/",target:"_blank",rel:"noopener noreferrer"},ce=n("academicfox.com: A Raspberry Pi wireless access point (WiFi access point)"),re=n(" (setting the routes, hostapd, isc-dhcp-server)"),de={href:"http://weworkweplay.com/play/automatically-connect-a-raspberry-pi-to-a-wifi-network/",target:"_blank",rel:"noopener noreferrer"},pe=n("weworkweplay.com: Automatically connect a Raspberry Pi to a Wifi network"),le=n(" (Contains settings for creating an open access point)"),he={href:"https://wiki.archlinux.org/index.php/WPA%20supplicant",target:"_blank",rel:"noopener noreferrer"},ue=n("wiki.archlinux.org: WPA supplicant"),ge={href:"https://wiki.archlinux.org/index.php/Dhcpcd#10-wpa_supplicant",target:"_blank",rel:"noopener noreferrer"},fe=n("wiki.archlinux.org: dhcpcd"),_e=n(" (dhcpcd hook wpa_supplicant)");function me(we,ke){const t=c("RouterLink"),a=c("ExternalLinkIcon");return d(),p(l,null,[u,g,f,e("p",null,[_,s(t,{to:"/en/image.html"},{default:o(()=>[m]),_:1}),w,s(t,{to:"/en/wifi.html"},{default:o(()=>[k]),_:1}),b]),v,e("ol",null,[e("li",null,[e("p",null,[x,y,q,s(t,{to:"/en/ssh.html"},{default:o(()=>[P]),_:1}),R]),S]),C]),I,e("p",null,[F,s(t,{to:"/en/image.html"},{default:o(()=>[W]),_:1}),D]),A,e("ol",null,[e("li",null,[e("a",E,[T,s(a)])]),e("li",null,[e("a",O,[N,s(a)])]),e("li",null,[e("a",B,[G,s(a)])]),e("li",null,[e("a",L,[M,s(a)])]),e("li",null,[e("a",U,[H,s(a)])]),e("li",null,[e("a",z,[K,s(a)]),V]),e("li",null,[e("a",J,[Y,s(a)]),$,j,Q,X,Z]),e("li",null,[e("a",ee,[ne,s(a)]),se]),e("li",null,[e("a",ae,[te,s(a)]),oe]),e("li",null,[e("a",ie,[ce,s(a)]),re]),e("li",null,[e("a",de,[pe,s(a)]),le]),e("li",null,[e("a",he,[ue,s(a)])]),e("li",null,[e("a",ge,[fe,s(a)]),_e])])],64)}var ve=r(h,[["render",me],["__file","network.html.vue"]]);export{ve as default};
