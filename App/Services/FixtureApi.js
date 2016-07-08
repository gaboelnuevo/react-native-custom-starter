function fakeLogin(credentials){
  if (credentials.password === '') {
    return {
      ok: false,
      data: null
    }
  }
  return {
    ok: true,
    data: {
      token: 'FAKE'
    }
  }
}


export default {
  //FAKE LOGIN
  userLogin: (credentials)  => {
    return fakeLogin(credentials)
  }
}
