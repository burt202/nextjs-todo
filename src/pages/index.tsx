import {gql, useMutation, useQuery} from "@apollo/client"
import {
  AddTaskMutation,
  AddTaskMutationVariables,
  ListTasksQuery,
} from "./generated.apollo.types"

export const LIST_TASKS_QUERY = gql`
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
    {refetchQueries: ["ListTasks"]},
  )

  if (listTasksError) return <div>Failed to load</div>
  if (!listTasksData) return <div>Loading...</div>

  const {tasks} = listTasksData

  return (
    <div style={{padding: 30}}>
      <div className="m-40">
        <h1 className="text-3xl text-cyan-500">
          Tailwind CSS 3 with{" "}
          <span className="font-sans text-gray-700 shadow-md shadow-cyan-500/30 px-2 py-2 font-light rounded-full">
            Next.JS
          </span>
        </h1>
      </div>
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
