import{_ as e,e as t}from"./app.4f6a4bec.js";import{_ as n,a as o}from"./TrainerCable_Pinout.dd20d968.js";const r={},i=t('<h1 id="flysky-trainer-mode-settings" tabindex="-1"><a class="header-anchor" href="#flysky-trainer-mode-settings" aria-hidden="true">#</a> FlySky Trainer mode settings</h1><p>The trainer mode is used for teaching students how to fly a drone. In trainer mode the experienced pilot is ready to take control of the drone in case of emergency situation during the flight.</p><p>For that we connect two remote controllers. The first controller (Slave) is for a student and the second (Trainer) is for a teacher.</p><h2 id="wire-pinout" tabindex="-1"><a class="header-anchor" href="#wire-pinout" aria-hidden="true">#</a> Wire pinout</h2><p><img src="'+n+'" alt=""></p><p>To create a link between remote controllers, a connector is used at the back of the case (S-Video). Three contacts in the connector are used for receiving, transmitting information and for ground. The PPM-OUT (transmit) contact must be connected to the PPM-IN (receive) and vice versa. To avoid environmental interference, ground contacts must be interconnected.</p><p>This is how we need to solder the wires to the connector.</p><p><img src="'+o+'" alt=""></p><h2 id="trainer-s-settings" tabindex="-1"><a class="header-anchor" href="#trainer-s-settings" aria-hidden="true">#</a> Trainer\u2019s settings</h2><p>Go to settings (hold OK button). Then to the System setup and look for (Up / Down) Trainer mode.</p><p>To activate mode, the Mode line should be \u2018ON\u2019. Use the Up/Down buttons to change the parameter. To save the parameter, click OK.</p><p>Now select the switch for taking the control:</p><p>Do it in the Trainer mode menu. In the Switch line, select (you can change using Up/Down) any convenient switch (SwA, SwB, SwC, SwD). Trainer now will take control of the drone after toggling the switching.</p><p>To save the settings hold Cancel.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Both teacher\u2019s and student\u2019s remote controllers must be in the same flight mode.</p></div><h2 id="student-s-settings" tabindex="-1"><a class="header-anchor" href="#student-s-settings" aria-hidden="true">#</a> Student\u2019s settings</h2><p>Go to the settings, System setup and select the student mode (Student mode). Then click OK and use Up\\Down to select \u2018Yes\u2019. Hold Cancel to save the settings. If everything is configured correctly, the letter S will appear on the main screen.</p>',17);function s(a,c){return i}var l=e(r,[["render",s],["__file","trainer_mode.html.vue"]]);export{l as default};
