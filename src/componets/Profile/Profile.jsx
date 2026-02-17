import React from 'react'
import { BsArrowLeft, BsCheck2, BsPeaceFill, BsPencil } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Profile = ({handleCloseOPenProfile}) => {

    const [flag, setFlag] = React.useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");

    const handleFlag = () => {
        setFlag(true);
    }
    const handleCheackClick = () => {
        setFlag(false);
    }
    const handleChange = (e) => {
        setUsername(e.target.value);
    }

  return (
    <div className='w-full h-full'>
        <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'>
            <BsArrowLeft className='cursor-pointer text-2xl font-bold' onClick={handleCloseOPenProfile} />
            <p className='cursor-pointer font-semibold'> Profile </p>
        </div>
        
        {/* Update profile picture Section */}

        <div className='flex flex-col justify-center items-center my-12'>
            <label htmlFor='imgInput'>
                <img className='rounded-full w-[15vw] h-[15vw] cursor-pointer' src="https://cdn.pixabay.com/photo/2025/12/30/17/54/barn-swallow-10043616_960_720.jpg" alt="" />
            </label>
            <input type="file" id='imgInput' className='hidden' />
        </div>

        {/* User information Section */}
        <div className='bg-white px-3'>
           <p className='py-3'>Your Name</p>
           
          {!flag && <div className='w-full flex justify-between items-center'>
            <p className='py-3'>{username || "username"}</p>
              <BsPencil onClick={handleFlag} className='cursor-pointer' />
           </div> }

           {
             flag && <div className='flex justify-between items-center py-2'>
                <input onChange={handleChange} className='w-[80%] outline-none border-b-2 border-blue-700 p-2' type='text' placeholder='Enter your name' />
                <BsCheck2 onClick={handleCheackClick} className='cursor-pointer text-2xl' />
             </div>
           }
        </div>
        <div className='px-3 my-5'>
            <p className='py-10'>this is not your username, this name will be visible to your whatsupp contacts</p>
        </div>
    </div>
  )
}

export default Profile