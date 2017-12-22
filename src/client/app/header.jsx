import React from 'react';
import SiteTitle from './template-parts/site-titles/siteTitles.jsx';
import Menu from './template-parts/navigation/navigation.jsx';
import routes from './utils/data-routes.jsx';
import Grid from './layout/grid.jsx';

class Header extends React.Component {
  render() {
    return (
      <header id='site-header'>
        <Grid layout='between' elements={[
          <SiteTitle root={routes.site}/>,
          <Menu name='footer-nav'
                root={routes.subNavigation}
          />]
        }/>
      </header>
    );
  }
}

export default Header;