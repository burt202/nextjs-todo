import {gql, useQuery} from "@apollo/client"
import {ListTasksQuery} from "./generated.apollo.types"

const LIST_TASKS_QUERY = gql`
  query ListTasks {
    tasks {
      id
      name
    }
  }
`

export default function Index() {
  const {data, error} = useQuery<ListTasksQuery>(LIST_TASKS_QUERY)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const {tasks} = data

  return (
    <div>
      {tasks.map((task, i) => (
        <div key={i}>{task.name}</div>
      ))}
    </div>
  )
}
