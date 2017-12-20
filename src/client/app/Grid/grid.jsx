import React from 'react';
import classNames from 'classnames';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.getContainerElements = this.getContainerElements.bind(this);
  }

  getContainerElements(elements) {
    return (
      elements.map((element, index) =>
        <div className='grid__cell' key={index}>{element}</div>)
    )
  }

  render() {
    const {elements, layout} = this.props;
    return (
      <div className={classNames('grid', 'grid--layout-' + layout)}>
        {this.getContainerElements(elements)}
      </div>
    )
  }
}

export default Grid;