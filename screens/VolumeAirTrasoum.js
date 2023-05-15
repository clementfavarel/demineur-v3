import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import layout from "../styles/layout";
import DisplayBox from "../components/DisplayBox";

const VolumeAirTrasoum = () => {
    const [masseRelever, setMasseRelever] = useState(400);
    const [pressionBloc, setPressionBloc] = useState(180);
    const [profondeur, setProfondeur] = useState(30);
    const volumeBiberon = 6.8;
    const Pression = profondeur / 10 + 1;
    const airBiberon =
        (pressionBloc * volumeBiberon) / Pression - volumeBiberon;
    const airCG = airBiberon * 2;
    const nbBiberons = Math.ceil(masseRelever / airBiberon);
    const nbCG = Math.ceil(masseRelever / airCG);
    const [volumeRelever, setVolumeRelever] = useState(30);
    const [densite, setDensite] = useState(1.5);
    const masse = volumeRelever * densite;

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.input}>
                    <View style={layout.rowSpaced}>
                        <Text>Masse à relever</Text>
                        <Text>kg</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setMasseRelever(value)}
                        keyboardType="numeric"
                        value={masseRelever.toString()}
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={styles.input}>
                        <View style={layout.rowSpaced}>
                            <Text>Pression bloc</Text>
                            <Text>bar</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setPressionBloc(value)}
                            keyboardType="numeric"
                            value={pressionBloc.toString()}
                        />
                    </View>
                    <View style={styles.input}>
                        <View style={layout.rowSpaced}>
                            <Text>Profondeur</Text>
                            <Text>m</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setProfondeur(value)}
                            keyboardType="numeric"
                            value={profondeur.toString()}
                        />
                    </View>
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <DisplayBox
                        title={"Air biberon à P"}
                        color="#333"
                        unit={"L"}
                        value={airBiberon}
                    />
                    <DisplayBox
                        title={"Air CG à P"}
                        color="#333"
                        unit={"L"}
                        value={airCG}
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <DisplayBox
                        title={"Nombre de biberons nécessaires"}
                        color="#333"
                        unit={null}
                        value={nbBiberons}
                    />
                    <DisplayBox
                        title={"Nombre de CG nécessaires"}
                        color="#333"
                        unit={null}
                        value={nbCG}
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "blue" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>
                                Volume relever
                            </Text>
                            <Text style={{ color: "white" }}>L</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setVolumeRelever(value)}
                            keyboardType="numeric"
                            value={volumeRelever.toString()}
                        />
                    </View>
                    <View style={[styles.input, { backgroundColor: "blue" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Densité</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setDensite(value)}
                            keyboardType="numeric"
                            value={densite.toString()}
                        />
                    </View>
                    <DisplayBox
                        title={"Masse"}
                        color="blue"
                        unit={"kg"}
                        value={masse}
                    />
                </View>
                <View>
                    <View style={styles.tableRow}>
                        <Text style={{ flex: 1 }}>Matériaux</Text>
                        <Text style={{ flex: 1, textAlign: "left" }}>
                            Densité
                        </Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={{ flex: 1 }}>Fonte</Text>
                        <Text style={{ flex: 1, textAlign: "left" }}>7.4</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={{ flex: 1 }}>Plomb</Text>
                        <Text style={{ flex: 1, textAlign: "left" }}>11.4</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={{ flex: 1 }}>Béton</Text>
                        <Text style={{ flex: 1, textAlign: "left" }}>
                            1.9 à 2.8
                        </Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={{ flex: 1 }}>Brique</Text>
                        <Text style={{ flex: 1, textAlign: "left" }}>
                            1.4 à 2.2
                        </Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={{ flex: 1 }}>Sable</Text>
                        <Text style={{ flex: 1, textAlign: "left" }}>1.7</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={{ flex: 1 }}>PVC</Text>
                        <Text style={{ flex: 1, textAlign: "left" }}>1.4</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={{ flex: 1 }}>Beurre</Text>
                        <Text style={{ flex: 1, textAlign: "left" }}>
                            0.865
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default VolumeAirTrasoum;

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
    tableRow: {
        backgroundColor: "#aaa",
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 1,
        flexDirection: "row",
    },
});
