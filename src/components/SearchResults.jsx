import {SearchResult} from './SearchResult';
export const SearchResults = ({results}) => {
    return (
      <div className='search-results'>
        
        <>
            {results.map(({ user }, index) => (
              <SearchResult key={ index} user={user}/>
              ))
          }
          {results.length < 1 && <h3>No results to dispay</h3>}
            </>
        </div>
  )
}
