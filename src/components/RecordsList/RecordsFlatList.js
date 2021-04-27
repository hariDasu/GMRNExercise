import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import {colors} from '../../styles/colors';
import {RecordsListItem} from './RecordsListItem';

export const RecordsList = ({records}) => {
  const renderRecord = ({item}) => {
    const {
      artistName,
      releaseDate,
      trackName,
      primaryGenreName,
      trackPrice,
      artworkUrl100: artWorkUrl,
    } = item;
    return (
      <RecordsListItem
        artistName={artistName}
        releaseDate={releaseDate}
        trackName={trackName}
        primaryGenreName={primaryGenreName}
        trackPrice={trackPrice}
        artWorkUrl={artWorkUrl}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={records}
        renderItem={renderRecord}
        keyExtractor={(item) => item.trackId.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: colors.primaryBgColor,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
