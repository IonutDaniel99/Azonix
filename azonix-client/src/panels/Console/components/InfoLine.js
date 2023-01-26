import React from 'react'

function InfoLine({ data }) {
    console.log(data.type)
    return (
        <div className='flex gap-2'>
            <span>{data.type}</span>
            <span>{data.message}</span>
            <span>{data.service}</span>
            <span>{data.recivedDate}</span>
        </div>
    )
}

export default InfoLine