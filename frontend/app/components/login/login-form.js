import Ember from 'ember';

export default Ember.Component.extend({
  toastr: window.toastr,
  router: Ember.inject.service('-routing'),
  tagName: 'form',
  classNames: ['m-t-md'],

  submit(e){
    e.preventDefault();
    const {username, password} = this.getProperties(['username', 'password']);
    this.login(username, password);
  },

  login(username, password){
    const {toastr, router} = this.getProperties(['toastr', 'router']);

    Ember.$.post('/api/v1/session', {username: username, password: password})
      .done(() => {
        toastr.success('Welcome Back!');
        router.transitionTo('application');
      })
      .fail(() => toastr.error('Invalid username or password'));
  }
});
