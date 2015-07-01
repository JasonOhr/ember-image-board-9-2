import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addImage: function(){
      this.transitionTo('pins.add-image-portal');
    }
  }

});
