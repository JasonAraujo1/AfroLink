import React from 'react'

export async function fetchApiUsers() {
  try{
    const response = await fetch('https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users')
    const data = await response.json()
    return data
  }catch(error){
    console.log("Error in fetchApiUsers: ", error)
  }
}
