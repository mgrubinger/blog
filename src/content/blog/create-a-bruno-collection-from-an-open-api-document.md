---
short: Using an intermediate Postman collection, we can create a bruno
  collection based on an Open API document
publishedDate: 2024-07-12T12:13:38Z
updatedDate: 2025-06-11T11:45:27Z
date: 2024-07-12T12:13:38.000Z
title: Create a bruno collection from an Open API document
slug: create-a-bruno-collection-from-an-open-api-document
category: blog
description: "[Bruno](https://www.usebruno.com/) does not yet support creating a
  collection based on an Open API document directly. One way to accomplish that
  is through an intermediate Postman collection.\r"
tags:
  - TIL
  - bruno
---

> _edit 11.06.2025_<br>
Bruno now [supports importing Open API Spec files](https://docs.usebruno.com/open-api/importOAS), at least for Open API v3 files.<br>
Consider the rest of this article obsolete, except when you need to import an OAS v2 (swagger) file.

---

[Bruno](https://www.usebruno.com/) does not yet support creating a collection based on an Open API document directly. One way to accomplish that is through an intermediate Postman collection.

1. Log into Postman
2. In your workspace, select "Import" and upload your Open API Specification
3. Once imported, choose "Export" from the menu (three dots) next to the imported collection
4. save the postman collection
5. Follow the steps in [Import from Postman](https://docs.usebruno.com/get-started/import-export-data/import-collections) to import that Postman collection to bruno.

Voilà, you have all the endpoints from the Open API specification in bruno.

