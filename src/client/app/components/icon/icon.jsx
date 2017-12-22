import React from 'react';

class Icon extends React.Component {
  render() {
    const {id, fa} = this.props;
    let icon = fa ? (<i className={'fa fa-' + id}></i>) : null;
    return (
      icon
    )
  }
}

export default Icon;