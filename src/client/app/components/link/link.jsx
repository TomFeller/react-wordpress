import React from 'react';

class Link extends React.Component {
  render() {
    const {label, href, target} = this.props;
    return (
      <a href={href ? href : 'javascript:void(0)'} target={target && target}>{label}</a>
    )
  }
}

export default Link;