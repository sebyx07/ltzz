import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model(params){
    return Ember.RSVP.hash({
      user: this.get('currentUser').getUser(),
      organization: this.store.query('organization', {filter: {name: params.name}, include: 'users'})
        .then((organizations) =>{
          return organizations.get('firstObject');
      })
    });
  }
});
