import React, { Component } from 'react'
import { View, StyleSheet ,Text} from 'react-native'

const Notification = (props) => {
   return (
      <View style = {styles.container}>
        <Text>Notification</Text>
      </View>
   )
}

export default Notification

const styles = StyleSheet.create ({
   container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      height: 600
   },
   redbox: {
      width: 100,
      height: 100,
      backgroundColor: 'red'
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue'
   },
   blackbox: {
      width: 100,
      height: 100,
      backgroundColor: 'black'
   },
})