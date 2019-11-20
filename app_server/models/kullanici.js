var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({

    kullaniciAdi: {type:String, required:true, unique:true},
    sifre: {type: String, required:true}},{collection:'Kullanicilar'});

var Kullanici = mongoose.model('kullanici', kullaniciSchema);

module.exports = Kullanici;