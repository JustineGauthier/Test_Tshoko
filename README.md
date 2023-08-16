# Test_Tshoko

# Documentation de l'Application Node.js

## Installation

1. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre système.

2. Téléchargez ou clonez le code source de l'application depuis GitHub.

3. Ouvrez un terminal et accédez au répertoire de l'application.

4. Installez les dépendances en exécutant la commande suivante :
```
npm install
```

## Démarrage de l'Application

1. Dans le terminal, lancez le serveur avec la commande :
```
node index.js
```

2. Le message "Serveur démarré sur le port 3000" indique que le serveur est en cours d'exécution.

## Utilisation de l'Application

Utilisez un outil de requêtes HTTP (comme [Postman](https://www.postman.com/)) pour tester les fonctionnalités de l'application.

### Récupérer tous les artistes

- Méthode : GET
- URL : `http://localhost:3000/api/artists`

### Récupérer un artiste par ID

- Méthode : GET
- URL : `http://localhost:3000/api/artists/:id`
(Remplacez `:id` par l'ID réel de l'artiste)

### Ajouter un nouvel artiste

- Méthode : POST
- URL : `http://localhost:3000/api/artists`
- Données JSON :
```json
{
 "name": "Nouvel Artiste"
}
```

### Supprimer un artiste par ID
- Méthode : DELETE
- URL : http://localhost:3000/api/artists/:id
(Remplacez :id par l'ID réel de l'artiste)

### Arrêt de l'Application
Pour arrêter le serveur, revenez au terminal et appuyez sur Ctrl + C.
