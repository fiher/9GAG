import React from 'react'

import MemeActions from '../actions/MemeActions'
import MemeStore from '../stores/MemeStore'

import MemeCard from './sub-components/MemeCard'

export default class AllMemes extends React.Component {
  constructor (props) {
    super(props)

    this.state = MemeStore.getState()

    this.onChange = this.onChange.bind(this)
  }
  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    MemeStore.listen(this.onChange)

    MemeActions.getAllMemes()
  }

  componentWillUnmount () {
    MemeStore.unlisten(this.onChange)
  }

  render () {
    let memes = this.state.memes.map((meme, i) => {
      return (
        <MemeCard key={meme._id}
                  meme={meme}
                  index={i}/>
      )
    })
    // this.state.memes.forEach((meme, i) => {
    //   memes.push(
    //     <div className='meme' key={i+1}>
    //       <div className='row'>
    //         <div className='title'>
    //           <span>{meme.title}</span>
    //         </div>
    //         <div className='row'>
    //           <div className='date'>
    //             <span>{meme.createdOn}</span>
    //           </div>
    //         </div>
    //       </div>
    //       <img src={meme.memeUrl}/>
    //     </div>
    //   )
    // })

    return (
      <div className="container">
        <h3 className="text-center">Welcome to
          <strong> Secret Imgur</strong>
        </h3>
        <div className="list-group">
          {memes}
        </div>
      </div>
    )
  }
}
