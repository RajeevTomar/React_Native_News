import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import NewsListScreen from '../screens/NewsListScreen';
import NewsArticleScreen from '../screens/NewsArticleScreen';
import Colors from '../themes/Colors';




const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsList" screenOptions={{
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
          options={{ title: 'HEADLINES', headerTitleAlign:'center'}}
        />
        <Stack.Screen name="Article"
          component={NewsArticleScreen}
          options={{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;