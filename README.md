# http-status-codes

Single JSON file containing HTTP statuscodes. Based on [iana.org](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)

+ 1xx: Informational - Request received, continuing process
+ 2xx: Success - The action was successfully received, understood, and accepted
+ 3xx: Redirection - Further action must be taken in order to complete the request
+ 4xx: Client Error - The request contains bad syntax or cannot be fulfilled
+ 5xx: Server Error - The server failed to fulfill an apparently valid request

| Value | Description | Reference |
| ------ | ------ | ------ |
| 100 | CONTINUE | [RFC7231, SECTION 6.2.1] |
| 101 | SWITCHING_PROTOCOLS | [RFC7231, SECTION 6.2.2] |
| 102 | PROCESSING | [RFC2518, SECTION 10.1] |
| 103-199 | >> UNASSIGNED << |
| | | |
| 200 | OK | [RFC7231, SECTION 6.3.1] |
| 201 | CREATED | [RFC7231, SECTION 6.3.2] |
| 202 | ACCEPTED | [RFC7231, SECTION 6.3.3] |
| 203 | NON_AUTHORITATIVE_INFORMATION | [RFC7231, SECTION 6.3.4] |
| 204 | NO_CONTENT | [RFC7231, SECTION 6.3.5] |
| 205 | RESET_CONTENT | [RFC7231, SECTION 6.3.6] |
| 206 | CREATED | PARTIAL_CONTENT | [RFC7233, SECTION 4.1]
| 207 | MULTI_STATUS | [RFC4918, SECTION 11.1] |
| 208 | ALREADY_REPORTED | [RFC5842, SECTION 7.1] |
| 209-225 | >> UNASSIGNED << |  |
| 226 | IM_USED | [RFC3229, SECTION 10.4.1] |
| 227-299 | >> UNASSIGNED << |  |
|  |  |  |
| 300 | MULTIPLE_CHOICES | [RFC7231, SECTION 6.4.1] |
| 301 | MOVED_PERMANENTLY | [RFC7231, SECTION 6.4.2] |
| 302 | FOUND | [RFC7231, SECTION 6.4.3] |
| 303 | SEE_OTHER | [RFC7231, SECTION 6.4.4] |
| 304 | NOT_MODIFIED | [RFC7232, SECTION 4.1] |
| 305 | USE_PROXY | [RFC7231, SECTION 6.4.5] |
| 306 | >> (UNUSED) << | [RFC7231, SECTION 6.4.6], was used in previous version |
| 307 | TEMPORARY_REDIRECT | [RFC7231, SECTION 6.4.7] |
| 308 | PERMANENT_REDIRECT | [RFC7538] |
| 309-399 | >> UNASSIGNED << |  |
|  |  |  |
| 400 | BAD_REQUEST | [RFC7231, SECTION 6.5.1] |
| 401 | UNAUTHORIZED | [RFC7235, SECTION 3.1] |
| 402 | PAYMENT_REQUIRED | [RFC7231, SECTION 6.5.2] |
| 403 | FORBIDDEN | [RFC7231, SECTION 6.5.3] |
| 404 | NOT_FOUND | [RFC7231, SECTION 6.5.4] |
| 405 | METHOD_NOT_ALLOWED | [RFC7231, SECTION 6.5.5] |
| 406 | NOT_ACCEPTABLE | [RFC7231, SECTION 6.5.6] |
| 407 | PROXY_AUTHENTICATION_REQUIRED | [RFC7235, SECTION 3.2] |
| 408 | REQUEST_TIMEOUT | [RFC7231, SECTION 6.5.7] |
| 409 | CONFLICT | [RFC7231, SECTION 6.5.8] |
| 410 | GONE | [RFC7231, SECTION 6.5.9] |
| 411 | LENGTH_REQUIRED | [RFC7231, SECTION 6.5.10] |
| 412 | PRECONDITION_FAILED | [RFC7232, SECTION 4.2] |
| 413 | PAYLOAD_TOO_LARGE | [RFC7231, SECTION 6.5.11] |
| 414 | URI_TOO_LONG | [RFC7231, SECTION 6.5.12] |
| 415 | UNSUPPORTED_MEDIA_TYPE | [RFC7231, SECTION 6.5.13][RFC7694, SECTION 3] |
| 416 | RANGE_NOT_SATISFIABLE | [RFC7233, SECTION 4.4] |
| 417 | EXPECTATION_FAILED | [RFC7231, SECTION 6.5.14] |
| 418-420 | >> UNASSIGNED << |  |
| 421 | MISDIRECTED_REQUEST | [RFC7540, SECTION 9.1.2] |
| 422 | UNPROCESSABLE_ENTITY | [RFC4918, SECTION 11.2] |
| 423 | LOCKED | [RFC4918, SECTION 11.3] |
| 424 | FAILED_DEPENDENCY | [RFC4918, SECTION 11.4] |
| 425 | >> UNASSIGNED << |  |
| 426 | UPGRADE_REQUIRED | [RFC7231, SECTION 6.5.15] |
| 427 | >> UNASSIGNED << |  |
| 428 | PRECONDITION_REQUIRED | [RFC6585, SECTION 3] |
| 429 | TOO_MANY_REQUESTS | [RFC6585, SECTION 4] |
| 430 | >> UNASSIGNED << |  |
| 431 | REQUEST_HEADER_FIELDS_TOO_LARGE | [RFC6585, SECTION 5] |
| 432-450 | >> UNASSIGNED << |  |
| 451 | UNAVAILABLE_FOR_LEGAL_REASONS | [RFC7725, SECTION 3] |
| 452-499 | >> UNASSIGNED << |  |
|  |  |  |
| 500 | INTERNAL_SERVER_ERROR | [RFC7231, SECTION 6.6.1] |
| 501 | NOT_IMPLEMENTED | [RFC7231, SECTION 6.6.2] |
| 502 | BAD_GATEWAY | [RFC7231, SECTION 6.6.3] |
| 503 | SERVICE_UNAVAILABLE | [RFC7231, SECTION 6.6.4] |
| 504 | GATEWAY_TIMEOUT | [RFC7231, SECTION 6.6.5] |
| 505 | HTTP_VERSION_NOT_SUPPORTED | [RFC7231, SECTION 6.6.6] |
| 506 | VARIANT_ALSO_NEGOTIATES | [RFC2295, SECTION 8.1] |
| 507 | INSUFFICIENT_STORAGE | [RFC4918, SECTION 11.5] |
| 508 | LOOP_DETECTED | [RFC5842, SECTION 7.2] |
| 509 | >> UNASSIGNED << |  |
| 510 | NOT_EXTENDED | [RFC2774, SECTION 7] |
| 511 | NETWORK_AUTHENTICATION_REQUIRED | [RFC6585, SECTION 6] |
| 512-599 | >> UNASSIGNED << |  |

## Example use
The server listens for incomming GET requests. Express 4.X-API was used.

```javascript
var express = require('express');
var http = require('http-statuscode');

var app = express();

app.get('/', function(req, res){
  res.send('Hello world');
});

app.get('/:anything?', function(req, res){
  res.status(http.NOT_IMPLEMENTED).send('Route not fully implemented yet');
});

app.listen(3000);
```

| Request | Response status | Response message |
| ------ | ------ | ------ |
| GET http://localhost:3000/ | 200 | Hello World |
| GET http://localhost:3000/a | 501 | Route not fully implemented yet |
| GET http://localhost:3000/(...)| 501 | Route not fully implemented yet |
