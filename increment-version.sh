#!/usr/bin/env bash
set -eu

VERSION=$(cat package.json | jq .version)

echo "current version: ${VERSION}"

IFS='.' read -ra PARTS <<< "$VERSION"
MINOR=${PARTS[-1]}
MINOR=$(echo $MINOR | sed 's/",*$//g')

NEW_MINOR="$(($MINOR + 1))"
echo "incrementing minor version from ${MINOR} to ${NEW_MINOR}"

PARTS[-1]=${NEW_MINOR}
IFS='.'; NEW_VERSION="${PARTS[*]}\""
echo "new version: ${NEW_VERSION}"


RESULT=$(cat package.json | jq ".version=${NEW_VERSION}")
echo "writing package.json: ${RESULT}"

IFS=''
echo ${RESULT} > package.json
