Package.describe({
  name: 'erkkaha:jade-email',
  summary: 'Server side email templates with jade',
  version: '1.0.0',
  git: 'https://github.com/erkkaha/jade-email.git'
});
Npm.depends({jade: "1.7.0", juice: "0.5.0"});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use(['underscore'], 'server');
  api.addFiles('jade-email.js', 'server');
  api.export('EmailTemplate', ['server'])
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('erkkaha:jade-email');
   
   api.addFiles(["tests/test.jade", "tests/test.css", "tests/result.html", "tests/result-inline.html"], 'server', {isAsset: true});
  api.addFiles('tests/jade-email-tests.js', 'server');
});


