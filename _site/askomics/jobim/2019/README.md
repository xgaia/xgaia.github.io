# Jobim 2019
-------------------------

<br><br><br>
<center>
    <h3>
        AskOmics, a user-friendly interface to semantic web technologies for integrating local datasets with references resources
    </h3>    
</center>


.footnote[Xavier Garnier, Anthony Bretaudeau, Fabrice Legeai, Anne Siegel and Olivier Dameron]

---

## Table of contents
---------

1. AskOmics

2. Demo

3. What's next?


---


## AskOmics
### A nightmare of data
---------

--

- Big Data: Datasets so **large** or **complex** that traditional data processing is inadequate.

- More than 1500 databases, lack of interoperability, multiple file format


![data_deluge](images/data_deluge.png "data_deluge")

---

## AskOmics
### How to explore data
---------

![schema](images/schema.png "schema")

---


## AskOmics
### How to explore data
---------

- <font color="red">Entity</font>

- <font color="green">Attribute</font> of entity

- <font color="blue">Relation</font> between entities

--


<font color="red">Gene</font> have a <font color="green">chromosome</font><br><br>


<font color="red">Reaction</font> <font color="blue">is in</font> <font color="red">Pathway</font>



---


## AskOmics
### The semantic web
---------

- RDF (resource description framework) can well describe entities and relations

```
:gene rdf:type owl:Class .
:chromosome rdf:type owl:ObjectProperty .
:chromosome rdfs:domain :Gene .

:AT001 rdf:type :Gene ;
       rdfs:label "AT001" ;
       :chromosome :AT1 ;
       :end 40000 ;
       :organism :Arabidopsis_thaliana ;
       :start 100 .
```
--

- SPARQL (SPARQL protocol and query language) can be used to extract information

```
SELECT ?gene ?label
WHERE {
    ?gene rdf:type :Gene .
    ?gene rdfs:label ?label .
}

```

---

## AskOmics
### The semantic web
---------

![lod_cloud](images/lod_cloud.png "lod_cloud")


---

## AskOmics
### AskOmics as a solution
---------

--

AskOmics is a web software for data integration and query using semantic web

- Convert multiple data format into rdf triples, and store them into a triplestore

- Query the rdf graph using a user-friendly interface

- Save, relaunch and share queries and results

- AskOmics community: tools can generate entry files for AskOmics (AskoR, AuReMe)


---

## Demo
### Input files
---------

--

- Genetic files
    * *Arabidopsis thaliana* (GFF, TAIR)
    * *Brassica napus* genes (GFF, BBIP platform)
    * Orthology relation (TSV, Chalhoub *et al*, 2014)

- Differential expression
    * Differential expression of *Brassica napus* genes between roots and leaves  (TSV, EdgeR + AskoR)

- Pathway
    * genes reaction and patway data of *Brassica napus* (TSV, Metacyc + AuReMe)

![schema_small](images/schema_small.png "schema_small")

---


## Demo
---------


<br>
<center>
    <h3>
        C4EST PARTI POUR LA <a href="http://localhost:6543">D2MO</a> §§§
    </h3>    
</center>

![askomics_logo](images/askomics_logo.png "askomics_logo")


---


## Demo
### Biological questions
---------

- Which genes of *Brassica napus* are more strongly expressed in the roots than in the leaves?

--

- What are their orthologs in *Arabidospis thaliana*? Are they in a QTL?

--

- In which biological reactions are the genes obtained involved, and in which metabolic pathways are they involved?

---



## What's next?
### Ongoing work
---------

--

- Support for multiple endpoints (FederatedQueryScaler, wimmics)

--

- Extend query expressivity (and/or)

--

- Reach a larger user base
    - Offer a library of templates and queries

--


- Improve reproducibility and sharing functionalities

    - Save and share queries
    - Automated integration and query with the API

--


- Refactoring interface

    - API: Flask microframework (python)
    - Task queue: Celery (python)
    - Front: React library (JS)


---



## Collaboration
---------

Thanks to all AskOmics users:

- C Bettembourg – IGEPP aphids (D. Tagu)
- A. Evrard – IGEPP rapeseed (M. Jubault)
- M.Aite/C.Frioux/A.Siegel AUREME
- C.Bettembourg - Sanofi
- P. Leroux/F.Lecerf/S.Lagarrigue (Metachick, metabolome)
- IFB project (CIRAD/INRA) - Connecting AskOmics with ”SouthGreen” endpoint
- M. Rousseau/J.Lucas/J.Ferreira de Carvalho/S.Knosp - Rapeseed
- A. Sarniguet,J.Chappat - Rhysophere Colza
- M. Louarn Hematology
- M. Conan Seaweed
- L. Guillot-Cloarec Uniprot/NextProt
- S. Daval (INRA) - Meta-transcriptomics
- BIPAA (Arthropodes)/BBIP (Rapeseed) endpoint in production mode
- M. Wery these CIFRE - Sanofi
- M. Louarn these INSERM-INRIA
- J. Yon - Pegase, INRA
- M. Gonzalez - CGR, Universidad de Chile
- O. Chakoory/E. Forano - INRA



---

## Usefull links
---------

- Github repos
    - AskOmics: [askomics/askomics](https://github.com/askomics/askomics)
    - AskOmics3: [xgaia/flaskomics](https://github.com/xgaia/flaskomics)

- Docs:
    - AskOmics: [askomics.readthedocs.io](https://askomics.readthedocs.io)
    - AskOmics3: [flaskomics.readthedocs.io](https://flaskomics.readthedocs.io)




- Running instance: [askomics.genouest.org](https://askomics.genouest.org)

- This slides: [xgaia.github.io/askomics/jobim/2019](https://xgaia.github.io/askomics/jobim/2019)

- Contact me: [xavier.garnier@irisa.fr](mailto:xavier.garnier@irisa.fr)

