import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  getUser(){
    return new Ember.RSVP.Promise((resolve, reject) => {
      const cached = this.get('user');
      if(cached){
        resolve(cached);
      }else{
        Ember.$.ajax({
          url: '/api/v1/users/current',
          contentType: 'application/vnd.api+json',
          beforeSend: ((request) => {
            request.setRequestHeader('Content-Type', 'application/vnd.api+json');
          })
        }).done((data) => {
          debugger;
          const user = this.get('store').push(data);
          this.set('user', user);
          resolve(user);
        }).fail((data) => {
          debugger;
        });
      }
    });
  }
});
