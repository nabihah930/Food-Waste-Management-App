import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Heading, NativeBaseProvider, Box, HStack, Progress, Image, Link } from "native-base"

const WalkthroughDonate = ({ navigation }) => {
//   const userId = navigation.getParam('id');
//   console.log(userId);
// navigation.navigate('Walkthrough2')
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={{height: 75}}></View>
      <Image style={{width: 375, height: 250}} source={require('../../images/GivingFood.png')} alt="Waste Less" />
      <View style={styles.spaceHeading}></View>
      <Heading style={styles.textHeading} size="xl">Save your leftovers</Heading>
      <View style={styles.spaceBody}></View>
      <View style={styles.textBodyContainer}>
        <Text style={styles.textBody}>Have some food left over? Well share it with others by simply creating a post on our dashboard.</Text>
      </View>
      <View style={styles.spaceBody} />
      <Box w="40%" maxW="400">
        <Progress colorScheme="secondary" value={33.3} mx="4" />
      </Box>
      <View style={styles.spaceBtFooter} />
      <HStack mt="6" justifyContent="center">
        <Link _text={{ color: "black", fontWeight: "normal", fontSize: "md", }}>Skip</Link>
        <View style={styles.spaceFooter} />
            <Link _text={{ color: "black", fontWeight: "bold", fontSize: "md", }} onPress={() => navigation.navigate('Walkthrough2')}>Next</Link>
            {/* ,{id: userId} */}
      </HStack>
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
//#FF4D4D previous link colour: #dc143c
export default WalkthroughDonate;