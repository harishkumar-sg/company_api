const Pool = require('pg').Pool
const connectionPool = new Pool({
  host: 'localhost',
  database: 'company',
  user: 'root',
  password: 'root',
  port: 5432,
})


module.exports=connectionPool