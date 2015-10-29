Characters = new Mongo.Collection("characters");

if (Meteor.isClient) {
  if (auth)
  
  {
    Template.main.helpers({
    characters: function() {
      return Characters.find();
    }
    
  })  
  }
  
}