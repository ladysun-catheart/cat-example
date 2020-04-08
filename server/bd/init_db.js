// Constants
const DB_NEKO = 'neko'
const COL_CAT = 'cat'
const PROTOCOL = 'mongodb'
const HOST = '127.0.0.'
const PORT = '9010'

// Conection
const conn = new Mongo(`${PROTOCOL}://${HOST}:${PORT}`)

// Create DB
const isNekoDb = conn.getDBNames().indexOf('neko')
const nekoDb
if(isNekoDb) {
	nekoDb = conn.getDB(DB_NEKO)
	nekoDb.dropDatabase()
}
nekoDb = conn.getDB(DB_NEKO)

// Create Collections
nekoDb.createCollection(COL_CAT)



// db.dropDatabase()
// db.createCollection('cat')
// db.cat.insert({name: 'Manolin'})

