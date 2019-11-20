var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var MongoDB = 'mongodb://localhost:27017/UrunDB';
mongoose.connect(MongoDB, {useNewUrlParser:true, useUnifiedTopology: true}, function(err,MongoDB){
    if(err){
    console.log('Mongoose Hatası:'+ err);
    }
    else{
    console.log('Mongoose Bağlandı:'+ MongoDB);
    }
});





  
