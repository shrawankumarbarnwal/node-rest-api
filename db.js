const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/rest-shop',{ useNewUrlParser: true,useUnifiedTopology: true  },(err)=>{
    if(!err){
        console.log("MongoDb connected.");
    }else{
        console.log("Error in Db connection: "+JSON.stringify.err, undefined, 2);
    }
});

module.exports = mongoose;