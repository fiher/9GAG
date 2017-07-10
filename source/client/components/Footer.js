import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
              <h3 className='lead'>Dank Programmers</h3>
              <ul>
                <li>
                  <a href='https://github.com/fiher'>
                  Pavlin Petkov - Luci
                </a>
                </li>
                <li>
                  <a href='https://github.com/Silvave'>
                  Todor Vasilev
                </a>
                </li>
              </ul>
          </div>
        </div>
      </footer>
    )
  }
}
