import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name='Home' component={HomePage} />
              <Stack.Screen name='About' component={AboutPage} />
              <Stack.Screen name='Contact' component={ContactPage} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}