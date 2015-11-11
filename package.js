Package.describe({
  name: 'tstikvoort:preloadimage',
  version: '0.0.15',
  // Brief, one-line summary of the package.
  summary: 'A supersimple imagepreloader',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tstikvoort/preloadImage',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('reactive-var');
  api.addFiles('preloadimage.js');
  api.export('PreloadImage', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tstikvoort:preloadimage');
  api.addFiles('preloadimage-tests.js');
  api.export('PreloadImage', ['client', 'server']);
});
