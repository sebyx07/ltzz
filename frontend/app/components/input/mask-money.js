import Ember from 'ember';

export default Ember.TextField.extend({
  classNames: ['form-control'],
  didInsertElement(){
    this.$().maskMoney({prefix: `${this.get('currency')} `});
  }
});
