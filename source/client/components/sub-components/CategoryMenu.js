import React from 'react'
import { Link } from 'react-router'

import CategoryActions from '../../actions/CategoryActions'
import CategoryStore from '../../stores/CategoryStore'

export default class NavbarUserMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = CategoryStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    CategoryStore.listen(this.onChange)
    CategoryActions.getAllCategories()
  }

  componentWillUnmount () {
    CategoryStore.unlisten(this.onChange)
  }

  render () {
    let categories = []
    if (this.state.categories.length > 0) {
      this.state.categories.forEach((category, i) => {
        categories.push(
          <div key={i+1}>
          <div>
            <Link to={`/search/${category.name}`}>
              {category.name}
            </Link>
          </div>
        </div>)
      })
    }
    return (
      <div>
        {categories}
      </div>
    )
  }
}
