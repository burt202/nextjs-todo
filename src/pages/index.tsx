import {gql, useMutation, useQuery} from "@apollo/client"
import {useState} from "react"
import {
  AddTaskMutation,
  AddTaskMutationVariables,
  ListTasksQuery,
} from "../generated/apollo.types"

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
  const [newTaskText, setNewTaskText] = useState("")

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
    <div className="p-10">
      <div className="mx-40 my-10">
        <h1 className="text-3xl text-cyan-500">TODO List</h1>
        <ul className="my-10">
          {tasks.map((task, i) => (
            <li className="py-2 border-b-2" key={i}>
              {task.name}
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            className="border-2 p-2 mr-5"
            value={newTaskText}
            onChange={(e) => {
              setNewTaskText(e.target.value)
            }}
          />
          <button
            onClick={async () => {
              await addTask({variables: {name: newTaskText}})
              setNewTaskText("")
            }}
            className="rounded-lg bg-slate-500 text-white px-5 py-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
