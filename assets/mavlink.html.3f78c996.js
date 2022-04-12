import{_ as i,r as s,o as c,c as l,a as e,b as d,w as a,F as m,d as t,e as r}from"./app.4f6a4bec.js";const h={},f=e("h1",{id:"mavlink",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mavlink","aria-hidden":"true"},"#"),t(" MAVLink")],-1),p=t("Basic documentation: "),u={href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"},g=t("https://mavlink.io/en/"),_=t("."),b=e("p",null,"MAVLink is a communication protocol between autonomous aircraft and vehicle systems (drones, planes, vehicles). The MAVLink protocol lies at the base of interaction between Pixhawk and Raspberry Pi.",-1),y=t("Clover contains two wrappers for this protocol: "),k=t("MAVROS"),A=t(" and "),v=t("simple_offboard"),L=t("."),x=t("The code for sending an arbitrary MAVLink message may be found in "),M=t("the examples"),I=t("."),D=r('<h2 id="the-main-concerts" tabindex="-1"><a class="header-anchor" href="#the-main-concerts" aria-hidden="true">#</a> The main concerts</h2><h3 id="communication-channel" tabindex="-1"><a class="header-anchor" href="#communication-channel" aria-hidden="true">#</a> Communication channel</h3><p>The MAVLink protocol may be used on top of the following communication channels:</p><ul><li>connection in series (UART, USB, etc.);</li><li>UDP (Wi-Fi, Ethernet, 3G, LTE);</li><li>TCP (Wi-Fi, Ethernet, 3G, LTE).</li></ul><h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h3><p>A MAVLink message is an individual &quot;portion&quot; of data transmitted between devices. An individual MAVLink message contains information about the state of the drone (or another device) or a command for the drone.</p><p>Examples of MAVLink messages:</p><ul><li><code>ATTITUDE</code>, <code>ATTITUDE_QUATERNION</code> \u2013 the quadcopter orientation in the space;</li><li><code>LOCAL_POSITION_NED</code> \u2013 local position of the quadcopter;</li><li><code>GLOBAL_POSITION_INT</code> \u2013 global position of the quadcopter (latitude/longitude/altitude);</li><li><code>COMMAND_LONG</code> \u2013 a command to the quadcopter (take off, land, toggle modes, etc).</li></ul>',8),T=t("A complete list of MAVLink messages is available in "),V={href:"https://mavlink.io/en/messages/common.html",target:"_blank",rel:"noopener noreferrer"},N=t("MAVLink documentation"),w=t("."),O=r('<h3 id="system-system-component" tabindex="-1"><a class="header-anchor" href="#system-system-component" aria-hidden="true">#</a> System, system component</h3><p>Each device (a drone, a base station, etc.) has an ID in the MAVLink network. In PX4 MAVLink, ID is changed using parameter <code>MAV_SYS_ID</code>. Each MAVLink message contains a field with the ID of the originating system. Besides, some messages (for example, <code>COMMAND_LONG</code>) also contain the ID of the target system.</p><p>In addition to IDs of the systems, the messages may contain IDs of the originating component and the target component. Examples of the system components: a flight controller, an external camera, a controlling onboard computer (Raspberry Pi in case of Clover), etc.</p><h3 id="an-example-of-a-package" tabindex="-1"><a class="header-anchor" href="#an-example-of-a-package" aria-hidden="true">#</a> An example of a package</h3><p>An example of a MAVLink package structure with message <code>COMMAND_LONG</code>:</p><table><tr><th></th><th>Field</th><th>Length</th><th>Name</th><th>Comment</th></tr><tr><td rowspan="8"><div style="transform:rotate(-90deg);">Header</div></td><td><code>magic</code></td><td>1 byte</td><td>Start tag</td><td>0xFD for MAVLink 2.0</td></tr><tr><td><code>len</code></td><td>1 byte</td><td>Data size</td><td></td></tr><tr><td><code>incompat_flags</code></td><td>1 byte</td><td>Reversely incompatible flags</td><td>Currently unused</td></tr><tr><td><code>compat_flags</code></td><td>1 byte</td><td>Reversely compatible flags</td><td>Currently unused</td></tr><tr><td><code>seq</code></td><td>1 byte</td><td>Message sequence number</td><td></td></tr><tr><td><code>sysid</code></td><td>1 byte</td><td>Originating system ID</td><td></td></tr><tr><td><code>compid</code></td><td>1 byte</td><td>Originating component ID</td><td></td></tr><tr><td><code>msgid</code></td><td>3 bytes</td><td>Message ID</td><td></td></tr><tr style="background:#fffee6;"><td rowspan="11"><div style="transform:rotate(-90deg);">Data (example)</div></td><td><code>target_system</code></td><td>1 byte</td><td>Target system ID</td><td></td></tr><tr style="background:#fffee6;"><td><code>target_component</code></td><td>1 byte</td><td>Target component ID</td><td></td></tr><tr style="background:#fffee6;"><td><code>command</code></td><td>2 bytes</td><td>Command ID</td><td></td></tr><tr style="background:#fffee6;"><td><code>confirmation</code></td><td>1 byte</td><td>Number for confirmation</td><td></td></tr><tr style="background:#fffee6;"><td><code>param1</code></td><td>4 bytes</td><td>Parameter 1</td><td rowspan="7">A single-precision floating point number</td></tr><tr style="background:#fffee6;"><td><code>param2</code></td><td>4 bytes</td><td>Parameter 2</td></tr><tr style="background:#fffee6;"><td><code>param3</code></td><td>4 bytes</td><td>Parameter 3</td></tr><tr style="background:#fffee6;"><td><code>param4</code></td><td>4 bytes</td><td>Parameter 4</td></tr><tr style="background:#fffee6;"><td><code>param5</code></td><td>4 bytes</td><td>Parameter 5</td></tr><tr style="background:#fffee6;"><td><code>param6</code></td><td>4 bytes</td><td>Parameter 6</td></tr><tr style="background:#fffee6;"><td><code>param7</code></td><td>4 bytes</td><td>Parameter 7</td></tr><tr><td></td><td><code>checksum</code></td><td>2 bytes</td><td>Checksum</td><td></td></tr><tr><td></td><td><code>signature</code></td><td>13 bytes</td><td>Signature (optional)</td><td>Allows checking that the package has not been compromised. Usually unused.</td></tr></table><p><span style="background:#fffee6;">Yellow</span> is used for highlighting the data fields(payload). An individual set of such fields exists for every message type.</p>',7);function C(E,P){const n=s("ExternalLinkIcon"),o=s("RouterLink");return c(),l(m,null,[f,e("p",null,[p,e("a",u,[g,d(n)]),_]),b,e("p",null,[y,d(o,{to:"/en/mavros.html"},{default:a(()=>[k]),_:1}),A,d(o,{to:"/en/simple_offboard.html"},{default:a(()=>[v]),_:1}),L]),e("p",null,[x,d(o,{to:"/en/snippets.html#mavlink"},{default:a(()=>[M]),_:1}),I]),D,e("p",null,[T,e("a",V,[N,d(n)]),w]),O],64)}var R=i(h,[["render",C],["__file","mavlink.html.vue"]]);export{R as default};
