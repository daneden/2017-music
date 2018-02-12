import React, { Component } from 'react'
import './Album.css'

class Album extends Component {
  render() {
    const { cover, month, url } = this.props
    return (
      <a
        className="grid__item album"
        href={url}
      >
        <img
          alt={`Cover art for ${month}`}
          src={`covers/${cover}`}
          className="album__cover"
        />
        <p className="pad-s">{month}</p>
      </a>
    )
  }
}

export default Album
