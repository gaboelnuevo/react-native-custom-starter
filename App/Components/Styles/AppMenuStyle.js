'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: Colors.transparent,
  },
  menuHeader: {
    backgroundColor: Colors.silver,
    borderColor: Colors.white,
    flexDirection:'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  avatar: {
    marginRight: 15,
  },
  row: {
    backgroundColor: Colors.transparent,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.silver,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowIcon: {
    marginRight: 10
  },
  rowLabel: {
    flex: 1,
    fontWeight: 'bold',
    color: Colors.charcoal
  }
})
