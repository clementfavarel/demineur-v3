import {
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
} from "react-native";
import React, { useState } from "react";
import layout from "../styles/layout";
import DisplayBox from "../components/DisplayBox";

const CalculVolume = () => {
    const [cote, setCote] = useState(2);
    const cube = Math.pow(cote, 3);
    const [hauteur, setHauteur] = useState(2);
    const [largeur, setLargeur] = useState(3);
    const [longueur, setLongueur] = useState(1);
    const paveDroit = hauteur * largeur * longueur;
    const [diameter, setDiameter] = useState(2);
    const rayon = diameter / 2;
    const [rayonSphere, setRayonSphere] = useState(1);
    const volumeSphere =
        (4 * Math.PI * rayonSphere * Math.pow(rayonSphere, 3)) / 3;
    const [longueurCylindre, setLongueurCylindre] = useState(2);
    const [rayonCylindre, setRayonCylindre] = useState(1);
    const volumeCylindre =
        longueurCylindre * Math.PI * Math.pow(rayonCylindre, 2);
    const [R1, setR1] = useState(4);
    const [R2, setR2] = useState(2);
    const [hauteurCone, setHauteurCone] = useState(3);
    const volumeCone =
        (Math.PI * hauteurCone * (R1 * R1 + R1 * R2 + R2 * R2)) / 3;
    const [petitCote, setPetitCote] = useState(2);
    const [grandCote, setGrandCote] = useState(3);
    const [hauteurTrapeze, setHauteurTrapeze] = useState(2.5);
    const [longueurTrapeze, setLongueurTrapeze] = useState(4);
    const volumeTrapeze =
        ((petitCote + grandCote) / 2) * hauteurTrapeze * longueurTrapeze;

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "gray" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Côté</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setCote(value)}
                            keyboardType="numeric"
                            value={cote.toString()}
                        />
                    </View>
                    <DisplayBox
                        title="Volume cube"
                        value={cube}
                        unit={null}
                        color="gray"
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "green" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Hauteur</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setHauteur(value)}
                            keyboardType="numeric"
                            value={hauteur.toString()}
                        />
                    </View>
                    <View style={[styles.input, { backgroundColor: "green" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Largeur</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setLargeur(value)}
                            keyboardType="numeric"
                            value={largeur.toString()}
                        />
                    </View>
                    <View style={[styles.input, { backgroundColor: "green" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Longueur</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setLongueur(value)}
                            keyboardType="numeric"
                            value={longueur.toString()}
                        />
                    </View>
                </View>
                <DisplayBox
                    title="Calcul pavé droit"
                    value={paveDroit}
                    unit={null}
                    color="green"
                />
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "orange" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Diamètre</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setDiameter(value)}
                            keyboardType="numeric"
                            value={diameter.toString()}
                        />
                    </View>
                    <DisplayBox
                        title="Diamètre a rayon"
                        value={rayon}
                        unit={null}
                        color="orange"
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "red" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Rayon</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setRayonSphere(value)}
                            keyboardType="numeric"
                            value={rayonSphere.toString()}
                        />
                    </View>
                    <DisplayBox
                        title="Volume sphère"
                        value={volumeSphere}
                        unit={null}
                        color="red"
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "gray" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Longueur</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setLongueurCylindre(value)}
                            keyboardType="numeric"
                            value={longueurCylindre.toString()}
                        />
                    </View>
                    <View style={[styles.input, { backgroundColor: "gray" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Rayon</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setRayonCylindre(value)}
                            keyboardType="numeric"
                            value={rayonCylindre.toString()}
                        />
                    </View>
                    <DisplayBox
                        title="Volume Cylindre"
                        value={volumeCylindre}
                        unit={null}
                        color="gray"
                    />
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "blue" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Longueur</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setR1(value)}
                            keyboardType="numeric"
                            value={R1.toString()}
                        />
                    </View>
                    <View style={[styles.input, { backgroundColor: "blue" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Rayon</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setR2(value)}
                            keyboardType="numeric"
                            value={R2.toString()}
                        />
                    </View>
                    <View style={[styles.input, { backgroundColor: "blue" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Rayon</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setHauteurCone(value)}
                            keyboardType="numeric"
                            value={hauteurCone.toString()}
                        />
                    </View>
                </View>
                <DisplayBox
                    title="Volume cone tronqué"
                    value={volumeCone}
                    unit={null}
                    color="blue"
                />
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "green" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Petit côté</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setPetitCote(value)}
                            keyboardType="numeric"
                            value={petitCote.toString()}
                        />
                    </View>
                    <View style={[styles.input, { backgroundColor: "green" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Grand côté</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setGrandCote(value)}
                            keyboardType="numeric"
                            value={grandCote.toString()}
                        />
                    </View>
                </View>
                <View style={[layout.row, layout.flexCenter]}>
                    <View style={[styles.input, { backgroundColor: "green" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Hauteur</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setHauteurTrapeze(value)}
                            keyboardType="numeric"
                            value={hauteurTrapeze.toString()}
                        />
                    </View>
                    <View style={[styles.input, { backgroundColor: "green" }]}>
                        <View style={layout.rowSpaced}>
                            <Text style={{ color: "white" }}>Longueur</Text>
                            <Text>{null}</Text>
                        </View>
                        <TextInput
                            style={[styles.input, { color: "white" }]}
                            onChangeText={(value) => setLongueurTrapeze(value)}
                            keyboardType="numeric"
                            value={longueurTrapeze.toString()}
                        />
                    </View>
                </View>
                <DisplayBox
                    title="Volume d'un pavé droit à base trapèze"
                    value={volumeTrapeze}
                    unit={null}
                    color="green"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default CalculVolume;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        color: "black",
        height: 100,
        borderColor: "black",
        borderWidth: 1,
        textAlign: "center",
        fontSize: 40,
        marginHorizontal: 5,
        marginVertical: 2.5,
        padding: 5,
    },
});
