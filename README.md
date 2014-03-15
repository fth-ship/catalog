# Catalog

# Installation

  [sudo] npm i

# Documentation

## API

### Movies

  ```
  Method: GET

  URL: /api/movies

  Query: { q: 'text' }

  success: {
    status: true,
    result: [/*movies*/],
    total: /*number total of movies founded*/
    message: [/*sucess!*/]
  }

  fail: {
    status: false,
    result: [/*empty*/],
    total: 0,
    message: [/*failed!*/] 
  }
  ```
