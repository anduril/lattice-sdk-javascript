//  This file was auto-generated from our API Definition.

import * as Lattice from "../../../src/api/index";
import { LatticeClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";
import { mockOAuth } from "../mockAuth";

describe("VideoClient", () => {
    test("listEgressStreams (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            egressStreams: [{ egressId: "egressId", ingressId: "ingressId" }],
            nextPageToken: "nextPageToken",
        };

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.video.listEgressStreams();
        expect(response).toEqual(rawResponseBody);
    });

    test("listEgressStreams (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listEgressStreams();
        }).rejects.toThrow(Lattice.video.BadRequestError);
    });

    test("listEgressStreams (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listEgressStreams();
        }).rejects.toThrow(Lattice.video.UnauthorizedError);
    });

    test("listEgressStreams (4)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listEgressStreams();
        }).rejects.toThrow(Lattice.video.ForbiddenError);
    });

    test("listEgressStreams (5)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listEgressStreams();
        }).rejects.toThrow(Lattice.video.NotFoundError);
    });

    test("listEgressStreams (6)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams")
            .respondWith()
            .statusCode(503)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listEgressStreams();
        }).rejects.toThrow(Lattice.video.ServiceUnavailableError);
    });

    test("createEgressStream (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {
            egressId: "egressId",
            rtsp: { url: "url" },
            srt: { url: "url", sessionId: "sessionId" },
        };

        server
            .mockEndpoint()
            .post("/api/v1/video/egress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.video.createEgressStream();
        expect(response).toEqual(rawResponseBody);
    });

    test("createEgressStream (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/egress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createEgressStream();
        }).rejects.toThrow(Lattice.video.BadRequestError);
    });

    test("createEgressStream (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/egress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createEgressStream();
        }).rejects.toThrow(Lattice.video.UnauthorizedError);
    });

    test("createEgressStream (4)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/egress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createEgressStream();
        }).rejects.toThrow(Lattice.video.ForbiddenError);
    });

    test("createEgressStream (5)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/egress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createEgressStream();
        }).rejects.toThrow(Lattice.video.NotFoundError);
    });

    test("createEgressStream (6)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/egress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createEgressStream();
        }).rejects.toThrow(Lattice.video.ConflictError);
    });

    test("createEgressStream (7)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/egress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createEgressStream();
        }).rejects.toThrow(Lattice.video.TooManyRequestsError);
    });

    test("createEgressStream (8)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/egress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(503)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createEgressStream();
        }).rejects.toThrow(Lattice.video.ServiceUnavailableError);
    });

    test("getEgressStream (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            egressStream: {
                egressId: "egressId",
                ingressId: "ingressId",
                rtsp: { url: "url" },
                srt: { url: "url", sessionId: "sessionId" },
            },
        };

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.video.getEgressStream({
            egressId: "egressId",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getEgressStream (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.BadRequestError);
    });

    test("getEgressStream (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.UnauthorizedError);
    });

    test("getEgressStream (4)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.ForbiddenError);
    });

    test("getEgressStream (5)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.NotFoundError);
    });

    test("getEgressStream (6)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(503)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.ServiceUnavailableError);
    });

    test("deleteEgressStream (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.video.deleteEgressStream({
            egressId: "egressId",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("deleteEgressStream (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.BadRequestError);
    });

    test("deleteEgressStream (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.UnauthorizedError);
    });

    test("deleteEgressStream (4)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.ForbiddenError);
    });

    test("deleteEgressStream (5)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.NotFoundError);
    });

    test("deleteEgressStream (6)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/egress_streams/egressId")
            .respondWith()
            .statusCode(503)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteEgressStream({
                egressId: "egressId",
            });
        }).rejects.toThrow(Lattice.video.ServiceUnavailableError);
    });

    test("listIngressStreams (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            ingressStreams: [
                {
                    ingressId: "ingressId",
                    title: "title",
                    status: "STREAM_STATUS_UNSPECIFIED",
                    createdAt: "2024-01-15T09:30:00Z",
                    updatedAt: "2024-01-15T09:30:00Z",
                    egressIds: ["egressIds"],
                },
            ],
            nextPageToken: "nextPageToken",
        };

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.video.listIngressStreams();
        expect(response).toEqual(rawResponseBody);
    });

    test("listIngressStreams (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listIngressStreams();
        }).rejects.toThrow(Lattice.video.BadRequestError);
    });

    test("listIngressStreams (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listIngressStreams();
        }).rejects.toThrow(Lattice.video.UnauthorizedError);
    });

    test("listIngressStreams (4)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listIngressStreams();
        }).rejects.toThrow(Lattice.video.ForbiddenError);
    });

    test("listIngressStreams (5)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listIngressStreams();
        }).rejects.toThrow(Lattice.video.NotFoundError);
    });

    test("listIngressStreams (6)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listIngressStreams();
        }).rejects.toThrow(Lattice.video.InternalServerError);
    });

    test("listIngressStreams (7)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams")
            .respondWith()
            .statusCode(503)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.listIngressStreams();
        }).rejects.toThrow(Lattice.video.ServiceUnavailableError);
    });

    test("createIngressStream (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {
            ingressId: "ingressId",
            mpegTs: { url: "url" },
            srt: { url: "url", sessionId: "sessionId" },
        };

        server
            .mockEndpoint()
            .post("/api/v1/video/ingress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.video.createIngressStream();
        expect(response).toEqual(rawResponseBody);
    });

    test("createIngressStream (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/ingress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createIngressStream();
        }).rejects.toThrow(Lattice.video.BadRequestError);
    });

    test("createIngressStream (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/ingress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createIngressStream();
        }).rejects.toThrow(Lattice.video.UnauthorizedError);
    });

    test("createIngressStream (4)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/ingress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createIngressStream();
        }).rejects.toThrow(Lattice.video.ForbiddenError);
    });

    test("createIngressStream (5)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/ingress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createIngressStream();
        }).rejects.toThrow(Lattice.video.NotFoundError);
    });

    test("createIngressStream (6)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/ingress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createIngressStream();
        }).rejects.toThrow(Lattice.video.ConflictError);
    });

    test("createIngressStream (7)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/ingress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createIngressStream();
        }).rejects.toThrow(Lattice.video.TooManyRequestsError);
    });

    test("createIngressStream (8)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/api/v1/video/ingress_streams")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(503)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.createIngressStream();
        }).rejects.toThrow(Lattice.video.ServiceUnavailableError);
    });

    test("getIngressStream (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            ingressStream: {
                ingressId: "ingressId",
                title: "title",
                status: "STREAM_STATUS_UNSPECIFIED",
                mpegTs: { url: "url" },
                rtsp: { url: "url" },
                srt: { url: "url", sessionId: "sessionId" },
                createdAt: "2024-01-15T09:30:00Z",
                updatedAt: "2024-01-15T09:30:00Z",
                egressIds: ["egressIds"],
            },
        };

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.video.getIngressStream({
            ingressId: "ingressId",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getIngressStream (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.BadRequestError);
    });

    test("getIngressStream (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.UnauthorizedError);
    });

    test("getIngressStream (4)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.ForbiddenError);
    });

    test("getIngressStream (5)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.NotFoundError);
    });

    test("getIngressStream (6)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(503)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.getIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.ServiceUnavailableError);
    });

    test("deleteIngressStream (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.video.deleteIngressStream({
            ingressId: "ingressId",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("deleteIngressStream (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.BadRequestError);
    });

    test("deleteIngressStream (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.UnauthorizedError);
    });

    test("deleteIngressStream (4)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.ForbiddenError);
    });

    test("deleteIngressStream (5)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.NotFoundError);
    });

    test("deleteIngressStream (6)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({
            maxRetries: 0,
            clientId: "test_client_id",
            clientSecret: "test_client_secret",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .delete("/api/v1/video/ingress_streams/ingressId")
            .respondWith()
            .statusCode(503)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.video.deleteIngressStream({
                ingressId: "ingressId",
            });
        }).rejects.toThrow(Lattice.video.ServiceUnavailableError);
    });
});
