import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  picsGallery: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 5
  },
  head: {
    color: '#d6492c',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 60
  },
  sub: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 30
  },
  load: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 60
  },
  gallery: {
    height: 100,
    width: 100,
    margin: 5
  },
  pic: {
    height: 200,
    width: 150,
    borderRadius: 5
  },
  picContainer: {
    height: 200,
    width: 150,
    marginTop: 30,
    marginBottom: 50
  },
  selected: {
    backgroundColor: '#FFF',
    opacity: 0.5
  },
  nav: {
    backgroundColor: '#c4a18b'
  }
})
