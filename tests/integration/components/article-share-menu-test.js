import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module( 'Integration | Component | article-share-menu', function ( hooks ) {
  setupRenderingTest( hooks );

  test( 'it renders', async function ( assert ) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render( hbs`<ArticleShareMenu />` );

    assert.equal( this.element.textContent.trim(), '' );

    // Template block usage:
    await render( hbs`
      <ArticleShareMenu>
        template block text
      </ArticleShareMenu>
    ` );

    assert.equal( this.element.textContent.trim(), 'template block text' );
  } );
} );
