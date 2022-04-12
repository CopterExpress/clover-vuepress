import{_ as i,r as p,o as d,c as r,a as s,b as n,w as t,F as l,d as e,e as c}from"./app.4f6a4bec.js";const h={},u=s("h1",{id:"\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0430-wi-fi",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0430-wi-fi","aria-hidden":"true"},"#"),e(" \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 Wi-Fi")],-1),_=s("p",null,"Wi-Fi \u0430\u0434\u0430\u043F\u0442\u0435\u0440 \u043D\u0430 Raspberry Pi \u0438\u043C\u0435\u0435\u0442 \u0434\u0432\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0440\u0435\u0436\u0438\u043C\u0430 \u0440\u0430\u0431\u043E\u0442\u044B:",-1),g=s("ol",null,[s("li",null,[s("strong",null,"\u0420\u0435\u0436\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430"),e(" \u2013 RPi \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043A \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 Wi-Fi \u0441\u0435\u0442\u0438.")]),s("li",null,[s("strong",null,"\u0420\u0435\u0436\u0438\u043C \u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430"),e(" \u2013 RPi \u0441\u043E\u0437\u0434\u0430\u0435\u0442 Wi-Fi \u0441\u0435\u0442\u044C, \u043A \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F.")])],-1),f=e("\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 "),k=e("\u043E\u0431\u0440\u0430\u0437\u0430 \u0434\u043B\u044F RPi"),m=e(" \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Wi-Fi \u0430\u0434\u0430\u043F\u0442\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 "),b=e("\u0440\u0435\u0436\u0438\u043C\u0435 \u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430"),w=e("."),v=s("h2",{id:"\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435-\u043F\u0430\u0440\u043E\u043B\u044F-\u0438\u043B\u0438-ssid-\u0438\u043C\u0435\u043D\u0438-\u0441\u0435\u0442\u0438",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435-\u043F\u0430\u0440\u043E\u043B\u044F-\u0438\u043B\u0438-ssid-\u0438\u043C\u0435\u043D\u0438-\u0441\u0435\u0442\u0438","aria-hidden":"true"},"#"),e(" \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F \u0438\u043B\u0438 SSID (\u0438\u043C\u0435\u043D\u0438 \u0441\u0435\u0442\u0438)")],-1),x=e("\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0444\u0430\u0439\u043B "),q=s("code",null,"/etc/wpa_supplicant/wpa_supplicant.conf",-1),P=e(" (\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F "),y=e("SSH-\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435"),R=e("):"),S=c(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/wpa_supplicant/wpa_supplicant.conf
</code></pre></div><p>\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 <code>ssid</code>, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 Wi-Fi \u0441\u0435\u0442\u0438, \u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 <code>psk</code>, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440:</p><div class="language-txt ext-txt"><pre class="language-txt"><code>network={
    ssid=&quot;my-super-ssid&quot;
    psk=&quot;cloverwifi123&quot;
    mode=2
    proto=RSN
    key_mgmt=WPA-PSK
    pairwise=CCMP
    group=CCMP
    auth_alg=OPEN
}
</code></pre></div>`,3),F=s("li",null,[s("p",null,"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 Raspberry Pi.")],-1),W=c(`<div class="custom-container warning"><p class="custom-container-title">\u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415</p><p>\u0414\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F \u0434\u043B\u044F Wi-Fi \u0441\u0435\u0442\u0438 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C <strong>\u043D\u0435 \u043C\u0435\u043D\u0435\u0435</strong> 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.</p><p>\u041F\u0440\u0438 \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 <code>wpa_supplicant.conf</code> Raspberry Pi \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0442 \u0440\u0430\u0437\u0434\u0430\u0432\u0430\u0442\u044C Wi-Fi!</p></div><h2 id="\u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435-\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430-\u0432-\u0440\u0435\u0436\u0438\u043C-\u043A\u043B\u0438\u0435\u043D\u0442\u0430" tabindex="-1"><a class="header-anchor" href="#\u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435-\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430-\u0432-\u0440\u0435\u0436\u0438\u043C-\u043A\u043B\u0438\u0435\u043D\u0442\u0430" aria-hidden="true">#</a> \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430 \u0432 \u0440\u0435\u0436\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430</h2><ol><li><p>\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0441\u043B\u0443\u0436\u0431\u0443 <code>dnsmasq</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl stop dnsmasq
<span class="token function">sudo</span> systemctl disable dnsmasq
</code></pre></div></li><li><p>\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 IP \u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0431\u0435\u0441\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u043E\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 DHCP \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u0438\u0437 \u0444\u0430\u0439\u043B\u0430 <code>/etc/dhcpcd.conf</code> \u0441\u0442\u0440\u043E\u043A\u0438:</p><div class="language-conf ext-conf"><pre class="language-conf"><code>interface wlan0
static ip_address=192.168.11.1/24
</code></pre></div></li><li><p>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 <code>wpa_supplicant</code> \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0442\u043E\u0447\u043A\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0444\u0430\u0439\u043B\u0430 <code>/etc/wpa_supplicant/wpa_supplicant.conf</code> \u043D\u0430:</p><div class="language-text ext-text"><pre class="language-text"><code>ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=GB

network={
    ssid=&quot;SSID&quot;
    psk=&quot;password&quot;
}
</code></pre></div><p>\u0433\u0434\u0435 <code>SSID</code> \u2013 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u0442\u0438, \u0430 <code>password</code> \u2013 \u043F\u0430\u0440\u043E\u043B\u044C.</p></li><li><p>\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u043B\u0443\u0436\u0431\u0443 <code>dhcpcd</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart dhcpcd
</code></pre></div></li></ol><h2 id="\u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435-\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430-\u0432-\u0440\u0435\u0436\u0438\u043C-\u0442\u043E\u0447\u043A\u0438-\u0434\u043E\u0441\u0442\u0443\u043F\u0430" tabindex="-1"><a class="header-anchor" href="#\u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435-\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430-\u0432-\u0440\u0435\u0436\u0438\u043C-\u0442\u043E\u0447\u043A\u0438-\u0434\u043E\u0441\u0442\u0443\u043F\u0430" aria-hidden="true">#</a> \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430 \u0432 \u0440\u0435\u0436\u0438\u043C \u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430</h2><ol><li><p>\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 IP \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0431\u0435\u0441\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u043E\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0432 \u0444\u0430\u0439\u043B <code>/etc/dhcpcd.conf</code> \u0441\u0442\u0440\u043E\u043A\u0438:</p><div class="language-conf ext-conf"><pre class="language-conf"><code>interface wlan0
static ip_address=192.168.11.1/24
</code></pre></div></li><li><p>\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u0435 <code>wpa_supplicant</code> \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0444\u0430\u0439\u043B\u0430 <code>/etc/wpa_supplicant/wpa_supplicant.conf</code> \u043D\u0430:</p><div class="language-text ext-text"><pre class="language-text"><code>ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
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
</code></pre></div><p>\u0433\u0434\u0435 <code>clover-1234</code> \u2013 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u0442\u0438, \u0430 <code>cloverwifi</code> \u2013 \u043F\u0430\u0440\u043E\u043B\u044C.</p></li><li><p>\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0441\u043B\u0443\u0436\u0431\u0443 <code>dnsmasq</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> dnsmasq
<span class="token function">sudo</span> systemctl start dnsmasq
</code></pre></div></li><li><p>\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u043B\u0443\u0436\u0431\u0443 <code>dhcpcd</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start dhcpcd
</code></pre></div></li></ol><hr><p>\u041D\u0438\u0436\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0441\u0435\u0442\u044C\u044E \u043D\u0430 RPi.</p><h2 id="\u0443\u0441\u0442\u0440\u043E\u0438\u0441\u0442\u0432\u043E-\u0441\u0435\u0442\u0438-rpi" tabindex="-1"><a class="header-anchor" href="#\u0443\u0441\u0442\u0440\u043E\u0438\u0441\u0442\u0432\u043E-\u0441\u0435\u0442\u0438-rpi" aria-hidden="true">#</a> \u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0441\u0435\u0442\u0438 RPi</h2>`,8),D=e("\u0420\u0430\u0431\u043E\u0442\u0430 \u0441\u0435\u0442\u0438 \u043D\u0430 "),C=e("\u043E\u0431\u0440\u0430\u0437\u0435"),I=e(" \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u0432\u0443\u043C\u044F \u043F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u043B\u0443\u0436\u0431\u0430\u043C\u0438:"),E=c(`<ul><li><strong>networking</strong> \u2014 \u0441\u043B\u0443\u0436\u0431\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u0441\u0435\u0442\u0435\u0432\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0432 \u043C\u043E\u043C\u0435\u043D\u0442 \u0437\u0430\u043F\u0443\u0441\u043A\u0430 [5].</li><li><strong>dhcpcd</strong> \u2014 \u0441\u043B\u0443\u0436\u0431\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u0438 \u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u0445, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438 \u0438\u043B\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0432 \u0444\u0430\u0439\u043B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438.</li></ul><p>\u0414\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0440\u043E\u0443\u0442\u0435\u0440\u0430 (\u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430) RPi \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C DHCP \u0441\u0435\u0440\u0432\u0435\u0440. \u041E\u043D \u0441\u043B\u0443\u0436\u0438\u0442 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0432\u044B\u0434\u0430\u0447\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0435\u0442\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0432\u0448\u0438\u043C\u0441\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C. \u0412 \u0440\u043E\u043B\u0438 \u0442\u0430\u043A\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0442\u044C <code>isc-dhcp-server</code> \u0438\u043B\u0438 <code>dnsmasq</code>.</p><h3 id="dhcpcd" tabindex="-1"><a class="header-anchor" href="#dhcpcd" aria-hidden="true">#</a> dhcpcd</h3><p>\u041D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 Raspbian Jessie \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0435\u0442\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u0434\u0430\u044E\u0442\u0441\u044F \u0432 \u0444\u0430\u0439\u043B\u0435 <code>/etc/network/interfaces</code>. \u0422\u0435\u043F\u0435\u0440\u044C \u0437\u0430 \u0432\u044B\u0434\u0430\u0447\u0443 \u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u0438 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 <code>dhcpcd</code> [4].</p><p>\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043D\u0430 \u0432\u0441\u0435\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u0445 \u0432\u043A\u043B\u044E\u0447\u0435\u043D dhcp-\u043A\u043B\u0438\u0435\u043D\u0442. \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0432 \u0444\u0430\u0439\u043B\u0435 <code>/etc/dhcpcd.conf</code>. \u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u043D\u044F\u0442\u044C \u0442\u043E\u0447\u043A\u0443 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 ip-\u0430\u0434\u0440\u0435\u0441. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432 \u043A\u043E\u043D\u0435\u0446 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0441\u0442\u0440\u043E\u043A\u0438:</p><div class="language-text ext-text"><pre class="language-text"><code>interface wlan0
static ip_address=192.168.11.1/24
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u0421\u041E\u0412\u0415\u0422</p><p>\u0415\u0441\u043B\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u044B\u043C (wlan), \u0442\u043E \u0441\u043B\u0443\u0436\u0431\u0430 <code>dhcpcd</code> \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u0438\u0442 <code>wpa_supplicant</code> [13], \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432 \u0441\u0432\u043E\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0441 wifi-\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u043E\u043C \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442 \u0435\u0433\u043E \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435.</p></div><h3 id="wpa-supplicant" tabindex="-1"><a class="header-anchor" href="#wpa-supplicant" aria-hidden="true">#</a> wpa_supplicant</h3><p><strong>wpa_supplicant</strong> \u2013 \u0441\u043B\u0443\u0436\u0431\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0443\u0435\u0442 Wi-Fi \u0430\u0434\u0430\u043F\u0442\u0435\u0440. \u0421\u043B\u0443\u0436\u0431\u0430 <code>wpa_supplicant</code> \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u0430\u044F (\u0445\u043E\u0442\u044F \u043A\u0430\u043A \u0442\u0430\u043A\u043E\u0432\u0430\u044F \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442), \u0430 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0442 <code>dhcpcd</code>.</p><p>\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u043C\u0435\u0442\u044C \u043F\u0443\u0442\u044C <code>/etc/wpa_supplicant/wpa_supplicant.conf</code>. \u041F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430:</p><div class="language-conf ext-conf"><pre class="language-conf"><code>ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
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
</code></pre></div><p>\u0412\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043D\u0444\u0438\u0433\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043E\u0431\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 <code>wpa_supplicant</code> \u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430. \u0422\u0430\u043A\u0436\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0435\u043A\u0446\u0438\u0438 <code>network</code> \u2013 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 Wi-Fi \u0441\u0435\u0442\u0438 \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A SSID \u0441\u0435\u0442\u0438, \u043F\u0430\u0440\u043E\u043B\u044C, \u0440\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430. \u0422\u0430\u043A\u0438\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E, \u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0441\u043B\u0438 \u0432\u044B \u0443\u043A\u0430\u0437\u0430\u043B\u0438 \u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u0431\u043B\u043E\u043A\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u0441\u0435\u0442\u0438, \u0442\u043E \u0430\u0434\u0430\u043F\u0442\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0443\u0434\u0430\u0447\u043D\u043E\u0439 \u0441\u0435\u043A\u0446\u0438\u0435\u0439, \u0435\u0441\u043B\u0438 \u0442\u0430\u043A\u0430\u044F \u0435\u0441\u0442\u044C. \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u0435 <code>wpa_supplicant.conf</code> [TODO WIKI].</p><h4 id="wpa-passphrase" tabindex="-1"><a class="header-anchor" href="#wpa-passphrase" aria-hidden="true">#</a> wpa_passphrase</h4><p><code>wpa_passphrase</code> \u2013 \u0443\u0442\u0438\u043B\u0438\u0442\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0435\u043A\u0446\u0438\u0438 <code>network</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>wpa_passphrase SSID PASSWORD
</code></pre></div><p>\u041F\u043E\u0441\u043B\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0443\u044E \u0441\u0435\u043A\u0446\u0438\u044E \u0432 \u0432\u0430\u0448 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B. \u041C\u043E\u0436\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 <code>psk</code> \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u0435 \u0441 \u0445\u0435\u0448\u0435\u043C \u043F\u0430\u0440\u043E\u043B\u044F, \u043B\u0438\u0431\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token punctuation">{</span>
	<span class="token assign-left variable">ssid</span><span class="token operator">=</span><span class="token string">&quot;SSID&quot;</span>
	<span class="token comment">#psk=&quot;PASSWORD&quot;</span>
	<span class="token assign-left variable">psk</span><span class="token operator">=</span>c2161655c6ba444d8df94cbbf4e9c5c4c61fc37702b9c66ed37aee1545a5a333
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E-wi-fi-\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u043E\u0432" tabindex="-1"><a class="header-anchor" href="#\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E-wi-fi-\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u043E\u0432" aria-hidden="true">#</a> \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E Wi-Fi \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u043E\u0432</h3><p>\u0412 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E Wi-Fi \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u043E\u0432. \u0415\u0441\u043B\u0438 \u0434\u043B\u044F \u043D\u0438\u0445 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430, \u0442\u043E \u0438\u0445 \u043C\u043E\u0436\u043D\u043E \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u044B\u0437\u0432\u0430\u0432 <code>ifconfig</code> (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 <code>wlan0</code> \u0438 <code>wlan1</code>).</p><p>\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u043E\u0432, \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0430 \u0438 \u0442\u0430 \u0436\u0435 \u0441\u0430\u043C\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u0441\u0435\u043A\u0446\u0438\u044F <code>network</code>. \u042D\u0442\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u043E \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, <code>dhcpcd</code> \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u043F\u043E \u0434\u043E\u0447\u0435\u0440\u043D\u0435\u043C\u0443 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0443 <code>wpa_supplicant</code>, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u043E\u0434\u0438\u043D \u0442\u043E\u0442 \u0436\u0435 \u043A\u043E\u0434 (\u0442. \u043A. \u043A\u043E\u043D\u0444\u0438\u0433 \u043E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435).</p><p>\u0414\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u043E\u0432 \u0441 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E, \u0432 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u043C \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u043C\u043E\u043C \u0441\u043A\u0440\u0438\u043F\u0442\u0435 <code>dhcpcd</code> \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432. \u0414\u043B\u044F \u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u043A\u043E\u043D\u0444\u0438\u0433\u0430 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u043E\u0431\u0440\u0430\u0437\u0446\u0443: <code>wpa_supplicant-&lt;\u0438\u043C\u044F \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430&gt;.conf</code>, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 <code>wpa_supplicant-wlan0.conf</code>.</p><p>\u0414\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u2013 \u0441\u043B\u0443\u0436\u0431\u0443 <code>dhcpcd</code>. \u0421\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart dhcpcd
</code></pre></div><h3 id="dhcp-\u0441\u0435\u0440\u0432\u0435\u0440" tabindex="-1"><a class="header-anchor" href="#dhcp-\u0441\u0435\u0440\u0432\u0435\u0440" aria-hidden="true">#</a> DHCP \u0441\u0435\u0440\u0432\u0435\u0440</h3><h4 id="dnsmasq-base" tabindex="-1"><a class="header-anchor" href="#dnsmasq-base" aria-hidden="true">#</a> dnsmasq-base</h4><p><code>dnsmasq-base</code> \u2013 \u043A\u043E\u043D\u0441\u043E\u043B\u044C\u043D\u0430\u044F \u0443\u0442\u0438\u043B\u0438\u0442\u0430, \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0441\u043B\u0443\u0436\u0431\u043E\u0439, \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F dnsmasq \u043A\u0430\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u043D\u0430\u0434\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u043A\u0435\u0442 <code>dnsmasq</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> dnsmasq-base
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u0412\u044B\u0437\u043E\u0432 dnsmasq-base</span>
<span class="token function">sudo</span> dnsmasq --interface<span class="token operator">=</span>wlan0 --address<span class="token operator">=</span>/clover/coex/192.168.11.1 --no-daemon --dhcp-range<span class="token operator">=</span><span class="token number">192.168</span>.11.100,192.168.11.200,12h --no-hosts --filterwin2k --bogus-priv --domain-needed --quiet-dhcp6 --log-queries

<span class="token comment"># \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E dnsmasq-base</span>
dnsmasq --help

<span class="token comment"># \u0438\u043B\u0438</span>
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
</code></pre></div><h2 id="\u0441\u0441\u044B\u043B\u043A\u0438" tabindex="-1"><a class="header-anchor" href="#\u0441\u0441\u044B\u043B\u043A\u0438" aria-hidden="true">#</a> \u0421\u0441\u044B\u043B\u043A\u0438</h2>`,37),O={href:"https://habr.com/post/315960/",target:"_blank",rel:"noopener noreferrer"},A=e("habr.com: Linux WiFi \u0438\u0437 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438 \u0441 wpa_supplicant"),N={href:"https://wiki.archlinux.org/index.php/WPA_supplicant_%28%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9%29",target:"_blank",rel:"noopener noreferrer"},B=e("wiki.archlinux.org: WPA supplicant (\u0420\u0443\u0441\u0441\u043A\u0438\u0439)"),G={href:"http://blog.hoxnox.com/gentoo/wifi-hotspot.html",target:"_blank",rel:"noopener noreferrer"},L=e("blog.hoxnox.com: WiFi access point with wpa_supplicant"),U={href:"http://dmitrysnotes.ru/raspberry-pi-3-prisvoenie-staticheskogo-ip-adresa",target:"_blank",rel:"noopener noreferrer"},H=e("dmitrysnotes.ru: Raspberry Pi 3. \u041F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E IP-\u0430\u0434\u0440\u0435\u0441\u0430"),M={href:"https://www.thegeekdiary.com/linux-os-service-network/",target:"_blank",rel:"noopener noreferrer"},K=e("thegeekdiary.com: Linux OS Service \u2018network\u2019"),T={href:"https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/",target:"_blank",rel:"noopener noreferrer"},V=e("frillip.com: Using your new Raspberry Pi 3 as a Wi-Fi access point with hostapt"),J=e(" (\u0442\u0430\u043A\u0436\u0435 \u0437\u0434\u0435\u0441\u044C \u0435\u0441\u0442\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u0444\u043E\u0440\u0432\u0430\u0440\u0434\u0438\u043D\u0433\u0430 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F RPi \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0448\u043B\u044E\u0437\u0430 \u0434\u043B\u044F \u0432\u044B\u0445\u043E\u0434\u0430 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442)"),$={href:"https://habr.com/sandbox/30433/",target:"_blank",rel:"noopener noreferrer"},j=e("habr.com: \u041D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C ddns-\u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0430 GNU/Linux Debian 6"),z=e(" (\u0425\u043E\u0440\u043E\u0448\u0430\u044F \u0441\u0442\u0430\u0442\u044C\u044F \u043F\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 ddns-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 "),Q=s("code",null,"bind",-1),X=e(" \u0438 "),Y=s("code",null,"isc-dhcp-server",-1),Z=e(")"),ss={href:"https://pro-gram.ru/dhcp-server-ubuntu.html",target:"_blank",rel:"noopener noreferrer"},es=e("pro-gram.ru: \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 DHCP \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0430 Ubuntu 16.04."),ns=e(" (\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 isc-dhcp-server)"),as={href:"http://expert-orda.ru/posts/liuxnewbie/125--dhcp-ubuntu",target:"_blank",rel:"noopener noreferrer"},os=e("expert-orda.ru: \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 DHCP-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0430 Ubuntu"),ts=e(" (\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 isc-dhcp-server)"),cs={href:"http://academicfox.com/raspberry-pi-besprovodnaya-tochka-dostupa-wifi-access-point/",target:"_blank",rel:"noopener noreferrer"},ps=e("academicfox.com: Raspberry Pi \u0431\u0435\u0441\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 (WiFi access point)"),is=e(" (\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u043E\u0432, hostapd, isc-dhcp-server)"),ds={href:"http://weworkweplay.com/play/automatically-connect-a-raspberry-pi-to-a-wifi-network/",target:"_blank",rel:"noopener noreferrer"},rs=e("weworkweplay.com: Automatically connect a Raspberry Pi to a Wifi network"),ls=e(" (\u0415\u0441\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430)"),hs={href:"https://wiki.archlinux.org/index.php/WPA%20supplicant",target:"_blank",rel:"noopener noreferrer"},us=e("wiki.archlinux.org: WPA supplicant"),_s={href:"https://wiki.archlinux.org/index.php/Dhcpcd#10-wpa_supplicant",target:"_blank",rel:"noopener noreferrer"},gs=e("wiki.archlinux.org: dhcpcd"),fs=e(" (dhcpcd hook wpa_supplicant)");function ks(ms,bs){const o=p("RouterLink"),a=p("ExternalLinkIcon");return d(),r(l,null,[u,_,g,s("p",null,[f,n(o,{to:"/ru/image.html"},{default:t(()=>[k]),_:1}),m,n(o,{to:"/ru/wifi.html"},{default:t(()=>[b]),_:1}),w]),v,s("ol",null,[s("li",null,[s("p",null,[x,q,P,n(o,{to:"/ru/ssh.html"},{default:t(()=>[y]),_:1}),R]),S]),F]),W,s("p",null,[D,n(o,{to:"/ru/image.html"},{default:t(()=>[C]),_:1}),I]),E,s("ol",null,[s("li",null,[s("a",O,[A,n(a)])]),s("li",null,[s("a",N,[B,n(a)])]),s("li",null,[s("a",G,[L,n(a)])]),s("li",null,[s("a",U,[H,n(a)])]),s("li",null,[s("a",M,[K,n(a)])]),s("li",null,[s("a",T,[V,n(a)]),J]),s("li",null,[s("a",$,[j,n(a)]),z,Q,X,Y,Z]),s("li",null,[s("a",ss,[es,n(a)]),ns]),s("li",null,[s("a",as,[os,n(a)]),ts]),s("li",null,[s("a",cs,[ps,n(a)]),is]),s("li",null,[s("a",ds,[rs,n(a)]),ls]),s("li",null,[s("a",hs,[us,n(a)])]),s("li",null,[s("a",_s,[gs,n(a)]),fs])])],64)}var vs=i(h,[["render",ks],["__file","network.html.vue"]]);export{vs as default};