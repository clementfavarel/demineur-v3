import { StyleSheet } from "react-native";

const fonts = StyleSheet.create({
    // weight
    textBold: {
        fontWeight: "700",
    },
    textSemiBold: {
        fontWeight: "600",
    },
    textMedium: {
        fontWeight: "500",
    },
    textRegular: {
        fontWeight: "400",
    },
    textLight: {
        fontWeight: "300",
    },
    // size
    textTitle: {
        fontSize: 24,
    },
    textSubtitle: {
        fontSize: 16,
    },
    textBody: {
        fontSize: 14,
    },
    textCaption: {
        fontSize: 12,
    },
    // color
    textWhite: {
        color: "#fff",
    },
    textBlack: {
        color: "#000",
    },
    // align
    textCenter: {
        textAlign: "center",
    },
});

export default fonts;
