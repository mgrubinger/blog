---
short: How to link Forgejo web interface to VS Code as a Gitlens remote
publishedDate: 2025-03-11T14:22:34Z
updatedDate: 2025-03-11T14:27:34Z
date: 2025-03-11T14:22:34.000Z
title: Add Forgejo custom Gitlens Remote in VS Code
slug: add-forgejo-custom-gitlens-remote
category: blog
tags:
  - TIL
  - Gitlens
  - VS Code
---

[Gitlens in VS Code](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) can be linked to a [Forgejo](https://forgejo.org/) instance. I find this very useful, as it enables:

- Open a selected line (or lines) of code in VS Code and open it in Forgejo (right-click on the selected code and select "Open on Remote (Web)")
- Open current branch on Forgejo
- Open commit on Forgejo
- Open repository on Forgejo

All these commands are available in the Command Palette (cmd+shift+p) in VS Code.

Add this config to settings.json in VS Code (cmd+shift+p -> _Preferences: Open User Settings (JSON)_) (replace all `<PLACEHOLDERS>` with your Forgejo host details):

```json
"gitlens.remotes": [
  {
    "regex": "ssh://(forgejo@<HOSTNAME>)/<PATH>/(.+)",
    "type": "Custom",
    "name": "Grooovingers Forgejo",
    "urls": {
      "repository": "https://<URL-TO-FORGEJO>/<ORGANISATION>/${repo}",
      "branches": "https://<URL-TO-FORGEJO>/<ORGANISATION>/${repo}/branches",
      "branch": "https://<URL-TO-FORGEJO>/<ORGANISATION>/${repo}/src/branch/${branch}",
      "commit": "https://<URL-TO-FORGEJO>/<ORGANISATION>/${repo}/commit/${id}",
      "file": "https://<URL-TO-FORGEJO>/<ORGANISATION>/${repo}/src/branch/main/${file}${line}",
      "fileInBranch": "https://<URL-TO-FORGEJO>/<ORGANISATION>/${repo}/src/branch/${branch}/${file}${line}",
      "fileInCommit": "https://<URL-TO-FORGEJO>/<ORGANISATION>/${repo}/src/commit/${id}/${file}${line}",
      "fileLine": "#L${line}",
      "fileRange": "#L${start}-L${end}"
    }
  }
]
```

More information about the possible configuration fields on [Gitkraken GitLens Settings page](https://help.gitkraken.com/gitlens/gitlens-settings/#remote-provider-integration-settings).