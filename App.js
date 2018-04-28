import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'
import PicSelect from './components/PicSelect'
import Results from './components/Results'
import { Permissions } from 'expo'

const RootStack = StackNavigator(
  {
    Home: { screen: Home },
    PicSelect: { screen: PicSelect },
    Results: { screen: Results }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { backgroundColor: '#000' }
    }
  }
)

const alertIfRemoteNotificationsDisabledAsync = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
  if (status !== 'granted') {
    alert('Hey! You might want to enable notifications for my app.')
  }
}

const getPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA)
  if (status === 'granted') {
    console.log('Permissions Granted')
  } else {
    throw new Error('Permissions denied.')
  }
}

export default class App extends Component {
  componentDidMount() {
    alertIfRemoteNotificationsDisabledAsync()
    getPermissions()
  }
  render() {
    return <RootStack />
  }
}
