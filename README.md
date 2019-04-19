# PICS
Pics stands for Power2sme Intelligent Chat System. This is a chatbot created for the company power2sme(https://www.power2sme.com). This can be extended or can be customized by anyone to use power2sme chatbot services.

# Install
You can install this package with bower.
<pre>bower install pics</pre>

# Importing in your App
Then add a <script> to your index.html or on whatever page you want to include:
<pre><script src="/bower_components/pics/dist/pics.min.js"></script></pre>

Once you have all the necessary assets installed, add app.pics as a dependency for your app:
<pre>angular.module('myApp', ['app.pics']);</pre>

# Usage
If you followed everything correctly then you will have 'pics-view' directive available for use.
This direcrtive has three attributes if you want to send client information.
1. email-id : email id of a customer
2. sme-id : Any unique id to identify customer
3. phone : 10 digit phone number.
Some Samples are shown below :
<pre>&lt;pics-view email-id="" sme-id="" phone=""&gt;&lt;/pics-view&gt;</pre>
or
<pre>&lt;pics-view email-id="himanshu.shekhar@power2sme.com" sme-id="" phone=""&gt;&lt;/pics-view&gt;</pre>
or
<pre>&lt;pics-view email-id="" sme-id="" phone="{{getContact()}}"&gt;&lt;/pics-view&gt;</pre>

