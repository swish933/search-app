
export const SearchResult = ({user}) => {
    return (
        <div className="result">
          <p>
             <span className='labels'>Name:</span> {user.name.firstName} {user.name.lastName}
          </p>
          <p><span className='labels'>Address:</span> {user.location.address}, {user.location.state}</p>
          </div>
  )
}
