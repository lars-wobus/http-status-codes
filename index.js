module.exports = 
{
    CONTINUE: 100,                          // [RFC7231, SECTION 6.2.1]
    SWITCHING_PROTOCOLS: 101,               // [RFC7231, SECTION 6.2.2]
    PROCESSING: 102,                        // [RFC2518, SECTION 10.1]
// 103-199 UNASSIGNED
    
    OK: 200,                                // [RFC7231, SECTION 6.3.1]
    CREATED: 201,                           // [RFC7231, SECTION 6.3.2]
    ACCEPTED: 202,                          // [RFC7231, SECTION 6.3.3]
    NON_AUTHORITATIVE_INFORMATION: 203,     // [RFC7231, SECTION 6.3.4]
    NO_CONTENT: 204,                        // [RFC7231, SECTION 6.3.5]
    RESET_CONTENT: 205,                     // [RFC7231, SECTION 6.3.6]
    PARTIAL_CONTENT: 206,                   // [RFC7233, SECTION 4.1]
    MULTI_STATUS: 207,                      // [RFC4918, SECTION 11.1]
    ALREADY_REPORTED: 208,                  // [RFC5842, SECTION 7.1]
//209-225 UNASSIGNED
    IM_USED: 226,                           // [RFC3229, SECTION 10.4.1]
//227-299 UNASSIGNED
    
    MULTIPLE_CHOICES: 300,                  // [RFC7231, SECTION 6.4.1]
    MOVED_PERMANENTLY: 301,                 // [RFC7231, SECTION 6.4.2]
    FOUND: 302,                             // [RFC7231, SECTION 6.4.3]
    SEE_OTHER: 303,                         // [RFC7231, SECTION 6.4.4]
    NOT_MODIFIED: 304,                      // [RFC7232, SECTION 4.1]
    USE_PROXY: 305,                         // [RFC7231, SECTION 6.4.5]
//306 (UNUSED)	                        // [RFC7231, SECTION 6.4.6], was defined in previous version
    TEMPORARY_REDIRECT: 307,                // [RFC7231, SECTION 6.4.7]
    PERMANENT_REDIRECT: 308,                // [RFC7538]
//309-399 UNASSIGNED
    
    BAD_REQUEST: 400,                       // [RFC7231, SECTION 6.5.1]
    UNAUTHORIZED: 401,                      // [RFC7235, SECTION 3.1]
    PAYMENT_REQUIRED: 402,                  // [RFC7231, SECTION 6.5.2]
    FORBIDDEN: 403,                         // [RFC7231, SECTION 6.5.3]
    NOT_FOUND: 404,                         // [RFC7231, SECTION 6.5.4]
    METHOD_NOT_ALLOWED: 405,                // [RFC7231, SECTION 6.5.5]
    NOT_ACCEPTABLE: 406,                    // [RFC7231, SECTION 6.5.6]
    PROXY_AUTHENTICATION_REQUIRED: 407,     // [RFC7235, SECTION 3.2]
    REQUEST_TIMEOUT: 408,                   // [RFC7231, SECTION 6.5.7]
    CONFLICT: 409,                          // [RFC7231, SECTION 6.5.8]
    GONE: 410,                              // [RFC7231, SECTION 6.5.9]
    LENGTH_REQUIRED: 411,                   // [RFC7231, SECTION 6.5.10]
    PRECONDITION_FAILED: 412,               // [RFC7232, SECTION 4.2]
    PAYLOAD_TOO_LARGE: 413,                 // [RFC7231, SECTION 6.5.11]
    URI_TOO_LONG: 414,                      // [RFC7231, SECTION 6.5.12]
    UNSUPPORTED_MEDIA_TYPE: 415,            // [RFC7231, SECTION 6.5.13][RFC7694, SECTION 3]
    RANGE_NOT_SATISFIABLE: 416,             // [RFC7233, SECTION 4.4]
    EXPECTATION_FAILED: 417,                // [RFC7231, SECTION 6.5.14]
// 418-420 UNASSIGNED	
    MISDIRECTED_REQUEST: 421,               // [RFC7540, SECTION 9.1.2]
    UNPROCESSABLE_ENTITY: 422,              // [RFC4918, SECTION 11.2]
    LOCKED: 423,                            // [RFC4918, SECTION 11.3]
    FAILED_DEPENDENCY: 424,                 // [RFC4918, SECTION 11.4]
// 425 UNASSIGNED
    UPGRADE_REQUIRED: 426,                  // [RFC7231, SECTION 6.5.15]
// 427 UNASSIGNED
    PRECONDITION_REQUIRED: 428,             // [RFC6585, SECTION 3]
    TOO_MANY_REQUESTS: 429,                 // [RFC6585, SECTION 4]
// 430 UNASSIGNED	
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,   // [RFC6585, SECTION 5]
// 432-450 UNASSIGNED	
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,     // [RFC7725, SECTION 3]
// 452-499 UNASSIGNED
    
    INTERNAL_SERVER_ERROR: 500,             // [RFC7231, SECTION 6.6.1]
    NOT_IMPLEMENTED: 501,                   // [RFC7231, SECTION 6.6.2]
    BAD_GATEWAY: 502,                       // [RFC7231, SECTION 6.6.3]
    SERVICE_UNAVAILABLE: 503,               // [RFC7231, SECTION 6.6.4]
    GATEWAY_TIMEOUT: 504,                   // [RFC7231, SECTION 6.6.5]
    HTTP_VERSION_NOT_SUPPORTED: 505,        // [RFC7231, SECTION 6.6.6]
    VARIANT_ALSO_NEGOTIATES: 506,           // [RFC2295, SECTION 8.1]
    INSUFFICIENT_STORAGE: 507,              // [RFC4918, SECTION 11.5]
    LOOP_DETECTED: 508,                     // [RFC5842, SECTION 7.2]
// 509 UNASSIGNED	
    NOT_EXTENDED: 510,                      // [RFC2774, SECTION 7]
    NETWORK_AUTHENTICATION_REQUIRED: 511    // [RFC6585, SECTION 6]
//512-599 UNASSIGNED	
}