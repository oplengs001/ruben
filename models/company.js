'use strict';


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompanySchema = new Schema({
  name: { type: String },
  numberOfEmployees: { type: Number }

});


/** export schema */
let company = module.exports= mongoose.model('company', CompanySchema);