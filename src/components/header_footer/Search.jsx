import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <form className="search full-border flex-row">
      <input type="text" name="search" className="full-flex full-w" placeholder="Search" />
      <button type="button flex-row jc-c ai-c"><i><FaSearch /></i></button>
    </form>
  )
}

export default Search
