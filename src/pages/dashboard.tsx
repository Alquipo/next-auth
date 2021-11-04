import { useContext, useEffect } from "react"

import { AuthContext } from "../contexts/AuthContext"
import { withSSRAuth } from "../utils/withSSRAuth";
import { api } from "../services/apiClient";
import { setupApiClient } from "../services/api";


export default function Dashboard({user}) {
  // const { user } = useContext(AuthContext)

  // useEffect(() => {
  //   api.get('/me')
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error))
  // }, [])
  console.log(user)

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const {data} = await apiClient.get('/me');

  
  return {
    props: {
      user: data
    }
  }
})