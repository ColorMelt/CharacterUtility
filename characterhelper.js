Characters = new Mongo.Collection("characters");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    characters: function () {
      return Characters.find({});
    }
  });
  
  Template.body.events({
    "submit .new-character": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Characters.insert({
        text: text,
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });
  
  Template.character.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Characters.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Characters.remove(this._id);
    }
  });
  
  
  
  

  
} // is client
  
  
  
  
  

 