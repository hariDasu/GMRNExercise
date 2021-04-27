import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {GenericButton} from '../components/';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../actions';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records.records);
  const [artist, setArtist] = useState('');
  const searchDisabled = artist === '';
  const inputValue = !searchDisabled ? artist : '';
  const fetchRecords = useCallback(() => {
    dispatch(actions.getRecordsRequest(artist));
    return navigation.navigate('Records', {records});
  }, [dispatch, artist, records, navigation]);

  return (
    <View style={styles.containerStyle}>
      <TextInput
        style={styles.input}
        onChangeText={setArtist}
        value={inputValue}
        placeholder="Enter artist name"
        keyboardType="default"
      />
      <GenericButton
        onPress={fetchRecords}
        disabled={searchDisabled}
        title="Search Records"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    height: 40,
    width: '60%',
    borderTopWidth: 0,
    borderBottomWidth: 1,
  },
});
