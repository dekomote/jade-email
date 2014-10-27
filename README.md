#Meteor server side email templates with jade 


####Installation


####Usage

``` javascript
   // Server startup
   Meteor.startup(function(){
      var path = 'path to your template folder'
      EmailTemplate.load(path)
   });

   //

   Email.send({
      to: to,
      from: from,
      subject: subject,
      html: EmailTemplate.foo({title:'bar'})
    });
```