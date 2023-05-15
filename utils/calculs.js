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

export function R1Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon1(80) * tailleMesuree) / tailleEchelleCarte;
}

export function R2Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon2(80) * tailleMesuree) / tailleEchelleCarte;
}

export function R3Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon3(80) * tailleMesuree) / tailleEchelleCarte;
}

export function R4Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon4(80) * tailleMesuree) / tailleEchelleCarte;
}

export function R5Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon5(80, 0.5) * tailleMesuree) / tailleEchelleCarte;
}

export function R6Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon6(80, 0.5) * tailleMesuree) / tailleEchelleCarte;
}

export function R7Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon7(80, 0.5) * tailleMesuree) / tailleEchelleCarte;
}

export function R8Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon8(80, 0.5) * tailleMesuree) / tailleEchelleCarte;
}

export function R9Carte(tailleMesuree, tailleEchelleCarte) {
    return (rayon9(80, 0.5) * tailleMesuree) / tailleEchelleCarte;
}

// Convertisseur virgule en point
export const convertCommaToDot = (setState) => (text) => {
    const value = text.replace(",", ".");
    setState(value);
};
