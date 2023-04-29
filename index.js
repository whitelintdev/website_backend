const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/fetchRoute');

const app = express();

app.use(express.json());
app.use(cors({
  // origin: 'http://127.0.0.1:5500', // Replace with the URL of your client app
  origin: '*', // Replace with the URL of your client app
}));

mongoose.connect("mongodb+srv://kuldeep:peedluk1999@whitelint.m3x6ubs.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is ready for action!'))
.catch(err => {
  console.log('Error connecting to MongoDB:', err);
  process.exit(1); // Exit the process with a non-zero status code
});
// function myMiddleware(req, res, next) {
//   console.log('This is my middleware function');
//   next(); // pass control to the next middleware or route handler
// }

app.use('/',routes);
// app.use(app.router);
// routes.initialize(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
