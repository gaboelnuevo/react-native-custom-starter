import { fork } from 'redux-saga/effects'
import API from '../Services/Api'

import { watchStartup } from './StartupSaga'
import loginUser from './LoginSaga'


// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
const api = API.create()

// start the daemons
export default function * root () {
  yield fork(watchStartup)
  yield fork(loginUser(api).watchLoginAttempt)
}
