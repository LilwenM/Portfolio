const json_titre = [
    {
        "titre_principal": "Étudiante en développement",
        "sous_titre": "Alternante à Arche MC2",
        "btn_menu": "contacter",
        "btn_header": "curriculum vitae",
        "bandeau_menu": "Portfolio",
        "bandeau_transition": "Portfolio",
        "section_1": "Projets", 
        "section_2": "Parcours",
        "section_3": "Compétences"
    }
]

const json_liste = [
    {
        "liste": "projets",
        "lien": "section_1"
    },
    
    {
        "liste": "parcours",
        "lien": "section_2"
    }, 

    {
        "liste": "compétences",
        "lien": "section_3"
    }
]

const json_etiquette = [
    {
        "ref": "LM0.004",
        "titre": "Lilwen Malestroit",
        "img": "lys.jpg",
        "head": true,
    },

    {
        "ref": "S34.001",
        "titre": "Site Web de Location",
        "img": "location.png",
        "head": false,
        "date_deb": "février 2024",
        "date_fin": "juin 2024",
        "description": "Ce projet consiste à développer une plateforme web de location avec deux interfaces principales :"
            + "<br><p class=\"text-alinea\"><strong>– Partie Visiteur/Client</strong> : Les visiteurs peuvent consulter les annonces disponibles, rechercher des biens via des filtres (localisation, prix, type de bien, etc.), s'inscrire ou se connecter pour effectuer des réservations.</p>"
            + "<p class=\"text-alinea\"><strong>– Partie Propriétaire</strong> : Les propriétaires disposent d'un tableau de bord leur permettant de publier, modifier, et gérer leurs annonces (photos, descriptions, tarifs). Ils peuvent également suivre les demandes et interagir avec les clients.</p>"
            + "Le site est conçu en utilisant HTML, CSS et JavaScript pour l'interface utilisateur, avec PHP pour la gestion serveur et une base de données MySQL pour stocker les informations des utilisateurs, des annonces, et des transactions. Ce projet met en avant des compétences en développement full-stack, en intégration dynamique, et en gestion sécurisée des données.",
        "langages": ["MySQL", "Php", "CSS", "JavaScript", "HTML"] 
    },

    {
        "ref": "S01.001",
        "titre": "Puissance4",
        "img": "puissance4.jpg",
        "head": false,
        "date_deb": "octobre 2022",
        "date_fin": "novembre 2022",
        "description": "Ce projet consiste à développer un jeu de Puissance 4 en langage C, jouable directement dans le terminal. Les joueurs peuvent s'affronter en alternant les tours pour placer leurs jetons dans une grille représentée textuellement. Le programme gère la validation des coups, détecte les alignements gagnants (horizontal, vertical, ou diagonal), et affiche l'état de la grille en temps réel. Ce projet met en avant la maîtrise des boucles, des conditions, et la gestion des tableaux multidimensionnels en C.",
        "langages": ["C"] 

    },

    {
        "ref": "S02.001",
        "titre": "Stratégie du Puissance4",
        "img": "ordinateur.jpg",
        "head": false,
        "date_deb": "novembre 2022",
        "date_fin": "décembre 2022",
        "description": "Ce projet vise à créer un programme en langage C permettant de jouer au Puissance 4 contre une intelligence artificielle. Le joueur affronte un \"ordinateur\" qui utilise une stratégie prédéfinie pour analyser les coups possibles et choisir le meilleur mouvement. Le programme intègre des algorithmes pour bloquer les alignements adverses et privilégier ses propres opportunités de victoire, avec des niveaux de difficulté ajustables. Ce projet met en œuvre des concepts avancés tels que les arbres de décision, la recherche heuristique, et l'optimisation algorithmique.",
        "langages": ["C"] 
    },

    {
        "ref": "S01.002",
        "titre": "Application de Gestion Hôtelière",
        "img": "gestion_hotel.jpg",
        "head": false,
        "date_deb": "avril 2023",
        "description": "Ce projet consiste à développer une application en Java, utilisant JavaFX pour l'interface graphique, dédiée au personnel d'hôtel. Elle offre des fonctionnalités pour gérer :"
            + "<br><p class=\"text-alinea\"><strong>– Accueil des Clients</strong> : Enregistrement des arrivées, vérification des réservations, et gestion des départs."
            + "<p class=\"text-alinea\"><strong>– Prestations aux Clients</strong> : Suivi des services proposés (spa, ménage, blanchisserie, etc.) et association des frais correspondants à chaque client."
            + "<p class=\"text-alinea\"><strong>– Restauration</strong> : Gestion des commandes des clients au restaurant, facturation des repas et des boissons."
            + "L'application génère une facture complète et détaillée regroupant tous les frais liés au séjour, avec un historique pour faciliter la gestion administrative. Ce projet met en avant l'utilisation des concepts orientés objet, la gestion des événements avec JavaFX, et la persistance des données via une base de données relationnelle.",
        "langages": ["Java", "JavaFX"] 
    },

    {
        "ref": "S02.002",
        "titre": "Le Problème du Postier Chinois",
        "img": "postier_chinois.png",
        "head": false,
        "date_deb": "février 2023",
        "description": "Ce projet consiste à résoudre le problème du postier chinois en Python, en modélisant le trajet d’un facteur qui doit distribuer du courrier. L’objectif est de déterminer le chemin le plus court permettant de parcourir chaque arête (rue) au moins une fois dans un graphe représentant un réseau routier."
            + "<br>Le programme s’appuie sur les concepts de graphes eulériens et comprend les étapes suivantes :"
            + "<p class=\"text-alinea\"><strong>1 – Modélisation du Graphe</strong> : Création d’un graphe pondéré (via des bibliothèques comme NetworkX), où les sommets représentent des points de distribution et les arêtes les rues avec leur distance."
            + "<p class=\"text-alinea\"><strong>2 – Vérification des Sommets Impairs</strong> : Identification des sommets de degré impair pour déterminer les connexions supplémentaires nécessaires."
            + "<p class=\"text-alinea\"><strong>3 – Ajout des Arêtes</strong> : Transformation du graphe en un graphe eulérien en ajoutant les plus courtes connexions entre les sommets impairs."
            + "<p class=\"text-alinea\"><strong>4 – Chemin Eulérien</strong> : Calcul du chemin eulérien minimal parcourant toutes les arêtes au moins une fois, en minimisant les distances."
            + "Ce projet met en avant des compétences en algorithmique avancée, la manipulation des graphes, et l’optimisation des trajets.",
        "langages": ["Python"] 
    },

    {
        "ref": "S04.002",
        "titre": "Exploitation d’une Base de Données",
        "img": "base-de-donnees.png",
        "head": false,
        "date_deb": "mars 2023",
        "date_fin": "juin 2023",
        "description": "Ce projet consiste à analyser des données issues d’un fichier CSV en les transformant pour faciliter leur traitement. Les étapes incluent :"
            + "<br><p class=\"text-alinea\"><strong>Nettoyage des Données</strong> : Transformation des valeurs textuelles \"formation sélective\" et \"formation non sélective\" en valeurs binaires (1 et 0)."
            + "<p class=\"text-alinea\"><strong>Fusion de Colonnes</strong> : Concaténation des données des séries 3 et 4, ainsi que 5 et 6, afin de regrouper les informations sur la capacité des formations et le nombre de candidats, sans distinction de genre."
            + "Ces transformations permettent une analyse simplifiée et plus efficace pour répondre à des problématiques spécifiques sur les capacités et la sélectivité des formations.",
        "langages": ["MySQL"] 
    }

]

const json_infomation = 
[

    {
        "image": "arche-mc2.png",
        "orientation": "R",
        "titre": "Présentation professionnelle",
        "texte": "Je suis actuellement étudiante en alternance à Arche MC2 et en 3ᵉ année de BUT Informatique, parcours A. Mon parcours académique a débuté avec l’obtention de mon baccalauréat, où j’ai choisi de me spécialiser en mathématiques et en numérique et sciences de l’informatique. Ces disciplines ont nourri ma passion pour les technologies et renforcé mes compétences analytiques, essentielles dans le domaine de l’informatique."
            +   "<br>En intégrant le BUT Informatique, j’ai eu l’opportunité d’approfondir mes connaissances en développement, en gestion de bases de données et en analyse des systèmes. Mon alternance au sein d’Arche MC2 me permet aujourd’hui d’appliquer concrètement ces compétences dans un environnement professionnel stimulant, tout en développant mon autonomie et ma capacité à collaborer sur des projets concrets."
    },
    {
        "image": "handball.jpg",
        "orientation": "L",
        "titre": "Présentation sportives",
        "texte":    "Je pratique le handball depuis l'école primaire, ce qui représente plus de 10 ans d'expérience sur les terrains. Ce sport m’a permis de développer des qualités telles que l'esprit d'équipe, la discipline, et la persévérance, des valeurs qui m’accompagnent aussi bien sur le plan sportif que dans ma vie quotidienne."
                +   "<br>En parallèle de ma pratique, j’ai obtenu la certification de jeune arbitre (JAJ3) délivrée par la Fédération Française de Handball. Ce rôle m’a appris à prendre des décisions rapidement, à gérer des situations de stress et à veiller au respect des règles tout en gardant une posture impartiale et professionnelle."
                +   "<br>Pour la saison 2024-2025, j’ai également pris un nouveau rôle en tant que coach et entraîneuse d’une équipe de -11 ans. Cette expérience enrichissante me permet de transmettre ma passion, de partager mes connaissances avec les plus jeunes, et de contribuer à leur développement sportif et personnel."
    }

]

const json_langage = [

    {
        "nom": "Progress",
        "img": "progress.png",
        "description": "Langage de base pour développer des applications métiers avec OpenEdge."
    },
    {
        "nom": "Java",
        "img": "java.png",
        "description": "Langage orienté objet polyvalent, largement utilisé pour les applications web et mobiles."
    },
    {
        "nom": "JavaFX",
        "img": "javafx.png",
        "description": "Framework Java pour créer des interfaces utilisateur riches et modernes avec des graphiques, animations et multimédia."
    },
    {
        "nom": "Php",
        "img": "php.png",
        "description": "Langage serveur populaire pour le développement web dynamique."
    },
    {
        "nom": "C",
        "img": "c.png",
        "description": "Langage bas niveau performant, idéal pour les systèmes et applications embarquées."
    },
    {
        "nom": "Python",
        "img": "python.png",
        "description": "Langage polyvalent et lisible, utilisé pour l'IA, le web et les scripts."
    },
    {
        "nom": "JavaScript",
        "img": "javascript.png",
        "description": "Langage de script incontournable pour le développement web interactif."
    },
    {
        "nom": "React",
        "img": "react.png",
        "description": "Bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques."
    },
    {
        "nom": "SQL",
        "img": "sql.png",
        "description": "Langage standard pour interroger et gérer des bases de données relationnelles."
    },
    {
        "nom": "MySQL",
        "img": "mysql.png",
        "description": "Système de gestion de bases de données relationnelles open-source et populaire."
    },
    {
        "nom": "HTML",
        "img": "html.png",
        "description": "Langage de balisage pour structurer le contenu des pages web."
    },
    {
        "nom": "CSS",
        "img": "css.png",
        "description": "Langage de style pour concevoir l'apparence des pages web."
    }

]

const json_footer = [
    {
        "information": "Localisation",
        "picto": "../picto/location-white.png",
        "balise_deb" : "<p>",
        "balise_fin" : "</p>",
        "texte": "La Corderie - Plélo 22170 "
    },
    {
        "information": "Téléphone",
        "picto": "../picto/telephone-white.png",
        "balise_deb" : "<p>",
        "balise_fin" : "</p>",
        "texte": "07 68 93 19 14"
    },

    {
        "information": "E-mail",
        "picto": "../picto/mail-white.png",
        "balise_deb" : "<p><a href=\"mailto:lilwen.malestroit@gmail.com?subject=Portfolio%20-%20\" class=\"color-white a-text\">",
        "balise_fin" : "</a></p>",
        "texte": "lilwen.malestroit@gmail.com"
    },

    {
        "information": "Linkedin",
        "picto": "../picto/linkedin-white.png",
        "balise_deb" : "<p><a href=\"https://www.linkedin.com/in/lilwen-malestroit\" class=\"color-white a-text\" target=\"_blank\">",
        "balise_fin" : "</a></p>",
        "texte": "Lilwen Malestroit"
    }
]

