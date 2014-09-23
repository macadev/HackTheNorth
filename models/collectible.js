var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var CollectibleSchema = new Schema({
    itemName      : String,
    urlHigh       : String,
    urlPebble     : String,
    timePickedUp  : Date,
    timeDropped   : Date,
    description   : String,
    equipped      : { type: Boolean, default: true }
  });

var Collectible = mongoose.model('CollectibleModel', CollectibleSchema);

Collectible.remove({}, function(err) {
  if (err) {
    console.log ('error deleting old data.');
  }
});

var car = new Collectible({
  itemName: 'Keys',
  urlHigh: '',
  urlPebble: '',
  timePickedUp: new Date(),
  timeDropped: new Date(),
  description: 'keys on a keyring',
  equipped: true
});

var wallet = new Collectible({
  itemName: 'Wallet',
  urlHigh: '',
  urlPebble: '',
  timePickedUp: new Date(),
  timeDropped: new Date(),
  description: 'brown leather wallet',
  equipped: true
});

var sword = new Collectible({
  itemName: 'Sword',
  urlHigh: '',
  urlPebble: '',
  timePickedUp: new Date(),
  timeDropped: new Date(),
  description: 'metallic sword +1 strength',
  equipped: true
});

car.save(function (err) {if (err) console.log ('Error on save!')});
wallet.save(function (err) {if (err) console.log ('Error on save!')});
sword.save(function (err) {if (err) console.log ('Error on save!')});

module.exports = Collectible;