import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../themes/Colors';


import NewsListScreen from '../screens/NewsListScreen'
import NewsDetailScreen from '../screens/NewsDetailScreen'

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
      initialRouteName="Home"
      >
        <Stack.Screen name="NewsList"
          component={NewsListScreen}
          options={{ title: 'HEADLINES' }}
        />
         <Stack.Screen name="NewsDetail"
          component={NewsDetailScreen}
          options={{ title: 'Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;