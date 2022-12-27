import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

import Home from '../Home'

const protectedRoute = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route exact path="/" component={Home} />
}

export default protectedRoute
