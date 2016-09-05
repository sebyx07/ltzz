import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  attributeBindings: ['placeholder:title'],
  didInsertElement(){
    const $this = this.$();
    $this.selectpicker();
    const self = this;
    $this.on('changed.bs.select', function(e, i){
      const newValue = $this.find('option')[i]['value'];
      self.set('value', newValue);
    });
    $this.selectpicker('val', this.get('value'));
  },

  refreshObserver: Ember.observer('refresh', function(){
    const refresh = this.get('refresh');
    if(refresh){
      const $this = this.$();
      setTimeout(function(){
        $this.selectpicker('refresh');
      }, 20);
    }
  })
});
