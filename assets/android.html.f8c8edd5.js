import{_ as a,r as s,o as r,c as i,a as e,b as n,F as l,d as t,e as d}from"./app.4f6a4bec.js";import{_ as c}from"./IMG_4397.2e68755b.js";const h={},p=e("h1",{id:"an-android-transmitter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#an-android-transmitter","aria-hidden":"true"},"#"),t(" An Android transmitter")],-1),u=t("As early as in the frosty January 2018, all owners of Apple mobile devices got a nice Wi-Fi piloting app for iOS. And now, a year later, such an application is available for another operating system. The latest version may be downloaded "),g={href:"https://vk.com/away.php?to=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dexpress.copter.cleverrc&cc_key=",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"here",-1),_=t("."),f=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),t(" Introduction")],-1),D=t("In this article, I will tell you how to write your own or modify an existing transmitter for Android yourself. We will use the popular language "),w=e("em",null,"Kotlin",-1),y=t(", and we will use "),B=e("em",null,"Android Studio",-1),b=t(" for an IDE. For those who never used it, I recommend reading the following "),v={href:"https://www.google.com/search?ei=xQxDXMH0C8OOmgW4mYigDQ&q=%D0%A7%D1%82%D0%BE+%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C+%D0%B5%D1%81%D0%BB%D0%B8+%D1%8F+%D0%BD%D0%B5+%D1%83%D0%BC%D0%B5%D1%8E+%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C+%D0%BF%D0%BE%D0%B4+%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4%3F&oq=%D0%A7%D1%82%D0%BE+%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C+%D0%B5%D1%81%D0%BB%D0%B8+%D1%8F+%D0%BD%D0%B5+%D1%83%D0%BC%D0%B5%D1%8E+%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C+%D0%BF%D0%BE%D0%B4+%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4%3F&gs_l=psy-ab.3...4413.17423..17726...9.0..2.442.4577.45j5j1j0j1....2..0....1..gws-wiz.....6..0i71j35i39j0i131j0j0i67j0i131i67j0i22i30j33i22i29i30j33i21j33i160.0bZz-WGxoHY",target:"_blank",rel:"noopener noreferrer"},I=e("em",null,"materials",-1),S=t(". The entire application code can be found "),x={href:"https://github.com/Tennessium/android",target:"_blank",rel:"noopener noreferrer"},E=e("strong",null,"here",-1),A=t(". If you want to immediately get an app to further tuning, run the following command:"),F=e("div",{class:"language-Bash ext-Bash"},[e("pre",{class:"language-Bash"},[e("code",null,`git clone https://github.com/Tennessium/android
`)])],-1),k=e("p",null,"However, to make you fully understand the application, I will tell you about each stage of the project, as if you were building it from scratch.",-1),T=e("h2",{id:"wrapper",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wrapper","aria-hidden":"true"},"#"),t(" Wrapper")],-1),q=t("Let's start with the simplest thing \u2014 the appearance of our application. At "),K={href:"https://github.com/CopterExpress/clover/tree/master/apps/android/app/src/main/assets",target:"_blank",rel:"noopener noreferrer"},j=e("strong",null,"GitHub",-1),L=t(", you can find "),C=e("em",null,"HTML",-1),N=t(", "),V=e("em",null,"CSS",-1),M=t(" and "),W=e("em",null,"JavaScript",-1),O=t(" files, which make up the web page to be used for controlling the copter. To have this page displayed in our application, do the following:"),U=e("li",null,[e("p",null,[t("Create folder "),e("strong",null,"assets"),t(" in the main folder of the app named "),e("strong",null,"app")])],-1),G=t("Add to it all files from "),z={href:"https://github.com/CopterExpress/clover/tree/master/apps/android/app/src/main/assets",target:"_blank",rel:"noopener noreferrer"},H=t("here"),J=d(`<p>If you reached this stage, you already have the web page you want, congratulations! Now we have to display it somehow in the app. To do this, in class <em>activity</em> in method <strong>onCreate</strong>, write the following code:</p><div class="language-Kotlin ext-Kotlin"><pre class="language-Kotlin"><code>main_web.loadUrl(&quot;file:///android_asset/index.html&quot;)
</code></pre></div><p>Where <em>main_web</em> is the ID of your <em>WebView</em>, which is in the <em>xml</em> file of the <em>activity</em> selected by you.</p><p>Unfortunately, the quadcopter transmitter requires the entire screen of the device, while the interface elements of the system interfere with full-fledged use of the program. For this purpose, at the beginning of method <strong>onCreate</strong>, call the following function:</p><div class="language-Kotlin ext-Kotlin"><pre class="language-Kotlin"><code>private fun fullScreenCall() {
	window.setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN)
	if (Build.VERSION.SDK_INT &lt; 19) {
		val v = this.window.decorView
		v.systemUiVisibility = View.GONE
	} else {
		//for higher API versions.
		val decorView = window.decorView
		val uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
		decorView.systemUiVisibility = uiOptions
	}
}
</code></pre></div><p>This feature allows getting rid of the system interface elements. Let&#39;s go ahead.</p><p>This is how the transmitter looks at this stage:</p><img src="`+c+`" width="50%"><p>If you run your application, you will see that the sticks are not functioning. This is due to the fact that <em>JavaScript</em> is disabled in our page. To enable it, write the following code:</p><div class="language-Kotlin ext-Kotlin"><pre class="language-Kotlin"><code>	main_web.settings.apply {
	domStorageEnabled = true
	javaScriptEnabled = true
	loadWithOverviewMode = true
	useWideViewPort = true
	setSupportZoom(false)
}
</code></pre></div><p>This piece of code allows the page to use <em>JavaScript</em> and at the same time prepares for the next stage - <strong>logics</strong>.</p><h2 id="receiving-data-from-the-web-page" tabindex="-1"><a class="header-anchor" href="#receiving-data-from-the-web-page" aria-hidden="true">#</a> Receiving data from the web page</h2><p>To let your phone receive data from the <em>HTML page</em>, create a class for interacting with the web interface</p><div class="language-Kotlin ext-Kotlin"><pre class="language-Kotlin"><code>class WebAppInterface(c: Context) {
	@JavascriptInterface
	public fun postMessage(message: String) {
		val data = JSONObject(message)
		send(&quot;255.255.255.255&quot;, 35602, pack(
		data.getInt(&quot;x&quot;).toShort(),
		data.getInt(&quot;y&quot;).toShort(),
		data.getInt(&quot;z&quot;).toShort(),
		data.getInt(&quot;r&quot;).toShort()))
	}
}
</code></pre></div><p>This class will receive messages from the web page sent by the <em>postMessage</em> where argument <em>message</em> is the message from the page.</p><p>Now we have to link classes <strong>WebAppInterface</strong> and <strong>MainActivity</strong>. For this you have to add just one line to method <strong>onCreate</strong>:</p><div class="language-Kotlin ext-Kotlin"><pre class="language-Kotlin"><code>main_web.addJavascriptInterface(WebAppInterface(this), &quot;appInterface&quot;)
</code></pre></div><h2 id="sending-data-to-the-copter" tabindex="-1"><a class="header-anchor" href="#sending-data-to-the-copter" aria-hidden="true">#</a> Sending data to the copter</h2><p><strong>Important!</strong> For working in Internet in the <em>Android</em> platform, add the following line to tag <em>manifest</em> in file <strong>AndroidManifest.xml</strong>:</p><div class="language-XML ext-XML"><pre class="language-XML"><code>&lt;uses-permission android:name=&quot;android.permission.INTERNET&quot;/&gt;
</code></pre></div><p>It will grant your application access to the Internet, and the ability to send data via <strong>Wi-Fi</strong>. And you will now learn how to do that. Let&#39;s go ahead.</p><p>You have probably noticed function <em>send</em> in class <strong>WebAppInterface</strong>. It is this function that sends data to the copter. Let&#39;s declare it <strong>outside classes</strong>:</p><div class="language-Kotlin ext-Kotlin"><pre class="language-Kotlin"><code>fun send(host: String, port: Int, data: ByteArray, senderPort: Int = 0): Boolean {
	var ret = false
	var socket: DatagramSocket? = null
	try {
		socket = DatagramSocket(senderPort)
		val address = InetAddress.getByName(host)
		val packet = DatagramPacket(data, data.size, address, port)
		socket.send(packet)
		ret = true
	} catch (e: Exception) {
		e.printStackTrace()
	} finally {
		socket?.close()
	}
	return ret
}
</code></pre></div>`,23),P=t("This function sends data via the "),Y={href:"https://www.google.com/search?q=udp+%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB&oq=udp+&aqs=chrome.0.69i59j69i57j35i39j0l3.1434j1j7&sourceid=chrome&ie=UTF-8",target:"_blank",rel:"noopener noreferrer"},R=e("em",null,"user datagram protocol",-1),X=t(" to the copter. The program sends "),Q=e("strong",null,"bytes",-1),Z=t(", so it would be a good idea to declare the function for creating an array of "),$=e("strong",null,"bytes",-1),ee=t(" from four variables:"),te=e("div",{class:"language-Kotlin ext-Kotlin"},[e("pre",{class:"language-Kotlin"},[e("code",null,`fun pack(x: Short, y: Short, z: Short, r: Short): ByteArray {
	val pump_on_buf: ByteBuffer = ByteBuffer.allocate(8)
	pump_on_buf.putShort(r)
	pump_on_buf.putShort(z)
	pump_on_buf.putShort(y)
	pump_on_buf.putShort(x)
	return pump_on_buf.array().reversedArray()
}
`)])],-1),oe=e("h2",{id:"summary",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#summary","aria-hidden":"true"},"#"),t(" Summary")],-1),ne=e("p",null,[t("Now your app has the full functionality of its analog for "),e("strong",null,"iOS"),t(". You can customize it as you wish. For any questions about the app, contact us in Telegram @Tenessinum.")],-1);function ae(se,re){const o=s("ExternalLinkIcon");return r(),i(l,null,[p,e("p",null,[u,e("a",g,[m,n(o)]),_]),f,e("p",null,[D,w,y,B,b,e("a",v,[I,n(o)]),S,e("a",x,[E,n(o)]),A]),F,k,T,e("p",null,[q,e("a",K,[j,n(o)]),L,C,N,V,M,W,O]),e("ol",null,[U,e("li",null,[e("p",null,[G,e("a",z,[H,n(o)])])])]),J,e("p",null,[P,e("a",Y,[R,n(o)]),X,Q,Z,$,ee]),te,oe,ne],64)}var de=a(h,[["render",ae],["__file","android.html.vue"]]);export{de as default};
