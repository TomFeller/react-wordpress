import React from 'react';

class Panel extends React.Component {
  render() {
    const {title, content, footer} = this.props;
    return (
      <article className="panel">
        <div className="panel__header">{title}</div>
        <div className="panel__content">{content}</div>
        <div className="panel__footer">{footer}</div>
      </article>
    )
  }
}

export default Panel;