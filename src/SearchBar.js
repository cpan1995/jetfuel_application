import React, { useState } from 'react'

export default function SearchBar({callBack}){
    const [searchValue, setValue] = useState('')

    function handleSearchChange(e){
        setValue(e.target.value)
        callBack(e.target.value)
    }

    return (
        <div className='searchBarContainer'>
            <input type="text" placeholder="Search by name" className = 'searchBox' value = {searchValue} onChange={handleSearchChange}/>
        </div>
    )
}