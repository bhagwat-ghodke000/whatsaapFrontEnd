import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from 'react-icons/bs';
import { TbCircleDashed } from 'react-icons/tb';
import ChatCard from './ChatCard/ChatCard';
import MessageCard from './MessageCard/MessageCard';
import { ImAttachment } from 'react-icons/im';
import "./HomePage.css"
import Profile from './Profile/Profile';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import CreateGroup from './Group/CreateGroup';


const HomePage=()=> {
    const [querys, setQuerys] = React.useState(null);
    const [currentChat, setCurrentChat] = React.useState(null);
    const [content, setContent] = React.useState("");
    const [isProfile, setIsProfile] = React.useState(false);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isGroup, setIsGroup] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClickOnChatCard = () => {
        setCurrentChat(true);
    }
    const handleSearch = (query) => {
        console.log("Searching for:", query);
    }
    const handleCreateNewMessage = () => {
        console.log("New message created:", content);
    }
    const handleNavigate = () => {
        setIsProfile(true);
    }
    const handleCloseOPenProfile = () => {
        setIsProfile(false);
    }
    const handleCreateGroup = () => {
        setIsGroup(true);
    }
  return (
    <div className='relative'>
      <div className='py-14 bg-[#00a884] w-full'></div>
      <div className='flex bg-[#f0f2f5] h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]'>
        <div className='left w-[30%] bg-[#e8e9ec] h-full'>
            {/* Profile Page */}
          {isGroup && <CreateGroup />}
          {isProfile && <div className='w-full h-full'>
            <Profile handleCloseOPenProfile={handleCloseOPenProfile} />
          </div>}
         {!isProfile && !isGroup && <div className='w-full'>
          
          

            {/* Home Page */}

             <div  className='flex justify-between items-center p-3'>
                <div onClick={handleNavigate} className='flex items-center space-x-3'>
                    <img className='rounded-full w-10 h-10 cursor-pointer' src="https://cdn.pixabay.com/photo/2025/11/07/21/25/tufted-titmouse-9943582_1280.jpg" alt="" />
                    <p>username</p>
                </div>
                <div className='space-x-3 text-2xl flex'>
                    <TbCircleDashed className='cursor-pointer' onClick={()=>navigate("/status")} />
                    <BiCommentDetail/>
                    <div>
                       {/* <BsThreeDotsVertical className='cursor-pointer' /> */}
                        
                        <BsThreeDotsVertical className='cursor-pointer'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        />
                        

                       <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}
                        >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleCreateGroup}>Create Group</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                       </Menu>

                    </div>
                </div>
            </div>
            <div className='relative flex justify-center items-center bg-white py-4 px-3'>
                <input className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2' 
                type="text"
                placeholder='Search or start new chat'
                onChange={(e)=>{
                    setQuerys(e.target.value)
                    handleSearch(e.target.value)
                }}
                value={querys}
                />
                <AiOutlineSearch className='left-5 top-7 absolute' />
                <div>
                    <BsFilter className='ml-4 text-3xl'/>
                </div>
            </div>
            <div className='bg-white overflow-y-scroll h-[70vh] px-3'>
                <ChatCard />
                {querys && [1,1,1,1].map((items)=>(
                    
                    <div onClick={handleClickOnChatCard}> 
                        
                        <hr /><ChatCard />
                        
                        </div>
                    ))}
            </div>
           
            {/* Default whatsupp page */}

         </div> }
        </div>
        {/* <div className='right'> */}
       {!currentChat && <div className='w-[70%] flex flex-col items-center justify-center h-full'>
                <div className='max-w-[70%] text-center'>
                <img src="https://res.cloudinary.com/zarmariya/image/upload/v1662264838/whatsapp_multi_device_support_update_image_1636207150180-removebg-preview_jgyy3t.png" 
                alt="" 
                />
                <h1 className='text-4xl text-gray-600'>WhatsApp Web</h1>
                <p className='my-9'>
                Send and receive messages without keeping your phone online. 
                Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                </p>
                </div>
        </div> }
        
        {currentChat && <div className='w-[70%] relative bg-blue-200'>
            
           <div className='header absolute top-0 w-full bg-[#f0f2f5]'>
            <div className='flex justify-between'>
                <div className='py-3 space-x-4 flex items-center px-3'>
                    <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2025/11/07/21/25/tufted-titmouse-9943582_1280.jpg" alt="" />
                     <p>
                        username
                     </p>
                </div>
                <div className='py-3 flex space-x-4 items-center px-3'>
                    <AiOutlineSearch/>
                    <BsThreeDotsVertical/>
                </div>
            </div>
           </div>
                <div className='px-10 h-[85vh] overflow-y-scroll bg-blue-200'>
                  {/* Messages area */}

                    <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>
                         {[1,1,1,1,1].map((item,i)=><MessageCard isRequUserMessage={i%2===0} content={"message"} />)}
                    </div>
                </div>

                {/* Footer part */}
                <div className='footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl'>
                    <div className='flex justify-between items-center px-5 relative'>
                   
                       <BsEmojiSmile className='cursor-pointer'/>
                       <ImAttachment /> 
                    
                    <input className='py-2 outline-none bg-white pl-4 rounded-md w-[85%]'
                     type='text' onChange={(e)=>setContent(e.target.value)}
                     placeholder='Type message'
                     value={content}
                     onKeyPress={(e)=>{
                        if(e.key==="Enter"){
                            handleCreateNewMessage();
                            setContent("")
                        }
                     }}
                     />
                     <BsMicFill />
                     </div>
                </div>
            </div>}


        {/* </div> */}
      </div>
    </div>
  );
}

export default HomePage;