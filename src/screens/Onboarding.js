import  React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { ScrollView, Heading, Link, Button, Modal, Pressable, Text, Box, HStack, Center, NativeBaseProvider, VStack, Image, Spacer } from "native-base";
import { useState } from "react";

function createUserID(userType){
    let userID = '';
    const paramObject = {};
    //Create new user's ID based on user type: 1->Person Donor, 2->Eatery Donor, 3->Recipient, and 4->NGO
    if(userType===1){
        userID = 'PDN001';
        //query mongo to find max ID and and inc. by 1 to get the num part of the ID
    }
    else if(userType===2){
        userID = 'EDN001';
    }
    else if(userType===3){
        userID = 'PRP001';
    }
    else if(userType===4){
        userID = 'NGO001';
    }
    else{
        console.log("Some error occured while creating user's ID");
    }
    paramObject.id = userID;
    return paramObject;
};

const onBoardingPage = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    // onPress={() =>props.navigation.navigate('Signin')
    return (
        <NativeBaseProvider>
        <ScrollView>
        <ImageBackground source={require('../../images/background/Background2.png')} style={{width: '100%', height: '100%', justifyContent: 'center', resizeMode: 'cover'}}>
            <View style={styles.container}>
                
                <View style={styles.spaceHeading} />
                <Heading style={styles.textHeading} size="4xl">Thali</Heading>
                <View style={styles.spaceBody} />
                <Button mt="5" variant="subtle" borderRadius="full" colorScheme="orange" style={{width: '85%', height: '7%'}} onPress={() => setShowModal(true)}>
                    <Text style={{fontSize: 20, color: "crimson", fontWeight: "bold"}}>Sign up</Text>
                </Button>
                <View style={styles.spaceBtFooter} />
                <HStack mt="6" justifyContent="center">
                    <Text
                    style={{fontSize: 15, color: "white"}}
                    >
                    Already have an account?{" "}
                    </Text>
                    <Link
                    _text={{
                        color: "white",
                        fontWeight: "medium",
                        fontSize: "sm",}}
                    onPress={() => navigation.navigate('Signin')}
                    >
                    Sign in
                    </Link>
                </HStack>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Register as...</Modal.Header>
                        <Modal.Body>
                        <Center flex={1} px="3">
                            <Box alignItems="center">
                            <VStack alignItems="center">
                                <HStack alignItems="center">
                                    <Pressable onPress={() => console.log("Person Donor Pressed")}>
                                    {/* <Pressable onPress={() => props.navigation.navigate('Signup', createUserID(1))}> */}
                                        <Box height="24" width="32" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                                        <VStack alignItems="center">
                                        <Image size={50} resizeMode={"contain"} borderRadius={100} source={require('../../images/icons/PersonIcon.png')} alt="Donor Person Icon" />
                                            <Text fontSize={10} color="coolGray.800">
                                            Person Donor
                                            </Text>
                                        </VStack>
                                        </Box>
                                    </Pressable>
                                    <View style={memberGridstyles.ColSpace}/>
                                    <Pressable onPress={() => console.log("Eatery Donor Pressed")}>
                                    {/* <Pressable onPress={() => props.navigation.navigate('Signup', createUserID(2))}> */}
                                        <Box height="24" width="32" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                                        <VStack alignItems="center">
                                        <Image size={50} resizeMode={"contain"} borderRadius={100} source={require('../../images/icons/EateryIcon.png')} alt="Donor Eatery Icon" />
                                            <Text fontSize={10} color="coolGray.800">
                                            Eatery Donor
                                            </Text>
                                        </VStack>
                                        </Box>
                                    </Pressable>
                                </HStack>
                                <View style={memberGridstyles.RowSpace}/>
                                <HStack alignItems="center">
                                    <Pressable onPress={() => console.log("Recipient Pressed")}>
                                    {/* <Pressable onPress={() => props.navigation.navigate('Signup', createUserID(3))}> */}
                                        <Box height="24" width="32" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                                        <VStack alignItems="center">
                                        <Image size={50} resizeMode={"contain"} borderRadius={100} source={require('../../images/icons/RecipientIcon.png')} alt="Recipient Icon" />
                                            <Text fontSize={10} color="coolGray.800">
                                            Recipient
                                            </Text>
                                        </VStack>
                                        </Box>
                                    </Pressable>
                                    <View style={memberGridstyles.ColSpace} />
                                    <Pressable onPress={() => console.log("NGO Pressed")}>
                                    {/* <Pressable onPress={() => props.navigation.navigate('Signup', createUserID(4))}> */}
                                        <Box height="24" width="32" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                                        <VStack alignItems="center">
                                        <Image size={50} resizeMode={"contain"} borderRadius={100} source={require('../../images/icons/NGOIcon.png')} alt="NGO Icon" />
                                            <Text fontSize={10} color="coolGray.800">
                                            NGO
                                            </Text>
                                        </VStack>
                                        </Box>
                                    </Pressable>
                                </HStack>
                            </VStack>
                            </Box>
                        </Center>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setShowModal(false);
                            }}>
                                Cancel
                            </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </View>
        </ImageBackground>
        </ScrollView>
        </NativeBaseProvider>
    )
};

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 70,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto',                               //Good Fonts(from best to worst): Futura, Arial Rounded MT Bold, Gill Sans
  },
  container: {
    alignItems: 'center',
    flex: 1
  },
  spaceHeading: {
    height: 375,
  },
  spaceBody: {
    height: 90,
  },
  textBodyContainer: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  spaceBtFooter: {
    height: 10,
  },
});

const memberGridstyles = StyleSheet.create({
    RowSpace: {
      height: 10
    },
    ColSpace: {
        width: 10
    }
});

export default onBoardingPage;