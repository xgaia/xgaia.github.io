#! /bin/bash

# This script check every seconds id the markdon file is modified.
# If yes, the html file is rebuilt


mdfile="README.md"
cssfile="style.css"
templateile="template.html"
htmlfile="index.html"

# First, build html
markdown-to-slides README.md  -s style.css -l template.html -o index.html

# Get md5sum
md5=$(md5sum $mdfile | cut -d " " -f1)



while true ;do
    # recompute md5
    newmd5=$(md5sum $mdfile | cut -d " " -f1)

    # echo "md5:    $md5"
    # echo "newmd5: $newmd5"

    if [[ "$newmd5" != "$md5" ]]; then
        echo "README.md change, re-build html ..."
        # build html
        markdown-to-slides README.md  -s style.css -l template.html -o index.html
        echo "Done"
    fi

    md5=$(md5sum $mdfile | cut -d " " -f1)
    sleep 1s
done














