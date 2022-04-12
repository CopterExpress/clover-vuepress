import{_ as s,r as n,o as c,c as d,a as e,b as o,w as l,F as h,d as t,e as i}from"./app.4f6a4bec.js";import{_ as u}from"./hciuart_error.6b00acb0.js";const p={},f=e("h1",{id:"uart-interface",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uart-interface","aria-hidden":"true"},"#"),t(" UART interface")],-1),_=e("p",null,"UART is an asynchronous serial interface for data transfer that is used in many devices. For example, GPS antennas, Wi-Fi routers, or Pixhawk.",-1),g=e("p",null,"The interface usually contains two lines: TX for data transmission, and RX for data reception. It usually uses the 5-volt logics.",-1),m=e("p",null,"To connect two devices, you have to feed the TX line of the first device to the RX line of the other one. A similar manipulation is required on the other end for ensuring two-way data transmission.",-1),v=e("p",null,"It is also necessary to synchronize the voltages \u2013 connect the ground on two devices.",-1),b=t("Read more about the interface and the Protocol in "),x={href:"https://habr.com/post/109395/",target:"_blank",rel:"noopener noreferrer"},y=t("this article"),R=t("."),T=e("h2",{id:"linux-tty",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-tty","aria-hidden":"true"},"#"),t(" Linux TTY")],-1),w=t("In Linux, there is the concept of POSIX Terminal Interface (read more "),A={href:"https://en.wikipedia.org/wiki/POSIX_terminal_interface",target:"_blank",rel:"noopener noreferrer"},P=t("here"),I=t(". It is an abstraction over the serial or virtual interface that allows several agents to work with the device simultaneously."),U=i('<p>An example of such abstraction in Raspbian may be <code>/dev/tty1</code> \u2013 the device for text output to the screen connected via HDMI.</p><h2 id="uart-on-raspberry-pi-3" tabindex="-1"><a class="header-anchor" href="#uart-on-raspberry-pi-3" aria-hidden="true">#</a> UART on Raspberry Pi 3</h2><p>Raspberry Pi 3 has two hardware UART interfaces:</p><ol><li>Mini UART (<code>/dev/ttyAMA0</code>) \u2013 uses the timing of the RPi graphics core, and therefore limits its frequency.</li><li>PL011 (<code>/dev/ttyS0</code>) \u2013 the full-fledged UART interface on a separate chip of the microcontroller.</li></ol>',4),k=t("Read more about UART on Raspberry Pi in the "),B={href:"https://www.raspberrypi.org/documentation/configuration/uart.md",target:"_blank",rel:"noopener noreferrer"},L=t("official article"),M=t("."),O=i(`<p>Using microcontroller valves, these interfaces may be switched between two physical outputs:</p><ol><li>UART connector on GPIO;</li><li>RPi Bluetooth module.</li></ol><p>By default, Raspberry Pi 3 PL011 is connected to the Bluetooth module. And Mini UART is disabled with the value of directive <code>enable_uart</code>, which is <code>0</code> by default.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>One should understand that directive <code>enable_uart</code> changes its default value, depending on which UART is connected to the RPi Bluetooth module with directive <code>dtoverlay=pi3-miniuart-bt</code>.</p></div><p>For the sake of convenience of working with these outputs, aliases exist in Raspbian:</p><ul><li><code>/dev/serial0</code> \u2013 always points to the TTY device that is connected to the GPIO ports.</li><li><code>/dev/serial1</code> \u2013 always points to the TTY device that is connected to the Bluetooth module.</li></ul><h3 id="configuration-of-uart-on-raspberry-pi-3" tabindex="-1"><a class="header-anchor" href="#configuration-of-uart-on-raspberry-pi-3" aria-hidden="true">#</a> Configuration of UART on Raspberry Pi 3</h3><p>To configure UART, there are directives located in <code>/boot/config.txt</code>.</p><p>To enable the UART interface on GPIO:</p><div class="language-txt ext-txt"><pre class="language-txt"><code>enable_uart=1
</code></pre></div><p>To disconnect the UART interface from the Bluetooth module:</p><div class="language-txt ext-txt"><pre class="language-txt"><code>dtoverlay=pi3-disable-bt
</code></pre></div><p>To connect Mini UART to the Bluetooth module:</p><div class="language-txt ext-txt"><pre class="language-txt"><code>dtoverlay=pi3-miniuart-bt
</code></pre></div><p>If the Bluetooth module is disabled, one should disable the hciuart service:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl disable hciuart.service
</code></pre></div><h2 id="default-image-configuration" tabindex="-1"><a class="header-anchor" href="#default-image-configuration" aria-hidden="true">#</a> Default image configuration</h2>`,17),S=t("In the "),X=t("Clover image for RPi"),F=t(", we initially disabled Mini UART and the Bluetooth module."),C=i('<h2 id="bugs" tabindex="-1"><a class="header-anchor" href="#bugs" aria-hidden="true">#</a> Bugs</h2><p>If you use the Mini UART connection to Bluetooth, <code>hciuart</code> crashes with the following error:</p><p><img src="'+u+`" alt="hciuart error"></p><p>In case of Bluetooth disconnection</p><div class="language-txt ext-txt"><pre class="language-txt"><code>/dev/serial0 -\\&gt; ttyAMA0
/dev/serial1 -\\&gt; ttyS0
</code></pre></div>`,5);function G(N,V){const a=n("ExternalLinkIcon"),r=n("RouterLink");return c(),d(h,null,[f,_,g,m,v,e("p",null,[b,e("a",x,[y,o(a)]),R]),T,e("p",null,[w,e("a",A,[P,o(a)]),I]),U,e("p",null,[k,e("a",B,[L,o(a)]),M]),O,e("p",null,[S,o(r,{to:"/en/image.html"},{default:l(()=>[X]),_:1}),F]),C],64)}var q=s(p,[["render",G],["__file","uart.html.vue"]]);export{q as default};