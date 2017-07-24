import alt from '../alt'
class CategoryActions {
  constructor () {
    this.generateActions(
      'getAllCategoriesSuccess',
      'getAllCategoriesFail',
      'addCategorySuccess',
      'addCategoryFail',
      'handleNameChange'
    )
    this.data = {}
  }

  getAllCategories () {
    let request = {
      method: 'get',
      url: '/api/categories/all'
    }
    $.ajax(request)
      .done(data => this.getAllCategoriesSuccess(data))
      .fail(err => this.getAllCategoriesFail(err))
  }
  addCategory (data) {
    let request = {
      method: 'post',
      url: '/api/admin/category/add',
      data: JSON.stringify({'name': data}),
      contentType: 'application/json'
    }
    $.ajax(request)
      .done(data => this.addCategorySuccess(data))
      .fail(err => this.addCategoryFail(err))
  }
}

export default alt.createActions(CategoryActions)
