import React, { useState } from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const[value,setvalue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky' >
            <Toolbar><NavLink to='/' style={{color:"white"}}>
            <Typography><LibraryBooksIcon/></Typography>
            </NavLink>
             <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setvalue(val)} >
                <Tab LinkComponent={NavLink} to="/add" label="AddProduct"/>
                <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                <Tab LinkComponent={NavLink} to="/AboutUs" label="AboutUs"/>
             </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}
