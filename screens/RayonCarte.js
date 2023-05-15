import React from "react";
import { View, StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
    setTailleEchelleCarte,
    setTailleMesuree,
    setTailleReelle,
    setTailleCarte,
} from "../redux/actions";
import layout from "../styles/layout";
import DisplayBox from "../components/DisplayBox";
import {
    displayTailleCarte,
    displayTailleReelle,
    R1Carte,
    R2Carte,
    R3Carte,
    R4Carte,
    R5Carte,
    R6Carte,
    R7Carte,
    R8Carte,
    R9Carte,
} from "../utils/calculs";

const RayonCarte = () => {
    const {
        PdC,
        K,
        tailleEchelleCarte,
        tailleMesuree,
        tailleReelle,
        tailleCarte,
    } = useSelector((state) => state.crReducer);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <View style={[layout.row, layout.flexCenter]}>
                <View style={styles.input}>
                    <View style={layout.rowSpaced}>
                        <Text>PdC</Text>
                        <Text>kg</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) =>
                            dispatch(setTailleEchelleCarte(value))
                        }
                        keyboardType="numeric"
                        value={tailleEchelleCarte.toString()}
                    />
                </View>
                <View style={styles.input}>
                    <View style={layout.rowSpaced}>
                        <Text>PdC</Text>
                        <Text>kg</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) =>
                            dispatch(setTailleMesuree(value))
                        }
                        keyboardType="numeric"
                        value={tailleMesuree.toString()}
                    />
                </View>
            </View>
            <View style={[layout.row, layout.flexCenter]}>
                <View style={styles.input}>
                    <View style={layout.rowSpaced}>
                        <Text>PdC</Text>
                        <Text>kg</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) =>
                            dispatch(setTailleReelle(value))
                        }
                        keyboardType="numeric"
                        value={tailleReelle.toString()}
                    />
                </View>
                <DisplayBox
                    title="Taille carte"
                    color="#333"
                    unit="cm"
                    value={displayTailleCarte(
                        tailleReelle,
                        tailleMesuree,
                        tailleEchelleCarte
                    )}
                />
            </View>
            <View style={[layout.row, layout.flexCenter]}>
                <View style={styles.input}>
                    <View style={layout.rowSpaced}>
                        <Text>PdC</Text>
                        <Text>kg</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) =>
                            dispatch(setTailleCarte(value))
                        }
                        keyboardType="numeric"
                        value={tailleCarte.toString()}
                    />
                </View>
                <DisplayBox
                    title="Taille réelle"
                    color="#333"
                    unit="m"
                    value={displayTailleReelle(
                        tailleCarte,
                        tailleEchelleCarte,
                        tailleMesuree
                    )}
                />
            </View>
            <View style={[layout.row, layout.flexCenter]}>
                <DisplayBox
                    title="R1 Carte"
                    unit="cm"
                    color="#333"
                    value={R1Carte(tailleMesuree, tailleEchelleCarte)}
                />
                <DisplayBox
                    title="R2 Carte"
                    unit="cm"
                    color="#333"
                    value={R2Carte(tailleMesuree, tailleEchelleCarte)}
                />
                <DisplayBox
                    title="R3 Carte"
                    unit="cm"
                    color="#333"
                    value={R3Carte(tailleMesuree, tailleEchelleCarte)}
                />
            </View>
            <View style={[layout.row, layout.flexCenter]}>
                <DisplayBox
                    title="R4 Carte"
                    unit="cm"
                    color="#333"
                    value={R4Carte(tailleMesuree, tailleEchelleCarte)}
                />
                <DisplayBox
                    title="R5 Carte"
                    unit="cm"
                    color="#333"
                    value={R5Carte(tailleMesuree, tailleEchelleCarte)}
                />
                <DisplayBox
                    title="R6 Carte"
                    unit="cm"
                    color="#333"
                    value={R6Carte(tailleMesuree, tailleEchelleCarte)}
                />
            </View>
            <View style={[layout.row, layout.flexCenter]}>
                <DisplayBox
                    title="R7 Carte"
                    unit="cm"
                    color="#333"
                    value={R7Carte(tailleMesuree, tailleEchelleCarte)}
                />
                <DisplayBox
                    title="R8 Carte"
                    unit="cm"
                    color="#333"
                    value={R8Carte(tailleMesuree, tailleEchelleCarte)}
                />
                <DisplayBox
                    title="R9 Carte"
                    unit="cm"
                    color="#333"
                    value={R9Carte(tailleMesuree, tailleEchelleCarte)}
                />
            </View>
        </SafeAreaView>
    );
};

export default RayonCarte;

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
});
