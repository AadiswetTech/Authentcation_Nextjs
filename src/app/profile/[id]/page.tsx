import React from 'react'


const UserProfile = ({params}:any) => {
  return (
    <div className=" flex flex-col item-center justify-center text-center ">
        <h1 className="text-4xl">Profile</h1>
        <hr/>
        <p className='text-4xl '>profile pages<span className="text-teal-500">{params.id}</span></p>
    </div>
  )
}

export default UserProfile