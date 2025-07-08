"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = search;
function search(query, options = undefined) {
    var _a, _b, _c;
    options !== null && options !== void 0 ? options : (options = {});
    (_a = options.q) !== null && _a !== void 0 ? _a : (options.q = query);
    (_b = options.engine) !== null && _b !== void 0 ? _b : (options.engine = 'google');
    (_c = options.api_key) !== null && _c !== void 0 ? _c : (options.api_key = process.env.SERP_API_KEY);
    const qParams = new URLSearchParams(options);
    return fetch(`https://serpapi.com/search.json?${qParams.toString()}`).then(res => res.json());
}
