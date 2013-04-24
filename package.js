Package.describe({
  summary: "Plivo API Wrapper for Meteor"
});

Npm.depends({ "plivo": "0.1.0" });

Package.on_use(function(api) {
  api.add_files('plivo_npm.js', 'server');
});

