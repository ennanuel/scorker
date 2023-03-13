import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <form className="search full-border flex-row">
      <input type="text" id="search" className="full-flex full-w" placeholder="Search" />
      <label htmlFor="search" className="search_btn flex-row jc-c ai-c"><i><FaSearch /></i></label>
    </form>
  )
}

export default Search
