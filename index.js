const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const Bodyparser = require('body-parser')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app = express()
app.set('view engine', 'ejs')
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
 // app.get('/', (req, res)=> res.send(showTimes()))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
 /* .get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })*/
  showTimes = () => {
    let result = '';
    const times = process.env.TIMES || 5;
    for (i = 0; i < times; i++) {
      result += i + ' ';
    }
    return result;
  }

 