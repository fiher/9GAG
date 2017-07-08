/**
 * Created by PC on 08-Jul-17.
 */
import React from 'react'
import { Link } from 'react-router'
import toastr from 'toastr'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mostRecentDankMemes: []
    }
    this.getFiveRecentDankMemes = this.getFiveRecentDankMemes.bind(this)
  }
  getFiveRecentDankMemes () {
    let request = {
      method: 'get',
      url: '/api/dankMemes/five-recent'
    }
    $.ajax(request)
      .done(data => {
        this.setState({
          mostRecentDankMemes: data
        })
      })
      .fail(err => toastr.error(err.responseJSON.message))
  }
  render () {
    let mostRecentDankMemes = this.state.mostRecentDankMemes.map(dankMeme => {
      return (
        <li key={dankMeme._id}>
          <Link to={`/...`}>{dankMeme.title}</Link>
        </li>
      )
    })
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'>
                <strong>Information</strong> and
                <strong>Copyright</strong>
              </h3>
              <p>
                  Powered by
                  <strong> Express</strong>,
                  <strong> MongoDB</strong> and
                  <strong> React</strong>
              </p>
              <p> @ 2017 SoftUni. </p>
            </div>
            <div className='col-sm-4 hidden-xs'>
              <h3 className='lead'>
                <strong>Newest</strong> 5 Dank Memes
              </h3>
              <ul className='list-inline'>
                {mostRecentDankMemes}
              </ul>
            </div>
            <div className='col-sm-3'>
              <h3 className='lead'>Authors</h3>
              <a href='https://github.com/fiher'>
                Pavlin Petkov - Luci
              </a>
              <a href='https://github.com/Silvave'>
                Todor Vasilev
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
  }
}
