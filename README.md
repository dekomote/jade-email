#Meteor server side email templates with jade 


####Installation

meteor add erkkaha:jade-email

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