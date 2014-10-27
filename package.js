Package.describe({
  name: 'erkkaha:jade-email',
  summary: 'Server side email templates with jade',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});
Npm.depends({jade: "1.7.0"});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use(['underscore'], 'server');
  api.addFiles('jade-email.js');
  api.export('EmailTemplate', ['server'])
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('erkkaha:jade-email');
  api.addFiles('jade-email-tests.js');
});


