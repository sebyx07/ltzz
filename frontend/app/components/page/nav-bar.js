import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  router: Ember.inject.service('-routing'),
  classNames: ['navbar'],

  actions: {
    logout(){
      Ember.$.ajax({
        url: '/api/v1/session',
        type: 'DELETE'
      }).then(() => {
        this.get('currentUser').set('user', undefined);
        this.get('router').transitionTo('login');
      });
    }
  }
});
