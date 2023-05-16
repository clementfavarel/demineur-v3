import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import { rayonFunctions } from "../utils/calculs";
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
export default function App() {
    const [userLocation, setUserLocation] = useState(null);
    const [locationLoaded, setLocationLoaded] = useState(false);
    const screenHeight = Dimensions.get("window").height;
    const { tailleMesuree, tailleEchelleCarte } = useSelector(
        (state) => state.crReducer
    );
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                return;
            }
            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });

            const { latitude, longitude } = location.coords;
            setUserLocation({ latitude, longitude });
            setLocationLoaded(true);
        })();
    }, []);

    if (!locationLoaded) {
        return (
            <View
                automaticallyAdjustContentInsets={false}
                style={{ height: screenHeight }}
            >
                <View style={styles.bkgLoader}>
                    <ActivityIndicator
                        style={styles.loader}
                        size="large"
                        color="#1B1B1B"
                    />
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.001,
                }}
            >
                <Marker coordinate={userLocation}>
                    <Callout tooltip style={styles.callout}>
                        <View style={styles.calloutTextContainer}>
                            <Text style={styles.calloutText}>
                                Vous êtes ici
                            </Text>
                        </View>
                    </Callout>
                </Marker>
                {rayonFunctions.map((item, index) => (
                    <Circle
                        key={index}
                        center={userLocation}
                        radius={item.func(tailleMesuree, tailleEchelleCarte)}
                        strokeColor={item.color} // Couleur spécifiée dans rayonFunctions
                    />
                ))}
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    callout: {
        backgroundColor: "rgba(213, 74, 91, 1)",
        borderRadius: 6,
        padding: 6,
    },
    calloutTextContainer: {
        alignItems: "center",
    },
    calloutText: {
        fontSize: 12,
        color: "white",
    },
    bkgLoader: {
        height: 700,
    },
    loader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
