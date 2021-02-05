
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
  
  handleClick = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionChange = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }


  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.handleClick}>bitrate</button>
        <button className='resolution' onClick={this.handleResolutionChange}>Resolution</button>
      </div>
      
    )
  }
}