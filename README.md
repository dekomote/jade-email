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