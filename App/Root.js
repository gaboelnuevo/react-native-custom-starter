import React from 'react'
import { View, Text, Navigator, StatusBar } from 'react-native'
import {Router, Routes, NavigationBar} from './Navigation/'
import configureStore from './Store/Store'
import { Provider } from 'react-redux'
import Actions from './Actions/Creators'
import Drawer from 'react-native-drawer'
import PushNotification from 'react-native-push-notification'
import DebugSettings from './Config/DebugSettings'
import AppMenu from './Components/AppMenu'

// Styles
import styles from './Containers/Styles/RootStyle'

const store = configureStore()

// https://github.com/zo0r/react-native-push-notification
PushNotification.configure({

  // (optional) Called when Token is generated (iOS and Android)
  onRegister: (token) => {
    if (__DEV__) console.log('TOKEN:', token)
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: (notification) => {
    if (__DEV__) console.log('NOTIFICATION:', notification)
  },

  // ANDROID ONLY: (optional) GCM Sender ID.
  senderID: 'YOUR GCM SENDER ID',

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: false,

  /**
    * IOS ONLY: (optional) default: true
    * - Specified if permissions will requested or not,
    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    */
  requestPermissions: false
})

export default class RNBase extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      hideNavbar: false
    };
  }

  componentWillMount () {
    const { dispatch } = store
    dispatch(Actions.startup())
  }

  componentDidMount () {
    this.navigator.drawer = this.drawer
  }

  renderDrawerContent () {
    return (
      <View>
        <AppMenu navigator={this.navigator}></AppMenu>
      </View>
    )
  }

  renderNavBar () {
      if(this.state.hideNavbar === true){
        return null;
      }
      return NavigationBar.render();
  }

  navigatorWillFocus (route){
    if(route){
      if(route.hideNavbar===true){
        this.setState({hideNavbar: true});
      }else{
        this.setState({hideNavbar: false});
      }
    }
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={store}>
        <View style={styles.applicationView}>
          <StatusBar
            barStyle='light-content'
          />

          <Drawer
            ref={(ref) => { this.drawer = ref }}
            content={this.renderDrawerContent()}
            style={styles.drawer}
            openDrawerOffset={100}
            type='static'
            tapToClose
          >
            <Navigator
              ref={(ref) => { this.navigator = ref }}
              initialRoute={Routes.IntroScreen}
              configureScene={Router.configureScene}
              renderScene={Router.renderScene}
              navigationBar={this.renderNavBar()}
              style={styles.container}
              onWillFocus={this.navigatorWillFocus.bind(this)}
            />
          </Drawer>
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}
