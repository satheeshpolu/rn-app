import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    padding: 15,
  },
  listContainer: {
    height: Dimensions.get('screen').height - 380,
    gap: 20,
  },
  formSection: {
    gap: 10,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    color: '#010128',
  },
  noteSection: {
    gap: 10,
  },
  emptyMsg: {
    textAlign: 'center',
  },
  searchBar: {
    justifyContent: 'space-evenly',
  },
});

export default styles;
