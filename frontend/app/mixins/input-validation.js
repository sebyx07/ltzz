import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
  classNameBindings: ['isValid:valid', 'isInvalid:invalid'],

  init(){
    const validations = this.get('_validations') || this.get('validations') || {value: {}};
    this.set('validations', {
      value: validations
    });
    this._super(...arguments);
  },

  observeBadInput: function(){
    this.runValidation();
  }.observes('value'),

  runValidation(){
    this.validate()
      .then(() => {
        this.setProperties({
          isValid: true,
          isInvalid: false
        });
        if(this.get('handleValidInput')){
          this.sendAction('handleValidInput');
        }
      })
      .catch((err) => {
        if(this.get('handleInvalidInput')){
          this.sendAction('handleInvalidInput', err);
        }
        this.setProperties({
          isValid: false,
          isInvalid: true
        });
      });
  }
});
