#!/bin/bash

# Vercel Ignore Build Step
# Exit 1 = Proceed with build
# Exit 0 = Ignore build (Cancel)

echo "Current branch: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "dev-nuxt-new" || "$VERCEL_GIT_COMMIT_REF" == "dev-tanstack-start" ]]; then
  echo "✅ Branch matches allowed list. Proceeding with build."
  exit 1
else
  echo "🛑 Branch does not match. Ignoring build."
  exit 0
fi
