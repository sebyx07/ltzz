import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['btn btn-primary', 'input--image-upload'],

  didInsertElement(){
    this.$('input').change(this._change.bind(this));
  },

  _change(e){
    const target = e.target;
    if(target && target.files[0]){
      const file = target.files[0];
      this.send('handleFile', file);
    }
  },

  actions: {
    handleFile(imageFileFromInput){
      const reader = new FileReader();
      reader.onload = (e) => {
        this.set('value', e.target.result);
      };
      reader.readAsDataURL(imageFileFromInput);
    }
  }
});
