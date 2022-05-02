import React from "react";
import { useState } from "react";
import { StyleSheet, View, Image } from "react-native"
import { ScrollView, Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Icon, Divider, Text, HStack, Link } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
// import thaliAPI from "../api/thali";

const SignUp = ({ navigation }) => {
  // This is used for the password visibility <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
  const [show, setShow] = React.useState(false);
//   const newUser = { userID:"", name:"", email:"", password:"", phoneNumber:"", address: "" };
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
// onPress={() =>navigation.navigate('Signin')}
  return (
    <NativeBaseProvider>
      <View style={styles.background}>
        <ScrollView>
        <Center>
          <Image style={{width: 290, height: 160}} source={require('../../images/SignUp_Image.png')} />
        </Center>
        <Center>
          <Box borderWidth="0" width="80%">
            <VStack space={5} mt="5">
              <Heading size="xl" color="coolGray.800" fontWeight="semibold">
              Create Account
              </Heading>
              <Heading mt="1" color="coolGray.500" fontWeight="medium" size="md">
                Sign up to continue!
              </Heading>
              <FormControl>
                <Input name="name" size="md" variant="outline" placeholder="Full Name" InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} />
              </FormControl>
              <FormControl>
                <Input name="email" size="md" variant="outline" placeholder="Email ID" InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} />
              </FormControl>
              <FormControl>
                <Input name="password" size="md" variant="outline" placeholder="Password" type={show ? "text" : "password"} InputLeftElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} ml="2" color="muted.400" onPress={() => setShow(!show)} />} />
              </FormControl>
            </VStack>
            <Button height="10" mt="12" mb="2" colorScheme="secondary" onPress={()=> navigation.navigate('tutorialFlow')} >
            {/* onPress={registerUser} */}
                Sign up
            </Button>
            {/* This is for the line between the 2 buttons */}
            <Center>
              <HStack>
                <Divider mt="3" width="32" color="muted.300" />
                <Text color="muted.400" > or </Text>
                <Divider mt="3" width="32" color="muted.300" />
              </HStack>
            </Center>
            <Button mt="2" leftIcon={<Icon as={AntDesign} name="google" color="white" />} colorScheme="secondary">
              Sign up using Google
            </Button>
            <HStack mt="3" justifyContent="center">
              <Text fontSize="sm" color="coolGray.500">
                Already have an account?{" "}
              </Text>
              <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm", }}
              onPress={() => navigation.navigate('Signin')}
              >
                Login here
              </Link>
              </HStack>
          </Box>
        </Center>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  textStyle: {
      color: 'white',
      fontFamily: 'Arial Rounded MT Bold',
    },
  background: {
      flex: 1,
      backgroundColor: 'white'
  },
});
    
export default SignUp;