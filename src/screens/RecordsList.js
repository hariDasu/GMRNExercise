import React, {useState, useCallback} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {GenericButton} from '../components/';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../actions';
import {RecordsList as RecordsFlatList} from '../components/RecordsList';

const RecordsList = ({navigation}) => {
  const records = useSelector((state) => state.records.records);
  return (
    <View style={styles.containerStyle}>
      <RecordsFlatList records={records} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

export default React.memo(RecordsList);
