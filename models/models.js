var mongoose = require("mongoose");
var PersonSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  active: { type: Boolean, default: true },
  color: { type: String, default: 'yellow' }
});
var Person = mongoose.model("Person", PersonSchema);

var ThingSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  color: { type: String, default: 'yellow' },
  description: {type: String}
});
var Thing = mongoose.model("Thing", ThingSchema);

var UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
var User = mongoose.model("User", UserSchema);

module.exports = {
    Thing: Thing,
    Person: Person, 
    User: User
};