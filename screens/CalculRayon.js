import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPdC, setK } from "../redux/actions";
import { View, StyleSheet, TextInput, Text } from "react-native";

const CalculRayon = () => {
    const { PdC, K } = useSelector((state) => state.crReducer);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(value) => dispatch(setPdC(value))}
                value={PdC.toString()}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={(value) => dispatch(setK(value))}
                value={K.toString()}
                keyboardType="numeric"
            />
            <Text style={styles.display}>
                Rayon : {Math.round((PdC / K) * 100) / 100}
            </Text>
        </View>
    );
};

export default CalculRayon;

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
