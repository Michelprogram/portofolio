#!/bin/bash

pnpm run build
git add dist && git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages-2