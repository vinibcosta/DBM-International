#!/usr/bin/env bash
# Atualiza o site na VPS: baixa o código novo do GitHub e gera o HTML estático.
# Uso (na VPS): bash /var/www/dbm-site/deploy/atualizar.sh
set -e
cd /var/www/dbm-site
git pull
npm ci
npm run build
echo "Site atualizado!"
