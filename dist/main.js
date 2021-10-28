var $1hZLD$os = require("os");
var $1hZLD$path = require("path");
var $1hZLD$fs = require("fs");
var $1hZLD$http = require("http");
var $1hZLD$https = require("https");
require("net");
var $1hZLD$tls = require("tls");
var $1hZLD$events = require("events");
require("assert");
var $1hZLD$util = require("util");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire52e5"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire52e5"] = parcelRequire;
}
var $f8c7b6a5e7a3a07f$exports = {};
"use strict";
var $f8c7b6a5e7a3a07f$var$__createBinding = $f8c7b6a5e7a3a07f$exports && $f8c7b6a5e7a3a07f$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $f8c7b6a5e7a3a07f$var$__setModuleDefault = $f8c7b6a5e7a3a07f$exports && $f8c7b6a5e7a3a07f$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $f8c7b6a5e7a3a07f$var$__importStar = $f8c7b6a5e7a3a07f$exports && $f8c7b6a5e7a3a07f$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $f8c7b6a5e7a3a07f$var$__createBinding(result, mod, k);
    }
    $f8c7b6a5e7a3a07f$var$__setModuleDefault(result, mod);
    return result;
};
var $f8c7b6a5e7a3a07f$var$__awaiter = $f8c7b6a5e7a3a07f$exports && $f8c7b6a5e7a3a07f$exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty($f8c7b6a5e7a3a07f$exports, "__esModule", {
    value: true
});
$f8c7b6a5e7a3a07f$exports.getIDToken = $f8c7b6a5e7a3a07f$exports.getState = $f8c7b6a5e7a3a07f$exports.saveState = $f8c7b6a5e7a3a07f$exports.group = $f8c7b6a5e7a3a07f$exports.endGroup = $f8c7b6a5e7a3a07f$exports.startGroup = $f8c7b6a5e7a3a07f$exports.info = $f8c7b6a5e7a3a07f$exports.notice = $f8c7b6a5e7a3a07f$exports.warning = $f8c7b6a5e7a3a07f$exports.error = $f8c7b6a5e7a3a07f$exports.debug = $f8c7b6a5e7a3a07f$exports.isDebug = $f8c7b6a5e7a3a07f$exports.setFailed = $f8c7b6a5e7a3a07f$exports.setCommandEcho = $f8c7b6a5e7a3a07f$exports.setOutput = $f8c7b6a5e7a3a07f$exports.getBooleanInput = $f8c7b6a5e7a3a07f$exports.getMultilineInput = $f8c7b6a5e7a3a07f$exports.getInput = $f8c7b6a5e7a3a07f$exports.addPath = $f8c7b6a5e7a3a07f$exports.setSecret = $f8c7b6a5e7a3a07f$exports.exportVariable = $f8c7b6a5e7a3a07f$exports.ExitCode = void 0;
var $5b3440c6a5be3571$exports = {};
"use strict";
var $5b3440c6a5be3571$var$__createBinding = $5b3440c6a5be3571$exports && $5b3440c6a5be3571$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $5b3440c6a5be3571$var$__setModuleDefault = $5b3440c6a5be3571$exports && $5b3440c6a5be3571$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $5b3440c6a5be3571$var$__importStar = $5b3440c6a5be3571$exports && $5b3440c6a5be3571$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $5b3440c6a5be3571$var$__createBinding(result, mod, k);
    }
    $5b3440c6a5be3571$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty($5b3440c6a5be3571$exports, "__esModule", {
    value: true
});
$5b3440c6a5be3571$exports.issue = $5b3440c6a5be3571$exports.issueCommand = void 0;

const $5b3440c6a5be3571$var$os = $5b3440c6a5be3571$var$__importStar($1hZLD$os);
var $78ca0b85de3fe64f$exports = {};
"use strict";
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty($78ca0b85de3fe64f$exports, "__esModule", {
    value: true
});
$78ca0b85de3fe64f$exports.toCommandProperties = $78ca0b85de3fe64f$exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */ function $78ca0b85de3fe64f$var$toCommandValue(input) {
    if (input === null || input === undefined) return '';
    else if (typeof input === 'string' || input instanceof String) return input;
    return JSON.stringify(input);
}
$78ca0b85de3fe64f$exports.toCommandValue = $78ca0b85de3fe64f$var$toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */ function $78ca0b85de3fe64f$var$toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) return {
    };
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
$78ca0b85de3fe64f$exports.toCommandProperties = $78ca0b85de3fe64f$var$toCommandProperties;


/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */ function $5b3440c6a5be3571$var$issueCommand(command, properties, message) {
    const cmd = new $5b3440c6a5be3571$var$Command(command, properties, message);
    process.stdout.write(cmd.toString() + $5b3440c6a5be3571$var$os.EOL);
}
$5b3440c6a5be3571$exports.issueCommand = $5b3440c6a5be3571$var$issueCommand;
function $5b3440c6a5be3571$var$issue(name, message = '') {
    $5b3440c6a5be3571$var$issueCommand(name, {
    }, message);
}
$5b3440c6a5be3571$exports.issue = $5b3440c6a5be3571$var$issue;
const $5b3440c6a5be3571$var$CMD_STRING = '::';
class $5b3440c6a5be3571$var$Command {
    constructor(command, properties, message){
        if (!command) command = 'missing.command';
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = $5b3440c6a5be3571$var$CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for(const key in this.properties)if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key];
                if (val) {
                    if (first) first = false;
                    else cmdStr += ',';
                    cmdStr += `${key}=${$5b3440c6a5be3571$var$escapeProperty(val)}`;
                }
            }
        }
        cmdStr += `${$5b3440c6a5be3571$var$CMD_STRING}${$5b3440c6a5be3571$var$escapeData(this.message)}`;
        return cmdStr;
    }
}
function $5b3440c6a5be3571$var$escapeData(s) {
    return $78ca0b85de3fe64f$exports.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function $5b3440c6a5be3571$var$escapeProperty(s) {
    return $78ca0b85de3fe64f$exports.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
}


var $51fc9aef06e75905$exports = {};
"use strict";
// For internal use, subject to change.
var $51fc9aef06e75905$var$__createBinding = $51fc9aef06e75905$exports && $51fc9aef06e75905$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $51fc9aef06e75905$var$__setModuleDefault = $51fc9aef06e75905$exports && $51fc9aef06e75905$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $51fc9aef06e75905$var$__importStar = $51fc9aef06e75905$exports && $51fc9aef06e75905$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $51fc9aef06e75905$var$__createBinding(result, mod, k);
    }
    $51fc9aef06e75905$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty($51fc9aef06e75905$exports, "__esModule", {
    value: true
});
$51fc9aef06e75905$exports.issueCommand = void 0;

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ const $51fc9aef06e75905$var$fs = $51fc9aef06e75905$var$__importStar($1hZLD$fs);

const $51fc9aef06e75905$var$os = $51fc9aef06e75905$var$__importStar($1hZLD$os);

function $51fc9aef06e75905$var$issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) throw new Error(`Unable to find environment variable for file command ${command}`);
    if (!$51fc9aef06e75905$var$fs.existsSync(filePath)) throw new Error(`Missing file at path: ${filePath}`);
    $51fc9aef06e75905$var$fs.appendFileSync(filePath, `${$78ca0b85de3fe64f$exports.toCommandValue(message)}${$51fc9aef06e75905$var$os.EOL}`, {
        encoding: 'utf8'
    });
}
$51fc9aef06e75905$exports.issueCommand = $51fc9aef06e75905$var$issueCommand;




const $f8c7b6a5e7a3a07f$var$os = $f8c7b6a5e7a3a07f$var$__importStar($1hZLD$os);

const $f8c7b6a5e7a3a07f$var$path = $f8c7b6a5e7a3a07f$var$__importStar($1hZLD$path);
var $14c6d32f295b46e9$exports = {};
"use strict";
var $14c6d32f295b46e9$var$__awaiter = $14c6d32f295b46e9$exports && $14c6d32f295b46e9$exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty($14c6d32f295b46e9$exports, "__esModule", {
    value: true
});
$14c6d32f295b46e9$exports.OidcClient = void 0;
var $91843fa90dd0d8c7$exports = {};
"use strict";
Object.defineProperty($91843fa90dd0d8c7$exports, "__esModule", {
    value: true
});


var $65de9514ef8d974e$exports = {};
"use strict";
Object.defineProperty($65de9514ef8d974e$exports, "__esModule", {
    value: true
});
function $65de9514ef8d974e$var$getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if ($65de9514ef8d974e$var$checkBypass(reqUrl)) return proxyUrl;
    let proxyVar;
    if (usingSsl) proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    else proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    if (proxyVar) proxyUrl = new URL(proxyVar);
    return proxyUrl;
}
$65de9514ef8d974e$exports.getProxyUrl = $65de9514ef8d974e$var$getProxyUrl;
function $65de9514ef8d974e$var$checkBypass(reqUrl) {
    if (!reqUrl.hostname) return false;
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) return false;
    // Determine the request port
    let reqPort;
    if (reqUrl.port) reqPort = Number(reqUrl.port);
    else if (reqUrl.protocol === 'http:') reqPort = 80;
    else if (reqUrl.protocol === 'https:') reqPort = 443;
    // Format the request hostname and hostname with port
    let upperReqHosts = [
        reqUrl.hostname.toUpperCase()
    ];
    if (typeof reqPort === 'number') upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy.split(',').map((x)=>x.trim().toUpperCase()
    ).filter((x)=>x
    )){
        if (upperReqHosts.some((x)=>x === upperNoProxyItem
        )) return true;
    }
    return false;
}
$65de9514ef8d974e$exports.checkBypass = $65de9514ef8d974e$var$checkBypass;


let $91843fa90dd0d8c7$var$tunnel;
var $91843fa90dd0d8c7$var$HttpCodes;
(function(HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})($91843fa90dd0d8c7$var$HttpCodes = $91843fa90dd0d8c7$exports.HttpCodes || ($91843fa90dd0d8c7$exports.HttpCodes = {
}));
var $91843fa90dd0d8c7$var$Headers;
(function(Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})($91843fa90dd0d8c7$var$Headers = $91843fa90dd0d8c7$exports.Headers || ($91843fa90dd0d8c7$exports.Headers = {
}));
var $91843fa90dd0d8c7$var$MediaTypes;
(function(MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})($91843fa90dd0d8c7$var$MediaTypes = $91843fa90dd0d8c7$exports.MediaTypes || ($91843fa90dd0d8c7$exports.MediaTypes = {
}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */ function $91843fa90dd0d8c7$var$getProxyUrl(serverUrl) {
    let proxyUrl = $65de9514ef8d974e$exports.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
$91843fa90dd0d8c7$exports.getProxyUrl = $91843fa90dd0d8c7$var$getProxyUrl;
const $91843fa90dd0d8c7$var$HttpRedirectCodes = [
    $91843fa90dd0d8c7$var$HttpCodes.MovedPermanently,
    $91843fa90dd0d8c7$var$HttpCodes.ResourceMoved,
    $91843fa90dd0d8c7$var$HttpCodes.SeeOther,
    $91843fa90dd0d8c7$var$HttpCodes.TemporaryRedirect,
    $91843fa90dd0d8c7$var$HttpCodes.PermanentRedirect
];
const $91843fa90dd0d8c7$var$HttpResponseRetryCodes = [
    $91843fa90dd0d8c7$var$HttpCodes.BadGateway,
    $91843fa90dd0d8c7$var$HttpCodes.ServiceUnavailable,
    $91843fa90dd0d8c7$var$HttpCodes.GatewayTimeout
];
const $91843fa90dd0d8c7$var$RetryableHttpVerbs = [
    'OPTIONS',
    'GET',
    'DELETE',
    'HEAD'
];
const $91843fa90dd0d8c7$var$ExponentialBackoffCeiling = 10;
const $91843fa90dd0d8c7$var$ExponentialBackoffTimeSlice = 5;
class $91843fa90dd0d8c7$var$HttpClientError extends Error {
    constructor(message, statusCode){
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, $91843fa90dd0d8c7$var$HttpClientError.prototype);
    }
}
$91843fa90dd0d8c7$exports.HttpClientError = $91843fa90dd0d8c7$var$HttpClientError;
class $91843fa90dd0d8c7$var$HttpClientResponse {
    constructor(message){
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject)=>{
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk)=>{
                output = Buffer.concat([
                    output,
                    chunk
                ]);
            });
            this.message.on('end', ()=>{
                resolve(output.toString());
            });
        });
    }
}
$91843fa90dd0d8c7$exports.HttpClientResponse = $91843fa90dd0d8c7$var$HttpClientResponse;
function $91843fa90dd0d8c7$var$isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
$91843fa90dd0d8c7$exports.isHttps = $91843fa90dd0d8c7$var$isHttps;
parcelRequire.register("4EF08", function(module, exports) {

module.exports = (parcelRequire("dan1S"));

});
parcelRequire.register("dan1S", function(module, exports) {

$parcel$export(module.exports, "httpOverHttp", () => $995e12af4ebf7689$export$25cbd437c61a3835, (v) => $995e12af4ebf7689$export$25cbd437c61a3835 = v);
$parcel$export(module.exports, "httpsOverHttp", () => $995e12af4ebf7689$export$c06e3df7111bae43, (v) => $995e12af4ebf7689$export$c06e3df7111bae43 = v);
$parcel$export(module.exports, "httpOverHttps", () => $995e12af4ebf7689$export$5d50e36ef656139f, (v) => $995e12af4ebf7689$export$5d50e36ef656139f = v);
$parcel$export(module.exports, "httpsOverHttps", () => $995e12af4ebf7689$export$212d6605025321cc, (v) => $995e12af4ebf7689$export$212d6605025321cc = v);
$parcel$export(module.exports, "debug", () => $995e12af4ebf7689$export$1c9f709888824e05, (v) => $995e12af4ebf7689$export$1c9f709888824e05 = v);
var $995e12af4ebf7689$export$25cbd437c61a3835;
var $995e12af4ebf7689$export$c06e3df7111bae43;
var $995e12af4ebf7689$export$5d50e36ef656139f;
var $995e12af4ebf7689$export$212d6605025321cc;
var $995e12af4ebf7689$export$1c9f709888824e05;
'use strict';







$995e12af4ebf7689$export$25cbd437c61a3835 = $995e12af4ebf7689$var$httpOverHttp;
$995e12af4ebf7689$export$c06e3df7111bae43 = $995e12af4ebf7689$var$httpsOverHttp;
$995e12af4ebf7689$export$5d50e36ef656139f = $995e12af4ebf7689$var$httpOverHttps;
$995e12af4ebf7689$export$212d6605025321cc = $995e12af4ebf7689$var$httpsOverHttps;
function $995e12af4ebf7689$var$httpOverHttp(options) {
    var agent = new $995e12af4ebf7689$var$TunnelingAgent(options);
    agent.request = $1hZLD$http.request;
    return agent;
}
function $995e12af4ebf7689$var$httpsOverHttp(options) {
    var agent = new $995e12af4ebf7689$var$TunnelingAgent(options);
    agent.request = $1hZLD$http.request;
    agent.createSocket = $995e12af4ebf7689$var$createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function $995e12af4ebf7689$var$httpOverHttps(options) {
    var agent = new $995e12af4ebf7689$var$TunnelingAgent(options);
    agent.request = $1hZLD$https.request;
    return agent;
}
function $995e12af4ebf7689$var$httpsOverHttps(options) {
    var agent = new $995e12af4ebf7689$var$TunnelingAgent(options);
    agent.request = $1hZLD$https.request;
    agent.createSocket = $995e12af4ebf7689$var$createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function $995e12af4ebf7689$var$TunnelingAgent(options) {
    var self = this;
    self.options = options || {
    };
    self.proxyOptions = self.options.proxy || {
    };
    self.maxSockets = self.options.maxSockets || $1hZLD$http.Agent.defaultMaxSockets;
    self.requests = [];
    self.sockets = [];
    self.on('free', function onFree(socket, host, port, localAddress) {
        var options = $995e12af4ebf7689$var$toOptions(host, port, localAddress);
        for(var i = 0, len = self.requests.length; i < len; ++i){
            var pending = self.requests[i];
            if (pending.host === options.host && pending.port === options.port) {
                // Detect the request to connect same origin server,
                // reuse the connection.
                self.requests.splice(i, 1);
                pending.request.onSocket(socket);
                return;
            }
        }
        socket.destroy();
        self.removeSocket(socket);
    });
}
$1hZLD$util.inherits($995e12af4ebf7689$var$TunnelingAgent, $1hZLD$events.EventEmitter);
$995e12af4ebf7689$var$TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
    var self = this;
    var options = $995e12af4ebf7689$var$mergeOptions({
        request: req
    }, self.options, $995e12af4ebf7689$var$toOptions(host, port, localAddress));
    if (self.sockets.length >= this.maxSockets) {
        // We are over limit so we'll add it to the queue.
        self.requests.push(options);
        return;
    }
    // If we are under maxSockets create a new one.
    self.createSocket(options, function(socket) {
        socket.on('free', onFree);
        socket.on('close', onCloseOrRemove);
        socket.on('agentRemove', onCloseOrRemove);
        req.onSocket(socket);
        function onFree() {
            self.emit('free', socket, options);
        }
        function onCloseOrRemove(err) {
            self.removeSocket(socket);
            socket.removeListener('free', onFree);
            socket.removeListener('close', onCloseOrRemove);
            socket.removeListener('agentRemove', onCloseOrRemove);
        }
    });
};
$995e12af4ebf7689$var$TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
    var self = this;
    var placeholder = {
    };
    self.sockets.push(placeholder);
    var connectOptions = $995e12af4ebf7689$var$mergeOptions({
    }, self.proxyOptions, {
        method: 'CONNECT',
        path: options.host + ':' + options.port,
        agent: false,
        headers: {
            host: options.host + ':' + options.port
        }
    });
    if (options.localAddress) connectOptions.localAddress = options.localAddress;
    if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {
        };
        connectOptions.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64');
    }
    $995e12af4ebf7689$var$debug('making CONNECT request');
    var connectReq = self.request(connectOptions);
    connectReq.useChunkedEncodingByDefault = false; // for v0.6
    connectReq.once('response', onResponse); // for v0.6
    connectReq.once('upgrade', onUpgrade); // for v0.6
    connectReq.once('connect', onConnect); // for v0.7 or later
    connectReq.once('error', onError);
    connectReq.end();
    function onResponse(res) {
        // Very hacky. This is necessary to avoid http-parser leaks.
        res.upgrade = true;
    }
    function onUpgrade(res, socket, head) {
        // Hacky.
        process.nextTick(function() {
            onConnect(res, socket, head);
        });
    }
    function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode !== 200) {
            $995e12af4ebf7689$var$debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
            socket.destroy();
            var error = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
            return;
        }
        if (head.length > 0) {
            $995e12af4ebf7689$var$debug('got illegal response body from proxy');
            socket.destroy();
            var error = new Error('got illegal response body from proxy');
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
            return;
        }
        $995e12af4ebf7689$var$debug('tunneling connection has established');
        self.sockets[self.sockets.indexOf(placeholder)] = socket;
        return cb(socket);
    }
    function onError(cause) {
        connectReq.removeAllListeners();
        $995e12af4ebf7689$var$debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
        var error = new Error("tunneling socket could not be established, cause=" + cause.message);
        error.code = 'ECONNRESET';
        options.request.emit('error', error);
        self.removeSocket(placeholder);
    }
};
$995e12af4ebf7689$var$TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
    var pos = this.sockets.indexOf(socket);
    if (pos === -1) return;
    this.sockets.splice(pos, 1);
    var pending = this.requests.shift();
    if (pending) // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
        pending.request.onSocket(socket);
    });
};
function $995e12af4ebf7689$var$createSecureSocket(options, cb) {
    var self = this;
    $995e12af4ebf7689$var$TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        var hostHeader = options.request.getHeader('host');
        var tlsOptions = $995e12af4ebf7689$var$mergeOptions({
        }, self.options, {
            socket: socket,
            servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
        });
        // 0 is dummy port for v0.6
        var secureSocket = $1hZLD$tls.connect(0, tlsOptions);
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
    });
}
function $995e12af4ebf7689$var$toOptions(host, port, localAddress) {
    if (typeof host === 'string') return {
        host: host,
        port: port,
        localAddress: localAddress
    };
    return host; // for v0.11 or later
}
function $995e12af4ebf7689$var$mergeOptions(target) {
    for(var i = 1, len = arguments.length; i < len; ++i){
        var overrides = arguments[i];
        if (typeof overrides === 'object') {
            var keys = Object.keys(overrides);
            for(var j = 0, keyLen = keys.length; j < keyLen; ++j){
                var k = keys[j];
                if (overrides[k] !== undefined) target[k] = overrides[k];
            }
        }
    }
    return target;
}
var $995e12af4ebf7689$var$debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) $995e12af4ebf7689$var$debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') args[0] = 'TUNNEL: ' + args[0];
    else args.unshift('TUNNEL:');
    console.error.apply(console, args);
};
else $995e12af4ebf7689$var$debug = function() {
};
$995e12af4ebf7689$export$1c9f709888824e05 = $995e12af4ebf7689$var$debug; // for test

});



class $91843fa90dd0d8c7$var$HttpClient {
    constructor(userAgent, handlers, requestOptions){
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) this._ignoreSslError = requestOptions.ignoreSslError;
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) this._allowRedirects = requestOptions.allowRedirects;
            if (requestOptions.allowRedirectDowngrade != null) this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            if (requestOptions.maxRedirects != null) this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            if (requestOptions.keepAlive != null) this._keepAlive = requestOptions.keepAlive;
            if (requestOptions.allowRetries != null) this._allowRetries = requestOptions.allowRetries;
            if (requestOptions.maxRetries != null) this._maxRetries = requestOptions.maxRetries;
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {
        });
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {
        });
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {
        });
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */ async getJson(requestUrl, additionalHeaders = {
    }) {
        additionalHeaders[$91843fa90dd0d8c7$var$Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, $91843fa90dd0d8c7$var$Headers.Accept, $91843fa90dd0d8c7$var$MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {
    }) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[$91843fa90dd0d8c7$var$Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, $91843fa90dd0d8c7$var$Headers.Accept, $91843fa90dd0d8c7$var$MediaTypes.ApplicationJson);
        additionalHeaders[$91843fa90dd0d8c7$var$Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, $91843fa90dd0d8c7$var$Headers.ContentType, $91843fa90dd0d8c7$var$MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {
    }) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[$91843fa90dd0d8c7$var$Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, $91843fa90dd0d8c7$var$Headers.Accept, $91843fa90dd0d8c7$var$MediaTypes.ApplicationJson);
        additionalHeaders[$91843fa90dd0d8c7$var$Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, $91843fa90dd0d8c7$var$Headers.ContentType, $91843fa90dd0d8c7$var$MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {
    }) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[$91843fa90dd0d8c7$var$Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, $91843fa90dd0d8c7$var$Headers.Accept, $91843fa90dd0d8c7$var$MediaTypes.ApplicationJson);
        additionalHeaders[$91843fa90dd0d8c7$var$Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, $91843fa90dd0d8c7$var$Headers.ContentType, $91843fa90dd0d8c7$var$MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */ async request(verb, requestUrl, data, headers) {
        if (this._disposed) throw new Error('Client has already been disposed.');
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && $91843fa90dd0d8c7$var$RetryableHttpVerbs.indexOf(verb) != -1 ? this._maxRetries + 1 : 1;
        let numTries = 0;
        let response;
        while(numTries < maxTries){
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response && response.message && response.message.statusCode === $91843fa90dd0d8c7$var$HttpCodes.Unauthorized) {
                let authenticationHandler;
                for(let i = 0; i < this.handlers.length; i++)if (this.handlers[i].canHandleAuthentication(response)) {
                    authenticationHandler = this.handlers[i];
                    break;
                }
                if (authenticationHandler) return authenticationHandler.handleAuthentication(this, info, data);
                else // We have received an unauthorized response but have no handlers to handle it.
                // Let the response return to the caller.
                return response;
            }
            let redirectsRemaining = this._maxRedirects;
            while($91843fa90dd0d8c7$var$HttpRedirectCodes.indexOf(response.message.statusCode) != -1 && this._allowRedirects && redirectsRemaining > 0){
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) break;
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' && parsedUrl.protocol != parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for(let header in headers)// header names are case insensitive
                    if (header.toLowerCase() === 'authorization') delete headers[header];
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if ($91843fa90dd0d8c7$var$HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) // If not a retry code, return immediately instead of retrying
            return response;
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */ dispose() {
        if (this._agent) this._agent.destroy();
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */ requestRaw(info, data) {
        return new Promise((resolve, reject)=>{
            let callbackForResult = function(err, res) {
                if (err) reject(err);
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */ requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        let callbackCalled = false;
        let handleResult = (err, res)=>{
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg)=>{
            let res = new $91843fa90dd0d8c7$var$HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', (sock)=>{
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 180000, ()=>{
            if (socket) socket.end();
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function(err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') req.write(data, 'utf8');
        if (data && typeof data !== 'string') {
            data.on('close', function() {
                req.end();
            });
            data.pipe(req);
        } else req.end();
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */ getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {
        };
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? $1hZLD$https : $1hZLD$http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {
        };
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
        info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) info.options.headers['user-agent'] = this.userAgent;
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) this.handlers.forEach((handler)=>{
            handler.prepareRequest(info.options);
        });
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = (obj)=>Object.keys(obj).reduce((c, k)=>(c[k.toLowerCase()] = obj[k], c)
            , {
            })
        ;
        if (this.requestOptions && this.requestOptions.headers) return Object.assign({
        }, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        return lowercaseKeys(headers || {
        });
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = (obj)=>Object.keys(obj).reduce((c, k)=>(c[k.toLowerCase()] = obj[k], c)
            , {
            })
        ;
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = $65de9514ef8d974e$exports.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) agent = this._proxyAgent;
        if (this._keepAlive && !useProxy) agent = this._agent;
        // if agent is already assigned use that agent.
        if (!!agent) return agent;
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) maxSockets = this.requestOptions.maxSockets || $1hZLD$http.globalAgent.maxSockets;
        if (useProxy) {
            // If using proxy, need tunnel
            if (!$91843fa90dd0d8c7$var$tunnel) $91843fa90dd0d8c7$var$tunnel = (parcelRequire("4EF08"));
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...(proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    },
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) tunnelAgent = overHttps ? $91843fa90dd0d8c7$var$tunnel.httpsOverHttps : $91843fa90dd0d8c7$var$tunnel.httpsOverHttp;
            else tunnelAgent = overHttps ? $91843fa90dd0d8c7$var$tunnel.httpOverHttps : $91843fa90dd0d8c7$var$tunnel.httpOverHttp;
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = {
                keepAlive: this._keepAlive,
                maxSockets: maxSockets
            };
            agent = usingSsl ? new $1hZLD$https.Agent(options) : new $1hZLD$http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) agent = usingSsl ? $1hZLD$https.globalAgent : $1hZLD$http.globalAgent;
        if (usingSsl && this._ignoreSslError) // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
        // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
        // we have to cast it to any and change it directly
        agent.options = Object.assign(agent.options || {
        }, {
            rejectUnauthorized: false
        });
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min($91843fa90dd0d8c7$var$ExponentialBackoffCeiling, retryNumber);
        const ms = $91843fa90dd0d8c7$var$ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise((resolve)=>setTimeout(()=>resolve()
            , ms)
        );
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) return a;
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject)=>{
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {
                }
            };
            // not found leads to null obj returned
            if (statusCode == $91843fa90dd0d8c7$var$HttpCodes.NotFound) resolve(response);
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) obj = JSON.parse(contents, $91843fa90dd0d8c7$var$HttpClient.dateTimeDeserializer);
                    else obj = JSON.parse(contents);
                    response.result = obj;
                }
                response.headers = res.message.headers;
            } catch (err) {
            // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) msg = obj.message;
                else if (contents && contents.length > 0) // it may be the case that the exception is in the body message as string
                msg = contents;
                else msg = 'Failed request: (' + statusCode + ')';
                let err = new $91843fa90dd0d8c7$var$HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            } else resolve(response);
        });
    }
}
$91843fa90dd0d8c7$exports.HttpClient = $91843fa90dd0d8c7$var$HttpClient;


var $d3738c2a7904de03$exports = {};
"use strict";
Object.defineProperty($d3738c2a7904de03$exports, "__esModule", {
    value: true
});
class $d3738c2a7904de03$var$BasicCredentialHandler {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        options.headers['Authorization'] = 'Basic ' + Buffer.from(this.username + ':' + this.password).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
$d3738c2a7904de03$exports.BasicCredentialHandler = $d3738c2a7904de03$var$BasicCredentialHandler;
class $d3738c2a7904de03$var$BearerCredentialHandler {
    constructor(token){
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        options.headers['Authorization'] = 'Bearer ' + this.token;
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
$d3738c2a7904de03$exports.BearerCredentialHandler = $d3738c2a7904de03$var$BearerCredentialHandler;
class $d3738c2a7904de03$var$PersonalAccessTokenCredentialHandler {
    constructor(token){
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        options.headers['Authorization'] = 'Basic ' + Buffer.from('PAT:' + this.token).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
$d3738c2a7904de03$exports.PersonalAccessTokenCredentialHandler = $d3738c2a7904de03$var$PersonalAccessTokenCredentialHandler;



class $14c6d32f295b46e9$var$OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new $91843fa90dd0d8c7$exports.HttpClient('actions/oidc-client', [
            new $d3738c2a7904de03$exports.BearerCredentialHandler($14c6d32f295b46e9$var$OidcClient.getRequestToken())
        ], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return $14c6d32f295b46e9$var$__awaiter(this, void 0, void 0, function*() {
            const httpclient = $14c6d32f295b46e9$var$OidcClient.createHttpClient();
            const res = yield httpclient.getJson(id_token_url).catch((error)=>{
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) throw new Error('Response json body do not have ID Token field');
            return id_token;
        });
    }
    static getIDToken(audience) {
        return $14c6d32f295b46e9$var$__awaiter(this, void 0, void 0, function*() {
            try {
                // New ID Token is requested from action service
                let id_token_url = $14c6d32f295b46e9$var$OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                $f8c7b6a5e7a3a07f$exports.debug(`ID token url is ${id_token_url}`);
                const id_token = yield $14c6d32f295b46e9$var$OidcClient.getCall(id_token_url);
                $f8c7b6a5e7a3a07f$exports.setSecret(id_token);
                return id_token;
            } catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
$14c6d32f295b46e9$exports.OidcClient = $14c6d32f295b46e9$var$OidcClient;


/**
 * The code to exit an action
 */ var $f8c7b6a5e7a3a07f$var$ExitCode;
(function(ExitCode) {
    /**
     * A code indicating that the action was successful
     */ ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */ ExitCode[ExitCode["Failure"] = 1] = "Failure";
})($f8c7b6a5e7a3a07f$var$ExitCode = $f8c7b6a5e7a3a07f$exports.ExitCode || ($f8c7b6a5e7a3a07f$exports.ExitCode = {
}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $f8c7b6a5e7a3a07f$var$exportVariable(name, val) {
    const convertedVal = $78ca0b85de3fe64f$exports.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${$f8c7b6a5e7a3a07f$var$os.EOL}${convertedVal}${$f8c7b6a5e7a3a07f$var$os.EOL}${delimiter}`;
        $51fc9aef06e75905$exports.issueCommand('ENV', commandValue);
    } else $5b3440c6a5be3571$exports.issueCommand('set-env', {
        name: name
    }, convertedVal);
}
$f8c7b6a5e7a3a07f$exports.exportVariable = $f8c7b6a5e7a3a07f$var$exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */ function $f8c7b6a5e7a3a07f$var$setSecret(secret) {
    $5b3440c6a5be3571$exports.issueCommand('add-mask', {
    }, secret);
}
$f8c7b6a5e7a3a07f$exports.setSecret = $f8c7b6a5e7a3a07f$var$setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */ function $f8c7b6a5e7a3a07f$var$addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) $51fc9aef06e75905$exports.issueCommand('PATH', inputPath);
    else $5b3440c6a5be3571$exports.issueCommand('add-path', {
    }, inputPath);
    process.env['PATH'] = `${inputPath}${$f8c7b6a5e7a3a07f$var$path.delimiter}${process.env['PATH']}`;
}
$f8c7b6a5e7a3a07f$exports.addPath = $f8c7b6a5e7a3a07f$var$addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */ function $f8c7b6a5e7a3a07f$var$getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) throw new Error(`Input required and not supplied: ${name}`);
    if (options && options.trimWhitespace === false) return val;
    return val.trim();
}
$f8c7b6a5e7a3a07f$exports.getInput = $f8c7b6a5e7a3a07f$var$getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */ function $f8c7b6a5e7a3a07f$var$getMultilineInput(name, options) {
    const inputs = $f8c7b6a5e7a3a07f$var$getInput(name, options).split('\n').filter((x)=>x !== ''
    );
    return inputs;
}
$f8c7b6a5e7a3a07f$exports.getMultilineInput = $f8c7b6a5e7a3a07f$var$getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */ function $f8c7b6a5e7a3a07f$var$getBooleanInput(name, options) {
    const trueValue = [
        'true',
        'True',
        'TRUE'
    ];
    const falseValue = [
        'false',
        'False',
        'FALSE'
    ];
    const val = $f8c7b6a5e7a3a07f$var$getInput(name, options);
    if (trueValue.includes(val)) return true;
    if (falseValue.includes(val)) return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
$f8c7b6a5e7a3a07f$exports.getBooleanInput = $f8c7b6a5e7a3a07f$var$getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $f8c7b6a5e7a3a07f$var$setOutput(name, value) {
    process.stdout.write($f8c7b6a5e7a3a07f$var$os.EOL);
    $5b3440c6a5be3571$exports.issueCommand('set-output', {
        name: name
    }, value);
}
$f8c7b6a5e7a3a07f$exports.setOutput = $f8c7b6a5e7a3a07f$var$setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */ function $f8c7b6a5e7a3a07f$var$setCommandEcho(enabled) {
    $5b3440c6a5be3571$exports.issue('echo', enabled ? 'on' : 'off');
}
$f8c7b6a5e7a3a07f$exports.setCommandEcho = $f8c7b6a5e7a3a07f$var$setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */ function $f8c7b6a5e7a3a07f$var$setFailed(message) {
    process.exitCode = $f8c7b6a5e7a3a07f$var$ExitCode.Failure;
    $f8c7b6a5e7a3a07f$var$error(message);
}
$f8c7b6a5e7a3a07f$exports.setFailed = $f8c7b6a5e7a3a07f$var$setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */ function $f8c7b6a5e7a3a07f$var$isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
$f8c7b6a5e7a3a07f$exports.isDebug = $f8c7b6a5e7a3a07f$var$isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */ function $f8c7b6a5e7a3a07f$var$debug(message) {
    $5b3440c6a5be3571$exports.issueCommand('debug', {
    }, message);
}
$f8c7b6a5e7a3a07f$exports.debug = $f8c7b6a5e7a3a07f$var$debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $f8c7b6a5e7a3a07f$var$error(message, properties = {
}) {
    $5b3440c6a5be3571$exports.issueCommand('error', $78ca0b85de3fe64f$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$f8c7b6a5e7a3a07f$exports.error = $f8c7b6a5e7a3a07f$var$error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $f8c7b6a5e7a3a07f$var$warning(message, properties = {
}) {
    $5b3440c6a5be3571$exports.issueCommand('warning', $78ca0b85de3fe64f$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$f8c7b6a5e7a3a07f$exports.warning = $f8c7b6a5e7a3a07f$var$warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $f8c7b6a5e7a3a07f$var$notice(message, properties = {
}) {
    $5b3440c6a5be3571$exports.issueCommand('notice', $78ca0b85de3fe64f$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$f8c7b6a5e7a3a07f$exports.notice = $f8c7b6a5e7a3a07f$var$notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */ function $f8c7b6a5e7a3a07f$var$info(message) {
    process.stdout.write(message + $f8c7b6a5e7a3a07f$var$os.EOL);
}
$f8c7b6a5e7a3a07f$exports.info = $f8c7b6a5e7a3a07f$var$info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */ function $f8c7b6a5e7a3a07f$var$startGroup(name) {
    $5b3440c6a5be3571$exports.issue('group', name);
}
$f8c7b6a5e7a3a07f$exports.startGroup = $f8c7b6a5e7a3a07f$var$startGroup;
/**
 * End an output group.
 */ function $f8c7b6a5e7a3a07f$var$endGroup() {
    $5b3440c6a5be3571$exports.issue('endgroup');
}
$f8c7b6a5e7a3a07f$exports.endGroup = $f8c7b6a5e7a3a07f$var$endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */ function $f8c7b6a5e7a3a07f$var$group(name, fn) {
    return $f8c7b6a5e7a3a07f$var$__awaiter(this, void 0, void 0, function*() {
        $f8c7b6a5e7a3a07f$var$startGroup(name);
        let result;
        try {
            result = yield fn();
        } finally{
            $f8c7b6a5e7a3a07f$var$endGroup();
        }
        return result;
    });
}
$f8c7b6a5e7a3a07f$exports.group = $f8c7b6a5e7a3a07f$var$group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $f8c7b6a5e7a3a07f$var$saveState(name, value) {
    $5b3440c6a5be3571$exports.issueCommand('save-state', {
        name: name
    }, value);
}
$f8c7b6a5e7a3a07f$exports.saveState = $f8c7b6a5e7a3a07f$var$saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */ function $f8c7b6a5e7a3a07f$var$getState(name) {
    return process.env[`STATE_${name}`] || '';
}
$f8c7b6a5e7a3a07f$exports.getState = $f8c7b6a5e7a3a07f$var$getState;
function $f8c7b6a5e7a3a07f$var$getIDToken(aud) {
    return $f8c7b6a5e7a3a07f$var$__awaiter(this, void 0, void 0, function*() {
        return yield $14c6d32f295b46e9$exports.OidcClient.getIDToken(aud);
    });
}
$f8c7b6a5e7a3a07f$exports.getIDToken = $f8c7b6a5e7a3a07f$var$getIDToken;


const $a34506f2eaa1d906$export$b48f56e3afef0cb4 = (ref)=>{
    if (ref.startsWith('refs/') && !ref.startsWith('refs/heads/')) throw new Error(`Ref ${ref} doesn't point to a branch`);
    return ref.replace('refs/heads/', '').replace(/\\/g, '_').toUpperCase();
};
const $a34506f2eaa1d906$export$f0c653cfd7dea798 = ()=>{
    const { GITHUB_REF: GITHUB_REF , GITHUB_BASE_REF: GITHUB_BASE_REF  } = process.env;
    const ref = GITHUB_BASE_REF || GITHUB_REF;
    return ref;
};
const $a34506f2eaa1d906$export$385ab7820d65634c = ()=>{
    return (/*@__PURE__*/$parcel$interopDefault($f8c7b6a5e7a3a07f$exports)).getInput('secrets', {
        required: true
    }).replace(/ /g, '').split(',');
};
const $a34506f2eaa1d906$export$366149f5da08b8f7 = (prefix, secretName)=>{
    const branchSecretKey = `BRANCH_${secretName}`;
    const resolvedSecretName = `${prefix}_${secretName}`;
    (/*@__PURE__*/$parcel$interopDefault($f8c7b6a5e7a3a07f$exports)).exportVariable(branchSecretKey, resolvedSecretName);
};


const $92a501217677cea7$var$secretNames = $a34506f2eaa1d906$export$385ab7820d65634c();
const $92a501217677cea7$var$ref = $a34506f2eaa1d906$export$f0c653cfd7dea798();
const $92a501217677cea7$var$prefix = $a34506f2eaa1d906$export$b48f56e3afef0cb4($92a501217677cea7$var$ref);
const $92a501217677cea7$var$exporter = $a34506f2eaa1d906$export$366149f5da08b8f7.bind(undefined, $92a501217677cea7$var$prefix);
$92a501217677cea7$var$secretNames.forEach($92a501217677cea7$var$exporter);


//# sourceMappingURL=main.js.map
