import{_ as c,r as i,o as l,c as r,a as s,b as t,w as o,F as u,d as n,e as p}from"./app.4f6a4bec.js";import{_ as d}from"./gpio_mosfet_magnet.0ab163f8.js";const h={},k=s("h1",{id:"working-with-gpio",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#working-with-gpio","aria-hidden":"true"},"#"),n(" Working with GPIO")],-1),_=s("p",null,[n("A GPIO (General-Purpose Input/Output) pin is a programmable digital signal pin on a circuit board or a microcontroller that may act as an input or an output. Raspberry Pi has a set of easily accessible GPIO pins, some of which have hardware "),s("abbr",{title:"Pulse-width modulation"},"PWM"),n(".")],-1),m={class:"custom-container tip"},g=s("p",{class:"custom-container-title"},"TIP",-1),f=n("Use the "),b={href:"https://pinout.xyz",target:"_blank",rel:"noopener noreferrer"},y=n("pinout"),w=n(" for figuring out, which Raspberry Pi's pins support GPIO and PWM."),v=n("The "),P={href:"http://abyz.me.uk/rpi/pigpio",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"pigpio",-1),I=n(" library for interfacing with the GPIO pins is already preinstalled on "),T=n("the RPi image"),O=n(". To interact with this library, run the appropriate daemon:"),G=p(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start pigpiod.service
</code></pre></div><p>To enable automatic launch of the daemon, run:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> pigpiod.service
</code></pre></div>`,3),R={class:"custom-container warning"},E=s("p",{class:"custom-container-title"},"WARNING",-1),M=s("code",null,"pigpiod",-1),F=n(" may interfere with "),C=n("LED strip"),U=n(" if configured improperly. Make sure that the strip is connected to GPIO21. On "),L=n("image versions"),N=n(" lower than 0.17 change the service start string in "),W=s("code",null,"/lib/systemd/system/pigpiod.service",-1),S=n(" to "),V=s("code",null,"ExecStart=/usr/bin/pigpiod -l -t 0 -x 0x0FFF3FF0",-1),z=n("."),A=p(`<p>Example of working with the library:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> pigpio

<span class="token comment"># initializing connection to pigpiod</span>
pi <span class="token operator">=</span> pigpio<span class="token punctuation">.</span>pi<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># set pin 11 mode for output</span>
pi<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> pigpio<span class="token punctuation">.</span>OUTPUT<span class="token punctuation">)</span>

<span class="token comment"># set signal of pin 11 to high</span>
pi<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># set signal on pin 11 to low</span>
pi<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment"># ...</span>

<span class="token comment"># setting pin 12 mode for input</span>
pi<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> pigpio<span class="token punctuation">.</span>INPUT<span class="token punctuation">)</span>

<span class="token comment"># read the state of pin 12</span>
level <span class="token operator">=</span> pi<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
</code></pre></div>`,2),B=n("To find out the pins' numbers, consult the "),q={href:"https://pinout.xyz",target:"_blank",rel:"noopener noreferrer"},D=n("Raspberry Pi pinout"),H=n("."),j=p(`<h2 id="connecting-servos" tabindex="-1"><a class="header-anchor" href="#connecting-servos" aria-hidden="true">#</a> Connecting servos</h2><p>Servo motors are typically controlled with PWM signal. Extreme positions of servos are reached with signal widths approximately equal to 1000 and 2000 \xB5s. Values for a specific servo can be determined experimentally.</p><p>Connect the signal wire of the servo to one of GPIO-pins of the Raspberry. To control a servo connected to the pin 13 use a code like this:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> pigpio

pi <span class="token operator">=</span> pigpio<span class="token punctuation">.</span>pi<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># set mode of pin 13 to output</span>
pi<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> pigpio<span class="token punctuation">.</span>OUTPUT<span class="token punctuation">)</span>

<span class="token comment"># set pin 13 to output PWM signal 1000 us</span>
pi<span class="token punctuation">.</span>set_servo_pulsewidth<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># set pin 13 to output PWM signal 2000 us</span>
pi<span class="token punctuation">.</span>set_servo_pulsewidth<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="connecting-an-electromagnet" tabindex="-1"><a class="header-anchor" href="#connecting-an-electromagnet" aria-hidden="true">#</a> Connecting an electromagnet</h2><p><img src="`+d+`" alt="GPIO Mosfet Magnet Connection"></p><p>To connect an electromagnet use a field-effect transistor (MOSFET). Connect the MOSFET to one of GPIO-pins of the Raspberry Pi. To control the magnet connected to the pin 15 use a code like this:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> pigpio

pi <span class="token operator">=</span> pigpio<span class="token punctuation">.</span>pi<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># set mode of pin 15 for output</span>
pi<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> pigpio<span class="token punctuation">.</span>OUTPUT<span class="token punctuation">)</span>

<span class="token comment"># enable the magnet</span>
pi<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># disable the magnet</span>
pi<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre></div>`,8),J={class:"custom-container tip"},K=s("p",{class:"custom-container-title"},"TIP",-1),Q=n("A more "),X={href:"https://elinux.org/RPi_Low-level_peripherals",target:"_blank",rel:"noopener noreferrer"},Y=n("comprehensive description"),Z=n(" of the Raspberry Pi GPIO pins and "),$={href:"https://elinux.org/RPi_GPIO_Interface_Circuits",target:"_blank",rel:"noopener noreferrer"},nn=n("additional examples"),sn=n(" of circuits are available at the "),tn={href:"https://elinux.org/RPi_Hub",target:"_blank",rel:"noopener noreferrer"},an=n("Embedded Linux wiki"),en=n(".");function on(pn,cn){const a=i("ExternalLinkIcon"),e=i("RouterLink");return l(),r(u,null,[k,_,s("div",m,[g,s("p",null,[f,s("a",b,[y,t(a)]),w])]),s("p",null,[v,s("a",P,[x,t(a)]),I,t(e,{to:"/en/image.html"},{default:o(()=>[T]),_:1}),O]),G,s("div",R,[E,s("p",null,[M,F,t(e,{to:"/en/leds.html"},{default:o(()=>[C]),_:1}),U,t(e,{to:"/en/image.html"},{default:o(()=>[L]),_:1}),N,W,S,V,z])]),A,s("p",null,[B,s("a",q,[D,t(a)]),H]),j,s("div",J,[K,s("p",null,[Q,s("a",X,[Y,t(a)]),Z,s("a",$,[nn,t(a)]),sn,s("a",tn,[an,t(a)]),en])])],64)}var un=c(h,[["render",on],["__file","gpio.html.vue"]]);export{un as default};
