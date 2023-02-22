import { useRouter } from "next/router";


export default function ClientProjectsPage() {
  const router = useRouter()

  console.log(router);

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: 'sam',
        clientprojectid: 'projecta'
      }
    })
  }

  return <div>
    <h1>The Projects of a Given Client</h1>
    <button onClick={loadProjectHandler}> Load Projects A</button>
  </div>
}