# Reference
## Entities
<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">publishEntity</a>({ ...params }) -> Lattice.Entity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publish an entity for ingest into the Entities API. Entities created with this method are "owned" by the originator: other sources, 
such as the UI, may not edit or delete these entities. The server validates entities at API call time and 
returns an error if the entity is invalid.

An entity ID must be provided when calling this endpoint. If the entity referenced by the entity ID does not exist
then it will be created. Otherwise the entity will be updated. An entity will only be updated if its
provenance.sourceUpdateTime is greater than the provenance.sourceUpdateTime of the existing entity.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.publishEntity({});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.Entity` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntity</a>({ ...params }) -> Lattice.Entity</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getEntity({
    entityId: "entityId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.GetEntityRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">overrideEntity</a>({ ...params }) -> Lattice.Entity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Only fields marked with overridable can be overridden. Please refer to our documentation to see the comprehensive
list of fields that can be overridden. The entity in the request body should only have a value set on the field 
specified in the field path parameter. Field paths are rooted in the base entity object and must be represented 
using lower_snake_case. Do not include "entity" in the field path.

Note that overrides are applied in an eventually consistent manner. If multiple overrides are created 
concurrently for the same field path, the last writer wins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.overrideEntity({
    entityId: "entityId",
    fieldPath: "mil_view.disposition"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.EntityOverride` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">removeEntityOverride</a>({ ...params }) -> Lattice.Entity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This operation clears the override value from the specified field path on the entity.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.removeEntityOverride({
    entityId: "entityId",
    fieldPath: "mil_view.disposition"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.RemoveEntityOverrideRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">longPollEntityEvents</a>({ ...params }) -> Lattice.EntityEventResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This is a long polling API that will first return all pre-existing data and then return all new data as
it becomes available. If you want to start a new polling session then open a request with an empty
'sessionToken' in the request body. The server will return a new session token in the response.
If you want to retrieve the next batch of results from an existing polling session then send the session
token you received from the server in the request body. If no new data is available then the server will
hold the connection open for up to 5 minutes. After the 5 minute timeout period, the server will close the 
connection with no results and you may resume polling with the same session token. If your session falls behind 
more than 3x the total number of entities in the environment, the server will terminate your session. 
In this case you must start a new session by sending a request with an empty session token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.longPollEntityEvents({
    sessionToken: "sessionToken"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.EntityEventRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">streamEntities</a>({ ...params }) -> core.Stream<Lattice.StreamEntitiesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Establishes a persistent connection to stream entity events as they occur.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.entities.streamEntities();
for await (const item of response) {
    console.log(item);
}

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.EntityStreamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tasks
<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">createTask</a>({ ...params }) -> Lattice.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit a request to create a task and schedule it for delivery. Tasks, once delivered, will 
be asynchronously updated by their destined agent. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.createTask();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.TaskCreation` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">getTask</a>({ ...params }) -> Lattice.Task</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.getTask({
    taskId: "taskId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.GetTaskRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">updateTaskStatus</a>({ ...params }) -> Lattice.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the status of a task.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.updateTaskStatus({
    taskId: "taskId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.TaskStatusUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">queryTasks</a>({ ...params }) -> Lattice.TaskQueryResults</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query for tasks by a specified search criteria.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.queryTasks();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.TaskQuery` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">listenAsAgent</a>({ ...params }) -> Lattice.AgentRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This is a long polling API that will block until a new task is ready for delivery. If no new task is 
available then the server will hold on to your request for up to 5 minutes, after that 5 minute timeout 
period you will be expected to reinitiate a new request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.listenAsAgent();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.AgentListener` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Objects
<details><summary><code>client.objects.<a href="/src/api/resources/objects/client/Client.ts">listObjects</a>({ ...params }) -> core.Page<Lattice.PathMetadata, Lattice.ListResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists objects in your environment. You can define a prefix to list a subset of your objects. If you do not set a prefix, Lattice returns all available objects. By default this endpoint will list local objects only.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.objects.listObjects();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.objects.listObjects();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.ListObjectsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.objects.<a href="/src/api/resources/objects/client/Client.ts">getObject</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches an object from your environment using the objectPath path parameter.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.objects.getObject({
    objectPath: "objectPath"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.GetObjectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.objects.<a href="/src/api/resources/objects/client/Client.ts">deleteObject</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an object from your environment given the objectPath path parameter.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.objects.deleteObject({
    objectPath: "objectPath"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.DeleteObjectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.objects.<a href="/src/api/resources/objects/client/Client.ts">getObjectMetadata</a>({ ...params }) -> Headers</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for a specified object path. Use this to fetch metadata such as object size (size_bytes), its expiry time (expiry_time), or its latest update timestamp (last_updated_at).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.objects.getObjectMetadata({
    objectPath: "objectPath"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Lattice.GetObjectMetadataRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
