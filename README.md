# Anduril TypeScript Library

![](https://www.anduril.com/lattice-sdk/)

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fanduril%2Flattice-sdk-javascript)
[![npm shield](https://img.shields.io/npm/v/@anduril-industries/lattice-sdk)](https://www.npmjs.com/package/@anduril-industries/lattice-sdk)

The Anduril TypeScript library provides convenient access to the Anduril API from TypeScript.

## Documentation

API reference documentation is available [here](https://developer.anduril.com/).

## Requirements

To use the SDK please ensure you have the following installed:

- [NodeJS](https://nodejs.org/en/download/package-manager)

## Installation

```sh
npm i -s @anduril-industries/lattice-sdk
```

## Support

For support with this library please reach out to your Anduril representative.

## Reference

A full reference for this library is available [here](https://github.com/anduril/lattice-sdk-javascript/blob/HEAD/./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { LatticeClient } from "@anduril-industries/lattice-sdk";

const client = new LatticeClient({ token: "YOUR_TOKEN" });
await client.entities.longPollEntityEvents({
    sessionToken: "sessionToken",
});
```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Lattice } from "@anduril-industries/lattice-sdk";

const request: Lattice.EntityOverride = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { LatticeError } from "@anduril-industries/lattice-sdk";

try {
    await client.entities.longPollEntityEvents(...);
} catch (err) {
    if (err instanceof LatticeError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
        console.log(err.rawResponse);
    }
}
```

## File Uploads

You can upload files using the client:

```typescript
import { createReadStream } from "fs";

await client.objects.uploadObject(createReadStream("path/to/file"), ...);
await client.objects.uploadObject(new ReadableStream(), ...);
await client.objects.uploadObject(Buffer.from('binary data'), ...);
await client.objects.uploadObject(new Blob(['binary data'], { type: 'audio/mpeg' }), ...);
await client.objects.uploadObject(new File(['binary data'], 'file.mp3'), ...);
await client.objects.uploadObject(new ArrayBuffer(8), ...);
await client.objects.uploadObject(new Uint8Array([0, 1, 2]), ...);
```

The client accepts a variety of types for file upload parameters:

- Stream types: `fs.ReadStream`, `stream.Readable`, and `ReadableStream`
- Buffered types: `Buffer`, `Blob`, `File`, `ArrayBuffer`, `ArrayBufferView`, and `Uint8Array`

### Metadata

You can configure metadata when uploading a file:

```typescript
const file: Uploadable.WithMetadata = {
    data: createReadStream("path/to/file"),
    filename: "my-file", // optional
    contentType: "audio/mpeg", // optional
    contentLength: 1949, // optional
};
```

Alternatively, you can upload a file directly from a file path:

```typescript
const file: Uploadable.FromPath = {
    path: "path/to/file",
    filename: "my-file", // optional
    contentType: "audio/mpeg", // optional
    contentLength: 1949, // optional
};
```

The metadata is used to set the `Content-Length`, `Content-Type`, and `Content-Disposition` headers. If not provided, the client will attempt to determine them automatically.
For example, `fs.ReadStream` has a `path` property which the SDK uses to retrieve the file size from the filesystem without loading it into memory.

## Binary Response

You can consume binary data from endpoints using the `BinaryResponse` type which lets you choose how to consume the data:

```typescript
const response = await client.objects.getObject(...);
const stream: ReadableStream<Uint8Array> = response.stream();
// const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
// const blob: Blob = response.blob();
// const bytes: Uint8Array = response.bytes();
// You can only use the response body once, so you must choose one of the above methods.
// If you want to check if the response body has been used, you can use the following property.
const bodyUsed = response.bodyUsed;
```

<details>
<summary>Save binary response to a file</summary>

<blockquote>
<details>
<summary>Node.js</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';

const response = await client.objects.getObject(...);

const stream = response.stream();
const nodeStream = Readable.fromWeb(stream);
const writeStream = createWriteStream('path/to/file');

await pipeline(nodeStream, writeStream);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.objects.getObject(...);

const arrayBuffer = await response.arrayBuffer();
await writeFile('path/to/file', Buffer.from(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.objects.getObject(...);

const blob = await response.blob();
const arrayBuffer = await blob.arrayBuffer();
await writeFile('output.bin', Buffer.from(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.objects.getObject(...);

const bytes = await response.bytes();
await writeFile('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Bun</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
const response = await client.objects.getObject(...);

const stream = response.stream();
await Bun.write('path/to/file', stream);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.objects.getObject(...);

const arrayBuffer = await response.arrayBuffer();
await Bun.write('path/to/file', arrayBuffer);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.objects.getObject(...);

const blob = await response.blob();
await Bun.write('path/to/file', blob);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.objects.getObject(...);

const bytes = await response.bytes();
await Bun.write('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Deno</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
const response = await client.objects.getObject(...);

const stream = response.stream();
const file = await Deno.open('path/to/file', { write: true, create: true });
await stream.pipeTo(file.writable);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.objects.getObject(...);

const arrayBuffer = await response.arrayBuffer();
await Deno.writeFile('path/to/file', new Uint8Array(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.objects.getObject(...);

const blob = await response.blob();
const arrayBuffer = await blob.arrayBuffer();
await Deno.writeFile('path/to/file', new Uint8Array(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.objects.getObject(...);

const bytes = await response.bytes();
await Deno.writeFile('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Browser</summary>

<blockquote>
<details>
<summary>Blob (most-efficient)</summary>

```ts
const response = await client.objects.getObject(...);

const blob = await response.blob();
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ReadableStream</summary>

```ts
const response = await client.objects.getObject(...);

const stream = response.stream();
const reader = stream.getReader();
const chunks = [];

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  chunks.push(value);
}

const blob = new Blob(chunks);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.objects.getObject(...);

const arrayBuffer = await response.arrayBuffer();
const blob = new Blob([arrayBuffer]);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.objects.getObject(...);

const bytes = await response.bytes();
const blob = new Blob([bytes]);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

<details>
<summary>Convert binary response to text</summary>

<blockquote>
<details>
<summary>ReadableStream</summary>

```ts
const response = await client.objects.getObject(...);

const stream = response.stream();
const text = await new Response(stream).text();
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.objects.getObject(...);

const arrayBuffer = await response.arrayBuffer();
const text = new TextDecoder().decode(arrayBuffer);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.objects.getObject(...);

const blob = await response.blob();
const text = await blob.text();
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.objects.getObject(...);

const bytes = await response.bytes();
const text = new TextDecoder().decode(bytes);
```

</details>
</blockquote>

</details>

## Pagination

List endpoints are paginated. The SDK provides an iterator so that you can simply loop over the items:

```typescript
import { LatticeClient } from "@anduril-industries/lattice-sdk";

const client = new LatticeClient({ token: "YOUR_TOKEN" });
const response = await client.objects.listObjects();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.objects.listObjects();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
const response = await client.entities.longPollEntityEvents(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retryable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.entities.longPollEntityEvents(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.entities.longPollEntityEvents(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.entities.longPollEntityEvents(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Access Raw Response Data

The SDK provides access to raw response data, including headers, through the `.withRawResponse()` method.
The `.withRawResponse()` method returns a promise that results to an object with a `data` and a `rawResponse` property.

```typescript
const { data, rawResponse } = await client.entities.longPollEntityEvents(...).withRawResponse();

console.log(data);
console.log(rawResponse.headers['X-My-Header']);
```

### Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch Client

The SDK provides a way for you to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { LatticeClient } from "@anduril-industries/lattice-sdk";

const client = new LatticeClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
