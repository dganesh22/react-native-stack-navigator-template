import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomePage(props) {
  return (
    <View style={css.container}>
      <View style={css.btnTab}>
            <Button title='about screen' onPress={() => props.navigation.navigate('About')} />
            <Button title='contact screen' onPress={() => props.navigation.navigate('Contact')} />
      </View>
    </View>
  )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10
    },
    btnTab: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
})