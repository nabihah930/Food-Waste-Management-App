import React from 'react';
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Button, Flex, Stack, AspectRatio, IconButton, Avatar, Icon, Heading, Divider, Fab, Input, Text, Box, HStack, Center, NativeBaseProvider, VStack, Image, Pressable } from "native-base";
import { Ionicons, AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";

const Dashboard = ({ navigation }) =>{
    const data = {
        DummyData:[
            {
                ID: '1',
                Name: 'Nabihah Chaudhry',
                Email: 'k180326@nu.edu.pk',
                Phone: '0322-4589632',
                Type: 'Donation',
                FoodName: 'Biryani',
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
                FoodDscrp: 'Two boxes of stuffed-crust, double cheese, chicken pepperoni pizzas.',
                Image: "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
            }
        ]
    };
    //width="80%" 
    return (
        <NativeBaseProvider>
            <View>
                <Text>Dashboard!</Text>
                <Box m={5} p={5}>
                    <Button colorScheme='secondary' onPress={()=>navigation.navigate('SeePost')}>See a Post</Button>
                    <Fab renderInPortal={false} shadow="4" size="md" colorScheme="secondary" bottom="10" right="10" icon={<Icon color="white" as={MaterialIcons} name="check" size="sm" />} onPress={()=> navigation.navigate('MakePost')} />
                </Box>
            </View>
        </NativeBaseProvider>
    );
};

export default Dashboard;

const Spacing = StyleSheet.create({
    btSpace: {
      width: 215
    },
    leftSpace: {
        width: 10
    },
    btRow: {
        height: 5
    },
    btCards: {
        height: 15
    },
});
