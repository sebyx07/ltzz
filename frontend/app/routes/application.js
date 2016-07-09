import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model(){
    return Ember.RSVP.hash({
      user: this.get('currentUser').getUser().catch(() => {
        return undefined;
      })
    })
  }
});
