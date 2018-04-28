import React from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Camera, Permissions } from 'expo'

export default class CameraExample extends React.Component {
  constructor() {
    super()
    this.state = {
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
      console.log('yes camera')
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
                backgroundColor: 'transparent',
                flexDirection: 'row'
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center'
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  })
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}
                  Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row'
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center'
                }}
                onPress={this.snap}>
                <Text>Snap</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )
    }
  }
}
