import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <Text style={styles.desc}>This is the Explore page. Coming soon.</Text>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#000000"
  }, 
  header: {
    fontSize: 50,
    color: 'white'
  },
  desc: {
    color: 'white'
  }
})