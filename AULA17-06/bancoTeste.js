const sql = require('mssql')
const sqlConfig = {
  user: 'sa',
  password: 'sa',
  database: 'MCTEC',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  const result = await sql.query`select * from filmes`
  console.log(result)
 } catch (err) {
    console.log('erro')
 }
}