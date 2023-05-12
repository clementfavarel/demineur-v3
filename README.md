# App Démineur

## Présentation d’ensemble du projet

### Présentation du commanditaire :

Les marins du GPD souhaitent faire des calculs de rayons et de volume ainsi que d’avoir une carte avec des données pour éviter de tout faire à la main et gagner du temps.
Notre application mobile vous permettra de mesurer avec précision les rayons et volumes ainsi que de cartographier les données associées, tout cela directement sur le terrain. Plus besoin d'accès internet, notre application fonctionne en mode hors ligne (seulement pour les calculs) pour une utilisation en toutes circonstances. Avec une interface utilisateur intuitive et une grande fiabilité, notre application facilitera votre travail en minimisant le temps et les efforts de travail.
(PS : Nous allons essayer de développer la carte sans accès à une connexion internet mais cela nous semble compliqué au premier abord.)

### Périmètre du projet :

Le projet est destiné à fonctionner sur mobile ou tablette.
Il doit être compatible avec des systèmes Android (et variantes) et IOS/IpadOS.
Spécificités :
L’application doit intégrer une carte ainsi qu’un service de géolocalisation.
À terme, il serait optimal de fournir un système de cache qui permette de stocker les informations de la carte et ainsi d’éviter au soldat d’être dépendant d’internet.
Ajouter les isobathes sur la carte serait plus pratique pour les soldats.
Un système de compte rendu serait un gain de temps supplémentaire.

## Description fonctionnelle et technique

### Arborescence de l’application

**Grandes sections de l’application :**

- Calculs
- Carte

**Rubriques de la section Calculs : (sous forme d’onglets)**

- Calcul de rayon terrestre
- Rayon carte
- Rayon sous-marin
- Calcul de dose
- Calcul de volumes
- Volume air TRASOUM

**Rubriques de la section Carte : (sous forme de boutons “activer/désactiver”)**

- Rayons de R1 à R9
- Isobathes
- Visualisation de la mine

### Contraintes techniques

**Intégration de services tiers :**

- API Google Maps
- API Isobathes

**Solutions utilisées pour l’application :**
React Native (développement d’application mobile hybride/cross-platform).
