import React from 'react'
import '../styles.scss'

const Dropdown= ({ value, handleCountry }) => {
    return (
        <div className='select-country'>
            <select value={value} onChange={handleCountry}>
                <option value="0">Select country</option>
                <option value="in">India</option>
                <option value="ar">Argentina</option>
                <option value="br">Brazil</option>
                <option value="ca">Canada</option>
                <option value="cn">China</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="uk">UK</option>
                <option value="us">USA</option>
            </select>
        </div>
    )
}

export default Dropdown