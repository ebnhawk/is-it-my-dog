import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  head: {
    color: '#d6492c',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 60
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  true: {
    color: '#379683',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 60
  },
  false: {
    color: '#d6492c',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 60
  },
  sub: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 30
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
  select: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 5,
    textShadowOffset: { width: 1, height: 1 },
    color: '#FFF'
  },
  snap: {
    flex: 1,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  gallery: {
    flex: 1,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cameraLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
