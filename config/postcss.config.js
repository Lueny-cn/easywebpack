
'use strict';

module.exports = {
  plugins: [
    require('autoprefixer')({ overrideBrowserslist: ['iOS >= 8', 'Android >= 4.0'] })
  ]
};
