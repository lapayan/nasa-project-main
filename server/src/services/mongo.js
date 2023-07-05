const path = require('path')
const mongoose = require('mongoose');
// require('dotenv').config({ path: path.resolve(__dirname, '../../keys/.env') });

const MONGO_URL = "mongodb+srv://nasa-api:YlGFsjIqnqkGAGZ9@nasa-api.huk5pvl.mongodb.net/NasaSpaceXData?retryWrites=true&w=majority";  
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err); 
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() { 
  await mongoose.disconnect();
}

module.exports = { 
  mongoConnect,
  mongoDisconnect,
}