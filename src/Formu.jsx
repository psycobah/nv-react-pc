import React from 'react'
import { Form, FormControl } from "react-bootstrap";

const Formu = ({setData,data}) => {

    const nombreRef = React.useRef("")
  
    

  return (
    <Form>
          <h3>Completar Formulario</h3>
          <FormControl ref={nombreRef} type="text" name="nombre" placeholder="Nombre" onChange={()=>{setData({...data, nombre: nombreRef.current.value})}} ></FormControl>
        </Form>
  )
}

export default Formu
