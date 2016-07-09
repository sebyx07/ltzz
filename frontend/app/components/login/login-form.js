import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['m-t-md'],

  submit(e){
    e.preventDefault();
    const {username, password} = this.getProperties(['username', 'password']);
    this.login(username, password);
  },

  login(username, password){
    Ember.$.post('/api/v1/session', {username: username, password: password})
      .done(() => alert('ok'))
      .fail(() => alert('bad'))
  }
});
