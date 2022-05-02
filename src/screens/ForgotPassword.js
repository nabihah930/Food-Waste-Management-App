import React from "react"
import { StyleSheet, View, Image } from "react-native"
import { Button, Center, Heading, NativeBaseProvider, Text, Box, VStack, FormControl, Input, HStack, Link, Icon } from "native-base"

const ForgotPassword = (props) => {
  return (
    <NativeBaseProvider>
        <View style={styles.background}>
        <Center flex={1} px="3">
            <View>
                <Image
                style={{width: 290, height: 160}} 
                source={require('../../images/ForgotPasswordImage.png')} />
            </View>
            <Box safeArea p="2" width="80%" py="8" bg="white" rounded="lg">
                {/* <Center> */}
                    <Heading
                    size="lg"
                    color="coolGray.800"
                    _dark={{
                    color: "warmGray.50",
                    }}
                    fontWeight="semibold"
                    >
                    Forgot your password?
                    </Heading>
                    <Heading
                    mt="2"
                    size="xs"
                    color="coolGray.600"
                    _dark={{
                    color: "warmGray.50",
                    }}
                    fontWeight="semibold"
                    >
                    Don't worry! Just type in your email and we will send you a new password.
                    </Heading>
                {/* </Center> */}
                <VStack space={3} mt="5">
                    <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder="✉ example@company.com" />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo">
                    Recover Password
                    </Button>
                </VStack>
            </Box>
        </Center>
        </View>
    </NativeBaseProvider>
  )
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
    space: {
        height: 15,
    },
});

export default ForgotPassword;