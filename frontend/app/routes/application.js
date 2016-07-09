import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model(){
    this.get('currentUser').getUser();
    return Ember.RSVP.hash({
      user: []
    })
  }
});
