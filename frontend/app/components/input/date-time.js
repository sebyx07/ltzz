import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'datetime',
  hasBeenInit: false,
  classNames: ['form-control'],
  didInsertElement(){
    this.$().mask('00/00/0000');
  },

  click(){
    if(!this.get('hasBeenInit')){
      this._initPicker();
    }
  },

  _initPicker(){
    const $this = this.$();
    $this.datepicker().on('changeDate', function(){
      $this.datepicker('hide');
    });
    $this.datepicker('show');
  }
});
