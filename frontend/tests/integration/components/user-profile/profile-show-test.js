/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'user-profile/profile-show',
  'Integration: UserProfileProfileShowComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#user-profile/profile-show}}
      //     template content
      //   {{/user-profile/profile-show}}
      // `);

      this.render(hbs`{{user-profile/profile-show}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
