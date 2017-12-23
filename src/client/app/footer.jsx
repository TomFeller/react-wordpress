import React from 'react';
import SiteTitle from './template-parts/site-titles/siteTitles.jsx';
import Menu from './template-parts/navigation/navigation.jsx';
import routes from './utils/data-routes.jsx';
import Grid from './layout/grid.jsx';

class Footer extends React.Component {
  render() {
    return (
      <footer id='site-footer'>
        <Grid layout='between' elements={[
          <SiteTitle root={routes.site}/>,
          <Menu name='header-nav'
                root={routes.subNavigation}
          />]
        }/>
      </footer>
    );
  }
}

export default Footer;