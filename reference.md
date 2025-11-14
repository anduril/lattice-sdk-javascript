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

**requestOptions:** `Entities.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntity</a>(entityId) -> Lattice.Entity</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getEntity("entityId");

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

**entityId:** `string` — ID of the entity to return
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">overrideEntity</a>(entityId, fieldPath, { ...params }) -> Lattice.Entity</code></summary>
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
await client.entities.overrideEntity("entityId", "mil_view.disposition");

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

**entityId:** `string` — The unique ID of the entity to override
    
</dd>
</dl>

<dl>
<dd>

**fieldPath:** `string` — fieldPath to override
    
</dd>
</dl>

<dl>
<dd>

**request:** `Lattice.EntityOverride` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">removeEntityOverride</a>(entityId, fieldPath) -> Lattice.Entity</code></summary>
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
await client.entities.removeEntityOverride("entityId", "mil_view.disposition");

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

**entityId:** `string` — The unique ID of the entity to undo an override from.
    
</dd>
</dl>

<dl>
<dd>

**fieldPath:** `string` — The fieldPath to clear overrides from.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions` 
    
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

**requestOptions:** `Entities.RequestOptions` 
    
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

Establishes a server-sent events (SSE) connection that streams entity data in real-time.
This is a one-way connection from server to client that follows the SSE protocol with text/event-stream content type.

This endpoint enables clients to maintain a real-time view of the common operational picture (COP)
by first streaming all pre-existing entities that match filter criteria, then continuously delivering
updates as entities are created, modified, or deleted.

The server first sends events with type PREEXISTING for all live entities matching the filter that existed before the stream was open,
then streams CREATE events for newly created entities, UPDATE events when existing entities change, and DELETED events when entities are removed. The stream remains open
indefinitely unless preExistingOnly is set to true.

Heartbeat messages can be configured to maintain connection health and detect disconnects by setting the heartbeatIntervalMS
parameter. These heartbeats help keep the connection alive and allow clients to verify the server is still responsive.

Clients can optimize bandwidth usage by specifying which entity components they need populated using the componentsToInclude parameter.
This allows receiving only relevant data instead of complete entities.

The connection automatically recovers from temporary disconnections, resuming the stream where it left off. Unlike polling approaches,
this provides real-time updates with minimal latency and reduced server load.
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

**requestOptions:** `Entities.RequestOptions` 
    
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

Creates a new Task in the system with the specified parameters.

This method initiates a new task with a unique ID (either provided or auto-generated),
sets the initial task state to STATUS_CREATED, and establishes task ownership. The task
can be assigned to a specific agent through the Relations field.

Once created, a task enters the lifecycle workflow and can be tracked, updated, and managed
through other Tasks API endpoints.
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

**requestOptions:** `Tasks.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">getTask</a>(taskId) -> Lattice.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific Task by its ID, with options to select a particular task version or view.

This method returns detailed information about a task including its current status,
specification, relations, and other metadata. The response includes the complete Task object
with all associated fields.

By default, the method returns the latest definition version of the task from the manager's
perspective.
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
await client.tasks.getTask("taskId");

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

**taskId:** `string` — ID of task to return
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tasks.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">updateTaskStatus</a>(taskId, { ...params }) -> Lattice.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the status of a Task as it progresses through its lifecycle.

This method allows agents or operators to report the current state of a task,
which could include changes to task status, and error information.

Each status update increments the task's status_version. When updating status,
clients must provide the current version to ensure consistency. The system rejects
updates with mismatched versions to prevent race conditions.

Terminal states (`STATUS_DONE_OK` and `STATUS_DONE_NOT_OK`) are permanent; once a task
reaches these states, no further updates are allowed.
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
await client.tasks.updateTaskStatus("taskId");

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

**taskId:** `string` — ID of task to update status of
    
</dd>
</dl>

<dl>
<dd>

**request:** `Lattice.TaskStatusUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tasks.RequestOptions` 
    
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

Searches for Tasks that match specified filtering criteria and returns matching tasks in paginated form.

This method allows filtering tasks based on multiple criteria including:
- Parent task relationships
- Task status (with inclusive or exclusive filtering)
- Update time ranges
- Task view (manager or agent perspective)
- Task assignee
- Task type (via exact URL matches or prefix matching)

Results are returned in pages. When more results are available than can be returned in a single
response, a page_token is provided that can be used in subsequent requests to retrieve the next
set of results.

By default, this returns the latest task version for each matching task from the manager's perspective.
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

**requestOptions:** `Tasks.RequestOptions` 
    
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

Establishes a server streaming connection that delivers tasks to taskable agents for execution.

This method creates a persistent connection from Tasks API to an agent, allowing the server
to push tasks to the agent as they become available. The agent receives a stream of tasks that
match its selector criteria (entity IDs).

The stream delivers three types of requests:
- ExecuteRequest: Contains a new task for the agent to execute
- CancelRequest: Indicates a task should be canceled
- CompleteRequest: Indicates a task should be completed

This is the primary method for taskable agents to receive and process tasks in real-time.
Agents should maintain this connection and process incoming tasks according to their capabilities.

When an agent receives a task, it should update the task status using the UpdateStatus endpoint
to provide progress information back to Tasks API.

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

**requestOptions:** `Tasks.RequestOptions` 
    
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
const pageableResponse = await client.objects.listObjects({
    prefix: "prefix",
    sinceTimestamp: "2024-01-15T09:30:00Z",
    pageToken: "pageToken",
    allObjectsInMesh: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.objects.listObjects({
    prefix: "prefix",
    sinceTimestamp: "2024-01-15T09:30:00Z",
    pageToken: "pageToken",
    allObjectsInMesh: true
});
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

**requestOptions:** `Objects.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.objects.<a href="/src/api/resources/objects/client/Client.ts">getObject</a>(objectPath, { ...params }) -> core.BinaryResponse</code></summary>
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
await client.objects.getObject("objectPath");

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

**objectPath:** `string` — The path of the object to fetch.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Lattice.GetObjectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Objects.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.objects.<a href="/src/api/resources/objects/client/Client.ts">deleteObject</a>(objectPath) -> void</code></summary>
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
await client.objects.deleteObject("objectPath");

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

**objectPath:** `string` — The path of the object to delete.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Objects.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.objects.<a href="/src/api/resources/objects/client/Client.ts">getObjectMetadata</a>(objectPath) -> Headers</code></summary>
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
await client.objects.getObjectMetadata("objectPath");

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

**objectPath:** `string` — The path of the object to query.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Objects.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
