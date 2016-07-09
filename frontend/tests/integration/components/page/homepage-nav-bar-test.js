/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'page/homepage-nav-bar',
  'Integration: PageHomepageNavBarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#page/homepage-nav-bar}}
      //     template content
      //   {{/page/homepage-nav-bar}}
      // `);

      this.render(hbs`{{page/homepage-nav-bar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
