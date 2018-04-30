import React, { Component } from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  TouchableHighlight
} from 'react-native'
import { Camera, Permissions, ImagePicker } from 'expo'
import styles from '../assets/appStyle'

export default class MyCamera extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }
    this.snap = this.snap.bind(this)
    this.selectImage = this.selectImage.bind(this)
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  async snap() {
    if (this.camera) {
      console.log('Snap Callled')
      this.setState({ loading: true }, () => console.log('State Set'))
      let pic = await this.camera.takePictureAsync({
        quality: 0.7,
        base64: true
      })
      this.props.navigation.navigate('Results', {
        base64: pic
      })
    }
  }

  async selectImage() {
    this.setState({ loading: true }, () => console.log('Starting Image Select'))
    let pic = await ImagePicker.launchImageLibraryAsync({
      quality: 0.7,
      base64: true
    })
    this.setState({ loading: false }, () => console.log('Acquired Base64'))
    if (!pic.cancelled) {
      this.props.navigation.navigate('Results', {
        base64: pic
      })
    }
  }

  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref
            }}
            style={{ flex: 1 }}
            type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent'
              }}>
              {this.state.loading ? (
                <View style={styles.cameraLoad}>
                  <ActivityIndicator size="large" color="#FFF" />
                </View>
              ) : (
                <View>
                  <TouchableHighlight onPress={this.selectImage}>
                    <Text style={styles.select}>SELECT FROM GALLERY</Text>
                  </TouchableHighlight>
                </View>
              )}
              <View style={styles.snap}>
                <Button
                  onPress={this.snap}
                  title="TAKE PICTURE"
                  color="#d6492c"
                />
              </View>
            </View>
          </Camera>
        </View>
      )
    }
  }
}
