import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      user: this.store.query('user', {filter: {username: params.username}})
    });
  }
});
