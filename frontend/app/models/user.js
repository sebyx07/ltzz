import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  username: attr('string'),
  avatar: attr('string'),
  organization: belongsTo('organization'),
  privateMessages: hasMany('private-message', {inverse: 'receiver'})
});
