import Ember from 'ember';

export default Ember.TextField.extend({
  type: "text",
  didInsertElement(){
    this.$().slider({
      ticks: this.get('ticks'),
      ticks_labels: this.get('ticksLabels'),
      ticks_snap_bounds: this.get('ticksSnapBounds'),
      value: 0
    });
  }
});
