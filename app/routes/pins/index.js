import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    //return [
    //  {caption: 'hello dude', url: 'http://google.com'},
    //  {caption: 'sweet momba jamba', url: 'http://jasonohr.com'}
    //]
    return this.store.findAll('pin');
  }
});
