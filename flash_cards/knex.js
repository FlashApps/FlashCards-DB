require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.LOCAL_HOST
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
