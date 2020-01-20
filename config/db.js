const mongoose = require('mongoose');
const config = require('config');
const database = config.get('mongoUri');

const connectToDB = async () => {
    try {
        await mongoose.connect(database,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log('MongoDB is connected')
    }
    catch (err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectToDB;