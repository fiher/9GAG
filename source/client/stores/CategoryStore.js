import alt from '../alt'
import CategoryActions from '../actions/CategoryActions'

class CategoryStore {
  constructor () {
    this.bindActions(CategoryActions)
    this.categories = []
    this.error = ''
    this.success = ''
    this.name = ''
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
  onHandleNameChange (event) {
    this.name = event.target.value
  }
}
export default alt.createStore(CategoryStore)
