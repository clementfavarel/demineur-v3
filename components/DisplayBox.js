import React from "react";
import { View, Text, StyleSheet } from "react-native";
import fonts from "../styles/fonts";
import layout from "../styles/layout";

const DisplayBox = ({ title, unit, color, value }) => {
    const roundedValue = Number(value).toFixed(2);

    return (
        <View style={[styles.box, { backgroundColor: color }]}>
            <View style={layout.rowSpaced}>
                <Text
                    style={[
                        fonts.textWhite,
                        fonts.textBody,
                        { textAlign: "left" },
                    ]}
                >
                    {title}
                </Text>
                <Text style={[fonts.textWhite, fonts.textBody]}>{unit}</Text>
            </View>
            <Text
                style={[
                    fonts.textBold,
                    fonts.textTitle,
                    fonts.textWhite,
                    { textAlign: "center" },
                ]}
            >
                {roundedValue}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        height: 100,
        flex: 1,
        justifyContent: "center",
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 2.5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
    },
    textLeft: {
        flex: 1,
        textAlign: "left",
    },
    textRight: {
        flex: 1,
        textAlign: "right",
    },
});

export default DisplayBox;
