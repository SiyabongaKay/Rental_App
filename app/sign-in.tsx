import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import images from "@/constants/images";
import {Image,Text,View} from "react-native";
import icons from "@/constants/icons";

const SignIn = () => {
    const handleLogin = () => {};

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />
                <View className="px-10">
                    <Text className="text-center text-base uppercase font-rubik text-black-200">
                        Welcome to Rental
                    </Text>

                    <Text className=" mt-2 text-center text-3xl font-rubik-extraBold text-black-300 capitalize ">
                        let's get you closer to {"\n"}
                        <Text className="text-primary-300">your ideal home</Text>
                    </Text>

                    <Text className="font-rubik text-center text-lg text-black-200 mt-12">
                        Login to Rental with Google
                    </Text>

                    <TouchableOpacity onPress={handleLogin} className="bg-white w-full rounded-full
                    shadow-md shadow-zinc-300 mt-5 py-4">

                        <View className="flex flex-row items-center justify-center">
                            <Image source={icons.google} resizeMode="contain" className="w-5 h-5"/>

                            <Text className="text-lg text-black-300 font-rubik-medium ml-2">
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
