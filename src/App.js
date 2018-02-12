import React, { Component } from 'react'
import './App.css'
import Album from './Album.js'

import months from './months.js'

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="pad-s grid__item grid__span2">
          <p>
            In 2017, I decided to sustain my newfound interest in generative art by
            taking on a simple project: create a new generative art piece each
            month to use as an album cover for my playlist of the month.
          </p>

          <p>
            Tap on a cover to open its Spotify playlist, or
            <a href="https://daneden.me/2016/11/02/drawing-with-numbers/"> read more</a>
            {' '} about my exploration in generative art.
          </p>

          <p>—<a href="https://daneden.me">Daniel Eden</a></p>
        </div>
        {months.map(month => (
          <Album month={month.month} url={month.url} cover={month.cover} />
        ))}
      </div>
    )
  }
}

export default App
