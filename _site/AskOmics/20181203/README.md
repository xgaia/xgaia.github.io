# AskOmics
-------------------------

.footnote[Xavier Garnier, Dyliss team, Inria]

---

## Table of contents
---------

1. Overview
    - Integration
    - Query
    - federated queries
    - Galaxy interactions

2. Installation
    - Virtuoso
    - User
    - Developer

3. Software architecture

4. Contributing
    - As a user
    - As a developer


---

## Overview
---------

AskOmics is a Web tool to integrate datasets and query them through a graphical interface

- Integration: Convert TSV/CSV/GFF Data into RDF triples
- Query: Cross different data sources and extract information

User build a query through an interactive graph ⇒ User don’t need to know semantic web languages (RDF/SPARQL)

---


## Overview
### Integration
---------

During integration, user provides his biological data (TSV/CSV, GFF or BED) and AskOmics automatically detect what he wants to integrate




<iframe class="small-frame" src="integration_table.html"></iframe>




---




## Overview
### Integration
---------

Data are converted into RDF

![content-abstraction](images/content_abstraction.png "content-abstraction")

- Content is the data
- Abstraction is a description of data (relation between entities, attributes ...)


---

## Overview
### Integration
---------

Content
```ttl
:geneA rdf:type :Gene ;
       rdfs:label "geneA"^^xsd :string ;
       :label "geneA"^^ xsd:string ;
       :start 500 ;
       :end 600 .
```

Abstraction
```ttl
:Gene rdf:type owl:Class ;
      displaySetting:entity "true"^^xsd:boolean ;
      rdfs:label "Gene"^^xsd:string .

:label rdf:type owl:DatatypeProperty ;
       rdfs:label "label"^^xsd:string ;
       rdfs:domain :Gene ;
       rdfs:range xsd:string .
```

---



## Overview
### Query
---------

User explore his data using the graphical interface


![content-abstraction](images/askoquery.png "askoquery")

Abstraction is requested to build the query graph and the category filters.

Content is requested to retrieve the results.



---

## Overview
### Federated queries
---------

AskOmics can perform queries on external triplestores.

- AskOmics endpoints, using AskOmics abstraction
- External endpoints (Uniprot, DBpedia ...) using a local abstraction of the endpoint

A federated query engine  decompose the query into sub-queries and execute them on the proper endpoints.

---


## Overview
### Federated queries
---------


![content-abstraction](images/federated.png "federated")

---




## Overview
### Galaxy integrations
---------

AskOmics can be used with [Galaxy](https://galaxyproject.org/)

- Load galaxy datasets into AskOmics
- Save AskOmics results into a Galaxy dataset
- save an AskOmics query into a Galaxy dataset

Galaxy can interact with AskOmics

- AskOmics tool to send datasets to AskOmics
- AskOmics interactive environment



---




## Installation
-----------------




+ Installation
    - Virtuoso
    - User
    - Developer


---


## Installation
### Virtuoso
-----------------

First, install dependencies


```bash
# Ubuntu 18.10
sudo apt remove openssl openssl-dev # virtuoso is not compatible with openssl 1.1
sudo apt install autoconf automake libtool-bin flex bison gperf gawk m4 make openssl1.0 libssl1.0-dev
```

```bash
# Fedora
sudo dnf install -y autoconf automake libtoolize flex bison gperf gawk m4 make
sudo dnf erase -y openssl-devel
sudo dnf install -y compat-openssl10-devel # virtuoso is not compatible with openssl 1.1
```
Then, download and install Virtuoso

```bash
# Download virtuoso
git clone https://github.com/openlink/virtuoso-opensource.git
cd virtuoso-opensource
git checkout v7.2.5.1 # choose the latest version
./autogen.sh
./configure
make
make install
```

---

## Installation
### Virtuoso
-----------------

Create a file `/etc/systemd/system/virtuoso.service`

```bash
[Unit]
Description=Virtuoso
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root
ExecStart=/path/to/virtuoso-t -f +configfile /path/to/virtuoso.ini
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Start and stop with:

```bash
systemctl enable virtuoso.service # start service at boot
systemctl start virtuoso.service
systemctl stop virtuoso.service
systemctl restart virtuoso.service
systemctl status virtuoso.service
```

---


## Installation
### User
#### Manual
-----------------

Install dependencies

```bash
# Ubuntu 18.04
sudo apt install -y git python3 python3-venv python3-dev zlib1g-dev npm
# Fedora 28
sudo dnf install -y git gcc gcc-c++ redhat-rpm-config zlib-devel bzip2 python3-devel npm
```

Get the latest "stable" version of AskOmics

```bash
# or use git
git clone https://github.com/askomics/askomics.git
cd askomics
git checkout 18.10 # fetch the latest stable version
```

Optional: create a config file and edit it

```bash
cp configs/askomics.ini.template configs/askomics.ini
```

Run AskOmics

```bash
./startAskomics -d prod
```

---


## Installation
### User
#### Docker
-----------------

Install docker ([here](https://docs.docker.com/install/linux/docker-ce/fedora/) for Fedora and [here](https://docs.docker.com/install/linux/docker-ce/ubuntu/) for Ubuntu)
and docker-compose

```bash
sudo apt install -y docker-compose # or sudo dnf install -y
```

Get the docker-compose files

```bash
git clone https://github.com/askomics/askomics-docker-compose.git
```

Run

```bash
cd askomics-docker-compose/virtuoso
docker-compose up -d
```


---

## Installation
### User
#### Genostack install
-----------------

Create a Instance with docker installed and run 

```bash
apt-get update && apt-get install git
git clone https://github.com/askomics/askomics-docker-compose
./askomics-docker-compose/genostack-install-env.sh
```

AskOmics is available at [http://openstack-192-168-xxx-xx.genouest.org/askomics]()

---


## Installation
### Developer
-----------------


Go to [https://github.com/askomics/askomics](https://github.com/askomics/askomics) and fork the repository

![fork](images/askomics_github.png "Fork")

Then, clone you fork

```bash
git clone https://github.com/GITHUB_USERNAME/askomics.git
cd askomics
```
Install dependancies

```bash
# Ubuntu 18.04
sudo apt install -y python3 python3-venv python3-dev zlib1g-dev npm
# Fedora 28
sudo dnf install -y gcc gcc-c++ redhat-rpm-config zlib-devel bzip2 python3-devel npm
```

Run

```bash
./startAskomics -d dev
```

---


## Software architecture
-------------

---

## Software architecture
-------------


AskOmics is composed of 3 part

- Backend: [Pyramid](https://trypyramid.com) framework
- Frontend: Javascript ([jquery](https://jquery.com) + [d3.js](https://d3js.org))
- Triplestore



---


## Software architecture
-------------

[http://localhost:6543](http://localhost:6543)


`__init__.py`
```python
def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application."""
    config.add_route('home', '/')
```

`views.py`
```python
@view_config(route_name='home', renderer='static/src/templates/index.pt')
def my_view(request):
    return {'project': 'Askomics'}
```

`static/src/templates/index.pt`
```html
<script>
    new IHMLocal().start();
</script>
```

---


## Software architecture
-------------
![asko1](images/start_button.png "start_button")

```html
<button class="btn btn-default"  id="starter" onclick="__ihm.startSession();">Start</button>
```
Or

```js
$("#starter").on('click', function(d) {
  // do something
});
```



---

## Software architecture
-------------
![asko1](images/start_button.png "start_button")

```html
<button class="btn btn-default"  id="starter" onclick="__ihm.startSession();">Start</button>
```
Or

```js
$("#starter").on('click', function(d) {
  // do something
});
```

---


## Software architecture
-------------

`.js`
```js
login(username, password){

    let service = new RestServiceJs('login');

    let model = {
      'username': username,
      'password': password
    };

    service.post(model, (data) => {
        this.username = data.username;
        this.admin = data.admin;
        this.blocked = data.blocked;
        this.galaxy = data.galaxy;
    });
}
```

---

## Software architecture
-------------
`__init__.py`
```python
config.add_route('login', '/login')
```

`ask_view.py`
```python
@view_config(route_name='login', request_method='POST')
def login(self):
    # ...
    return {
        'username': username,
        'admin': admin,
        'blocked': blocked,
        'galaxy': galaxy,
    }
```

---

## Software architecture
-------------
[handlebars](http://handlebarsjs.com/) templating

`.js`
```js
function displayTSVForm(file) {

    let template = AskOmics.templates.csv_form;
    let context = {idfile: getIdFile(file),file: file, admin: admin};
    let html = template(context);
    $("#content_integration").append(html);
}
```

`static/src/templates/handlebars/csv_form.hbs`
```handlebars
{{#each file.headers}}
    <th class='column_header'>
        {{#unless @first}}
            <input type='checkbox' class='toggle_column_present' checked />
        {{/unless}}
        <input class='header-text' value="{{this}}"></input>

    </th>
{{/each}}
```

---



## Contributing
---------------

+ Contributing
    - As a user
    - As a developer


---


## Contributing
### As a User
---------------
Open a [github issues](https://github.com/askomics/askomics/issues/new)

![issues](images/issues.png "issues")

- Describe a bug in AskOmics (Provide as much log as you can have)
- Suggest a new functionality


---

## Contributing
### As a User
---------------
When my issue will be treated ?

You can follow the roadmaps [here](https://github.com/askomics/askomics/projects)

![roadmap](images/roadmap.png "roadmap")

---

## Contributing
### As a developer
---------------

Create the upstream remote in your clone

```bash
git remote add upstream https://github.com/askomics/askomics.git
```

Sync your fork

```bash
git fetch upstream
git merge upstream/master
```

Create a development branch

```bash
git checkout -b dev_branch
```

Implement your new functionality and write the associated tests

Run tests

```bash
./venv/bin/nosetests
# or
./venv/bin/nosetests -a '!galaxy' # Don't execute galaxy tests

```


---

## Contributing
### As a developer
---------------

commit your changes

```bash
git commit
```

Push to your fork


```bash
git push
```

Create a Pull Request on Github

![PR](images/pull_request.png "PR")

---

