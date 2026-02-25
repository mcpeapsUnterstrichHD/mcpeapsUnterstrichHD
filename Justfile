#!/usr/bin/env just
################################################################################
# options
################################################################################

set shell := ["bash", "-c"]
set unstable := true

################################################################################
# variables
################################################################################

npm := "pnpm"

# Lädt nvm und liest die .nvmrc ein, verknüpft mit '&&' für die Ausführung in derselben Shell
nvm_prefix := '[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use && '

################################################################################
# targets
################################################################################

# install dependencies
install:
    {{ nvm_prefix }} {{ npm }} install
    
# run dev server
dev:
    {{ nvm_prefix }} {{ npm }} run dev
    
# build production files
build:
    {{ nvm_prefix }} {{ npm }} run build
