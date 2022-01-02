import React from "react";

import "../../styles/global.css"
import "./style.css";

class PageTemplate extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <link rel="icon" type="image/png" href="../../images/favicon.png" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

export default PageTemplate;
