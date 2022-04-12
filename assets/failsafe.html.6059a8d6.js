import{_ as a,r as i,o as s,c as n,a as e,b as l,F as r,d as t,e as c}from"./app.4f6a4bec.js";import{_ as f}from"./qgc-failsafe.3e890c5f.js";const m={},h=e("h1",{id:"failsafe-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#failsafe-configuration","aria-hidden":"true"},"#"),t(" Failsafe configuration")],-1),d=t("Main article is available at "),_={href:"https://docs.px4.io/master/en/config/safety.html",target:"_blank",rel:"noopener noreferrer"},u=t("https://docs.px4.io/master/en/config/safety.html"),p=t("."),g=c('<p>The <em>Safety</em> panel allows you to configure actions that should be performed when a failsafe is triggered. You should at the very least configure the RC Loss failsafe, which is triggered when the RC transmitter link is lost:</p><ol><li>In QGroundControl software, go to the <em>Vehicle Setup</em> panel and choose the <em>Safety</em> menu.</li><li>Select one of the following actions in the <em>RC Loss Failsafe Trigger</em> option: <ul><li><em>Land mode</em> \u2013 transition to automatic land mode;</li><li><em>Terminate</em> \u2013 set all outputs to their failsafe values.</li></ul></li><li>Set the timeout value before RC Loss triggers in the <em>RC Loss Timeout</em> field. We recommend setting it to 2 s.</li></ol><img src="'+f+'" alt="QGroundControl failsafe" class="zoom">',3);function x(C,v){const o=i("ExternalLinkIcon");return s(),n(r,null,[h,e("p",null,[d,e("a",_,[u,l(o)]),p]),g],64)}var k=a(m,[["render",x],["__file","failsafe.html.vue"]]);export{k as default};