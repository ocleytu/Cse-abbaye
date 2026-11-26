# Site du CSE — Abbaye des Vaux-de-Cernay

Site des salariés : demandes de prise en charge, Gazette, agenda, budget, avantages, boîte à idées, élus.

## Fichiers
- `index.html` : le site complet (images incluses).
- `netlify.toml` : publication sans build ; en-têtes `noindex` et sécurité.
- `tests/run_tests.py` : tests automatiques (56 pages, identifiants, stories, recherche, formulaire, erreurs JS).
  `python3 tests/run_tests.py index.html --shots captures/` enregistre une capture par page ;
  `python3 tests/compare.py avant/ apres/` compare deux versions pixel par pixel.
- `tools/modele-planille.csv` : modèle de la planille des élus (agenda + « ce qui avance »).
- `tools/css_clean.py` : retire le CSS mort et les déclarations écrasées.

## Mettre à jour le contenu
- Les informations qui changent (date de mise à jour, Gazette, pourboires, budget) sont dans le bloc
  `CSE_DATA` au début du script de `index.html`.
- Agenda et « ce qui avance » : si `CSE_DATA.sheet` contient le lien CSV d’une planille Google publiée,
  le site lit la planille à chaque visite (avec une copie de secours dans le navigateur).
  Colonnes : `section` (agenda | avance), `statut` (agenda : prochaine | a_annoncer | passe ;
  avance : obtenu | demande | etude), `date` (AAAA-MM-JJ), `titre_fr`, `texte_fr`, `titre_en`,
  `texte_en`, `accueil` (oui = affiché sur l’accueil). Une date « prochaine » passée bascule seule dans « passé ».
