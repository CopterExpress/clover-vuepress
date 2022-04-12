import{_ as s,r,o as l,c,a as t,b as o,w as h,F as d,e as n,d as e}from"./app.4f6a4bec.js";import{_ as m,a as p}from"./qgc-power.95ee25da.js";const u={},_=n('<h1 id="power-setup" tabindex="-1"><a class="header-anchor" href="#power-setup" aria-hidden="true">#</a> Power setup</h1><p>Open the <em>Vehicle Setup</em> tab and select the <em>Power</em> menu.</p><h2 id="calibrating-the-power-sensor" tabindex="-1"><a class="header-anchor" href="#calibrating-the-power-sensor" aria-hidden="true">#</a> Calibrating the power sensor</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Power sensor calibration should be done with the battery pack connected to the drone.</p></div><ol><li>In QGroundControl software, go the <em>Vehicle Setup</em> panel and choose the <em>Power</em> menu.</li><li>Set the <em>Number of cells</em> parameter according to the number of cells in your battery (<em>3</em> for the Clover 4 drone).</li><li>Calculate the voltage divider: <ul><li>Measure voltage across the battery (you may use a battery voltage tester for that).</li><li>Press the <em>Calculate</em> button next to the <em>Voltage divider</em> label.</li><li>Put the battery voltage into the prompt and click <em>Calculate</em>.</li><li>Press <em>Close</em> to save the calculated value.</li></ul></li></ol><p>If there is no voltage indicator or manual calibration is not possible, set the average value of the voltage divider for the Clover 4 kit (<em>Voltage divider</em> = 11).</p><img src="'+m+'" class="zoom">',7),b=e("Further reading: "),f={href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"},g=e("https://docs.qgroundcontrol.com/en/SetupView/Power.html"),v=e("."),w=n('<h2 id="esc-calibration" tabindex="-1"><a class="header-anchor" href="#esc-calibration" aria-hidden="true">#</a> ESC calibration</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>Never attempt ESC calibration with propellers on!</strong> In some cases the motors will start spinning with maximum speed.</p></div><ol><li>Make sure the battery is disconnected and the propellers are not mounted.</li><li>Press <em>Calibrate</em>.</li><li>Connect the battery when prompted.</li><li>Wait for the <em>Calibration complete</em>.</li></ol><img src="'+p+'" class="zoom">',4),x=e("Further reading: "),C={href:"https://docs.px4.io/master/en/advanced_config/esc_calibration.html",target:"_blank",rel:"noopener noreferrer"},k=e("https://docs.px4.io/master/en/advanced_config/esc_calibration.html"),P=e("."),y=t("strong",null,"Next",-1),V=e(": "),N=e("Failsafe configuration");function S(I,E){const a=r("ExternalLinkIcon"),i=r("RouterLink");return l(),c(d,null,[_,t("p",null,[b,t("a",f,[g,o(a)]),v]),w,t("p",null,[x,t("a",C,[k,o(a)]),P]),t("p",null,[y,V,o(i,{to:"/en/failsafe.html"},{default:h(()=>[N]),_:1})])],64)}var B=s(u,[["render",S],["__file","power.html.vue"]]);export{B as default};
