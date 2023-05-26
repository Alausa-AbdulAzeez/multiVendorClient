import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL, defaultConfiguration } from '../functions/requestMethods'
import { useParams } from 'react-router-dom'

const UserActivationPage = () => {
  // URL PARAMS
  let { activation_token } = useParams()

  // FUNCTION TO CALL THE ACTIVATE USER ENDPOINT
  // const activateUser = async ()=>{
  //   try {
  //     axios.post(`${BASE_URL}/`,activation_token,defaultConfiguration )
  //   } catch (error) {

  //   }
  // }

  // useEffect(()=>{

  // },[])
  return (
    <div className='flex items-center h-screen bg-red-200 justify-center'></div>
  )
}

export default UserActivationPage
