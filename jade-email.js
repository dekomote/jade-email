var fs = Npm.require('fs');
var path = Npm.require('path');
var jade = Npm.require('jade');
var juice = Npm.require('juice');
var jadeOpts = {pretty:true, compileDebug:false};

EmailTemplate = {
   load: function(templatesPath, done){
      var files = fs.readdirSync(templatesPath);
      var templates = _.filter(files, function(file){
         return (path.extname(file) === ".jade")
      });

      _.each(templates, function(item){
         var template = item.replace('.jade', '');
         if(template === 'load'){
            throw new Error('Email template cannot be named "load"');
         }
         var func = jade.compileFile(path.join(templatesPath, item), jadeOpts);

         EmailTemplate[template] = function(options){
            options = options || {};
            var html = func.call(this, options.data);
            if(options.inlineCss){
               var inliner = Meteor.wrapAsync(juice.juiceContent)
               html = inliner(html, {url:'file://'+templatesPath});
            }
            return html;
         }
      });
      return this;
   }
};

