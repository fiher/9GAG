import alt from '../alt'
import CategoryActions from '../actions/CategoryActions'

class CategoryStore {
  constructor () {
    this.bindActions(CategoryActions)
    this.categories = []
    this.error = ''
    this.success = ''
  }

  onGetAllCategoriesSuccess (categories) {
    this.categories = categories
  }
  onGetAllCategoriesFail (error) {
    this.error = error
  }
  onAddCategorySuccess (success) {
    this.success = success
  }
  onAddCategoryFail (error) {
    this.error = error
  }
}
export default alt.createStore(CategoryStore)
