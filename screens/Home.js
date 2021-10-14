import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SectionList,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Home() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={20} color="black" />
        <FontAwesome name="motorcycle" size={20} color="black" />
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
      <Text style={{ color: "grey", fontSize: 15, paddingTop: 20 }}>
        The World's{" "}
        <Text style={{ color: "orange", fontSize: 24, fontWeight: "500" }}>
          Best Bike
        </Text>
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>Categories</Text>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("");
          }}
          style={{
            backgroundColor: "whitesmoke",
            padding: 15,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "orange" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "whitesmoke",
            padding: 12,
            paddingHorizontal: 5,
            borderRadius: 5,
          }}
        >
          <Text>Roadbike</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "whitesmoke",
            padding: 15,
            paddingHorizontal: 15,
            borderRadius: 5,
          }}
        >
          <Text>Mountain</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "whitesmoke",
            padding: 15,
            paddingHorizontal: 15,
            borderRadius: 5,
          }}
        >
          <Text>Urban</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "whitesmoke",
            }}
          >
            <View style={{}}>
              <Image
                style={{
                  width: 120,
                  height: 150,
                  marginTop: 0,
                  padding: 20,
                  borderRadius: 5,
                }}
                source={{
                  url: "https://ingamba.pro/wp-content/uploads/2017/07/20170112-pinarello-F10-065.jpg",
                }}
              ></Image>
              <Text>Pinarello</Text>
              <Text>$ 1,700.00</Text>
            </View>
            <View style={{}}>
              <Image
                style={{
                  width: 120,
                  height: 150,
                  marginTop:0,
                  padding: 20,
                  borderRadius: 5,
                  
                }}
                source={{
                  url: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/17/1429278440949/7e44f071-3e9f-4f1f-8fe7-ea022b082fea-2060x1236.jpeg?width=445&quality=45&auto=format&fit=max&dpr=2&s=6ae2afbf42de0d7418ad26a6bd8ddf95",
                }}
              ></Image>
              <Text>Brompton</Text>
              <Text>1,500.00</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
