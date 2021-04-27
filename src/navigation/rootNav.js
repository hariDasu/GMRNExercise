import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from '../store/createStore';
import {HomeScreen} from '../screens/HomeScreen';
import RecordsList from '../screens/RecordsList';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Records" component={RecordsList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
