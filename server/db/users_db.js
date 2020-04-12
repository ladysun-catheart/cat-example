
db.createUser(
  {
    user: "nekoAdmin",
    pwd: "nekoAdmin",
    roles: [ { role: "dbOwner", db: "neko" } ]
  }
)
db.createUser(
  {
    user: "nekoUser",
    pwd: "nekoUser",
    roles: [ { role: "read", db: "neko" }, { role: "readWrite", db: "neko" } ]
  }
)