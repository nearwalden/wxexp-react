import React from "react";
import {Helmet} from "react-helmet";

class Head extends React.Component {
  render () {
    return (
        <div className="head">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Head Title 2</title>
            </Helmet>
        </div>
    );
  }
};

export default Head;