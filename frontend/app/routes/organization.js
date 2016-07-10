import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    this.store.queryRecord('organization', {filter: {name: params.name}});
  }
});
