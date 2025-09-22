import React from 'react';
import { useParams } from 'react-router-dom';
function User(){
    const {userId} = useParams();
    return (
        <div className='bg-gray-600 text-white-3xl p-4 rounded-2xl' >User:{userId}</div>
    )
}
export default User;