import React from 'react';
import {Platform, StyleSheet, Image, Text, View} from 'react-native';

export const RecordsListItem = ({
  artistName = 'Artist',
  trackName = 'Song Title',
  releaseDate = 'Release Date',
  primaryGenreName = 'Genre',
  trackPrice = '$1.29',
  artWorkUrl = '',
}) => (
  <View style={styles.recordContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: artWorkUrl}} />
    </View>
    <View style={styles.trackDetailsContainer}>
      <Text>
        {artistName} - {trackName}
      </Text>
      <Text>Genre: {primaryGenreName}</Text>
      <Text>Price: {trackPrice}</Text>
      <Text>Released: {releaseDate}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  recordContainer: {
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 3,
        shadowRadius: 2,
      },
    }),
  },
  imageContainer: {
    paddingRight: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  trackDetailsContainer: {
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'center',
  },
});
