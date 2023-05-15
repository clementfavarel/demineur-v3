import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";

const RayonSoum = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ScrollView horizontal>
                    <View style={styles.column}>
                        <Text style={styles.cell}>PdC</Text>
                        <Text style={styles.cell}></Text>
                        <Text style={styles.cell}>1</Text>
                        <Text style={styles.cell}>3</Text>
                        <Text style={styles.cell}>10</Text>
                        <Text style={styles.cell}>20</Text>
                        <Text style={styles.cell}>30</Text>
                        <Text style={styles.cell}>50</Text>
                        <Text style={styles.cell}>100</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>300</Text>
                        <Text style={styles.cell}>400</Text>
                        <Text style={styles.cell}>500</Text>
                        <Text style={styles.cell}>600</Text>
                        <Text style={styles.cell}>700</Text>
                        <Text style={styles.cell}>800</Text>
                        <Text style={styles.cell}>900</Text>
                        <Text style={styles.cell}>1000</Text>
                        <Text style={styles.cell}>1500</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>R1</Text>
                        <Text style={styles.cell}>Zod meo</Text>
                        <Text style={styles.cell}>10</Text>
                        <Text style={styles.cell}>20</Text>
                        <Text style={styles.cell}>30</Text>
                        <Text style={styles.cell}>50</Text>
                        <Text style={styles.cell}>50</Text>
                        <Text style={styles.cell}>75</Text>
                        <Text style={styles.cell}>100</Text>
                        <Text style={styles.cell}>150</Text>
                        <Text style={styles.cell}>150</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>250</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>R2</Text>
                        <Text style={styles.cell}>
                            Bat de guerre, épaves, install portuaires, cables
                        </Text>
                        <Text style={styles.cell}>12</Text>
                        <Text style={styles.cell}>25</Text>
                        <Text style={styles.cell}>40</Text>
                        <Text style={styles.cell}>60</Text>
                        <Text style={styles.cell}>70</Text>
                        <Text style={styles.cell}>100</Text>
                        <Text style={styles.cell}>120</Text>
                        <Text style={styles.cell}>170</Text>
                        <Text style={styles.cell}>210</Text>
                        <Text style={styles.cell}>240</Text>
                        <Text style={styles.cell}>270</Text>
                        <Text style={styles.cell}>300</Text>
                        <Text style={styles.cell}>320</Text>
                        <Text style={styles.cell}>340</Text>
                        <Text style={styles.cell}>360</Text>
                        <Text style={styles.cell}>380</Text>
                        <Text style={styles.cell}>470</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>R2</Text>
                        <Text style={styles.cell}>Bat commerce</Text>
                        <Text style={styles.cell}>25</Text>
                        <Text style={styles.cell}>50</Text>
                        <Text style={styles.cell}>80</Text>
                        <Text style={styles.cell}>120</Text>
                        <Text style={styles.cell}>140</Text>
                        <Text style={styles.cell}>200</Text>
                        <Text style={styles.cell}>240</Text>
                        <Text style={styles.cell}>340</Text>
                        <Text style={styles.cell}>420</Text>
                        <Text style={styles.cell}>480</Text>
                        <Text style={styles.cell}>540</Text>
                        <Text style={styles.cell}>600</Text>
                        <Text style={styles.cell}>640</Text>
                        <Text style={styles.cell}>680</Text>
                        <Text style={styles.cell}>720</Text>
                        <Text style={styles.cell}>760</Text>
                        <Text style={styles.cell}>930</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>R2</Text>
                        <Text style={styles.cell}>
                            Bat fort tonnage, pipeline
                        </Text>
                        <Text style={styles.cell}>50</Text>
                        <Text style={styles.cell}>100</Text>
                        <Text style={styles.cell}>160</Text>
                        <Text style={styles.cell}>240</Text>
                        <Text style={styles.cell}>280</Text>
                        <Text style={styles.cell}>400</Text>
                        <Text style={styles.cell}>480</Text>
                        <Text style={styles.cell}>680</Text>
                        <Text style={styles.cell}>840</Text>
                        <Text style={styles.cell}>960</Text>
                        <Text style={styles.cell}>1100</Text>
                        <Text style={styles.cell}>1200</Text>
                        <Text style={styles.cell}>1300</Text>
                        <Text style={styles.cell}>1400</Text>
                        <Text style={styles.cell}>1500</Text>
                        <Text style={styles.cell}>1600</Text>
                        <Text style={styles.cell}>1900</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>R3</Text>
                        <Text style={styles.cell}>
                            Plongeurs, baigneurs, ourvages d'art
                        </Text>
                        <Text style={styles.cell}>300</Text>
                        <Text style={styles.cell}>500</Text>
                        <Text style={styles.cell}>700</Text>
                        <Text style={styles.cell}>1000</Text>
                        <Text style={styles.cell}>1000</Text>
                        <Text style={styles.cell}>1500</Text>
                        <Text style={styles.cell}>2000</Text>
                        <Text style={styles.cell}>2000</Text>
                        <Text style={styles.cell}>3000</Text>
                        <Text style={styles.cell}>3000</Text>
                        <Text style={styles.cell}>3000</Text>
                        <Text style={styles.cell}>3000</Text>
                        <Text style={styles.cell}>3000</Text>
                        <Text style={styles.cell}>3000</Text>
                        <Text style={styles.cell}>3000</Text>
                        <Text style={styles.cell}>3000</Text>
                        <Text style={styles.cell}>3500</Text>
                    </View>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    column: {
        marginHorizontal: 1,
        flexDirection: "column",
    },
    cell: {
        marginVertical: 1,
        padding: 10,
        backgroundColor: "#aaa",
    },
});

export default RayonSoum;
