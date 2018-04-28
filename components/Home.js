import React from 'react'
import { Text, View, Image, Button } from 'react-native'
import styles from '../assets/appStyle'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    return this.props.navigation.navigate('Camera')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Is It My Dog?</Text>
        <View style={styles.picContainer}>
          <Image source={require('../assets/gooby.png')} style={styles.pic} />
        </View>
        <Button
          onPress={this.handlePress}
          title="TAKE A PICTURE AND FIND OUT"
          color="#379683"
        />
      </View>
    )
  }
}
