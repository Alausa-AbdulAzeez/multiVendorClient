import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL, defaultConfiguration } from '../functions/requestMethods'
import { useParams } from 'react-router-dom'

const UserActivationPage = () => {
  // URL PARAMS
  let { activation_token } = useParams()

  // FUNCTION TO CALL THE ACTIVATE USER ENDPOINT
  const activateUser = async () => {
    console.log(activation_token)
    try {
      await axios
        .post(`${BASE_URL}/user/activate`, { activation_token })
        .then((res) => console.log(res))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    activateUser()
  }, [])
  return (
    <div className='flex items-center h-screen bg-red-200 justify-center'></div>
  )
}

export default UserActivationPage
