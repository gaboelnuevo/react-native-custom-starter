import { StyleSheet } from 'react-native'
import { Colors, Metrics, CommonStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  logoContainer: {
    marginTop: Metrics.navBarHeight * 2,
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },
  messageContainer: {
    margin: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginBox: {
    padding: 25,
    marginBottom: 50
  },
  loginButton: {
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  }
})
