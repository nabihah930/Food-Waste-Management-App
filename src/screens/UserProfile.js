import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native"
import { Avatar, Box, Heading, VStack, Button, NativeBaseProvider, Icon, HStack, Link } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import displayPic from '../../images/Avatar_Female3.png'

const ProfilePage = (props) => {
  // This is used to convert our saved image to uri
  const profilePic = Image.resolveAssetSource(displayPic).uri
  return (
    <NativeBaseProvider>
      {/* The entire profile page as a box */}
      <Box alignItems="center">
        {/* All sections will be stacked on top of each other */}
        <VStack>
        <View style={styles.headerSpace} />
        <View style={styles.headerSpace} />
        {/* 1st Section: Profile Pic + Email + Password */}
        <Box borderBottomWidth="1" borderColor="coolGray.400">
          {/* 3 columns in this section: 1->A stack of name, email and button, 2->Space, 3->Profile Pic */}
          <HStack>
            <Box>
              <Heading size="lg" >Ahmed Afridi</Heading>
              <View style={styles.spaceBtwHeadings} />
              <Heading size="md" color="coolGray.400">ahmed.afridi@gmail.com</Heading>
              <View style={styles.headerRowSpace} />
              <Button size="md" borderRadius="full" colorScheme="indigo" >Change Password</Button>
            </Box>
            <View style={styles.headerColSpace} />
            {/* With uri the image covers entire avatar circle, but this does not happen when using require */}
            <Avatar bg="white" alignSelf="center" size="2xl" source={{uri: "https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png"}}>
              {/* require('../../images/Avatar_Female3.png') {uri: profilePic} https://cdn-icons-png.flaticon.com/512/2257/2257295.png */}
              User
            </Avatar>
          </HStack>
          <View style={styles.headerSpace} />
        </Box>
        {/* 2nd Section: Simple Stats + charts/graphs after installing react native chart kit (for now inserted some badges) */}
        <Box>
          {/* This Section has 2 components stacked on top of each other (i.e. the heading section + the stats) */}
          <View style={styles.headerSpace} />
          <View style={styles.headerSpace} />
          {/* Heading Section has 3 columns: 1->Heading, 2->Space, 3->Link */}
          <HStack>
          <Heading size="lg" >Your Numbers</Heading>
          <View style={styles.bodyColSpace} />
          <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "20", }} onPress={() =>props.navigation.navigate('Signin')}>
              See history
          </Link>
          </HStack>
          {/* Stats Section has 3 columns: 1->The Text+Number(Stacked on top of each other), 2->Space, 3->Avatars (for now, turn them into charts/graphs) */}
          <Box borderRadius="xl" p="5" mt="5" bgColor="gray.300">
            <HStack>
            <VStack>
            <Heading size="sm" fontWeight="normal">Total Donations</Heading>
            <View style={styles.spaceBtwHeadings} />
            <Heading size="xl" fontWeight="semibold">15</Heading>
            </VStack>
            <View style={styles.bodyColSpace} />
            <Avatar bg="white" alignSelf="center" size="lg" source={{uri: "https://iconarchive.com/download/i99452/webalys/kameleon.pics/Food-Dome.ico"}}>
              Graphs 
            </Avatar>
            <View style={styles.avatarSpace} />
            <Avatar bg="white" alignSelf="center" size="lg" source={{uri: "https://freeiconshop.com/wp-content/uploads/edd/gift-flat.png"}}>
              Gift
            </Avatar>
            </HStack>
          </Box>
        </Box>
        {/* 3rd and last Section has 2 subsections for phone number and address */}
        <Box>
          <View style={styles.headerSpace} />
          <View style={styles.headerSpace} />
          <HStack>
          <Heading size="lg" >Contact Information</Heading>
          </HStack>
          <Box borderRadius="xl" p="5" mt="5" bgColor="gray.300">
            <Pressable onPress={() => console.log("Phone Number Pressed")}>
              <HStack>
                <Heading size="md" fontWeight="normal">Phone Number</Heading>
                <View style={styles.phoneColSpace} />
                <Heading color="gray.400" size="md" fontWeight="normal">0300 5482619</Heading>
                <Icon as={MaterialIcons} name="arrow-forward-ios" size="xs" mt="1" ml="1" color="gray.400" />
              </HStack>
            </Pressable>
          </Box>
          <Box borderRadius="xl" p="5" mt="5" bgColor="gray.300">
            <Pressable onPress={() => console.log("Address Pressed")}>
              <HStack>
                <Heading size="md" fontWeight="normal">Address</Heading>
                <View style={styles.addressColSpace} />
                <Heading color="gray.400" size="md" fontWeight="normal">House no. 75, DHA</Heading>
                <Icon as={MaterialIcons} name="arrow-forward-ios" size="xs" mt="1" ml="1" color="gray.400" />
              </HStack>
            </Pressable>
          </Box>
        </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  spaceBtwHeadings: {
    height: 5
  },
  headerSpace: {
    height: 20
  },
  headerColSpace: {
    width: 20
  },
  avatarSpace: {
    width: 5
  },
  bodyColSpace: {
    width: 110
  },
  phoneColSpace: {
    width: 80
  },
  addressColSpace: {
    width: 105
  },
  headerRowSpace: {
    height: 12
  },
});
    
export default ProfilePage;