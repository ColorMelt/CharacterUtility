Characters = new Mongo.Collection("characters");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    characters: function()
    {
      return
    }
  });
}

 
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Characters.find({});
    }
  });
}