import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, NativeBaseProvider, Fab, Box, HStack, Image, Button, VStack, Icon, IconButton, Avatar } from "native-base";


const ViewPost = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            {/* <ScrollView> */}
            <View style={styles.background}>
                <ScrollView>
                <Image width="100%" height="60%" source={{
                uri: "https://propakistani.pk/how-to/wp-content/uploads/2020/02/how-to-calculate-calories-in-pakistani-food.jpg"
                }} alt="Food image" />
                {/* <ScrollView> */}
                <VStack m="7" space={7}>    
                    <HStack>
                        <Avatar size="xl" bg="blue.400" source={{
                        uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" }}>
                            Profile Pic
                        </Avatar>
                        <VStack mt="1.5" ml="3" space="1">
                            <Text color="muted.500">Nabihah is donating</Text>
                            <Text fontSize="2xl" fontWeight="bold" >Biriyani</Text>
                            <HStack>
                                <Icon as={<MaterialIcons name="access-time" />} size={5} mr="1" color="muted.400" />
                                <Text color="muted.400">Posted 1 day ago</Text>
                            </HStack>
                        </VStack>
                    </HStack>
                    <View style={styles.horizontalRule} />
                    <Box>
                        <Text fontSize="lg" fontWeight="semibold">Description</Text>
                        <Text mt="5" >Two plates of bombay biryani with salad and raita.</Text>
                    </Box>
                    <HStack space="32" >
                    <Box>
                        <Text fontSize="lg" fontWeight="semibold">Quantity</Text>
                        <Text mt="5" >500g</Text>
                    </Box>
                    <Box>
                        <Text fontSize="lg" fontWeight="semibold">Phone Number</Text>
                        <Text mt="5" >03001456235</Text>
                    </Box>
                    </HStack>
                    <Box>
                        <Text fontSize="lg" fontWeight="semibold">Location</Text>
                        <Image mt="5" width="100%" height="50%" source={{
                        uri: "https://mt1.google.com/vt/lyrs=m&x=11507&y=6566&z=14"
                        }} alt="Map" />
                    </Box>
                    <Box size="30%" />
                </VStack>
                </ScrollView>
                <Fab renderInPortal={false} colorScheme="indigo" right={50} bottom={50} shadow={4} size="lg" label="Accept" onPress={()=>{console.log("I accept this donation.")}}/>
                {/* </ScrollView> */}
            </View>
            {/* </ScrollView> */}
        </NativeBaseProvider>
    )
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    horizontalRule: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    bottomSpace: {
        height: 30
    }
});

export default ViewPost;