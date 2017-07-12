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
    console.log('successfully taken all categories')
    this.categories = categories
  }
  onGetAllCategoriesFail (error) {
    console.log('ooo shit')
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
