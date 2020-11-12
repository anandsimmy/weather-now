import React from 'react'
import { connect } from 'react-redux'
import { searchCityStart } from '../redux/actions'
import '../styles.scss'

const SearchBar= ({ value, handleSubmit, handleChange }) => {
    
    return (
        <div className='search-bar'>
            <input autoFocus value={value} placeholder='Search by place or pincode' onKeyDown={handleSubmit} onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps= (dispatch) => ({
    dispatchSearchCityStart: (city) => {dispatch(searchCityStart(city))}
})

export default connect(null, mapDispatchToProps)(SearchBar);