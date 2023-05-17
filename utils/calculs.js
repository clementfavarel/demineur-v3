import { useSelector } from "react-redux";

// Calculs de rayons
export function rayon1(PdC) {
    return Math.sqrt(PdC) * 5;
}

export function rayon2(PdC) {
    return Math.sqrt(PdC) * 10;
}

export function rayon3(PdC) {
    // if PdC < 80 then return 20 * Math.sqrt(PdC)
    // else return 50 * Math.sqrt(PdC)
    return PdC < 80 ? 20 * Math.sqrt(PdC) : 50 * Math.sqrt(PdC);
}

export function rayon4(PdC) {
    return Math.cbrt(PdC) * 150;
}

export function rayon5(PdC, K) {
    return Math.cbrt(PdC) * K * 14;
}

export function rayon6(PdC, K) {
    return Math.cbrt(PdC) * K * 8;
}

export function rayon7(PdC, K) {
    return Math.cbrt(PdC) * K * 5;
}

export function rayon8(PdC, K) {
    return Math.cbrt(PdC) * K * 4;
}

export function rayon9(PdC, K) {
    return Math.cbrt(PdC) * K * 4;
}

export function rayon10cratere(PdC, K) {
    return Math.cbrt(PdC) * K;
}

export function rayon10entonnoir(PdC, K) {
    return Math.cbrt(PdC) * K * 1.7;
}

export function rayonSympathie(PdC) {
    return Math.cbrt(PdC) * 0.5;
}

export function rayonEclat(PdC) {
    return Math.cbrt(PdC) * 2.4;
}

// Rayons Carte

export function displayTailleCarte(
    tailleReelle,
    tailleMesuree,
    tailleEchelleCarte
) {
    return (tailleReelle * tailleMesuree) / tailleEchelleCarte;
}

export function displayTailleReelle(
    tailleCarte,
    tailleEchelleCarte,
    tailleMesuree
) {
    return (tailleCarte * tailleEchelleCarte) / tailleMesuree;
}

export function R1Carte(PdC, tailleMesuree, tailleEchelleCarte) {
    return (rayon1(PdC) * tailleMesuree) / tailleEchelleCarte;
}

export function R2Carte(PdC, tailleMesuree, tailleEchelleCarte) {
    return (rayon2(PdC) * tailleMesuree) / tailleEchelleCarte;
}

export function R3Carte(PdC, tailleMesuree, tailleEchelleCarte) {
    return (rayon3(PdC) * tailleMesuree) / tailleEchelleCarte;
}

export function R4Carte(PdC, tailleMesuree, tailleEchelleCarte) {
    return (rayon4(PdC) * tailleMesuree) / tailleEchelleCarte;
}

export function R5Carte(PdC, K, tailleMesuree, tailleEchelleCarte) {
    return (rayon5(PdC, K) * tailleMesuree) / tailleEchelleCarte;
}

export function R6Carte(PdC, K, tailleMesuree, tailleEchelleCarte) {
    return (rayon6(PdC, K) * tailleMesuree) / tailleEchelleCarte;
}

export function R7Carte(PdC, K, tailleMesuree, tailleEchelleCarte) {
    return (rayon7(PdC, K) * tailleMesuree) / tailleEchelleCarte;
}

export function R8Carte(PdC, K, tailleMesuree, tailleEchelleCarte) {
    return (rayon8(PdC, K) * tailleMesuree) / tailleEchelleCarte;
}

export function R9Carte(PdC, K, tailleMesuree, tailleEchelleCarte) {
    return (rayon9(PdC, K) * tailleMesuree) / tailleEchelleCarte;
}

// Map
export const rayonFunctions = [
    { func: R1Carte, color: "green" },
    { func: R2Carte, color: "blue" },
    { func: R3Carte, color: "red" },
    { func: R4Carte, color: "yellow" },
    { func: R5Carte, color: "purple" },
    { func: R6Carte, color: "brown" },
    { func: R7Carte, color: "black" },
    { func: R8Carte, color: "pink" },
    { func: R9Carte, color: "white" },
];
