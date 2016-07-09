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
          this.get('store').pushPayload(data);
          const user = this.get('store').peekRecord('user', data.data.id);
          this.set('user', user);
          resolve(user);
        }).fail((data) => {
          reject(data)
        });
      }
    });
  }
});
