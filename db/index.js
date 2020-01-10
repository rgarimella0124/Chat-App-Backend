const conn = require("./conn");
const Conversation = require("./models/Conversation");
const Message = require("./models/Message");
const User = require("./models/User");
console.log("Welcome to The Backend");
User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
console.log("Inside IndexJs");
module.exports = {
  conn,
  models: {
    Conversation,
    User,
    Message
  }
};
