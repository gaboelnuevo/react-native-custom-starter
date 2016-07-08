import React from 'react'
import { ScrollView, View, TouchableOpacity, Text, ListView} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/AppMenuStyle'

import MenuItems from '../Navigation/MenuItems'

import {Colors, Metrics } from '../Themes/'

import Gravatar from 'react-native-avatar-gravatar'

export default class AppMenu extends React.Component {

  static propTypes = {
    navigator: React.PropTypes.object,
    username: React.PropTypes.string,
    email: React.PropTypes.string
  }

  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
       dataSource: ds.cloneWithRows(MenuItems)
    }
    this.renderRow = this.renderRow.bind(this);
    this.tapRow = this.tapRow.bind(this);
  }

  tapRow(rowData){
    this.props.navigator.drawer.toggle();
  }

  renderRow(rowData){
    return (
      <TouchableOpacity onPress={() => this.tapRow(rowData)}>
        <View style={styles.row}>
          <Icon name={rowData.icon}
            size={Metrics.icons.medium}
            color={Colors.steel}
            style={styles.rowIcon}
          />
          <Text style={styles.rowLabel} numberOfLines={1} >{rowData.tittle}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderHeader(){
    return (
      <View style={styles.menuHeader}>
        <View style={styles.avatar}>
          <Gravatar emailAddress={this.props.email} size={120} />
        </View>
        <Text numberOfLines={1}>{this.props.username}</Text>
      </View>
    )
  }

  render () {
    return (
      <View>
        {this.renderHeader()}
        <ScrollView style={styles.container}>
          <ListView dataSource={this.state.dataSource}  renderRow={this.renderRow} />
        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged,
    username: state.login.username || '',
    email: state.login.email || ''
  }
}

export default connect(mapStateToProps)(AppMenu)
