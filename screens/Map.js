import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
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

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("La permission de localisation a été refusée");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            setUserLocation({ latitude, longitude });
            setLocationLoaded(true);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
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
