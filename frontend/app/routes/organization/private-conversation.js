import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  model(params){
    return this.store.query('user', {filter: {username: params.username}}).then((users) => {
      const user = users.get('firstObject');
      Ember.$.ajax(`/api/v1/private-messages/${user.get('id')}`).then((data) => {
        this.store.pushPayload(data);
      });
    });
  }
});
