#! /bin/bash

markdown-to-slides README.md -o index.html

# sed js link
sed -i s@https\:\/\/gnab\.github\.io\/remark\/downloads@\.\.@g index.html