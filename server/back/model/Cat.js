const URL = require('url').URL
const mongoose = require('mongoose')

const PATH_DB = 'mongodb://localhost:9010/neko'


const getDbConnection = function() {
  const optsDb = {
    user: 'nekoUser',
    pass: 'nekoUser'
  }
  let conn
  try{
    conn = mongoose.createConnection(PATH_DB, optsDb)
  } catch(err) {
    console.log(err)
  }
  return conn
}

module.exports = getDbConnection()
