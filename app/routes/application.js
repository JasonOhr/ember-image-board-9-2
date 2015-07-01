import Ember from 'ember';
//The main app route
export default Ember.Route.extend({
  actions: {
    addImage: function(){
      this.transitionTo('pins.add-image-portal');
    }
  }

});
