import { withSSRAuth } from "../utils/withSSRAuth";
import { setupApiClient } from "../services/api";


export default function Dashboard({user}) {
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