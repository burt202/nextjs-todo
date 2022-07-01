import {GraphQLClient} from "graphql-request"
import {GetServerSideProps} from "next"
import config from "../config"
import {ListTasksQuery} from "../generated/apollo.types"
import {LIST_TASKS_QUERY} from "."

interface Props {
  tasks: Array<{id: string; name: string}>
}

export default function Another(props: Props) {
  const {tasks} = props

  return (
    <div className="p-10">
      {tasks.map((task, i) => (
        <div key={i}>{task.name}</div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await new GraphQLClient(
    config.gqlEndpoint,
  ).request<ListTasksQuery>(LIST_TASKS_QUERY)

  return {
    props: {
      tasks: data.tasks,
    },
  }
}
