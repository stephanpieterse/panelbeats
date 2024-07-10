#!/bin/bash
OUTNAME=sheets.js
echo "let sheets = {" > $OUTNAME

for dir in $( ls sheets );
do
    echo '"'$dir'":[' >> $OUTNAME
    for img in $( ls sheets/$dir );
    do
        echo -n '"data:image/jpeg;base64,' >> $OUTNAME
        cat sheets/$dir/$img | base64 -w0 >> $OUTNAME
        echo '",' >> $OUTNAME
    done
    echo "]," >> $OUTNAME
done

echo "}" >> $OUTNAME
