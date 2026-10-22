# Mon Hifz — version App Store (brief pour Claude Code)

Ce fichier résume tout ce qui a été décidé avec Soulaimane pour transformer l'app web perso « Mon Hifz » en vraie app iPhone (et plus tard Android) publiée sur l'App Store. Lis-le en entier avant de commencer.

## Règles de travail (très important)
- Parle en **français**, simplement et directement. Soulaimane n'est pas développeur.
- **Avant chaque changement, propose les options (ou un aperçu) et attends son accord.** C'est sa règle : « avant de faire une mise à jour demande-moi tes options comme ça j'approuve ».
- Montre des captures ou fais tester sur son iPhone (Expo Go) avant de valider une étape.
- Ne casse pas l'app actuelle : la version web (ce dépôt, branche `main`, publiée sur https://myhifz.github.io/Myhifz/) reste utilisée par lui et sa femme pendant la réécriture. Le nouveau projet vit dans **un dossier/dépôt séparé**.

## Ce qui existe (référence)
- Ce dépôt : `index.html` (tout le CSS + structure), `app.js` (toute la logique), `sw.js` (hors-ligne), `icons/`.
- Le **style** à reproduire à l'identique : polices Figtree (interface) et KFGQPC Uthmanic Hafs « Medine » (arabe), 4 thèmes (Vert, Rose, Bleu marine, Jaune) en clair/sombre, cartes arrondies (24 px), carte « Révision du jour » en dégradé avec anneau de progression et motif géométrique islamique, barre de navigation flottante en bas, icônes « duotone », animations douces (désactivées si « réduire les animations »). Les valeurs exactes sont dans les variables CSS de `index.html` (`:root`, `[data-c=…]`, mode sombre).

## Fonctionnalités à garder (logique dans app.js)
- **Programme par pages** (Mushaf Madani 604 pages, table des 114 sourates `RAW` dans app.js) : plage mémorisée (pages p1–p2), sens d'apprentissage (An-Nas → Al-Fatiha ou l'inverse).
- **Hifdh al-Jadid** : les N pages les plus récentes, chaque jour. **Hifdh** : le reste en cycle de D jours (`program()`, `janbFor()`, `workIndex()`), **jours off** sautés.
- Changer un réglage **ne remet pas** le cycle à zéro (`startKeeping()`), et des flèches « Corriger le jour » permettent d'ajuster le jour du cycle.
- **Révision du jour** : cocher les sourates (une page compte faite quand toutes ses sourates du jour sont cochées), « Tout marquer comme fait », confettis à la fin.
- **À renforcer** : sourates difficiles (appui long ou bouton dans le lecteur), avec **compteur de répétitions** (3/5/7/10, réglable dans le lecteur, défaut 5).
- **Nouvel apprentissage** : bouton + avec **¼, ½ ou 1 page** (`fq` = quarts de la page en cours, la page entre en révision quand elle est complète), bouton − pour retirer, « Annuler » 5 s.
- **Planning** : bande des 14 jours, détail du jour, anneau du cycle, calendrier du mois, **jours passés consultables** (ce qui a été coché ✓/✗, heure de début/fin).
- **Moi** : profil + photo, objectif (sourate visée + rythme en pages/semaine, date d'arrivée estimée), chiffres, carte des 30 juz, historique (8 semaines / 6 mois), jalons (badges), date de début du hifdh, bilan de la semaine.
- **Réglages** : Mon programme, Révision, Apparence (thème + clair/sombre/auto), Sauvegarde.
- **Lecteur de mushaf** : page par page, glisser pour tourner, bouton « À renforcer » et compteur de répétitions.
- Le **défi à deux** a été **retiré** (il était perso). Ne pas le remettre pour l'instant.

## Décisions pour la version App Store
1. **Technique** : **Expo (React Native, TypeScript)** pour iPhone + Android avec un seul code ; **EAS Build / EAS Submit** pour compiler et envoyer à Apple **sans Mac** (Soulaimane est sur Windows). Test en direct sur son iPhone avec **Expo Go**.
2. **Comptes + données** : **Supabase** (région Europe — Francfort, pour le RGPD).
   - Connexion : e-mail (lien magique ou mot de passe), **Se connecter avec Apple** (obligatoire si Google est proposé), Google.
   - L'app doit **marcher hors connexion** (données locales d'abord, synchronisation ensuite).
   - **Suppression du compte** depuis l'app (exigence Apple) et export de ses données (RGPD).
   - Sécurité : Row Level Security sur toutes les tables (chacun ne voit que ses données).
3. **Mushaf** : les pages scannées actuelles (édition Dar as-Salam, dossier `mushaf/`) sont **protégées par le droit d'auteur** → **ne pas les utiliser** dans l'app publique. Trouver une source libre : texte du Coran + polices QCF/Uthmanic (ex. données Quran.com / Tanzil, vérifier les licences) et proposer les options à Soulaimane.
4. **Retirer tout ce qui est perso** : sauvegarde GitHub (clé à coller, dépôt public), choix d'icône par lien, textes visant un proche.
5. **Page Confidentialité** + **conditions d'utilisation** (obligatoires), en français (puis anglais/arabe).
6. **Rappels** : notification quotidienne locale « C'est l'heure de ta révision » à l'heure choisie.
7. **Nom et icône** : vérifier si « Mon Hifz » est libre sur l'App Store ; garder le logo mushaf dans les 4 couleurs.
8. Plus tard : plusieurs langues (fr, en, ar), écran de bienvenue qui explique la méthode, abonnement éventuel (attention : Soulaimane est demandeur d'emploi en Belgique, tout revenu doit être vérifié avec son organisme avant de faire payer).

## Ordre conseillé
1. Créer le projet Expo, reproduire le style (thèmes, cartes, barre du bas) et les écrans vides → aperçu sur son iPhone.
2. Porter la logique (programme, révision, planning, apprentissage, à renforcer) depuis `app.js`, d'abord en local.
3. Choisir la source du mushaf (proposer les options) et faire le lecteur.
4. Ajouter Supabase : comptes, synchronisation, suppression du compte.
5. Rappels, confidentialité, nom/icône, captures d'écran App Store.
6. Compte Apple Developer (99 $/an, inscription en particulier possible), build EAS, TestFlight, puis publication.
