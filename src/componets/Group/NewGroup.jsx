import { Button, CircularProgress } from '@mui/material';
import React from 'react'
import { BsArrowLeft, BsCheck2 } from 'react-icons/bs'

const NewGroup = () => {

    const [isImageUploding, setIsImageUploding] = React.useState(false);
    const [groupName, setGroupName] = React.useState("");

  return (
    <div className='w-full h-full'>

        <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'>

            <BsArrowLeft className='cursor-pointer text-2xl font-bold' />

            <p className='text-xl font-semibold'>New Group</p>

        </div>

        <div className='flex flex-col justify-center items-center my-12'>

            <label htmlFor='imgInput' className='relative'>
                <img className='rounded-full w-[20vw] h-[20vw] cursor-pointer' src="https://cdn.pixabay.com/photo/2025/11/07/21/25/tufted-titmouse-9943582_1280.jpg" alt="" />
                {isImageUploding && <CircularProgress className='absolute top-[5rem] left-[6rem]'/>}
            </label>
                  
            <input
                type='file'
                id='imgInput'
                className='hidden'
                onChange={()=>console.log("imageChange")}
            />

        </div>

        <div className='w-full flex justify-between items-center py-2 px-5'>

            <input
                type='text'
                className='w-full outline-none border-b-2 border-gray-700 px-2 bg-transparent'
                placeholder='Group Subject'
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
            />

        </div>

        {
            groupName && <div className='py-10 bg-slate-200 flex items-center justify-center'>
                <Button>
                    <div className='bg-[#0c977d] rounded-full p-4'>
                        <BsCheck2 className='text-white font-bold text-3xl' />
                    </div>
                </Button>
            </div>
        }

    </div>
  )
}

export default NewGroup