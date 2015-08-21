import Ember from 'ember';
//The landing page for the app
export default Ember.Route.extend({
  beforeModel: function(){
    if(this.get('session.isAuthenticated')){
      this.transitionTo('users.show-portal', this.get('session.secure.userId'));
    }
  }
});
