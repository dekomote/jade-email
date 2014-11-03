var path = Npm.require('path')

Tinytest.add('Template "test" exists', function (test) {
   EmailTemplate.load(path.resolve('./assets/packages/local-test_erkkaha_jade-email/tests'));
   test.isNotNull(EmailTemplate.test);
});
Tinytest.add('Template "test" is rendered correctly', function (test) {
   var options = {
      data: {title:'foo', body:'bar'},
      inlineCss:false
   }
   var email = EmailTemplate.test(options)
   test.isNotNull(email);
   email = email.replace(/( |\n)/g,'');
   var compare = Assets.getText('tests/result.html').replace(/( |\n)/g,'');
   test.equal(email, compare);
});
Tinytest.add('Template "test" is rendered correctly with inline css', function (test) {
   var options = {
      data: {title:'foo', body:'bar'},
      inlineCss:true
   }
   var email = EmailTemplate.test(options);
   test.isNotNull(email);
   email = email.replace(/( |\n)/g,'');
   var compare = Assets.getText('tests/result-inline.html').replace(/( |\n)/g,'');
   test.equal(email, compare);
});