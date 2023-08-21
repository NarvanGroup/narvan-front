const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'fa', 'ch'],
    defaultLocale: 'fa',
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
