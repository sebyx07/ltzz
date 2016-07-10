import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.query('user', {filter: {username: params.username}}).then((users) => {
      return users.get('firstObject');
    });
  }
});
