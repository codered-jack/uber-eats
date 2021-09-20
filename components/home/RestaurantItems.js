import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: 400,
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: 200,
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: 600,
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItems({ navigation, restaurantData }) {
  return (
    <>
      {restaurantData.map(
        (
          { image_url, name, rating, price, categories, review_count = 10 },
          index
        ) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                name,
                image: image_url,
                price,
                reviews: review_count,
                rating,
                categories,
              })
            }
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <RestaurantImage image={image_url} />
              <RestaurantInfo name={name} rating={rating} />
            </View>
          </TouchableOpacity>
        )
      )}
    </>
  );
}

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180, borderRadius: 5 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: "15", fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: "13", color: "gray" }}>30-45 min 🥧 </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
