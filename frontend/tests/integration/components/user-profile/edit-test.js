/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'user-profile/edit',
  'Integration: UserProfileEditComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#user-profile/edit}}
      //     template content
      //   {{/user-profile/edit}}
      // `);

      this.render(hbs`{{user-profile/edit}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
