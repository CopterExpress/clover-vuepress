import{_ as i,r as a,o as s,c as n,a as e,b as r,F as l,d as o,e as h}from"./app.4f6a4bec.js";import{_ as c,a as d,b as p}from"./coexpix-bottom-rev1.2.52d425ab.js";import{_ as m}from"./coexpix-bottom.35a35256.js";const u={},f=e("h1",{id:"coex-pix",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#coex-pix","aria-hidden":"true"},"#"),o(" COEX Pix")],-1),_=o("The "),g=e("strong",null,"COEX Pix",-1),x=o(" flight controller is a modified "),C={href:"https://docs.px4.io/master/en/flight_controller/pixracer.html",target:"_blank",rel:"noopener noreferrer"},S=o("Pixracer"),b=o(" FCU. It is a part of the "),v=e("strong",null,"Clover 4",-1),P=o(" quadrotor kit."),w={class:"custom-container tip"},T=e("p",{class:"custom-container-title"},"TIP",-1),y=o("The source files of the COEX Pix flight controller are "),B={href:"https://github.com/CopterExpress/hardware/tree/master/COEX%20Pix",target:"_blank",rel:"noopener noreferrer"},I=o("published"),R=o(" under the CC BY-NC-SA license."),U=h('<h2 id="revision-1-1" tabindex="-1"><a class="header-anchor" href="#revision-1-1" aria-hidden="true">#</a> Revision 1.1</h2><h3 id="physical-specs" tabindex="-1"><a class="header-anchor" href="#physical-specs" aria-hidden="true">#</a> Physical specs</h3><ul><li>Board size: 35x35 mm.</li><li>Mounting hole pattern: standard 30.5 mm.</li><li>Mounting hole diameter: 3.2 mm.</li><li>Board mass: 9 g.</li><li>Operating temperature range: -5..+65 \xBAC.</li><li>Input voltage: 4.8..5.5 V.</li></ul><h3 id="key-features" tabindex="-1"><a class="header-anchor" href="#key-features" aria-hidden="true">#</a> Key features</h3><ul><li>Main System-on-Chip: <em>STM32F427VIT6</em>.</li><li>FRAM chip: <em>FM25V02A</em></li><li>Built-in sensors: <ul><li><em>MPU9250</em> 9DOF accelerometer/gyroscope/magnetometer.</li><li><em>MS5607</em> barometer.</li></ul></li></ul><h3 id="ports" tabindex="-1"><a class="header-anchor" href="#ports" aria-hidden="true">#</a> Ports</h3><ul><li><em>TELEM 1</em> (JST-GH 4 pin) \u2013 telemetry port 1, UART.</li><li><em>TELEM 2</em> (JST-GH 4 pin) \u2013 telemetry port 2, UART.</li><li><em>GPS</em> (JST-GH 6 pin) \u2013 GNSS (UART) and external compass (I2C) port.</li><li><em>I2C</em> (JST-GH 4 pin) \u2013 I2C port for supported devices (shares lanes with <em>GPS</em> port).</li><li><em>PWR</em> (JST-GH 6 pin) \u2013 port for PDB connection (COEX PDB or compatible), with two power lanes, two ground lanes, and voltage and current sensor inputs.</li><li><em>RC IN</em> (JST-GH 4 pin) \u2013 RC input port with RSSI pin. Supports PPM and S.BUS protocols.</li><li>Micro USB port for PC connection (USB 2.0/1.1).</li><li>MicroSD slot (supports up to 32gb microSD cards).</li><li>6 servo outputs for ESCs and other peripherals.</li></ul><h3 id="port-pinouts" tabindex="-1"><a class="header-anchor" href="#port-pinouts" aria-hidden="true">#</a> Port pinouts</h3><img src="'+c+'" width="400" class="zoom"><img src="'+m+'" width="400" class="zoom"><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>On rev. 1.0 boards <em>RC IN</em> port and microSD slot are switched. Pinout for the <em>RC IN</em> port is the same on these boards.</p></div><h3 id="mounting-suggestions" tabindex="-1"><a class="header-anchor" href="#mounting-suggestions" aria-hidden="true">#</a> Mounting suggestions</h3><p><strong>Important</strong>: The board is meant to be installed with a non-standard orientation (roll 180\xBA, yaw 90\xBA) on the Clover airframe. Therefore, the <code>SENS_BOARD_ROT</code> PX4 parameter should be set to <code>ROLL 180, YAW 90</code>.</p><h3 id="usage-notes" tabindex="-1"><a class="header-anchor" href="#usage-notes" aria-hidden="true">#</a> Usage notes</h3><p>In order to reduce magnetic interference from the PDB and power cables you should mount the FCU as far away from these parts as possible. You should have at least 15 mm clearance from high-power parts.</p><p>You may want to disable internal compass if you&#39;re using an external GNSS+compass module.</p><p>If your drone does not have a protective cover for the FCU, you should place a piece of foam over the barometer.</p><p>The FCU has power passthrough from the <em>PWR</em> input to the servo rail. Supplying additional power to the servo rail is not recommended if the <em>PWR</em> input is used. Powering the FCU from USB and <em>PWR</em>/<em>AUX</em> inputs is acceptable.</p><h3 id="board-specifics" tabindex="-1"><a class="header-anchor" href="#board-specifics" aria-hidden="true">#</a> Board specifics</h3><p>The board utilizes low-noise DC-DC converters, voltage inputs have LC and ferrite filters.</p><h2 id="revision-1-2" tabindex="-1"><a class="header-anchor" href="#revision-1-2" aria-hidden="true">#</a> Revision 1.2</h2><h3 id="innovations" tabindex="-1"><a class="header-anchor" href="#innovations" aria-hidden="true">#</a> Innovations</h3><ul><li>Replaced USB Micro-B connector with USB Type-C connector.</li><li>Changed the slot for microSD cards to a deeper one.</li><li>Changed pin assignments on the I2C connector.</li><li>Added ferrite filters in the power circuit.</li></ul><h3 id="port-pinouts-1" tabindex="-1"><a class="header-anchor" href="#port-pinouts-1" aria-hidden="true">#</a> Port pinouts</h3><img src="'+d+'" width="400" class="zoom"><img src="'+p+'" width="400" class="zoom">',26);function E(M,D){const t=a("ExternalLinkIcon");return s(),n(l,null,[f,e("p",null,[_,g,x,e("a",C,[S,r(t)]),b,v,P]),e("div",w,[T,e("p",null,[y,e("a",B,[I,r(t)]),R])]),U],64)}var A=i(u,[["render",E],["__file","coex_pix.html.vue"]]);export{A as default};
