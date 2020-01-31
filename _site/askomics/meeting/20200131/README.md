# Réunion AskOmics
-------------------------

<!-- ![askomics](images/askomics.png "askomics") -->


.footnote[Xavier Garnier, Dyliss team, Inria]

---

## Table of contents
---------

1. AskOmics 3.2.5
    - bugfixes and improvments
    - isql-api

2. Abstractor 2.0.0

3. Documentation and training
    - AskOmics doc
    - Galaxy training material

4. AskOmics 3.3.0
    - Union queries

---

## AskOmics 3.2.5
### improvments
---------------------

- Show progress during integration
- Display integration and query exec time
- Bugfix: graph deletion
- ...

![isqlapi](images/datasets.png)

---

## AskOmics 3.2.5
### isql-api
---------------------

Le endpoint SPARQL ne peux pas retourner plus de 1 048 576 de lignes ([#700](https://github.com/openlink/virtuoso-opensource/issues/700)). La limite est codé en dur:

```sql
 maxrows := 1024*1024; -- More than enough for web-interface.
```
--

- Première approche: patcher le code pour augmenter la limite à 2 097 150 (maximum dû à l'encodage)


```diff
-  maxrows := 1024*1024; -- More than enough for web-interface.
+  maxrows := ((16*1024*1024)/8)-2; -- More than enough for web-interface.
```

Mais toujours pas assez.


---

## AskOmics 3.2.5
### isql-api
---------------------

- 2ème approche: isql (*interactive SQL*): commande qui permet d'effectuer des commandes SQL et SPARQL. N'est pas affecté par la limite.

--

Développement de [isql-api](https://github.com/xgaia/isql-api): API web pour communiquer avec l'interface ISQL de virtuoso en HTTP

--

```python
response = requests.post(url=http://localhost:5050, json={"command": "SPARQL select * from {?s ?p ?o .}", "sparql_select": true, "disable_log": false})
```

![isqlapi](images/isqlapi.png)

--

- Permet de récupérer l'ensemble des résultats
- Semble plus rapide (mais peut-être dû au cache, à tester)

---


## Abstractor 2.0.0
---------------------

[abstractor](https://github.com/askomics/abstractor) permet de générer une abstraction AskOmics à partie de données RDF

la version [2.0.0](https://github.com/askomics/abstractor/releases/tag/2.0.0) apporte quelque améliorations:

- Permet de générer l'abstraction à partir d'un endpoint SPARQL ou d'un fichier RDF
- Pas besoin de spécifier un prefix de base (il prend tout, et enlève les rdf rdfs owl et trucs spécifiques de virtuoso)

--

Utilisation :

```bash
# installation
pip install abstractor
# A partir d'un endpoint
abstractor -s https://sparql.nextprot.org -o nextprot_abstraction.ttl
# A partir d'un fichier
abstractor -s ~/Desktop/data.rdf -t xml -o abstraction.ttl
```

Assez long sur les fichiers RDF, car `rdflib` n'est pas très performante pour exécuter des requêtes SPARQL. Un triplestore est plus efficace.


---


## Documentation
### AskOmics documentation
-------------

Mise à jour de la [documentation](https://flaskomics.readthedocs.io)

- AskOmics tutorials
    - Tuto d'introduction
        - Création de gestion d'un compte
        - Upload et intégration de données
        - Construction pas à pas d'une requête
    - [WIP] Comment construire soit même des fichiers
    - Comment construire une abstraction RDF
    - Comment faire des requêtes fédérés
    - AskOmics & Galaxy
    - Contribuer en tant qu'utilisateur
- AskOmics coté administrateur
    - Déployer une instance
    - Configurer son instance
- AskOmics pour les développeurs
    - Déployer une instance de dev
    - Comment contribuer
    - Comment tester le code (intégration continue)
    - Comment contribuer à la doc


---

## Documentation
### Galaxy training material
--------------

[Galaxy training](https://training.galaxyproject.org/) est un site qui contient tout les tutoriels pour utiliser Galaxy et ses outils.


[RNA-Seq analysis with AskOmics Interactive Tool](https://github.com/xgaia/training-material/blob/askomics-it-training/topics/transcriptomics/tutorials/rna-seq-analysis-with-askomics-it/tutorial.md) est le tuto pour utiliser l'Interactive Tool AskOmics avec Galaxy.

\~le même tuto que dans la doc, mais plus axé sur Galaxy. Il est encore en cours d'écriture.

---

## AskOmics 3.3.0
### Union
----------------
- Sur les attributs

Possible sur les catégories (en sélectionnant plusieurs) mais pas pour les autres types d'attributs

--> Ajouter la possibilité de faire plusieurs filtre sur le même attribut

- Pas possible sur les relations

---

## AskOmics 3.3.0
### Union
----------------
- Première approche : le compositeur de requête

L'utilisateur effectue plusieurs requêtes dans un premier temps, puis utilise une autre interface pour récupérer l'union entre les 2.

--> Problème : il faut faire un `UNION` de la requête entière.


---

## AskOmics 3.3.0
### Union
----------------

![compose](images/compose.png)

---


## AskOmics 3.3.0
### Union
----------------



transcript1_Label|transcriptomics13_Label
----|----
AT1G01060|1dpi_AT1G01060
AT1G01060|2dpi_AT1G01060
AT1G05250|1dpi_AT1G05250

---



## AskOmics 3.3.0
### Union
----------------

- 2ème approche : Utiliser un noeud d'union


![compose](images/union_node.png)

--

--> Problème d'affichage.

transcript1_Label|transcriptomics13_Label|transcriptomics30_Label
----|----|----
AT1G01060|1dpi_AT1G01060|
AT1G01060||2dpi_AT1G01060
AT1G05250|1dpi_AT1G05250|