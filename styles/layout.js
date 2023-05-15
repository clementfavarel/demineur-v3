import { StyleSheet } from "react-native";

const layout = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        paddingTop: 30,
        paddingBottom: 10,
    },
    column: {
        flexDirection: "column",
    },
    row: {
        flexDirection: "row",
    },
    flexCenter: {
        justifyContent: "center",
        alignItems: "center",
    },
    rowSpaced: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    col: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    tableRow: {
        backgroundColor: "#aaa",
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 1,
        flexDirection: "row",
    },
});

export default layout;
