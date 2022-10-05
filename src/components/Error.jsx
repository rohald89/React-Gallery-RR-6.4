import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();

  return (
    <li className="not-found">
        <h3>{error.message}</h3>
        <p>You search did not return any results. Please try again.</p>
    </li>
  )
}

export default Error
