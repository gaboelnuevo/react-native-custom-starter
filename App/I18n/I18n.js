import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// All translations for the app go here:
I18n.translations = {
  en: {
    signIn: 'Sign In',
    logOut: 'Log Out',
    forgotPassword: 'Forgot Password',
    username: 'Username',
    password: 'Password',
    cancel: 'Cancel',
    welcome: 'Welcome',
    login: 'Login'
  },
  es: {
    signIn: 'Entrar',
    logOut: 'Salir',
    forgotPassword: 'Recordar Contraseña',
    username: 'Usuario',
    password: 'Password',
    cancel: 'Cancelar',
    welcome: 'Bienvenido',
    login: 'Entrar'
  },
}

export default I18n
