import React, { Component } from 'react'
import { Text, View, Image, Button, ActivityIndicator } from 'react-native'
import styles from '../assets/appStyle'
import Clarifai from 'clarifai'
import { API } from '../secrets'

export default class Results extends Component {
  constructor() {
    super()
    this.state = { results: null }
    this.handlePress = this.handlePress.bind(this)
  }
  async componentDidMount() {
    console.log('starting search')
    const clarifai = new Clarifai.App({
      apiKey: API
    })

    process.nextTick = setImmediate

    const response = await clarifai.models.predict('gooby', {
      base64: this.props.navigation.state.params.base64.base64
    })
    const { concepts } = response.outputs[0].data

    this.setState({ results: concepts[0].value > 0.8 })
  }
  handlePress() {
    return this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.resultsContainer}>
        {this.state.results === null ? (
          <ActivityIndicator size="large" color="#FFF" />
        ) : this.state.results === true ? (
          <View style={styles.resultsContainer}>
            <Text style={styles.true}>That's my dog!</Text>
            <Button
              onPress={this.handlePress}
              title="TRY AGAIN"
              color="#379683"
            />
          </View>
        ) : (
          <View style={styles.resultsContainer}>
            <Text style={styles.false}>That's not my dog.</Text>
            <Button
              onPress={this.handlePress}
              title="TRY AGAIN"
              color="#379683"
            />
          </View>
        )}
      </View>
    )
  }
}
