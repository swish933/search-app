import React from 'react'

export const SearchBar = ({handleChange,query}) => {
  return (
      <>
          <form className='form' >
              <label htmlFor="search-bar" className='search-label'>
                  <input type="search"
                      className='search-bar'
                      name='search-bar'
                      id='search-bar'
                      placeholder='Search'
                      value={query}
                      onChange={handleChange}
                      autoComplete='off'
                  />
              </label>
          </form></>
  )
}
