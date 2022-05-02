import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Heading, NativeBaseProvider, Image, Button } from "native-base"

const WalkthroughStart = ({ navigation }) => {
//   const userId = navigation.getParam('id');
//   console.log(userId);
// onPress={() =>navigation.navigate('Walkthrough1')}
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={{height: 75}}></View>
      <Image style={{width: 375, height: 250}} source={require('../../images/CelebratingImage.png')} alt="Yay! New User" />
      <View style={{height: 35}}></View>
      <Heading style={styles.textHeading} size="xl">Congratulations!</Heading>
      <View style={{height: 20}}/>
      <View style={styles.textBodyContainer}>
      <Heading style={styles.textHeading} size="sm">Your account was successfully created. Take a quick walkthrough of the app before you get started.</Heading>
      </View>
      <View style={{height: 20}}/>
      <Button mt="5" borderRadius="full" colorScheme="secondary" style={{width: '85%', height: '7%'}} onPress={() => navigation.navigate('Walkthrough1')}>
      {/* ,{id: userId} */}
        Let's Go
      </Button>
      <View style={styles.spaceBtFooter} />
    </View>
    </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({
  textHeading: {
    color: 'black',
    textAlign: 'center',
  },
  textBody: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1
  },
  spaceHeading: {
    height: 55,
  },
  spaceBody: {
    height: 40,
  },
  textBodyContainer: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  spaceBtFooter: {
    height: 55,
  },
  spaceFooter: {
    width: 250,
  },
});

export default WalkthroughStart;