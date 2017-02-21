'use strict';

var ghpages = require('gh-pages');

ghpages.publish('./gh-pages', console.error.bind(console));
