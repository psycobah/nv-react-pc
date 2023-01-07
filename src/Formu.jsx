import React, {useState} from 'react'
import { Form, FormControl,InputGroup  } from "react-bootstrap";

const Formu = ({setData,data}) => {


    const nombreRef = React.useRef("")
    const apellidoRef = React.useRef("")
    const fechaRef = React.useRef("")


    const funcion = (e) =>{

      console.log(e.target.value)
      
      console.log(fechaRef.current.value)
    }

  return (
    <Form className= "container">
          <h3>Completar Formulario</h3>
          <InputGroup className='gap-5'>
             <FormControl ref={nombreRef} type="text" name="nombre" placeholder="Nombre" onChange={()=>{setData({...data, nombre: nombreRef.current.value})}} ></FormControl><FormControl ref={apellidoRef} type="text" name="apellido" placeholder="Apellido" onChange={()=>{setData({...data, apellido: apellidoRef.current.value})}} ></FormControl>
             <FormControl ref={fechaRef} type="date" 
             onChange={funcion}></FormControl>
          </InputGroup>

              
         
        
          {/* <Row>
            
          <FormControl ref={nombreRef} type="text" name="nombre" placeholder="Nombre" onChange={()=>{setData({...data, nombre: nombreRef.current.value})}} ></FormControl><FormControl ref={apellidoRef} type="text" name="apellido" placeholder="Apellidos" onChange={()=>{setData({...data, apellido: apellidoRef.current.value})}} ></FormControl>
          </Row> */}
          
        </Form>
  )
}

export default Formu
