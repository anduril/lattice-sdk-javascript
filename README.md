# Anduril SDK Javascript

The official [Anduril](https://www.anduril.com/) client library.

## Requirements

[Active LTS Node.js version](https://nodejs.org/en/about/previous-releases)  
08/24: Node.js 20 or later

## Installation

### Authentication

To authenticate with the Github package repository, you will need to generate a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). This should have at least `read:packages` scope. Please keep the token safe for the next stage of the setup procedure.

### .npmrc
Create a file in the package directory

```
@anduril:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<GITHUB_PERSONAL_ACCESS_TOKEN>
```

### package.json
Create a file in the package directory

```json
{
  "dependencies": {
    "@anduril/anduril-javascript": "1.0.6",
    "@connectrpc/connect-node": "1.4.0"
  }
}
```

## Usage

Index.ts

```javascript
import { EntityManagerAPI } from "@anduril/anduril-javascript/src/anduril/entitymanager/v1/entity_manager_api.pub_connect.js";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { createPromiseClient } from "@connectrpc/connect";
import { Entity } from "@anduril/anduril-javascript/src/anduril/entitymanager/v1/entity.pub_pb.js";

const transport = createGrpcTransport({
  // Requests will be made to <baseUrl>/<package>.<service>/method
  baseUrl: "https://desert-guardian.anduril.com",

  // You have to tell the Node.js http API which HTTP version to use.
  httpVersion: "2",

  // Interceptors apply to all calls running through this transport.
  interceptors: [],
});

async function main() {
  const client = createPromiseClient(EntityManagerAPI, transport);
  const headers = new Headers();
  headers.set("Authorization", "Bearer <YOUR BEAERER TOKEN>");

  const response = await client.getEntity(
    { entityId: "<ENTITY ID>" },
    { headers: headers },
  );
  console.log(response);
}

void main();
```

## Support

For support with this library please [file an issue](https://github.com/anduril/anduril-javascript/issues/new) or reach out to your Anduril representative. 



