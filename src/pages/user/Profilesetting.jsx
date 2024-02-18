import React from 'react'
import Sidebar from '../../components/Sidebar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { SlPencil } from "react-icons/sl";
const Profilesetting = () => {
  return (
    <div>
    <div className=" sidebarcontainer container-fluid">
      <div className="row">
        <div className="sidebaroption col-3 ">
          <Sidebar />
        </div>
        <div className="sidebarcontent col-8 mx-1 my-4">
            {/* your code  */}
            <Container maxWidth="l">
        <Box sx={{ bgcolor: '#fff', height: '100vh' }} className="sidebarcontentprofiles">
       
            <div className="nameprofile mt-4">Mansi Kumari</div>
            <div className="linepro w-50 my-4"></div>
      <div className="upperprofile my-4">
      <Avatar src="/broken-image.jpg" className='upperprofileavtar'/>
         <div className="iconpencilpro">
         <SlPencil fontSize={20}/>
         </div>
      </div>
    <div className="middileprofile mx-5 mt-5">
    <TextField id="filled-basic" label="Name" variant="filled" className='w-100 my-2' required/>
    <TextField id="filled-basic" label="Website" variant="filled" className='w-100 my-2'/>
    <TextField id="filled-basic" label="Instagram" variant="filled" className='w-100 my-2'/>
    <TextField id="filled-basic" label="Twitter" variant="filled" className='w-100 my-2'/>
    <TextField id="filled-basic" label="Facebook" variant="filled" className='w-100 my-2'/>
    <TextField id="filled-basic" label="Write Something About you" variant="filled" className='w-100 my-2'/>
    </div>
    <div className="lowerprofile w-100 mt-3 ">
 <button className='btn  btncancelpro'>Cancel</button>
 <button className='btn btnsavepro'>Save</button>
    </div>
        </Box>
      
      </Container>
            </div>
      </div>
    </div>
  </div>
  )
}

export default Profilesetting
