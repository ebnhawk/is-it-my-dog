import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'
import Results from './components/Results'
import Camera from './components/Camera'
import { Permissions } from 'expo'

const RootStack = StackNavigator(
  {
    Home: { screen: Home },
    Results: { screen: Results },
    Camera: { screen: Camera }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { backgroundColor: '#000' },
      headerTintColor: '#FFF'
    }
  }
)

const alertIfRemoteNotificationsDisabledAsync = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
  if (status !== 'granted') {
    alert('Hey! You might want to enable notifications for my app.')
  }
}

export default class App extends Component {
  componentDidMount() {
    alertIfRemoteNotificationsDisabledAsync()
  }
  render() {
    return <RootStack />
  }
}
