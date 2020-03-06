import React from 'react';
import Index from '../components/Layout/layout';

function wrapLayout(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isWrapped: true,
      };
    }

    render() {
      return (
        <Index>
          <WrappedComponent {...this.props} />
        </Index>
      );
    }
  };
}

export default wrapLayout;
