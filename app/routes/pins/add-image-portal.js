import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
           return this.store.createRecord('pin');
          },

   actions: {
     save: function(image){
       image.save();
       this.transitionTo('pins.index');
     }
   }
});
