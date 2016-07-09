import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
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
      .done((data) => {
        const organizationName = data.included[0].attributes.name;
        this.get('store').pushPayload(data);
        toastr.success('Welcome Back!');
        this.get('router').transitionTo('organization', [organizationName]);
      })
      .fail(() => toastr.error('Invalid username or password'));
  }
});
