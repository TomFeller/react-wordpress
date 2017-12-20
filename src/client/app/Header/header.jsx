import React from 'react';
import Menu from '../Navigation/navigation.jsx';
import routes from '../data/dataRoutes.jsx';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Menu name='header-nav'
              root={routes.subNavigation}
        />
      </header>
    );
  }
}

export default Header;