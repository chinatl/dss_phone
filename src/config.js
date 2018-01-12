var config = {
  basename: '/dss2',
  apiPrefix: process.env.NODE_ENV === 'development' ? '/': '/api/dss/',
};
module.exports = config;