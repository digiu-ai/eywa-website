#!/usr/bin/env bash
if [[ -z "${1}" ]]; then
  echo "Version is not set. Building with dev tag"
  VERSION="dev"
else
  echo "Building ${1}"
  VERSION="${1}"
fi
set -e

docker build -t eywa-landing:${VERSION} .
