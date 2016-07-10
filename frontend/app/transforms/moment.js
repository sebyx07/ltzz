import DS from "ember-data";
import moment from 'moment';
export default DS.Transform.extend({
  serialize: function(value) {
    return this._moment(value).format();
  },

  deserialize: function(value) {
    return this._moment(value);
  },

  _moment: function(value){
    return moment(value);
  }
});
