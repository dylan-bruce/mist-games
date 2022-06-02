import React from 'react'

const CurrentDate = () => {

    let today = new Date();
    let date = today.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    })

    return (
        <p className='date'>{ date }</p>
    )
}

export default CurrentDate