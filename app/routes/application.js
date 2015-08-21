import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
//The main app route
export default Ember.Route.extend(ApplicationRouteMixin,{

  actions: {
    addImage: function(){
      this.transitionTo('pins.add-image-portal');
    }
  }

});
