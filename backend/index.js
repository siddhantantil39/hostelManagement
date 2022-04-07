const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const db = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

//Connecting to the mongo db database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err.message));



//console.log(process.env);
const port = process.env.PORT || 8080;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
});
