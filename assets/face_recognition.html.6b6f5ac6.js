import{_ as c,r as o,o as i,c as r,a,b as s,w as l,F as u,e as t,d as n}from"./app.4f6a4bec.js";import{_ as d}from"./screen.01982cb4.js";import{_ as k,a as h,b as g,c as m,d as _,e as f}from"./tim_calib.4a8c7d2a.js";const y={},b=t('<h1 id="face-recognition-system" tabindex="-1"><a class="header-anchor" href="#face-recognition-system" aria-hidden="true">#</a> Face recognition system</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Recently, face recognition systems have been getting a wider use, the application scope of this technology is really expansive: from regular selfie drones to police drones. Everywhere it is being integrated into various devices. The recognition process itself is really fascinating, and that&#39;s what inspired me to create a project associated with it. The purpose of my internship project was to create a simple open source system for face recognition with a Clover quadcopter. The program takes images from the quadcopter&#39;s camera and processes it on a PC. Therefore, all other instructions are executed on a PC.</p><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h2>',4),w=n("The first task was finding a recognition algorithm. As a solution to the problem, "),v={href:"https://github.com/ageitgey/face_recognition",target:"_blank",rel:"noopener noreferrer"},x=n("a ready API for Python"),E=n(" was chosen. This API combines several advantages: recognition speed and accuracy, and ease of use."),I=t(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>First, you have to install all the necessary libraries:</p><div class="language-text ext-text"><pre class="language-text"><code>pip install face_recognition
pip install opencv-python
</code></pre></div><p>Then download the script from the repository:</p><div class="language-text ext-text"><pre class="language-text"><code>git clone https://github.com/mmkuznecov/face_recognition_from_clever.git
</code></pre></div><h2 id="code-explanation" tabindex="-1"><a class="header-anchor" href="#code-explanation" aria-hidden="true">#</a> Code explanation</h2><p>Enable libraries:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> face_recognition
<span class="token keyword">import</span> cv2
<span class="token keyword">import</span> os
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
</code></pre></div><p><em><strong>This part of the code is intended for Python 3. In Python 2.7, enable urllib2 instead of urllib:</strong></em></p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> urllib2
</code></pre></div><p>Create a list of encodings for images and a list of names:</p><div class="language-python ext-py"><pre class="language-python"><code>faces_images<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token string">&#39;faces/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    faces_images<span class="token punctuation">.</span>append<span class="token punctuation">(</span>face_recognition<span class="token punctuation">.</span>load_image_file<span class="token punctuation">(</span><span class="token string">&#39;faces/&#39;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
known_face_encodings<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> faces_images<span class="token punctuation">:</span>
    known_face_encodings<span class="token punctuation">.</span>append<span class="token punctuation">(</span>face_recognition<span class="token punctuation">.</span>face_encodings<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
known_face_names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>url
<span class="token keyword">for</span> i <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token string">&#39;faces/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    i<span class="token operator">=</span>i<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    known_face_names<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre></div><p><em><strong>Addition: all images are stored in folder faces in format name.jpg</strong></em></p><img src="`+d+'" width="50%"><img src="'+k+'" width="30%"><img src="'+h+`" width="30%"><p>Initialize some variables:</p><div class="language-python ext-py"><pre class="language-python"><code>face_locations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
face_encodings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
face_names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
process_this_frame <span class="token operator">=</span> <span class="token boolean">True</span>
</code></pre></div><p>Get the image from the server, and convert it to format cv2:</p><div class="language-python ext-py"><pre class="language-python"><code>req <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span><span class="token string">&#39;http://192.168.11.1:8080/snapshot?topic=/main_camera/image_raw&#39;</span><span class="token punctuation">)</span>
arr <span class="token operator">=</span> np<span class="token punctuation">.</span>asarray<span class="token punctuation">(</span><span class="token builtin">bytearray</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>np<span class="token punctuation">.</span>uint8<span class="token punctuation">)</span>
frame <span class="token operator">=</span> cv2<span class="token punctuation">.</span>imdecode<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><p><em><strong>For Python 2.7:</strong></em></p><div class="language-python ext-py"><pre class="language-python"><code>req <span class="token operator">=</span> urllib2<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span><span class="token string">&#39;http://192.168.11.1:8080/snapshot?topic=/main_camera/image_raw&#39;</span><span class="token punctuation">)</span>
arr <span class="token operator">=</span> np<span class="token punctuation">.</span>asarray<span class="token punctuation">(</span><span class="token builtin">bytearray</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>np<span class="token punctuation">.</span>uint8<span class="token punctuation">)</span>
frame <span class="token operator">=</span> cv2<span class="token punctuation">.</span>imdecode<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div>`,22),C=n("Further explanation of the code is available at GitHub of the used API in the comments to "),T={href:"https://github.com/ageitgey/face_recognition/blob/master/examples/facerec_from_webcam_faster.py",target:"_blank",rel:"noopener noreferrer"},q=n("the next script"),F=t(`<h2 id="using" tabindex="-1"><a class="header-anchor" href="#using" aria-hidden="true">#</a> Using</h2><p>It is enough to connect to &quot;Clover&quot; via Wi-Fi and check whether the video stream from the camera is working correctly.</p><p>Then just run the script:</p><div class="language-text ext-text"><pre class="language-text"><code>python recog.py
</code></pre></div><p>And the output:</p><img src="`+g+'" width="50%"><img src="'+m+`" width="50%"><h2 id="possible-difficulties" tabindex="-1"><a class="header-anchor" href="#possible-difficulties" aria-hidden="true">#</a> Possible difficulties</h2><p>When the script is started, the following error may pop up:</p><div class="language-python ext-py"><pre class="language-python"><code>    known_face_encodings<span class="token punctuation">.</span>append<span class="token punctuation">(</span>face_recognition<span class="token punctuation">.</span>face_encodings<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
IndexError<span class="token punctuation">:</span> <span class="token builtin">list</span> index out of <span class="token builtin">range</span>
</code></pre></div><p>In this case, try to edit the images in folder faces, perhaps the program cannot recognize faces in the images due to poor quality.</p><h2 id="using-the-calibration" tabindex="-1"><a class="header-anchor" href="#using-the-calibration" aria-hidden="true">#</a> Using the calibration</h2>`,12),z=n("To improve recognition accuracy, you can use camera calibration. The calibration module may be installed using "),A={href:"https://github.com/tinderad/clever_cam_calibration",target:"_blank",rel:"noopener noreferrer"},P=n("a special package"),L=n(". Instructions for installation and use are available in the "),V=n("camera calibration article"),R=n(". The program that uses the calibration package is named recog_undist.py"),H=t(`<p><strong>Code brief explanation:</strong></p><p>Enable installed package:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> clever_cam_calibration<span class="token punctuation">.</span>clevercamcalib <span class="token keyword">as</span> ccc
</code></pre></div><p>Add the following lines:</p><div class="language-python ext-py"><pre class="language-python"><code>height_or<span class="token punctuation">,</span> width_or<span class="token punctuation">,</span> depth_or <span class="token operator">=</span> frame<span class="token punctuation">.</span>shape
</code></pre></div><p>This way, you will obtain information about image size, where height_or is the height of the initial image in pixels, and width_or is the width of the initial image. Then correct distortions in the initial image, and get its parameters:</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">if</span> height_or<span class="token operator">==</span><span class="token number">240</span> <span class="token keyword">and</span> width_or<span class="token operator">==</span><span class="token number">320</span><span class="token punctuation">:</span>
    frame<span class="token operator">=</span>ccc<span class="token punctuation">.</span>get_undistorted_image<span class="token punctuation">(</span>frame<span class="token punctuation">,</span>ccc<span class="token punctuation">.</span>CLEVER_FISHEYE_CAM_320<span class="token punctuation">)</span>
<span class="token keyword">elif</span> height_or<span class="token operator">==</span><span class="token number">480</span> <span class="token keyword">and</span> width_or<span class="token operator">==</span><span class="token number">640</span><span class="token punctuation">:</span>
    frame<span class="token operator">=</span>ccc<span class="token punctuation">.</span>get_undistorted_image<span class="token punctuation">(</span>frame<span class="token punctuation">,</span>ccc<span class="token punctuation">.</span>CLEVER_FISHEYE_CAM_640<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    frame<span class="token operator">=</span>ccc<span class="token punctuation">.</span>get_undistorted_image<span class="token punctuation">(</span>frame<span class="token punctuation">,</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Input your path to the .yaml file: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
height_unz<span class="token punctuation">,</span> width_unz<span class="token punctuation">,</span> depth_unz <span class="token operator">=</span> frame<span class="token punctuation">.</span>shape
</code></pre></div><p><em><strong>In this case, we pass argument ccc.CLEVER_FISHEYE_CAM_640, since the resolution of the image in this example, is 640x480; you can also use ccc.CLEVER_FISHEYE_CAM_320 for resolution 320x240, otherwise you will have to send the path to the .yaml calibration file as the second argument.</strong></em></p><p>Finally, return the image to its initial size:</p><div class="language-python ext-py"><pre class="language-python"><code>frame<span class="token operator">=</span>cv2<span class="token punctuation">.</span>resize<span class="token punctuation">(</span>frame<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fx<span class="token operator">=</span><span class="token punctuation">(</span>width_or<span class="token operator">/</span>width_unz<span class="token punctuation">)</span><span class="token punctuation">,</span>fy<span class="token operator">=</span><span class="token punctuation">(</span>height_or<span class="token operator">/</span>height_unz<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>This was, you can significantly improve recognition accuracy since the image processed will not be so badly distorted.</p><img src="`+_+'" width="50%"><img src="'+f+'" width="50%">',13);function S(j,M){const e=o("ExternalLinkIcon"),p=o("RouterLink");return i(),r(u,null,[b,a("p",null,[w,a("a",v,[x,s(e)]),E]),I,a("p",null,[C,a("a",T,[q,s(e)])]),F,a("p",null,[z,a("a",A,[P,s(e)]),L,s(p,{to:"/en/camera_calibration.html"},{default:l(()=>[V]),_:1}),R]),H],64)}var G=c(y,[["render",S],["__file","face_recognition.html.vue"]]);export{G as default};