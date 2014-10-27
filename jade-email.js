var fs = Npm.require('fs');
var path = Npm.require('path');
var jade = Meteor.npmRequire('jade');

EmailTemplate = {
   load: function(templatesPath){
      var templates = fs.readdirSync(templatesPath);
      _.each(templates, function(item){
         var template = item.replace('.jade', '');
         if(template === 'load'){
            throw new Error('Email template cannot be named "load"');
         }
         EmailTemplate[template] = jade.compileFile(path.join(templatesPath, item));
      });
      return this;
   }
};

