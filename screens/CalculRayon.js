import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPdC, setK } from "../redux/actions";
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
    ScrollView,
} from "react-native";
import DisplayBox from "../components/DisplayBox";
import layout from "../styles/layout";
import {
    rayon1,
    rayon2,
    rayon3,
    rayon4,
    rayon5,
    rayon6,
    rayon7,
    rayon8,
    rayon9,
    rayon10cratere,
    rayon10entonnoir,
    rayonSympathie,
    rayonEclat,
} from "../utils/calculs";

const CalculRayon = () => {
    const { PdC, K } = useSelector((state) => state.crReducer);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={[layout.row, layout.flexCenter]}>
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
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <DisplayBox
                        title={"R1 = 5 * \u221APdC"}
                        color="orange"
                        unit={null}
                        value={rayon1(PdC)}
                    />
                    <DisplayBox
                        title={"R2 = 10 * \u221APdC"}
                        color="red"
                        unit={null}
                        value={rayon2(PdC)}
                    />
                    <DisplayBox
                        title={
                            PdC < 80
                                ? `R3 = 20 * \u221APdC`
                                : `R3 = 50 * \u221APdC`
                        }
                        color="green"
                        unit={null}
                        value={rayon3(PdC)}
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <DisplayBox
                        title={"R4 = 150 * \u221BPdC"}
                        color="#333"
                        unit={null}
                        value={rayon4(PdC)}
                    />
                    <DisplayBox
                        title={"R5 Fondations d'immeuble"}
                        color="#333"
                        unit={null}
                        value={rayon5(PdC, K)}
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <DisplayBox
                        title={"R6 égouts tuyaux poterie"}
                        color="#333"
                        unit={null}
                        value={rayon6(PdC, K)}
                    />
                    <DisplayBox
                        title={"R7 canalisations fonte ciment"}
                        color="#333"
                        unit={null}
                        value={rayon7(PdC, K)}
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <DisplayBox
                        title={"R8 canalisations électriques"}
                        color="#333"
                        unit={null}
                        value={rayon8(PdC, K)}
                    />
                    <DisplayBox
                        title={"R9 abri cave"}
                        color="#333"
                        unit={null}
                        value={rayon9(PdC, K)}
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <DisplayBox
                        title={"R10 cratère"}
                        color="#333"
                        unit={null}
                        value={rayon10cratere(PdC, K)}
                    />
                    <DisplayBox
                        title={"R10 entonnoir"}
                        color="#333"
                        unit={null}
                        value={rayon10entonnoir(PdC, K)}
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <DisplayBox
                        title={"Rayon sympathie"}
                        color="#333"
                        unit={null}
                        value={rayonSympathie(PdC)}
                    />
                    <DisplayBox
                        title={"Rayon éclat"}
                        color="#333"
                        unit={null}
                        value={rayonEclat(PdC)}
                    />
                </View>
                <View>
                    <View style={[layout.rowSpaced, layout.tableRow]}>
                        <Text>Nature du Terrain</Text>
                        <Text>K</Text>
                    </View>
                    <View style={[layout.rowSpaced, layout.tableRow]}>
                        <Text>Terre légère</Text>
                        <Text>1</Text>
                    </View>
                    <View style={[layout.rowSpaced, layout.tableRow]}>
                        <Text>Sable argile pierre</Text>
                        <Text>0.8</Text>
                    </View>
                    <View style={[layout.rowSpaced, layout.tableRow]}>
                        <Text>Terrain moyen</Text>
                        <Text>0.5</Text>
                    </View>
                    <View style={[layout.rowSpaced, layout.tableRow]}>
                        <Text>Terrain très dur Maçonnerie légère</Text>
                        <Text>0.3</Text>
                    </View>
                    <View style={[layout.rowSpaced, layout.tableRow]}>
                        <Text>Maçonnerie d'ouvrage d'art</Text>
                        <Text>0.25</Text>
                    </View>
                    <View style={[layout.rowSpaced, layout.tableRow]}>
                        <Text>Roc dur et compact Béton de construction</Text>
                        <Text>0.2</Text>
                    </View>
                    <View style={[layout.rowSpaced, layout.tableRow]}>
                        <Text>Roc très dur Béton de fortification</Text>
                        <Text>0.16</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CalculRayon;

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
