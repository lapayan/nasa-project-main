const path = require('path')
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../../keys/.env') });

const MONGO_URL = process.env.MONGODB_URI;  
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