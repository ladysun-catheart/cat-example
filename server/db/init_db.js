// Constants
const DB_NEKO = 'neko'
const COL_CAT = 'cat'
const COL_CONTACT = 'contact'
const PROTOCOL = 'mongodb'
const HOST = '127.0.0.1'
const PORT = '9010'

// Conection
const conn = new Mongo(`${PROTOCOL}://${HOST}:${PORT}`)

// Create DB
const nekoDb = conn.getDB(DB_NEKO)
nekoDb.createCollection(COL_CAT)
nekoDb.createCollection(COL_CONTACT)


