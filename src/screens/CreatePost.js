import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, NativeBaseProvider, Box, HStack, FormControl, Input, VStack, Icon, IconButton, Square, ScrollView, Fab, Pressable } from "native-base";
import NumericInput from 'react-native-numeric-input';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreatePost = ({ navigation }) => {
    const [quantity, setQuantity] = useState(250);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    
    const currentDate = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    const [stringDate, setStringDate] = useState(currentDate);
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        console.log(date);
        const strDate = currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getFullYear();
        setStringDate(strDate);
        console.log(stringDate);
    };
    const showDatepicker = () => {
        setShow(true);
    };
//onPress={()=>{navigation.navigate('SeePost')}}
    return (
        <NativeBaseProvider>
            <View style={styles.background}>
                <Box m="5" p="5" >
                    <ScrollView height="100%">
                    <VStack space={8}>
                        <Box>
                            <Text fontSize="lg">Title</Text>
                            <FormControl>
                                <Input variant="underlined" />
                            </FormControl>
                        </Box>
                        <Box>
                            <Text fontSize="lg" mb="3" >Description</Text>
                            <FormControl>
                                <Input variant="underlined" placeholder="e.g. Biryani with salad and raita"/>
                            </FormControl>
                        </Box>
                        <Box>
                            <HStack>
                                <Icon as={<MaterialIcons name="date-range" />} size={5} m="1" />
                                <Text fontSize="lg">Food Creation Date</Text>
                            </HStack>
                            <FormControl>
                                {/* <Input variant="underlined"/> */}
                                <View style={{height: 20}}/>
                                <Pressable onPress={showDatepicker}>
                                    <Text borderBottomWidth={1} borderBottomColor="muted.200" >{stringDate}</Text>
                                </Pressable>
                                {show && (
                                    <DateTimePicker
                                    value={date}
                                    onChange={onChange}
                                    />
                                )}
                            </FormControl>
                        </Box>
                        <Box>
                            <Text fontSize="lg" mb="3" >Location</Text>
                            <HStack>
                                <Input size="90%" variant="underlined" placeholder="Gulshan e Iqbal, Block 16"/>
                                <IconButton size={5} _icon={{ color: "secondary.500", as: MaterialIcons, name: "my-location"}} onPress={()=>{console.log("Use my current location")}}/>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Text fontSize="lg">Quantity</Text>
                                <Text fontSize="lg" color="muted.400"> (choose nearest value in grams)</Text>
                            </HStack>
                            <FormControl>
                                {/* <Input variant="underlined"/> */}
                                <View style={{height: 15}}/>
                                <NumericInput value={quantity} onChange={setQuantity} onLimitReached={(isMax,msg) => console.log(msg)}
                                totalWidth={120} totalHeight={30} iconSize={25} step={50} minValue={150} maxValue={10000} rounded
                                textColor='#B0228C' iconStyle={{ color: 'white' }} rightButtonBackgroundColor='#EA3788' 
                                leftButtonBackgroundColor='#EA3788' />
                            </FormControl>
                        </Box>
                        <Box>
                            <Text fontSize="lg" mb="3" >Phone Number</Text>
                            <FormControl>
                                <Input variant="underlined" placeholder="03004568521"/>
                            </FormControl>
                        </Box>
                        <Box>
                            <Text fontSize="lg" mb="3" >Photo</Text>
                            <Square size="30%" borderRadius="10" borderWidth="0.5" borderStyle="dotted">
                                <IconButton _icon={{ color: "secondary.600", as: MaterialIcons, name: "add-a-photo"}} onPress={()=>{console.log("Add image picker!");}} />
                            </Square>
                        </Box>
                            {/* I don't know why but this button is placed so far down the view */}
                            {/* <Button colorScheme="secondary" onPress={console.log("Make a post!")}>Post</Button> */}
                    </VStack>
                    </ScrollView>
                </Box>
                <Fab renderInPortal={false} shadow="4" size="md" colorScheme="secondary" bottom="10" right="10" icon={<Icon color="white" as={MaterialIcons} name="check" size="sm" />} onPress={()=>{console.log("Actually post created action but navigation to view post.")}} />
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default CreatePost;