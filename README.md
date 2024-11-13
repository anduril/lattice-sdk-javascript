# Lattice Javascript SDK

The official [Anduril](https://www.anduril.com/) Lattice SDK. 

## Requirements

Node 20 or later

## Installation

Install the package with:

```sh
npm install @anduril/lattice-sdk-javascript
# or
yarn add @anduril/lattice-sdk-javascript
```

## Usage

Index.ts

```javascript
import { EntityManagerAPI } from "@anduril/lattice-sdk-javascript/src/anduril/entitymanager/v1/entity_manager_api.pub_connect.js";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { createPromiseClient } from "@connectrpc/connect";
import { Entity } from "@anduril/lattice-sdk-javascript/src/anduril/entitymanager/v1/entity.pub_pb.js";

const transport = createGrpcTransport({
  // Requests will be made to <baseUrl>/<package>.<service>/method
  baseUrl: "$HOSTNAME",

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

For support with this library please [file an issue](https://github.com/anduril/lattice-sdk-javascript/issues/new) or reach out to your Anduril representative. 



