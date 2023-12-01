const {
    tambahBooks,
    getAllBooks,
    getByIdBooks,
    editBooks,
    hapusBooks
  } = require('./handler')
  
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: tambahBooks
    },
    {
      method: 'GET',
      path: '/books',
      handler: getAllBooks
    },
    {
      method: 'GET',
      path: '/books/{bookId}',
      handler: getByIdBooks
    },
    {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: editBooks
    },
    {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: hapusBooks
    },
  ]
  
  module.exports = routes
  