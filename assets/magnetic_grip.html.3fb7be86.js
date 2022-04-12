import{_ as t,r as e,o as p,c as o,a as c,b as i,w as l,F as r,e as s,d as n}from"./app.4f6a4bec.js";import{_ as u,a as k,b as d,c as h,d as g,e as m,f,g as b,h as w,i as _}from"./magnet_arduino2.e1d83b50.js";const y={},v=s('<h1 id="assembling-and-setting-up-the-electromagnetic-gripper" tabindex="-1"><a class="header-anchor" href="#assembling-and-setting-up-the-electromagnetic-gripper" aria-hidden="true">#</a> Assembling and setting up the electromagnetic gripper</h1><p>The magnetic gripper can be assembled in various ways according to the wiring diagram.</p><img src="'+u+'" width="300" class="zoom border center"><p>The following is an example of assembling an electromagnetic capture circuit on a breadboard.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>It is recommended to lay the wiring between the elements on the back side of the board (in the following images, the wiring is done over the diagram for illustrative purpose).</p></div><ol><li><p>Place the Schottky diode, 10K resistor, and transistor on the soldering board.</p><img src="'+k+'" width="300" class="zoom border center"></li><li><p>Solder the contacts on the other side of the board and bite off the remaining element legs.</p></li><li><p>Connect the pins of the resistor and the two outer legs of the transistor.</p><img src="'+d+'" width="300" class="zoom border center"></li><li><p>Connect the center leg of the transistor and the leg of the Schottky diode (opposite to the gray marking strip).</p><img src="'+h+'" width="300" class="zoom border center"></li><li><p>Cut the required amount of magnetic grab wire and solder it to the pins of the Schottky diode.</p><img src="'+g+'" width="300" class="zoom border center"></li><li><p>Solder the <em>Dupont</em> - male wires to the transistor and diode leg (red, black wires), and the <em>Dupont</em> - fmale wire to the opposite transistor leg (white wire).</p><img src="'+m+'" width="300" class="zoom border center"></li></ol><h2 id="checking-the-operation-of-the-electromagnetic-gripper" tabindex="-1"><a class="header-anchor" href="#checking-the-operation-of-the-electromagnetic-gripper" aria-hidden="true">#</a> Checking the operation of the electromagnetic gripper</h2><p>In order to check the operation of the gripper, apply a voltage of 5V to the signal wire. You can use the <em>Dupont</em> dad-dad wire for that.</p><img src="'+f+'" width="300" class="zoom border center"><p>After applying voltage, the magnet should turn on.</p><h2 id="connecting-to-raspberry-pi" tabindex="-1"><a class="header-anchor" href="#connecting-to-raspberry-pi" aria-hidden="true">#</a> Connecting to Raspberry Pi</h2><p>Connect the magnetic gripper to a Raspberry Pi for software activation.</p><img src="'+b+'" width="300" class="zoom border center">',13),x=n("An example of the code activating the magnetic gripper can be found "),I=n("here"),N=n("."),P=s('<h2 id="connecting-to-arduino" tabindex="-1"><a class="header-anchor" href="#connecting-to-arduino" aria-hidden="true">#</a> Connecting to Arduino</h2><p>Connect the gripper to the Arduino Nano board in order to control it manually.</p><p>It is convenient to place it on the same soldering board \u2014 insert it into the appropriate holes and solder it from the back to the board.</p><img src="'+w+'" width="300" class="zoom border center"><p>Then connect the signal output of the circuit to the selected port and solder the <em>Dupont</em> female wire to the selected signal port on the board.</p><img src="'+_+`" width="300" class="zoom border center"><h2 id="installation-of-electromagnetic-gripper" tabindex="-1"><a class="header-anchor" href="#installation-of-electromagnetic-gripper" aria-hidden="true">#</a> Installation of electromagnetic gripper</h2><ol><li>Install an electromagnet into the center hole on the gripper deck.</li><li>Use a zip tie to pull the assembled circuit to the back of the deck.</li><li>Plug the Arduino <em>D11</em> signal pin into one of the <em>AUX</em> pins on the flight controller.</li><li>Plug the power wire of the electromagnetic gripper to JST 5V.</li></ol><h2 id="setting-up-electromagnetic-gripper" tabindex="-1"><a class="header-anchor" href="#setting-up-electromagnetic-gripper" aria-hidden="true">#</a> Setting up electromagnetic gripper</h2><p>To control the magnet through Arduino Nano, use the following code:</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> INPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">int</span> duration <span class="token operator">=</span> <span class="token function">pulseIn</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> HIGH<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">digitalWrite</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">digitalWrite</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>To monitor the status of the electromagnetic gripper, you can connect the <em>ws281x</em> LED strip (included to Clover kit). Connect it to power +5v \u2013 5v, ground GND \u2013 GND, and signal wire DIN \u2013 Arduino D12.</p><p>To control the magnet and monitor it using the LED strip, use the following code:</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Adafruit_NeoPixel.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NUMPIXELS</span> <span class="token expression"><span class="token number">72</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PIN</span> <span class="token expression"><span class="token number">12</span></span></span>
<span class="token keyword">int</span> pin <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> led <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>

<span class="token keyword">unsigned</span> <span class="token keyword">long</span> duration<span class="token punctuation">;</span>
Adafruit_NeoPixel <span class="token function">strip</span> <span class="token punctuation">(</span>NUMPIXELS<span class="token punctuation">,</span> PIN<span class="token punctuation">,</span> NEO_GRB <span class="token operator">+</span> NEO_KHZ800<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  strip<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  strip<span class="token punctuation">.</span><span class="token function">setBrightness</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token number">9600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>pin<span class="token punctuation">,</span> INPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>led<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  duration <span class="token operator">=</span> <span class="token function">pulseIn</span><span class="token punctuation">(</span>pin<span class="token punctuation">,</span> HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>duration <span class="token operator">&gt;=</span> <span class="token number">1500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">digitalWrite</span><span class="token punctuation">(</span>led<span class="token punctuation">,</span> HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> NUMPIXELS<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      strip<span class="token punctuation">.</span><span class="token function">setPixelColor</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> strip<span class="token punctuation">.</span><span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      strip<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">digitalWrite</span><span class="token punctuation">(</span>led<span class="token punctuation">,</span> LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> NUMPIXELS<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      strip<span class="token punctuation">.</span><span class="token function">setPixelColor</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> strip<span class="token punctuation">.</span><span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      strip<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14);function C(T,S){const a=e("RouterLink");return p(),o(r,null,[v,c("p",null,[x,i(a,{to:"/en/gpio.html#connecting-an-electromagnet"},{default:l(()=>[I]),_:1}),N]),P],64)}var A=t(y,[["render",C],["__file","magnetic_grip.html.vue"]]);export{A as default};