import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    StyleSheet,
} from "react-native";
import React from "react";
import DisplayBox from "../components/DisplayBox";
import layout from "../styles/layout";
import fonts from "../styles/fonts";
import { useSelector, useDispatch } from "react-redux";
import {
    setNbTirs,
    setNbPulseParTir,
    distancePassagePax,
} from "../redux/actions";

const CalculDose = () => {
    const { nbTirs, nbPulseParTir, distancePassagePax } = useSelector(
        (state) => state.crReducer
    );
    const dispatch = useDispatch();

    const nbPulseMax = 3000;
    const dose1mDevant = 10800;
    // const dose01mCote = 2160;
    // const dose01mArriere = 1386;
    const doseMax = 25;
    const dose1m1tir = (nbPulseParTir * dose1mDevant) / nbPulseMax;
    const dose1mTousTirs = dose1m1tir * nbTirs;
    const roundedValue = Number(
        dose1m1tir / Math.pow(distancePassagePax, 2)
    ).toFixed(2);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.input}>
                    <View style={layout.rowSpaced}>
                        <Text>Nombre de tirs</Text>
                        <Text>{null}</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => dispatch(setNbTirs(value))}
                        keyboardType="numeric"
                        value={nbTirs.toString()}
                    />
                </View>
                <View style={styles.input}>
                    <View style={layout.rowSpaced}>
                        <Text>Nombre de pulse par tir</Text>
                        <Text>{null}</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) =>
                            dispatch(setNbPulseParTir(value))
                        }
                        keyboardType="numeric"
                        value={nbPulseParTir.toString()}
                    />
                </View>
                <DisplayBox
                    title="Dose à 1m pour un tir"
                    color={"#333"}
                    value={dose1m1tir}
                    unit={"µSv/h"}
                />
                <DisplayBox
                    title="Dose à 1m pour tous les tirs"
                    color={"#333"}
                    value={dose1mTousTirs}
                    unit={"µSv/h"}
                />
                <DisplayBox
                    title="Distance sécu pour tous les tirs"
                    color={"#333"}
                    value={Math.pow(180 / 25, 0.5)}
                    unit={"m"}
                />
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={styles.input}>
                        <View style={layout.rowSpaced}>
                            <Text>Distance passage pax</Text>
                            <Text>m</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => dispatch(setNbTirs(value))}
                            keyboardType="numeric"
                            value={nbTirs.toString()}
                        />
                    </View>
                    <View style={[styles.box, { backgroundColor: "#333" }]}>
                        <View style={layout.rowSpaced}>
                            <Text
                                style={[
                                    fonts.textWhite,
                                    fonts.textBody,
                                    { textAlign: "left" },
                                ]}
                            >
                                Dose intégrée par {"\n"} pax pour un tir
                            </Text>
                            <Text style={[fonts.textWhite, fonts.textBody]}>
                                µSv/h
                            </Text>
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        color: "black",
        height: 100,
        borderColor: "gray",
        borderWidth: 1,
        textAlign: "center",
        fontSize: 40,
        marginHorizontal: 5,
        marginVertical: 2.5,
        padding: 5,
    },
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

export default CalculDose;
