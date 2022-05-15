import React from 'react';
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { AspectRatio, Avatar, Icon, Heading, Fab, Input, Text, Box, HStack, NativeBaseProvider, VStack, Image, Pressable } from "native-base";
import { Feather, Ionicons } from "@expo/vector-icons";

const Dashboard = ({ navigation }) =>{
    const data = [
        {
            ID: '1',
            Name: 'Nabihah Chaudhry',
            Email: 'k180326@nu.edu.pk',
            Phone: '0322-4589632',
            Type: 'Donation',
            FoodName: 'Biryani',
            Date: 'August 15',
            FoodDscrp: 'Two daighs of Biryani, with 5 packets of raita and 1/2 kg of salad.',
            Image: "https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg"
        },
        {
            ID: '2',
            Name: 'Rumaisa Sheikh',
            Email: 'k181297@nu.edu.pk',
            Phone: '0300-4589632',
            Type: 'Donation',
            FoodName: 'Kheer',
            Date: 'August 5',
            FoodDscrp: 'Five kilograms of kaisar pista kheer made with whole milk and organic pistachios.',
            Image: "https://www.secondrecipe.com/wp-content/uploads/2019/08/kesar-pista-kheer-v2.jpg"
        },
        {
            ID: '3',
            Name: 'Sadiqa Seemab',
            Email: 'k181114@nu.edu.pk',
            Phone: '0331-4589632',
            Type: 'Donation',
            FoodName: 'Pizza',
            Date: 'August 1',
            FoodDscrp: 'Two boxes of stuffed-crust, double cheese, chicken pepperoni pizzas.',
            Image: "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
        }
    ];
    return (
        <NativeBaseProvider>
            <View style={Styles.background}>
                <Box p={5} borderBottomWidth={1} borderBottomColor="coolGray.300" shadow="2">
                    <HStack space={5}>
                        <Pressable onPress={() => navigation.navigate('Profile')}>
                            <Avatar bg="white" size="12" source={{uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" }}>
                                {/* source={require('../../images/Avatar_Female3.png')} */}
                                Profile Pic
                            </Avatar>
                        </Pressable>
                        <Box mt={1.5}>
                            <Input placeholder="Search posts for restaurants, food, NGO..." size="md" variant="filled" height="9" width="65%" borderRadius="10" py="1" px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                        </Box>
                    </HStack>
                </Box>
                <FlatList data={data} keyExtractor={(data) => data.ID} 
                renderItem={({item})=>{
                    return <Pressable onPress={() => navigation.navigate('SeePost')}>
                        <Box bg="coolGray.100" shadow="2" rounded="lg" m={5}>
                            <AspectRatio w="100%" ratio={2.5}>
                                <Image source={{uri: item.Image}} 
                                alt="Post Image" />
                            </AspectRatio>
                            <Text p={1.5} bg="violet.500" bold position="absolute" color="coolGray.50" top="0">
                                {item.Type}
                            </Text>
                            <VStack m={3} space={3}>
                                <Heading color="gray.600">{item.Name}</Heading>
                                <Text fontWeight="medium" color="indigo.500">{item.FoodName}</Text>
                                <Text>{item.FoodDscrp}</Text>
                                <Text bold color="gray.600">{item.Date}</Text>
                            </VStack>
                            </Box>
                    </Pressable>
                }} />
                <Fab renderInPortal={false} shadow="4" size="md" colorScheme="secondary" bottom="5" right="10" icon={<Icon color="white" as={Feather} name="plus" size="sm" />} onPress={()=> navigation.navigate('MakePost')} />
            </View>
        </NativeBaseProvider>
    );
};

export default Dashboard;

const Styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
});
