/**
 * Created by PC on 08-Jul-17.
 */
import React from 'react'
export default class Footer extends React.Component {
  render () {
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
            <div className='col-sm-3'>
              <h3 className='lead'>Dank Programmers</h3>
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
