# anduril-javascript

### .npmrc
Create a file in the package directory

```
@anduril:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<TOKEN>
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

### Index.ts

```
import { EntityManagerAPI } from "@anduril/anduril-javascript/src/anduril/entitymanager/v1/entity_manager_api.pub_connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { createPromiseClient } from "@connectrpc/connect";
import { PublishEntitiesRequest } from "@anduril/anduril-javascript/src/anduril/entitymanager/v1/entity_manager_api.pub_pb";
import { Entity } from "@anduril/anduril-javascript/src/anduril/entitymanager/v1/entity.pub_pb";
import { createWritableIterable } from "@connectrpc/connect/protocol";
import { PartialMessage } from "@bufbuild/protobuf";

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
    headers.set("Authorization", "Bearer <BEARER TOKEN>");

    const entity = new Entity({
        entityId: "asdasd",
        isLive: true,
        description: "A new entity",
    })

    const resPut = await client.putEntity(request,{ headers: headers });
    console.log(resPut);
}

void main();
  


````
