import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Button
} from 'react-native'
import { Camera, Permissions } from 'expo'
import styles from '../assets/appStyle'

export default class CameraExample extends React.Component {
  constructor() {
    super()
    this.state = {
      takingPic: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }
    this.snap = this.snap.bind(this)
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  async snap() {
    if (this.camera) {
      console.log('Snap Callled')
      this.setState({ takingPic: true }, () => {
        return console.log('State Set')
      })
      let pic = await this.camera.takePictureAsync({
        quality: 0.7,
        base64: true
      })
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
              {this.state.takingPic ? (
                <View style={styles.cameraLoad}>
                  <ActivityIndicator size="large" color="#FFF" />
                </View>
              ) : (
                <View />
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
