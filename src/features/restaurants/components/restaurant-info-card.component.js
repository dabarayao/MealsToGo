/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";


const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Titre = styled(Text)`
  padding: 16px;
  color: green;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/01/raspberry-cupcake.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;



    return (
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Titre>{name}</Titre>
        </RestaurantCard>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
    },
    cover: {
        padding: 20,
        backgroundColor: "white",
    }
});
