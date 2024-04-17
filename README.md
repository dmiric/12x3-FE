# Installation Guide

Fork This REPO.

Create codespace from repository.

After container for codespace is built, run the following commands.

- copy .env.codespacestemplate to .env.local
- change NEXT_PUBLIC_MEDUSA_BACKEND_URL in env.local to backend url from previous 12x3 backend repo. It can be found in PORTS in your backend codespace Forwarded Address.
- change NEXT_PUBLIC_BASE_URL in env.local to Forwarded Address from this repo (PORTS tab in vscode)
- set Medusa Frontend port to Public in this repo (PORTS tab in vscode)

# Run
- npm run dev