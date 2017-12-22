import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import Link from '../../components/link/link.jsx';
import menuMap from '../../utils/menu-mapping.jsx';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.buildMenu = this.buildMenu.bind(this);

    const root = this.props.root;
    this.state = {
      menu: [],
      dataRoute: root
    }
  }

  componentDidMount() {
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(menu => this.setState((prevState, props) => {
        return {menu: menuMap(menu)};
      }));
  }

  buildMenu(items) {
    if (items != undefined) {
      return (
        items.map((listItem, index) =>
          <li className={'menu__item'}
              key={index}>
            <Link label={listItem.title}
                  href={listItem.url}
                  target={'_blank'}/>
          </li>
        )
      )
    }
  }

  render() {
    const {items, id, slug} = this.state.menu;

    return (
      <nav id={'nav-' + slug}
        className={classNames(
        'nav',
        'nav-' + slug
      )}>
        <ul className='menu'>
          {this.buildMenu(items)}
        </ul>
      </nav>
    );
  }
}

export default Menu;
