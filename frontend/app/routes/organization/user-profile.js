import Ember from 'ember';

export default Ember.Route.extend({
    currentUser: Ember.inject.service(),

    model(params){
        const username = params.username;

        return Ember.RSVP.hash({
            user: this.store.query('user', {filter: {username: username}}),

            isCurrentUser: new Promise((resolve) => {
                this.get('currentUser').getUser().then((user) =>{
                    resolve(user.get('username') === username);
            });
        })
        });
    }
});

