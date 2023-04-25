import { Box, Button, FormLabel, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
    const history = useNavigate();
    const [checked,setChecked] = useState(false)
    const[inputs,setInputs]  = useState({
        name:"",
        description:"",
        price:"",
        aurthor:"",
        available:"",
        image:""

    });
    const sendRequest = async()=>{
        await axios.post('http://localhost:5000/books',{
            name:String(inputs.name),
            aurthor:String(inputs.aurthor),
            description:String(inputs.description),
            price:Number(inputs.price),
            image: String(inputs.image),
            available:Boolean(checked)
        }).then((res)=>res.data);
    }
    const handleChange = (e)=> {
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        // console.log(e.target.name,"Value", e.target.value);
    };
    const handleSubmit = (e)=>{
         e.preventDefault();
         console.log(inputs,checked);
         sendRequest().then(()=>history('/books'))
    }
  return <form onSubmit={handleSubmit}>
    <Box display= 'flex' flexDirection='column' justifyContent='center' maxWidth= {700} alignContent={'center'} marginLeft={'auto'} marginRight={'auto'} alignSelf={'center'} marginTop={'20px'}>
    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'/>
    <FormLabel>Aurthor</FormLabel>
    <TextField value={inputs.aurthor} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='aurthor'/>
    <FormLabel>Description</FormLabel>
    <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'/>
    <FormLabel>Price</FormLabel>
    <TextField value={inputs.price} onChange={handleChange} type='Number' margin='normal' fullWidth variant='outlined' name='price'/>
    <FormLabel>Image</FormLabel>
    <TextField value={inputs.image} onChange={handleChange}  margin='normal' fullWidth variant='outlined' name='image'/>
    <FormControlLabel  control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}  />} label="Available" />
    <Button variant='contained' type='submit'>AddBook</Button>
    </Box>

  </form>
    
  
}

export default AddBook