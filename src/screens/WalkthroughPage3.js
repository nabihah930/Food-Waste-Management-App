import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Heading, NativeBaseProvider, Image, Button } from "native-base"

const WalkthroughAnalytics = ({ navigation }) => {
//   const userId = navigation.getParam('id');
//   console.log(userId);
// onPress={() =>navigation.navigate('Profile')}
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={{height: 75}}></View>
      <Image style={{width: 375, height: 250}} source={require('../../images/AnalysisImage.png')} alt="Post Request" />
      <View style={styles.spaceHeading}></View>
      <Heading style={styles.textHeading} size="xl">Analytical Breakdown</Heading>
      <View style={styles.spaceBody}></View>
      <View style={styles.textBodyContainer}>
        <Text style={styles.textBody}>Chech out our cool and easy graphs to know just how much food you saved and people you helped.</Text>
      </View>
      <View style={styles.spaceBody} />
      <Button mt="5" borderRadius="full" colorScheme="secondary" style={{width: '85%', height: '7%'}} onPress={() => navigation.navigate('mainFlow')} >
      {/* ,{id: userId} */}
        Get Started
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

export default WalkthroughAnalytics;