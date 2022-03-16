import {gql, useMutation, useQuery} from "@apollo/client"
import {
  AddTaskMutation,
  AddTaskMutationVariables,
  ListTasksQuery,
} from "./generated.apollo.types"

const LIST_TASKS_QUERY = gql`
  query ListTasks {
    tasks {
      id
      name
    }
  }
`

const ADD_TASK_MUTATION = gql`
  mutation AddTask($name: String!) {
    addTask(name: $name) {
      id
    }
  }
`

export default function Index() {
  const {data: listTasksData, error: listTasksError} =
    useQuery<ListTasksQuery>(LIST_TASKS_QUERY)

  const [addTask] = useMutation<AddTaskMutation, AddTaskMutationVariables>(
    ADD_TASK_MUTATION,
  )

  if (listTasksError) return <div>Failed to load</div>
  if (!listTasksData) return <div>Loading...</div>

  const {tasks} = listTasksData

  return (
    <div style={{padding: 30}}>
      {tasks.map((task, i) => (
        <div key={i}>{task.name}</div>
      ))}
      <button
        onClick={async () => {
          await addTask({variables: {name: "uygdhisjdfsko"}})
        }}
      >
        Add
      </button>
    </div>
  )
}
