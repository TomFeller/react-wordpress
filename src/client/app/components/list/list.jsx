import React from 'react';
import classNames from 'classnames';
import Link from '../link/link.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.getListItems = this.getListItems.bind(this);
  }
  getListItems(name, items, hasLink) {
    return (
      items.map((listItem, index) =>
        <li className={name + '__item'}
            key={index}>
          {hasLink ?
            <Link label={listItem.label}
                  href={listItem.href}
                  target={listItem.target && listItem.target}/> :
            listItem}
        </li>
      )
    )
  }
  render() {
    const {name, items, hasLinks, horizontal} = this.props;
    return (
      <ul className={classNames(name, 'list', {'list--horizontal': horizontal} )}>
        {this.getListItems(name, items, hasLinks)}
      </ul>
    )
  }
}

export default List;