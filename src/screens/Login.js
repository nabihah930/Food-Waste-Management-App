import React from "react";
import { useState } from "react";
import { StyleSheet, View, Image } from "react-native"
import { Box, Heading, VStack, FormControl, Input, Button, Center, ScrollView, NativeBaseProvider, Icon, Divider, Text, HStack, Link } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
// import thaliAPI from "../api/thali";

const Login = ({ navigation }) => {
//   This is used for the password visibility
  const [show, setShow] = React.useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
// onPress={() =>props.navigation.navigate('PasswordForgotten')}
  return (
    <NativeBaseProvider>
      <View style={styles.background}>
      <View styles={styles.spaceTop} />
      <ScrollView>
      <Center>
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
              <Input size="md" variant="outline" placeholder="Email ID" InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} />
            </FormControl>
            <VStack>
                <FormControl>
                    <Input size="md" variant="outline" placeholder="Password" type={show ? "text" : "password"} InputLeftElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} ml="2" color="muted.400" onPress={() => setShow(!show)} />} />
                    <Link _text={{ fontSize: "sm", fontWeight: "500", color: "indigo.500", }} 
                    alignSelf="flex-end" mt="1" 
                    onPress={() => navigation.navigate('PasswordForgotten')}
                    >
                      Forget your Password?
                    </Link>
                </FormControl>
            </VStack>
          </VStack>
          <Button height="10" mt="12" mb="2" colorScheme="secondary" onPress={() => navigation.navigate('mainFlow')} >
            {/* onPress={userLogin} */}
              Login
          </Button>
          <Link _text={{ fontSize: "sm", fontWeight: "500", color: "indigo.500", }} 
          alignSelf="flex-end" mt="1" 
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
    height: 25
  },
});
    
export default Login;