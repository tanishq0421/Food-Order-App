const mongoose = require('mongoose');
const {MONGO_URL} = require('./../config');

export default async() => {
    try{
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true
        });
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}