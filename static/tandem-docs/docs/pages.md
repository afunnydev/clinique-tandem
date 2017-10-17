## Rappel

Tel que mentionné dans l'introduction, il faut bien maitrîser le concept d'identifiant:

- Deux articles différents **ne doivent pas** avoir le même identifiant.
- La version française d'un article et la version anglaise d'un article **ont le même identifiant**.

C'est de cette manière que notre ami Hugo (encore une fois, ce n'est pas un nom de personne) reconnaîtra que c'est le même article, mais sous une différente forme.

```hint|directive
Aussi, n'oubliez pas le Flow de travail décrit dans l'Introduction ;)

*Rappel*: J'utilise une fonctionnalité qui permet de travailler sur des changements avant de les mettre officiellement en ligne. Vous verrez que lorsque vous cliquer sur "Save" sur une page que vous avez modifié, cette modification est envoyée dans le champ "Draft" (Brouillon). Une fois satisfait, si vous voulez que quelqu'un d'autre l'approuve, vous pouvez le déplacer dans "Waiting for Review" (Révision). Une fois prêt, vous pouvez le déplacer dans "Waiting to go live". **Vous devez absolument cliquer sur "Publish Now" pour chaque élément que vous voulez publier.**
```

## Création

Tel qu'expliqué précédemment, vous devez déjà savoir comment créer un article? Voyons voir..

1. Cliquez sur le menu
2. Cliquez sur le petit + à droite d'Article-FRS ou Article-ENS

### Français VS Anglais

La version française et la version anglaise de votre article sont séparées dans votre interface. Elles peuvent exister une sans l'autre et sont seulement reliées par leur identifiant. Tout le reste peut être différent. Vous devez les créer, sauvegarder et modifier de manière indépendante.

### Les champs

- *Titre officiel* : Ceci est le titre de l'article que tout le monde pourra voir dans la liste et sur la page d'un article individuel. Il est officiellement votre H1 (voir la portion sur le référencement).
- *Titre SEO* : Titre de la page web, indexé par Google. *non-visible*
- *Description SEO* : Description de la page web, indexé par Google. *non-visible*. Vous avez le droit à 155 caractères. Veuillez vous référer à la section sur le référencement pour plus d'information.
- *Lien* : La portion de lien de la page web qui sera après le http://www.cryos.com ou http://www.cryos.com/en. Il peut contenir seulement des chiffes, lettres et tirets. C'est très important de le choisir intelligement, pour le référencement. 

```hint|directive
Exemple en français: "ceci-est-un-exemple" donnera http://www.cryos.com/ceci-est-un-example
Exemple en anglais: "this-is-my-example" donnera http://www.cryos.com/en/this-is-my-example
```

- *Identifiant* : Nous en avons discuté dans l'introduction. C'est l'identifiant unique de cet article, qui doit être le même dans toutes les langues traduites. Il peut contenir seulement des chiffes, lettres et tirets. Lorsque vous commencerez à taper votre identifiant, une recherche se fera automatiquement parmi les identifiants existants. Si vous créez un nouvel article, assurez-vous d'écrire un nouvel identifiant unique jamais utilisé. Si vous faites la traduction d'un article, assurez-vous de sélectionner le bon identifiant dans la liste. Si vous ne la voyez pas, descendez un peu dans la page :) Voici la nomenclature que j'ai suivie, je conseille de poursuivre dans la même lignée: #-mot-cle -> Ex: 22-analyse-posturale
- *Résumé court* : Notre ami Hugo (encore une fois pas le nom) crée automatiquement des résumé d'article pour les carousel et les pages où il y plusieurs articles. Cependant, sur certaines tailles d'appareil, cette description est trop grande sur la page d'accueil. Écrivez donc ici quelque chose entre 250 et 300 caractères seulement si l'article est sur la page d'accueil. Vous pouvez copier-coller seulement les 250 premiers caractères de votre texte :)
- *Auteur* : C'est bien important d'appliquer le concept d'identifiant ici, pour qu'Hugo puisse retrouver les informations de l'auteur. Chaque auteur possède un identifiant unique, qu'il faut utiliser ici pour associer l'article à l'auteur. Lorsque vous commencerez à taper votre identifiant, une recherche se fera automatiquement parmi les identifiants **DÉJÀ UTILISÉS DANS LES ARTICLES EN FRANÇAIS. Ça ne contient pas nécessairement tous vos auteurs**. Si vous venez de créer cet auteur et il n'a pas été utlisé, vous pouvez quand même indiquer son identifiant ici et tout fonctionnera. Cette liste est seulement pour vous aider si cet article est écrit par un auteur déjà utilisé. Si vous ne voyez pas la liste, descendez un peu dans la page :)

```hint|directive
Vous voulez associé cette article à Charlène Boisclair? Vous devez utiliser son identifiant unique que vous pouvez retrouver dans [la section auteur de votre CMS](/admin/#/collections/settings/entries/auteur). Dans ce cas-ci, vous utiliserez *boisclair*.
```
```hint|directive
Voici une liste des auteurs déjà existants en date du 3 juillet 2017, sous la forme identifiant = nom:

- annie-jean = Annie Jean, DPM
- arnaud = Arnaud Vouligny
- audree = Audrée Quinn-Carignan, DPM
- boisclair = Charlène Boisclair
- bonneau = Stéphanie Bonneau, DPM
- caroline = Caroline Guimont, DPM
- elizabeth = Élizabeth Piché, DPM
- frederic = Frédéric Gremillet, DPM
- gabriel = Gabriel Beaudoin-Côté, DPM
- gabrielle = Gabrielle Castonguay, DPM
- giroux = François Giroux, DPM
- gravel = Marie-Michelle Gravel, DPM
- keven = Keven Lambert, DPM
- lyndacormier = Lynda Cormier, DPM
- marie-michelle = Marie-Michelle Fecteau, DPM
- marilyne = Marilyne Langlois, DPM
- melanie = Mélanie Laplante, DPM
- morel = Alexandre Morel, DPM
- philippe_legare = Philippe Legaré, DPM
- william = William Constant, DPM
```
- *Date de publication* : La date de publication de l'article. Sachez que dans la majorité des cas, les articles sont affichées en ordre de publication. Vous pouvez donc jouer avec ses dates pour faire varier l'ordre des articles
- *Image: Choisissez votre image dans votre ordinateur. Je vous conseille de changer le nom du fichier de l'image pour le même que celui de l'identifiant, ce sera plus facile à retrouver. Cette fonctionnalité sera améliorée avec le temps :) **AUCUN ESPACE, CARACTÈRE SPÉCIAUX OU ACCENT DANS LE NOM DU FICHIER**

```hint|directive
Exemple de nom de fichier: 04-example-article.jpg, soigne-vos-pieds.jpg, les-podiatres.jpg
```

```hint|warning
*Mauvais exemple de nom de fichier*: soigné vos pieds.jpg, cryospôdiatrie.jpg
```

- *Catégories* : C'est ici que vous entrerez les noms des catégories utilisées. **Vous devez être constants dans le nom des catégories** pour qu'Hugo fasse le lien entre les articles. S'il y a plusieurs catégories, vous devez les séparer d'une virgule et d'un espace. Vous pouvez entrer un nombre illimité de catégories. Vous n'avez qu'à jeter un coup d'oeil à la page blogue pour voir la liste des catégories actives et apporter les corrections nécessaires si une erreur s'est glissée. Veuillez noter que vous catégories en anglais et en français sont totalement indépendantes.

```hint|directive
Le simple fait d'utiliser un nom de catégorie qui n'existe pas va **AUTOMATIQUEMENT** en créer une nouvelle et l'ajouter dans la barre à droite.
```

```hint|directive
Voici un example si vous avez 4 catégories: Biomécanique, Blessures sportives, Orthèses plantaires, Posture
```

```hint|warning
Les catégories FOOT ORTHOTICS et Foot Orthotics ne sont pas les mêmes.
```

- *Voir sur la page d'accueil, orthèses ou cryvizion* : Par défaut, ils sont inactifs. Si vous voulez voir cette article sur la page indiquée, vous n'avez qu'à cliquer sur le sélecteur pour le rendre coloré. Noté qu'Hugo gère les langues, donc votre article en anglais apparaît seulement dans le site anglais, peu importe la page.

### Texte

Il utilise la syntaxe Markdown, discutée dans la section précédente.

#### La case d'entrée de votre texte

Pour prévisualiser le passage du format Markdown au format texte, vous pouvez cliquer sur la switch vrai/faux qui se trouver en haut à droite. Lorsqu'active, vous pourrez voir le code au format Markdown. Je vous conseille de travailler avec la switch active, donc en format Markdown, pour éviter les bugs. Vous verrez qu'il y a des petits outils dans le haut pour vous aider:

- *Les liens* : Vous n'avez qu'à surligner un portion de texte et cliquer sur cette outil. Votre CMS vous demandera le lien que vous voulez mettre. Vous n'avez qu'à le rentrer et cliquer sur OK, le formattage se fera tout seul.
- *Le +* : Utilisé pour insérer une image. Vous choisissez une image sur votre ordinateur et puis vous entrez 1 mot ou 2 pour la décrire (Alt text), votre CMS se charge de formatter le tout

#### Le format utilisé

La seule chose que vous devez savoir, c'est que tous les sous-titres (et toutes les questions en mauves) sont des H2, ce qui signifie que vous devez les précéder de \#\#.

#### Exemple d'article

```
*Comme parents, il est normal que les douleurs aux pieds de vos enfants vous inquiètent. C’est d’autant plus vrai si vous-mêmes, vous êtes aux prises avec ce même genre de problèmes.
C’est pourquoi plusieurs parents questionnent les podiatres afin de savoir s’il existe un lien entre les douleurs aux pieds et le facteur héréditaire. Afin de vous renseigner sur la question, nous nous sommes adressés à Dre Marie-Michelle Fecteau, podiatre.*

## Est-ce que certaines affections podiariques présentes chez l’enfant peuvent être héréditaires ?

Certaines conditions podiatriques chez l’enfant peuvent, c’est vrai, être léguées par les parents. Je pense, par exemple, à certaines malformations ou au pied plat, etc. Par contre, il faut préciser que l’enfant n’héritera pas automatiquement des problèmes de pieds de ses parents.

## Dans le cas du pied plat chez l’enfant, est-ce que c’est assurément héréditaire?

Premièrement, il faut savoir que chaque enfant naît avec le pied plat. L’arche prendra sa forme definitive entre 3 et 5 ans.

Si après coup son pied reste plat, l’hérédité peut en être la cause mais ce n’est pas un automatisme. Et, comme nous le disons à plusieurs parents, il existe de nombreuses façons d’aider les enfants dans ce genre de situation.

## Est-ce que l’historique familial est un facteur déterminant dans ce genre de situation?

Bien sûr, si les deux parents souffrent de douleurs aux pieds causées par leur morphologie, l’enfant a de plus grandes chances d’en hériter.

## Est-ce que la mère risque davantage de transmettre des problèmes à son enfant que le père?

Les problèmes héréditaires peuvent être transmis autant par la mère que par le père. Par contre, l’enfant peut développer certains problèmes lorsqu’il est à l’intérieur du ventre de sa mère. Il est possible que le bébé ait les jambes compressées aux parois de l’utérus et qu’il manque d’espace, ce qui peut causer une malformation comme le pied bot ou une torsion tibiale.

## Est-ce que les problèmes podiatriques héréditaires peuvent être soignés?

Dans les cas des douleurs aux pieds qui sont causés par une condition biomécanique, oui, c’est possible d’aider l’enfant. Par exemple, il est possible de lui conseiller de faire certains exercices ou encore de porter des orthèses plantaires.

> Bien sûr, plus tôt nous avons la chance de voir l’enfant, plus vite il est possible de l’aider.

## Est-ce que le parent peut influencer l’enfant par son comportement?

Oui, absolument! Si l’enfant voit l’un de ses parents marcher ou encore s’asseoir d’une telle façon, il pourrait être porté à l’imiter.

C’est tout à fait dans la nature de l’enfant de faire ça. Le parent qui souhaite aider son enfant doit donc surveiller sa posture, son type de chaussures ou la façon dont il s’assseoit.

## Si les deux parents souffrent d’une mauvaise condition podiatrique, est-ce que l’enfant en héritera automatiquement?

Non, pas nécessairement. Bien sûr, l’enfant dont les deux parents souffrent du pied plat, par exemple, aura de plus grandes chances d’en hériter aussi. Mais il est tout à fait possible qu’il profite d’une parfaite santé des pieds sans la moindre douleur.

## En conclusion, est-ce que les douleurs aux pieds peuvent être héréditaires?

Dans certains oui, c’est possible, mais ça n’arrive pas tout le temps. Comme nous le disons aux parents, il est inutile de se blâmer systématiquement si votre enfant souffre des mêmes douleurs aux pieds que lui.

Nous leur conseillons plutôt de consulter un podiatre. De cette façon, nous pouvons rapidement trouver des solutions afin de lui venir en aide.
```

### L'aperçu

Cette portion est encore en construction, ne vous y fiez pas pour le moment, puisque ce n'est qu'un ramassi d'information. Vous verrez votre aperçu sur votre site une fois que vous aurez sauvegarder votre CMS :)

## Modification

Pour modifier un article, tous les champs sont identiques que ceux de la création. **Ne modifiez jamais un identifiant ou bien le lien de l'article**. La personne en charge de votre référencement vous taperait sur les doigts. Il faut comprendre que Google indexe les liens de votre site et que si vous changez le lien, les gens ne pourront pu y accéder par Google tant que Google ne sera pas passer à nouveau sur votre site, ce qui peut être long, il a autre chose à faire ;) Si vous devez vraiment changer un lien, faites-moi signe!