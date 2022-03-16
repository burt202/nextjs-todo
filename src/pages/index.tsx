/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */
import useSWR from "swr"

const fetcher = (query) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({query}),
  })
    .then((res) => res.json())
    .then((json) => json.data)

export default function Index() {
  const {data, error} = useSWR("{ tasks { id, name } }", fetcher)

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
