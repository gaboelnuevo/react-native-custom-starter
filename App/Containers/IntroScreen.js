import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import I18n from '../I18n/I18n.js'

// Styles
import styles from './Styles/IntroScreenStyle'

export default class PresentationScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
    this.handlePressLogin = this.handlePressLogin.bind(this)
    this.props.isLogged = false;
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    isLogged: PropTypes.bool
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  componentWillReceiveProps (newProps) {

  }

  // fires when the user presses the login button
  handlePressLogin () {
    const { navigator } = this.props
    const route = Routes.LoginScreen
    navigator.push(route)
  }

  renderLoginButton () {
    if(this.props.isLogged){
      return null
    }
    return (
      <View style={styles.loginBox}>
        <TouchableOpacity onPress={this.handlePressLogin}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>{I18n.t('signIn')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }


  render () {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>
	       {this.renderLoginButton()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps)(PresentationScreen)
