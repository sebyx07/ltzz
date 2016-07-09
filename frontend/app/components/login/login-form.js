import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['m-t-md'],

  submit(e){
    e.preventDefault();
    const {username, password} = this.getProperties(['username', 'password']);
    alert(username);
  }
});
