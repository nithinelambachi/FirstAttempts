import React from 'react'



function Profile(authorized) {
if(!authorized){
console.log(false);
}
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}
export default Profile