const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const db = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err.message));



//console.log(process.env);
app.listen(process.env.PORT,() => {
  console.log('listening on port 3000');
});
