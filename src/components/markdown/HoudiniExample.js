import React from 'react'

import './HoudiniExample.css'

const style = {
  // display: `flex`,
}

export default class HoudiniExample extends React.Component {
  render() {
    return (
      <div className="houdini-example" style={style}>
        <header>
          <h2>{this.props.title}</h2>
          <div className="meta">
            <span className="author">
              By <a href="">{this.props.author}</a>
            </span>
            <span className="file">
              File <a href="">{this.props.file}</a>
            </span>
          </div>
        </header>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
