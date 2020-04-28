import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../themes/Colors';


import NewsListScreen from '../screens/NewsListScreen'

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Colors.header,
        },
        headerTintColor: Colors.snow,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="NewsList"
          component={NewsListScreen}
          options ={{title:'News'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;