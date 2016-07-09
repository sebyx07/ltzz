import Ember from 'ember';

export default Ember.Component.extend({
  toastr: window.toastr,
  router: Ember.inject.service('-routing'),
  store: Ember.inject.service('store'),
  tagName: 'form',
  classNames: ['m-t-md'],

  submit(e){
    e.preventDefault();
    Ember.$.post('/api/v1/session/register',
      this.getProperties(['name', 'username', 'username', 'organizationName', 'password', 'confirmPassword', 'tos']))
      .done((data) => {
        const organizationName = data.included[0].attributes.name;
        this.get('store').pushPayload(data);
        toastr.success('Welcome to LtzChat');
        this.get('router').transitionTo('organization', organizationName);
      });
  }
});
