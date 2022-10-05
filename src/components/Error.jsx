import { useRouteError } from "react-router-dom"

const Error = () => {
  const { message } = useRouteError();

  return (
    <li className="not-found">
        <h3>{message}</h3>
        <p>You search did not return any results. Please try again.</p>
    </li>
  )
}

export default Error

/** 4: useRouteError
 * This hook returns anything that was thrown when running an `action`, `loader` or `render` function
 */
