import React from 'react';
import List from '../List/list.jsx';
import Image from '../Image/image.jsx';
import Icon from '../Icon/icon.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.getHeaderItems = this.getHeaderItems.bind(this);
  }

  getHeaderItems() {
    const items = this.props.items;
    return (
      <List name='header-nav'
            items={items}
            hasLinks
            horizontal></List>
    )
  }

  getHeaderLogo() {
    const logo = this.props.logo;
    const path = 'app/Header/mocks/';
    return (
      <Image src={path + logo}
             alt='logo' />
    )
  }

  getHeaderSideLinks() {
    const sideLinks = this.props.sideLinks;
    return (
      <div>
      <List name='header-side-links'
            items={sideLinks}
            hasLinks
            horizontal />
        </div>
    )
  }

  render() {
    return (
      <header id='header' className='site-header'>
        <div id='logo-header' className='header__logo logo'>
          {this.getHeaderLogo()}
        </div>
        <nav id='header-navigation' className='header__nav nav'>
          {this.getHeaderItems()}
        </nav>
        <div id='header-side-links'>
          {this.getHeaderSideLinks()}
        </div>
      </header>
    );
  }
}

export default Header;