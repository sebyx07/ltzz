import DS from 'ember-data';

export default DS.Model.extend({
  receiver: DS.belongsTo('user'),
  sender: DS.belongsTo('user'),
  payload: DS.attr('string'),
  receiverSeen: DS.attr('boolean')
});
