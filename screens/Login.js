import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";import { NavigationContainer } from "@react-navigation/native";
;
export default function Login({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          width: 150,
          height: 150,
          marginBottom:40,
          transform:[{rotate:"45deg"}],
          borderRadius:10
        }}
        source={{
          url: "https://thumbs.dreamstime.com/b/cycle-sun-evening-sunset-weather-looking-beautiful-105408299.jpg",
        }}
      />
      <Text style={{ color: "grey", fontSize: 25 }}>Welcome to</Text>
      <Text style={{ color: "black", fontSize: 25, fontWeight: "500" }}>
        Power Bike Shop
      </Text>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("Home");
        }}
        style={{
          backgroundColor: "grey",
          padding: 15,
          paddingHorizontal: 65,
          marginTop: 20,
          borderRadius: 10,
          flexDirection:"row",
          alignItems:"center"
        }}
      >
        <AntDesign name = "google" size = {24} color = "black"/>
        <Text style={{ fontSize: 15, marginLeft:10 }}>Login with Gmail</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 20,
          paddingHorizontal: 50,
          marginTop: 20,
          borderRadius: 10,
          flexDirection:"row",
          alignItems:"center"
        }}
      >
        <AntDesign name = "apple-o" size = {24} color = "white"/>
        <Text style={{ fontSize: 20, color: "white", marginLeft:10 }}>Login with apple</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style = {{fontWeight:"500", color:"grey", marginTop:10}}>Not a member? <Text style = {{color:"orange", fontWeight:"bold"}}>Sign up</Text></Text>
    </TouchableOpacity>
    </View>
  );
}
