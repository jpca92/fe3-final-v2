import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [dentist, setDentist] = useState({
    name: '',
    email: '',
    phone: '',
    website:'',
  })


  const {id} = useParams()
  useEffect(()=>{
    const dataDentist = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.json()
      setDentist(data)
    } 
    dataDentist()
  },[id])

  
  return (
    <div className='detail-container'>
      <h1>Detail Dentist {dentist.id} </h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>Email:</td>
            <td>Phone:</td>
            <td>Website:</td>
          </tr>
          <tr>
            <td>{dentist.name}z</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail