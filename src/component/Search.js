import './Search.css'

function Search(props) {
    const { value, onValChange } = props
    return(
        <div className="app-search">
            <input
                className="app-search-input"
                type="text"
                placeholder="Searh here!"
                value={value}
                onChange={(event) => {onValChange(event.target.value)}}
            />
      </div>
    )
}
export default Search;