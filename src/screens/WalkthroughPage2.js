import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Heading, NativeBaseProvider, Box, HStack, Progress, Image, Link } from "native-base"

const WalkthroughRequest = ({ navigation }) => {
//   const userId = navigation.getParam('id');
//   console.log(userId);
// onPress={() =>navigation.navigate('Walkthrough3')
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={{height: 75}}></View>
      <Image style={{width: 375, height: 250}} source={require('../../images/CreatePostImage.png')} alt="Post Request" />
      <View style={styles.spaceHeading}></View>
      <Heading style={styles.textHeading} size="xl">Put in a request</Heading>
      <View style={styles.spaceBody}></View>
      <View style={styles.textBodyContainer}>
        <Text style={styles.textBody}>Make a food request on our dashboard then wait for the responses to come flooding in.</Text>
      </View>
      <View style={styles.spaceBody} />
      <Box w="40%" maxW="400">
        <Progress colorScheme="secondary" value={66.6} mx="4" />
      </Box>
      <View style={styles.spaceBtFooter} />
      <HStack mt="6" justifyContent="center">
        <Link _text={{ color: "black", fontWeight: "normal", fontSize: "md", }}>Skip</Link>
        <View style={styles.spaceFooter} />
            <Link _text={{ color: "black", fontWeight: "bold", fontSize: "md", }} onPress={() => navigation.navigate('Walkthrough3')}>Next</Link>
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
//#FF4D4D
export default WalkthroughRequest;