import React, { Component } from 'react'
import {
  View,
  CameraRoll,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'
import styles from '../assets/appStyle'

export default class PicSelect extends Component {
  constructor() {
    super()
    this.state = {
      photos: '',
      selected: ''
    }
    this.handlePicPress = this.handlePicPress.bind(this)
  }
  static navigationOptions = {
    title: 'Select Photo',
    headerStyle: styles.nav
  }

  componentDidMount() {
    CameraRoll.getPhotos({
      first: 30,
      assetType: 'Photos'
    })
      .then(result => {
        this.setState({ photos: result.edges })
      })
      .catch(err => {
        console.log(err)
      })
  }
  handlePicPress(item) {
    this.setState({ selected: item.node.image.uri })
    Alert.alert(
      'Is this the picture you want to use?',
      'There are many objects in the world, but only one of them is my dog.',
      [
        {
          text: 'OK',
          onPress: () =>
            this.props.navigation.navigate('Results', {
              uri: this.state.selected
            })
        },
        { text: 'Cancel', onPress: () => console.log('Cancelled') }
      ]
    )
  }
  render() {
    return (
      <View style={styles.picsGallery}>
        {this.state.photos !== '' ? (
          <View>
            <FlatList
              data={this.state.photos}
              numColumns={3}
              keyExtractor={(obj, i) => i}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.handlePicPress(item)}>
                  <Image
                    style={styles.gallery}
                    source={{ uri: item.node.image.uri }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        ) : (
          <ActivityIndicator size="large" color="#FFF" />
        )}
      </View>
    )
  }
}
