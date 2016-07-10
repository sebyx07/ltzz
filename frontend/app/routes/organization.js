import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model(params){
    return Ember.RSVP.hash({
      user: this.get('currentUser').getUser(),
      organization: this.store.queryRecord('organization', {filter: {name: params.name}})
    });
  }
});
