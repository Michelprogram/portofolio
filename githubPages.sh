#!/bin/bash

npm run build
git add dist && git commit -m "adding dist subtree"
git subtree push --prefix dist origin gh-pages1     
