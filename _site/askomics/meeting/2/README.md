# AskOmics
-------------------------

<!-- ![askomics](images/askomics.png "askomics") -->

.footnote[Xavier Garnier, Dyliss team, Inria]

---

## Table of contents
---------

1. Versioning
    - askomics repository
    - docker-askomics repository

2. AskOmics 18.10

3. AskOmics Documentation
    - Read doc
    - Write doc


---
## Versioning
--------------

Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.

AskOmics have a development cycle of 2-3 month. Numbering is chronological (YY.MM)

18.10 is comming ...

---
## Versioning
### askomics repository
--------------

The master branch contains the most recent commits, this branch may be not stable

At each new version, a YY.MM release is created (and the corresponding tag)

---
## Versioning
### docker-askomics repository
--------------

Master branch fetch the latest version of Askomics

Unstable branch fetch the master of AskOmics

Tag at each version

On [dockerhub](https://hub.docker.com/), build each version + unstable askomics

---
## AskOmics 18.10
--------------

AskOmics 18.10 will be available soon. It correct some bugs and add new functionalities. See [askomics 18.10 roadmap](https://github.com/askomics/askomics/projects/1)
to know all the new functionalities of this version.


---
## Documentation
--------------

Documentation of AskOmics is now available at [readthedocs](https://askomics.readthedocs.io).

Documentation of each version of AskOmics can be consulted.

---
## Documentation
### Write doc
--------------

Documentation of python classes are automatically built from docstrings. They have to be formated like this:


```python
def my_function(param1, param2):
    """This function do something

    Args:
        param1 (int): The first parameter.
        param2 (str): The second parameter.

    Returns:
        bool: The return value. True for success, False otherwise.

    """
    return True
```

If a new functionality is implemented, docs have to be written.


