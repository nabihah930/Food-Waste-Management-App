import React from "react";
import { useState, useContext } from "react";
import { StyleSheet, View, Image } from "react-native"
import { Box, Heading, VStack, FormControl, Input, Button, Center, ScrollView, NativeBaseProvider, Icon, Divider, Text, HStack, Link } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
// import { Context as AuthContext } from "../context/authContext";

const Login = ({ navigation }) => {
  //This is used for the password visibility
  const [show, setShow] = React.useState(false);
  //Taking input and logging in
  // const { state, signin } = useContext(AuthContext);        //de-structure out state obj. & signin action
  const [emailOrName, setEmailOrName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <NativeBaseProvider>
      <View style={styles.background}>
      <View styles={styles.spaceTop} />
      <ScrollView>
      <Center>
        <View style={{ height: 50 }} />
        <Image style={{width: 290, height: 160}} source={require('../../images/Login_Image.png')} />
      </Center>
      {/* This box will contain the form as well as all the buttons (basically everything else) */}
      <Center>
        <Box borderWidth="0" width="80%">
          <VStack space={5} mt="5">
            <Heading size="xl" color="coolGray.800" fontWeight="semibold">
            Welcome Back!
            </Heading>
            <FormControl>
              <Input size="md" variant="outline" placeholder="Email ID" InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} value={emailOrName} onChangeText={setEmailOrName} />
            </FormControl>
            <VStack>
                <FormControl>
                    <Input size="md" variant="outline" placeholder="Password" type={show ? "text" : "password"} InputLeftElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} ml="2" color="muted.400" onPress={() => setShow(!show)} />} value={password} onChangeText={setPassword} />
                    <Link _text={{ fontSize: "sm", fontWeight: "500", color: "indigo.500", }} 
                    alignSelf="flex-end" mt="1" 
                    onPress={() => navigation.navigate('PasswordForgotten')}
                    >
                      Forget your Password?
                    </Link>
                </FormControl>
            </VStack>
          </VStack>
          <Button height="10" mt="12" mb="2" colorScheme="secondary" onPress={() => navigation.navigate('Profile')} >
            {/* onPress={userLogin} */}
              Login
          </Button>
          <Link _text={{ fontSize: "sm", fontWeight: "500", color: "coolGray.300", }} 
          alignSelf="center" mt="1" isUnderlined={false} 
          onPress={() => navigation.navigate('Signup')}
          >
            Don't have an account?
          </Link>
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
  spaceTop: {
    height: 40
  },
});
    
export default Login;