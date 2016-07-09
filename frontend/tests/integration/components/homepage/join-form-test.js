/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'homepage/join-form',
  'Integration: HomepageJoinFormComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#homepage/join-form}}
      //     template content
      //   {{/homepage/join-form}}
      // `);

      this.render(hbs`{{homepage/join-form}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
