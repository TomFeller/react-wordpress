import React from 'react';
import {mapAppData} from '../../utils/post-mapping.jsx';

class SiteTitle extends React.Component {
  constructor(props) {
    super(props);

    const root = this.props.root;
    this.state = {
      appData: [],
      dataRoute: root
    }
  }

  componentDidMount() {
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(appData => this.setState((prevState, props) => {
        return {appData: mapAppData(appData)};
      }));
  }

  render() {
    const data = this.state.appData;
    return (
      <div className='app-titles'>
        <p className='app-title'>{data.name}</p>
        <p className='app-description'>{data.description}</p>
      </div>
    );
  }
}

export default SiteTitle;