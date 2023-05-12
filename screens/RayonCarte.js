import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";

const RayonCarte = () => {
    const { PdC, K } = useSelector((state) => state.crReducer);

    return (
        <View style={styles.container}>
            <Text style={styles.display}>
                Rayon : {Math.round((PdC / K) * 100) / 100}
            </Text>
        </View>
    );
};

export default RayonCarte;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});
