var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var urunSchema = new Schema({
ad:String,
fiyat:Float64Array,
stok:Int32Array,
resimYolu:String,
    
});
var Urun = mongoose.model('urun', urunSchema);

module.exports = Urun;