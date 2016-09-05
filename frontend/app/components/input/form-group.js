import Ember from 'ember';
import InputValidation from '../../mixins/input-validation';

export default Ember.Component.extend(InputValidation, {
  classNames: ['form-group']
});
