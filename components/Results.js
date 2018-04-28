import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'
import styles from '../assets/appStyle'
import Clarifai from 'clarifai'
import { API } from '../secrets'

export default class Results extends Component {
  constructor() {
    super()
    this.state = { uri: '' }
  }
  componentDidMount() {
    this.setState({ uri: this.props.navigation.state.params.uri })
    const clarifai = new Clarifai.App({
      apiKey: API
    })
    process.nextTick = setImmediate
    console.log('HELLO')
    base.getBase64String(this.state.uri, (_, base64string) =>
      console.log(base64string)
    )
    clarifai.models
      .predict('gooby', 'https://samples.clarifai.com/metro-north.jpg')
      .then(
        function(response) {
          const { concepts } = response.outputs[0].data
        },
        function(err) {
          console.log(err)
        }
      )
  }
  render() {
    return <Text style={styles.sub}>Hello there.</Text>
  }
}
