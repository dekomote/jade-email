#Meteor server side email templates with jade with multiarch build

This is a fork from https://github.com/erkkaha/jade-email with builds made
for all arch. The original author hasn't built it on anything except linux 32bit.


####Installation

meteor add dekomote:jade-email

####Usage

``` javascript
   // Server startup
   Meteor.startup(function(){
      var path = 'path to your template folder containing foo.jade'
      EmailTemplate.load(path)
   });

   var emailOptions = {
      data:{
         title: 'bar'
      },
      inlineCss: true
   }

   Email.send({
      to: to,
      from: from,
      subject: subject,
      html: EmailTemplate.foo(emailOptions)
    });
```

####Templates

A good place for templates is in private folder under your app directory. 
For instance test.jade and test.css in app/private/templates would be mean:

``` javascript
var path = Npm.require('path')
// Server startup
Meteor.startup(function(){
   EmailTemplate.load(path.resolve('./assets/app/templates'));
   console.log(EmailTemplate.test({title:'foo'}));
});
```
