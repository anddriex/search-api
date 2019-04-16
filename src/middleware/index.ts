import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleSequelize
} from "./common";

import {handleAPIDocs} from "./apiDocs";

export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleSequelize,
    handleAPIDocs
]