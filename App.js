import React from "react";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Pressable } from "react-native";
import CalculRayon from "./screens/CalculRayon";
import RayonCarte from "./screens/RayonCarte";
import RayonSoum from "./screens/RayonSoum";
import CalculDose from "./screens/CalculDose";
import CalculVolume from "./screens/CalculVolume";
import VolumeAirTrasoum from "./screens/VolumeAirTrasoum";
import Map from "./screens/Map";
import CompteRendu from "./screens/CompteRendu";

const Stack = createNativeStackNavigator();

function Accueil({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Calcul de rayon")}
            >
                <Text style={styles.text}>Calcul de rayon</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Rayon carte")}
            >
                <Text style={styles.text}>Rayon carte</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Rayon soum")}
            >
                <Text style={styles.text}>Rayon soum</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Calcul de dose")}
            >
                <Text style={styles.text}>Calcul de dose</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Calcul de volume")}
            >
                <Text style={styles.text}>Calcul de volume</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Volume Air Trasoum")}
            >
                <Text style={styles.text}>Volume Air Trasoum</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Map")}
            >
                <Text style={styles.text}>Map</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Compte rendu")}
            >
                <Text style={styles.text}>Compte rendu</Text>
            </Pressable>
        </View>
    );
}

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Accueil">
                    <Stack.Screen name="Accueil" component={Accueil} />
                    <Stack.Screen
                        name="Calcul de rayon"
                        component={CalculRayon}
                    />
                    <Stack.Screen name="Rayon carte" component={RayonCarte} />
                    <Stack.Screen name="Rayon soum" component={RayonSoum} />
                    <Stack.Screen
                        name="Calcul de dose"
                        component={CalculDose}
                    />
                    <Stack.Screen
                        name="Calcul de volume"
                        component={CalculVolume}
                    />
                    <Stack.Screen
                        name="Volume air trasoum"
                        component={VolumeAirTrasoum}
                    />
                    <Stack.Screen name="Carte" component={Map} />
                    <Stack.Screen name="Compte rendu" component={CompteRendu} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-around",
    },
    button: {
        padding: 30,
        margin: 50,
        alignItems: "center",
        backgroundColor: "#00f",
    },
    text: {
        color: "#fff",
    },
});
