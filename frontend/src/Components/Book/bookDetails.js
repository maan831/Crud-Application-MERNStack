import axios from 'axios';
import { Box, Button, FormLabel, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetails = () => {
    const [inputs,setInputs] = useState({});
    const [checked,setChecked] = useState(false);
    const id = useParams().id;
    const history = useNavigate();
    useEffect(()=>{
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:5000/books/${id}`).then(res=>res.data).then(data=>setInputs(data.book))
        }
        fetchHandler()  
    },[id]);
   
    const sendRequest = async()=>{
        await axios.put(`http://localhost:5000/books/${id}`,{
            name:String(inputs.name),
            aurthor:String(inputs.aurthor),
            description:String(inputs.description),
            price:Number(inputs.price),
            image: String(inputs.image),
            available:Boolean(checked)
        }).then(res=>res.data);
    }

    const handleSubmit = (e)=>{
     e.preventDefault();
     sendRequest().then(()=>history('/books'));
    }
    const handleChange = (e)=>{
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
  return (
    <div>{inputs &&(<form onSubmit={handleSubmit}>
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
    <Button variant='contained' type='submit'>UpdateBook</Button>
    </Box>

  </form>)}</div>
  )
}

export default BookDetails