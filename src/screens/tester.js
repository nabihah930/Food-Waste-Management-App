import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, NativeBaseProvider, Box, HStack, FormControl, Button, Input, VStack } from "native-base";
import NumericInput from 'react-native-numeric-input';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import ImagePicker from 'react-native-image-crop-picker';
// import ImageCropPicker from "react-native-image-crop-picker";


const tester = (props) => {
    const [quantity, setQuantity] = useState(150);
    
    const onDrag = ()=>{
        setQuantity(quantity+1);
    }
    const changeQuantity = (e)=>{
        const newVal = Number(e.target.value);
        setQuantity(newVal);
    }

    const chooseImage = async () => {
        const options = {
            storageOptions: {
                mediaType: 'photo'
            },
        };
        console.log("Trying to choose image via image-crop-picker.\nOptions: ", options);
        try{
            await ImagePicker.launchImageLibrary(options, (response)=>{
                console.log(response);
            });
        } catch(error){
            console.log("[ERROR]\n", error);
        }
        // ImagePicker.launchCamera(options, (response)=>{
        //     console.log("Using camera");
        // });
        // ImagePicker.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);
        //     if (response.didCancel) {
        //       console.log('User cancelled image picker');
        //     } else if (response.error) {
        //       console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //       console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //       const source = { uri: response.uri };
        //     }
        // });

        // ImagePicker.launchCamera(options, (response)=>{
        //     console.Console(response);
        // });

        // ImageCropPicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: false,
        //   }).then(image => {
        //     console.log(image);
        //});

    };

    return (
        // e => setEmail(e.target.value) 
        <NativeBaseProvider>
            {/* <NumericInput value={quantity} onChange={setQuantity} onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={120} totalHeight={30} iconSize={25} step={50} minValue={150} maxValue={10000} rounded
            textColor='#B0228C' iconStyle={{ color: 'white' }} rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70' />
            <Text>{quantity}</Text> */}
            <Button onPress={chooseImage}>Take a Photo</Button>
        </NativeBaseProvider>
    );
};

export default tester;