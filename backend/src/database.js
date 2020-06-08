const mongoose = require('mongoose');

const URI = 'mongodb://localhost/spacexshop';

mongoose.connect(URI, {
    useNewUrlParser: true, 
    useCreateIndex: true
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB up')
})