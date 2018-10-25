(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.vuexOrmGraphql = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var invariant_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = invariant;
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function invariant(condition, message) {
      /* istanbul ignore else */
      if (!condition) {
        throw new Error(message);
      }
    }
    });

    unwrapExports(invariant_1);

    var source = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Source = undefined;



    var _invariant2 = _interopRequireDefault(invariant_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                               *
                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                               *
                                                                                                                                                               * 
                                                                                                                                                               */

    /**
     * A representation of source input to GraphQL.
     * `name` and `locationOffset` are optional. They are useful for clients who
     * store GraphQL documents in source files; for example, if the GraphQL input
     * starts at line 40 in a file named Foo.graphql, it might be useful for name to
     * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
     * line and column in locationOffset are 1-indexed
     */
    var Source = exports.Source = function Source(body, name, locationOffset) {
      _classCallCheck(this, Source);

      this.body = body;
      this.name = name || 'GraphQL request';
      this.locationOffset = locationOffset || { line: 1, column: 1 };
      !(this.locationOffset.line > 0) ? (0, _invariant2.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
      !(this.locationOffset.column > 0) ? (0, _invariant2.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
    };
    });

    unwrapExports(source);
    var source_1 = source.Source;

    var location_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getLocation = getLocation;


    /**
     * Takes a Source and a UTF-8 character offset, and returns the corresponding
     * line and column as a SourceLocation.
     */
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function getLocation(source, position) {
      var lineRegexp = /\r\n|[\n\r]/g;
      var line = 1;
      var column = position + 1;
      var match = void 0;
      while ((match = lineRegexp.exec(source.body)) && match.index < position) {
        line += 1;
        column = position + 1 - (match.index + match[0].length);
      }
      return { line: line, column: column };
    }

    /**
     * Represents a location in a Source.
     */
    });

    unwrapExports(location_1);
    var location_2 = location_1.getLocation;

    var printError_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printError = printError;



    /**
     * Prints a GraphQLError to a string, representing useful location information
     * about the error's position in the source.
     */
    function printError(error) {
      var printedLocations = [];
      if (error.nodes) {
        error.nodes.forEach(function (node) {
          if (node.loc) {
            printedLocations.push(highlightSourceAtLocation(node.loc.source, (0, location_1.getLocation)(node.loc.source, node.loc.start)));
          }
        });
      } else if (error.source && error.locations) {
        var source = error.source;
        error.locations.forEach(function (location) {
          printedLocations.push(highlightSourceAtLocation(source, location));
        });
      }
      return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
    }

    /**
     * Render a helpful description of the location of the error in the GraphQL
     * Source document.
     */
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function highlightSourceAtLocation(source, location) {
      var line = location.line;
      var lineOffset = source.locationOffset.line - 1;
      var columnOffset = getColumnOffset(source, location);
      var contextLine = line + lineOffset;
      var contextColumn = location.column + columnOffset;
      var prevLineNum = (contextLine - 1).toString();
      var lineNum = contextLine.toString();
      var nextLineNum = (contextLine + 1).toString();
      var padLen = nextLineNum.length;
      var lines = source.body.split(/\r\n|[\n\r]/g);
      lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
      var outputLines = [source.name + ' (' + contextLine + ':' + contextColumn + ')', line >= 2 && lpad(padLen, prevLineNum) + ': ' + lines[line - 2], lpad(padLen, lineNum) + ': ' + lines[line - 1], whitespace(2 + padLen + contextColumn - 1) + '^', line < lines.length && lpad(padLen, nextLineNum) + ': ' + lines[line]];
      return outputLines.filter(Boolean).join('\n');
    }

    function getColumnOffset(source, location) {
      return location.line === 1 ? source.locationOffset.column - 1 : 0;
    }

    function whitespace(len) {
      return Array(len + 1).join(' ');
    }

    function lpad(len, str) {
      return whitespace(len - str.length) + str;
    }
    });

    unwrapExports(printError_1);
    var printError_2 = printError_1.printError;

    var GraphQLError_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GraphQLError = GraphQLError;





    /**
     * A GraphQLError describes an Error found during the parse, validate, or
     * execute phases of performing a GraphQL operation. In addition to a message
     * and stack trace, it also includes information about the locations in a
     * GraphQL document and/or execution result that correspond to the Error.
     */
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function GraphQLError( // eslint-disable-line no-redeclare
    message, nodes, source, positions, path, originalError, extensions) {
      // Compute list of blame nodes.
      var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined;

      // Compute locations in the source for the given nodes/positions.
      var _source = source;
      if (!_source && _nodes) {
        var node = _nodes[0];
        _source = node && node.loc && node.loc.source;
      }

      var _positions = positions;
      if (!_positions && _nodes) {
        _positions = _nodes.reduce(function (list, node) {
          if (node.loc) {
            list.push(node.loc.start);
          }
          return list;
        }, []);
      }
      if (_positions && _positions.length === 0) {
        _positions = undefined;
      }

      var _locations = void 0;
      if (positions && source) {
        var providedSource = source;
        _locations = positions.map(function (pos) {
          return (0, location_1.getLocation)(providedSource, pos);
        });
      } else if (_nodes) {
        _locations = _nodes.reduce(function (list, node) {
          if (node.loc) {
            list.push((0, location_1.getLocation)(node.loc.source, node.loc.start));
          }
          return list;
        }, []);
      }

      Object.defineProperties(this, {
        message: {
          value: message,
          // By being enumerable, JSON.stringify will include `message` in the
          // resulting output. This ensures that the simplest possible GraphQL
          // service adheres to the spec.
          enumerable: true,
          writable: true
        },
        locations: {
          // Coercing falsey values to undefined ensures they will not be included
          // in JSON.stringify() when not provided.
          value: _locations || undefined,
          // By being enumerable, JSON.stringify will include `locations` in the
          // resulting output. This ensures that the simplest possible GraphQL
          // service adheres to the spec.
          enumerable: true
        },
        path: {
          // Coercing falsey values to undefined ensures they will not be included
          // in JSON.stringify() when not provided.
          value: path || undefined,
          // By being enumerable, JSON.stringify will include `path` in the
          // resulting output. This ensures that the simplest possible GraphQL
          // service adheres to the spec.
          enumerable: true
        },
        nodes: {
          value: _nodes || undefined
        },
        source: {
          value: _source || undefined
        },
        positions: {
          value: _positions || undefined
        },
        originalError: {
          value: originalError
        },
        extensions: {
          value: extensions || originalError && originalError.extensions
        }
      });

      // Include (non-enumerable) stack trace.
      if (originalError && originalError.stack) {
        Object.defineProperty(this, 'stack', {
          value: originalError.stack,
          writable: true,
          configurable: true
        });
      } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, GraphQLError);
      } else {
        Object.defineProperty(this, 'stack', {
          value: Error().stack,
          writable: true,
          configurable: true
        });
      }
    }

    GraphQLError.prototype = Object.create(Error.prototype, {
      constructor: { value: GraphQLError },
      name: { value: 'GraphQLError' },
      toString: {
        value: function toString() {
          return (0, printError_1.printError)(this);
        }
      }
    });
    });

    unwrapExports(GraphQLError_1);
    var GraphQLError_2 = GraphQLError_1.GraphQLError;

    var syntaxError_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.syntaxError = syntaxError;



    /**
     * Produces a GraphQLError representing a syntax error, containing useful
     * descriptive information about the syntax error's position in the source.
     */
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function syntaxError(source, position, description) {
      return new GraphQLError_1.GraphQLError('Syntax Error: ' + description, undefined, source, [position]);
    }
    });

    unwrapExports(syntaxError_1);
    var syntaxError_2 = syntaxError_1.syntaxError;

    var locatedError_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.locatedError = locatedError;



    /**
     * Given an arbitrary Error, presumably thrown while attempting to execute a
     * GraphQL operation, produce a new GraphQLError aware of the location in the
     * document responsible for the original Error.
     */
    function locatedError(originalError, nodes, path) {
      // Note: this uses a brand-check to support GraphQL errors originating from
      // other contexts.
      if (originalError && Array.isArray(originalError.path)) {
        return originalError;
      }

      return new GraphQLError_1.GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
    } /**
       * Copyright (c) 2015-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       *
       * 
       */
    });

    unwrapExports(locatedError_1);
    var locatedError_2 = locatedError_1.locatedError;

    var formatError_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                       * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                       * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                       * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                       * 
                                                                                                                                                                                                                                                                       */

    exports.formatError = formatError;



    var _invariant2 = _interopRequireDefault(invariant_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Given a GraphQLError, format it according to the rules described by the
     * Response Format, Errors section of the GraphQL Specification.
     */
    function formatError(error) {
      !error ? (0, _invariant2.default)(0, 'Received null or undefined error.') : void 0;
      return _extends({}, error.extensions, {
        message: error.message || 'An unknown error occurred.',
        locations: error.locations,
        path: error.path
      });
    }
    });

    unwrapExports(formatError_1);
    var formatError_2 = formatError_1.formatError;

    var error = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });



    Object.defineProperty(exports, 'GraphQLError', {
      enumerable: true,
      get: function get() {
        return GraphQLError_1.GraphQLError;
      }
    });



    Object.defineProperty(exports, 'syntaxError', {
      enumerable: true,
      get: function get() {
        return syntaxError_1.syntaxError;
      }
    });



    Object.defineProperty(exports, 'locatedError', {
      enumerable: true,
      get: function get() {
        return locatedError_1.locatedError;
      }
    });



    Object.defineProperty(exports, 'printError', {
      enumerable: true,
      get: function get() {
        return printError_1.printError;
      }
    });



    Object.defineProperty(exports, 'formatError', {
      enumerable: true,
      get: function get() {
        return formatError_1.formatError;
      }
    });
    });

    unwrapExports(error);

    var blockStringValue_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = blockStringValue;
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    /**
     * Produces the value of a block string from its parsed raw value, similar to
     * Coffeescript's block string, Python's docstring trim or Ruby's strip_heredoc.
     *
     * This implements the GraphQL spec's BlockStringValue() static algorithm.
     */
    function blockStringValue(rawString) {
      // Expand a block string's raw value into independent lines.
      var lines = rawString.split(/\r\n|[\n\r]/g);

      // Remove common indentation from all lines but first.
      var commonIndent = null;
      for (var i = 1; i < lines.length; i++) {
        var line = lines[i];
        var indent = leadingWhitespace(line);
        if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
          if (commonIndent === 0) {
            break;
          }
        }
      }

      if (commonIndent) {
        for (var _i = 1; _i < lines.length; _i++) {
          lines[_i] = lines[_i].slice(commonIndent);
        }
      }

      // Remove leading and trailing blank lines.
      while (lines.length > 0 && isBlank(lines[0])) {
        lines.shift();
      }
      while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
        lines.pop();
      }

      // Return a string of the lines joined with U+000A.
      return lines.join('\n');
    }

    function leadingWhitespace(str) {
      var i = 0;
      while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
        i++;
      }
      return i;
    }

    function isBlank(str) {
      return leadingWhitespace(str) === str.length;
    }
    });

    unwrapExports(blockStringValue_1);

    var lexer = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TokenKind = undefined;
    exports.createLexer = createLexer;
    exports.getTokenDesc = getTokenDesc;





    var _blockStringValue2 = _interopRequireDefault(blockStringValue_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    /**
     * Given a Source object, this returns a Lexer for that source.
     * A Lexer is a stateful stream generator in that every time
     * it is advanced, it returns the next token in the Source. Assuming the
     * source lexes, the final Token emitted by the lexer will be of kind
     * EOF, after which the lexer will repeatedly return the same EOF token
     * whenever called.
     */
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function createLexer(source, options) {
      var startOfFileToken = new Tok(SOF, 0, 0, 0, 0, null);
      var lexer = {
        source: source,
        options: options,
        lastToken: startOfFileToken,
        token: startOfFileToken,
        line: 1,
        lineStart: 0,
        advance: advanceLexer,
        lookahead: lookahead
      };
      return lexer;
    }

    function advanceLexer() {
      this.lastToken = this.token;
      var token = this.token = this.lookahead();
      return token;
    }

    function lookahead() {
      var token = this.token;
      if (token.kind !== EOF) {
        do {
          // Note: next is only mutable during parsing, so we cast to allow this.
          token = token.next || (token.next = readToken(this, token));
        } while (token.kind === COMMENT);
      }
      return token;
    }

    /**
     * The return type of createLexer.
     */


    // Each kind of token.
    var SOF = '<SOF>';
    var EOF = '<EOF>';
    var BANG = '!';
    var DOLLAR = '$';
    var PAREN_L = '(';
    var PAREN_R = ')';
    var SPREAD = '...';
    var COLON = ':';
    var EQUALS = '=';
    var AT = '@';
    var BRACKET_L = '[';
    var BRACKET_R = ']';
    var BRACE_L = '{';
    var PIPE = '|';
    var BRACE_R = '}';
    var NAME = 'Name';
    var INT = 'Int';
    var FLOAT = 'Float';
    var STRING = 'String';
    var BLOCK_STRING = 'BlockString';
    var COMMENT = 'Comment';

    /**
     * An exported enum describing the different kinds of tokens that the
     * lexer emits.
     */
    var TokenKind = exports.TokenKind = {
      SOF: SOF,
      EOF: EOF,
      BANG: BANG,
      DOLLAR: DOLLAR,
      PAREN_L: PAREN_L,
      PAREN_R: PAREN_R,
      SPREAD: SPREAD,
      COLON: COLON,
      EQUALS: EQUALS,
      AT: AT,
      BRACKET_L: BRACKET_L,
      BRACKET_R: BRACKET_R,
      BRACE_L: BRACE_L,
      PIPE: PIPE,
      BRACE_R: BRACE_R,
      NAME: NAME,
      INT: INT,
      FLOAT: FLOAT,
      STRING: STRING,
      BLOCK_STRING: BLOCK_STRING,
      COMMENT: COMMENT
    };

    /**
     * A helper function to describe a token as a string for debugging
     */
    function getTokenDesc(token) {
      var value = token.value;
      return value ? token.kind + ' "' + value + '"' : token.kind;
    }

    var charCodeAt = String.prototype.charCodeAt;
    var slice = String.prototype.slice;

    /**
     * Helper function for constructing the Token object.
     */
    function Tok(kind, start, end, line, column, prev, value) {
      this.kind = kind;
      this.start = start;
      this.end = end;
      this.line = line;
      this.column = column;
      this.value = value;
      this.prev = prev;
      this.next = null;
    }

    // Print a simplified form when appearing in JSON/util.inspect.
    Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
      };
    };

    function printCharCode(code) {
      return (
        // NaN/undefined represents access beyond the end of the file.
        isNaN(code) ? EOF : // Trust JSON for ASCII.
        code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
        '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
      );
    }

    /**
     * Gets the next token from the source starting at the given position.
     *
     * This skips over whitespace and comments until it finds the next lexable
     * token, then lexes punctuators immediately or calls the appropriate helper
     * function for more complicated tokens.
     */
    function readToken(lexer, prev) {
      var source = lexer.source;
      var body = source.body;
      var bodyLength = body.length;

      var position = positionAfterWhitespace(body, prev.end, lexer);
      var line = lexer.line;
      var col = 1 + position - lexer.lineStart;

      if (position >= bodyLength) {
        return new Tok(EOF, bodyLength, bodyLength, line, col, prev);
      }

      var code = charCodeAt.call(body, position);

      // SourceCharacter
      if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
        throw (0, error.syntaxError)(source, position, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
      }

      switch (code) {
        // !
        case 33:
          return new Tok(BANG, position, position + 1, line, col, prev);
        // #
        case 35:
          return readComment(source, position, line, col, prev);
        // $
        case 36:
          return new Tok(DOLLAR, position, position + 1, line, col, prev);
        // (
        case 40:
          return new Tok(PAREN_L, position, position + 1, line, col, prev);
        // )
        case 41:
          return new Tok(PAREN_R, position, position + 1, line, col, prev);
        // .
        case 46:
          if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
            return new Tok(SPREAD, position, position + 3, line, col, prev);
          }
          break;
        // :
        case 58:
          return new Tok(COLON, position, position + 1, line, col, prev);
        // =
        case 61:
          return new Tok(EQUALS, position, position + 1, line, col, prev);
        // @
        case 64:
          return new Tok(AT, position, position + 1, line, col, prev);
        // [
        case 91:
          return new Tok(BRACKET_L, position, position + 1, line, col, prev);
        // ]
        case 93:
          return new Tok(BRACKET_R, position, position + 1, line, col, prev);
        // {
        case 123:
          return new Tok(BRACE_L, position, position + 1, line, col, prev);
        // |
        case 124:
          return new Tok(PIPE, position, position + 1, line, col, prev);
        // }
        case 125:
          return new Tok(BRACE_R, position, position + 1, line, col, prev);
        // A-Z _ a-z
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 95:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          return readName(source, position, line, col, prev);
        // - 0-9
        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return readNumber(source, position, code, line, col, prev);
        // "
        case 34:
          if (charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
            return readBlockString(source, position, line, col, prev);
          }
          return readString(source, position, line, col, prev);
      }

      throw (0, error.syntaxError)(source, position, unexpectedCharacterMessage(code));
    }

    /**
     * Report a message that an unexpected character was encountered.
     */
    function unexpectedCharacterMessage(code) {
      if (code === 39) {
        // '
        return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
      }

      return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
    }

    /**
     * Reads from body starting at startPosition until it finds a non-whitespace
     * or commented character, then returns the position of that character for
     * lexing.
     */
    function positionAfterWhitespace(body, startPosition, lexer) {
      var bodyLength = body.length;
      var position = startPosition;
      while (position < bodyLength) {
        var code = charCodeAt.call(body, position);
        // tab | space | comma | BOM
        if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
          ++position;
        } else if (code === 10) {
          // new line
          ++position;
          ++lexer.line;
          lexer.lineStart = position;
        } else if (code === 13) {
          // carriage return
          if (charCodeAt.call(body, position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }
          ++lexer.line;
          lexer.lineStart = position;
        } else {
          break;
        }
      }
      return position;
    }

    /**
     * Reads a comment token from the source file.
     *
     * #[\u0009\u0020-\uFFFF]*
     */
    function readComment(source, start, line, col, prev) {
      var body = source.body;
      var code = void 0;
      var position = start;

      do {
        code = charCodeAt.call(body, ++position);
      } while (code !== null && (
      // SourceCharacter but not LineTerminator
      code > 0x001f || code === 0x0009));

      return new Tok(COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
    }

    /**
     * Reads a number token from the source file, either a float
     * or an int depending on whether a decimal point appears.
     *
     * Int:   -?(0|[1-9][0-9]*)
     * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
     */
    function readNumber(source, start, firstCode, line, col, prev) {
      var body = source.body;
      var code = firstCode;
      var position = start;
      var isFloat = false;

      if (code === 45) {
        // -
        code = charCodeAt.call(body, ++position);
      }

      if (code === 48) {
        // 0
        code = charCodeAt.call(body, ++position);
        if (code >= 48 && code <= 57) {
          throw (0, error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
        }
      } else {
        position = readDigits(source, position, code);
        code = charCodeAt.call(body, position);
      }

      if (code === 46) {
        // .
        isFloat = true;

        code = charCodeAt.call(body, ++position);
        position = readDigits(source, position, code);
        code = charCodeAt.call(body, position);
      }

      if (code === 69 || code === 101) {
        // E e
        isFloat = true;

        code = charCodeAt.call(body, ++position);
        if (code === 43 || code === 45) {
          // + -
          code = charCodeAt.call(body, ++position);
        }
        position = readDigits(source, position, code);
      }

      return new Tok(isFloat ? FLOAT : INT, start, position, line, col, prev, slice.call(body, start, position));
    }

    /**
     * Returns the new position in the source after reading digits.
     */
    function readDigits(source, start, firstCode) {
      var body = source.body;
      var position = start;
      var code = firstCode;
      if (code >= 48 && code <= 57) {
        // 0 - 9
        do {
          code = charCodeAt.call(body, ++position);
        } while (code >= 48 && code <= 57); // 0 - 9
        return position;
      }
      throw (0, error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
    }

    /**
     * Reads a string token from the source file.
     *
     * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
     */
    function readString(source, start, line, col, prev) {
      var body = source.body;
      var position = start + 1;
      var chunkStart = position;
      var code = 0;
      var value = '';

      while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
      // not LineTerminator
      code !== 0x000a && code !== 0x000d) {
        // Closing Quote (")
        if (code === 34) {
          value += slice.call(body, chunkStart, position);
          return new Tok(STRING, start, position + 1, line, col, prev, value);
        }

        // SourceCharacter
        if (code < 0x0020 && code !== 0x0009) {
          throw (0, error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
        }

        ++position;
        if (code === 92) {
          // \
          value += slice.call(body, chunkStart, position - 1);
          code = charCodeAt.call(body, position);
          switch (code) {
            case 34:
              value += '"';
              break;
            case 47:
              value += '/';
              break;
            case 92:
              value += '\\';
              break;
            case 98:
              value += '\b';
              break;
            case 102:
              value += '\f';
              break;
            case 110:
              value += '\n';
              break;
            case 114:
              value += '\r';
              break;
            case 116:
              value += '\t';
              break;
            case 117:
              // u
              var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
              if (charCode < 0) {
                throw (0, error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
              }
              value += String.fromCharCode(charCode);
              position += 4;
              break;
            default:
              throw (0, error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
          }
          ++position;
          chunkStart = position;
        }
      }

      throw (0, error.syntaxError)(source, position, 'Unterminated string.');
    }

    /**
     * Reads a block string token from the source file.
     *
     * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
     */
    function readBlockString(source, start, line, col, prev) {
      var body = source.body;
      var position = start + 3;
      var chunkStart = position;
      var code = 0;
      var rawValue = '';

      while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
        // Closing Triple-Quote (""")
        if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
          rawValue += slice.call(body, chunkStart, position);
          return new Tok(BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockStringValue2.default)(rawValue));
        }

        // SourceCharacter
        if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
          throw (0, error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
        }

        // Escape Triple-Quote (\""")
        if (code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
          rawValue += slice.call(body, chunkStart, position) + '"""';
          position += 4;
          chunkStart = position;
        } else {
          ++position;
        }
      }

      throw (0, error.syntaxError)(source, position, 'Unterminated string.');
    }

    /**
     * Converts four hexidecimal chars to the integer that the
     * string represents. For example, uniCharCode('0','0','0','f')
     * will return 15, and uniCharCode('0','0','f','f') returns 255.
     *
     * Returns a negative number on error, if a char was invalid.
     *
     * This is implemented by noting that char2hex() returns -1 on error,
     * which means the result of ORing the char2hex() will also be negative.
     */
    function uniCharCode(a, b, c, d) {
      return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
    }

    /**
     * Converts a hex character to its integer value.
     * '0' becomes 0, '9' becomes 9
     * 'A' becomes 10, 'F' becomes 15
     * 'a' becomes 10, 'f' becomes 15
     *
     * Returns -1 on error.
     */
    function char2hex(a) {
      return a >= 48 && a <= 57 ? a - 48 // 0-9
      : a >= 65 && a <= 70 ? a - 55 // A-F
      : a >= 97 && a <= 102 ? a - 87 // a-f
      : -1;
    }

    /**
     * Reads an alphanumeric + underscore name from the source.
     *
     * [_A-Za-z][_0-9A-Za-z]*
     */
    function readName(source, position, line, col, prev) {
      var body = source.body;
      var bodyLength = body.length;
      var end = position + 1;
      var code = 0;
      while (end !== bodyLength && (code = charCodeAt.call(body, end)) !== null && (code === 95 || // _
      code >= 48 && code <= 57 || // 0-9
      code >= 65 && code <= 90 || // A-Z
      code >= 97 && code <= 122) // a-z
      ) {
        ++end;
      }
      return new Tok(NAME, position, end, line, col, prev, slice.call(body, position, end));
    }
    });

    unwrapExports(lexer);
    var lexer_1 = lexer.TokenKind;
    var lexer_2 = lexer.createLexer;
    var lexer_3 = lexer.getTokenDesc;

    var kinds = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    // Name

    var NAME = exports.NAME = 'Name';

    // Document

    var DOCUMENT = exports.DOCUMENT = 'Document';
    var OPERATION_DEFINITION = exports.OPERATION_DEFINITION = 'OperationDefinition';
    var VARIABLE_DEFINITION = exports.VARIABLE_DEFINITION = 'VariableDefinition';
    var VARIABLE = exports.VARIABLE = 'Variable';
    var SELECTION_SET = exports.SELECTION_SET = 'SelectionSet';
    var FIELD = exports.FIELD = 'Field';
    var ARGUMENT = exports.ARGUMENT = 'Argument';

    // Fragments

    var FRAGMENT_SPREAD = exports.FRAGMENT_SPREAD = 'FragmentSpread';
    var INLINE_FRAGMENT = exports.INLINE_FRAGMENT = 'InlineFragment';
    var FRAGMENT_DEFINITION = exports.FRAGMENT_DEFINITION = 'FragmentDefinition';

    // Values

    var INT = exports.INT = 'IntValue';
    var FLOAT = exports.FLOAT = 'FloatValue';
    var STRING = exports.STRING = 'StringValue';
    var BOOLEAN = exports.BOOLEAN = 'BooleanValue';
    var NULL = exports.NULL = 'NullValue';
    var ENUM = exports.ENUM = 'EnumValue';
    var LIST = exports.LIST = 'ListValue';
    var OBJECT = exports.OBJECT = 'ObjectValue';
    var OBJECT_FIELD = exports.OBJECT_FIELD = 'ObjectField';

    // Directives

    var DIRECTIVE = exports.DIRECTIVE = 'Directive';

    // Types

    var NAMED_TYPE = exports.NAMED_TYPE = 'NamedType';
    var LIST_TYPE = exports.LIST_TYPE = 'ListType';
    var NON_NULL_TYPE = exports.NON_NULL_TYPE = 'NonNullType';

    // Type System Definitions

    var SCHEMA_DEFINITION = exports.SCHEMA_DEFINITION = 'SchemaDefinition';
    var OPERATION_TYPE_DEFINITION = exports.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition';

    // Type Definitions

    var SCALAR_TYPE_DEFINITION = exports.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition';
    var OBJECT_TYPE_DEFINITION = exports.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition';
    var FIELD_DEFINITION = exports.FIELD_DEFINITION = 'FieldDefinition';
    var INPUT_VALUE_DEFINITION = exports.INPUT_VALUE_DEFINITION = 'InputValueDefinition';
    var INTERFACE_TYPE_DEFINITION = exports.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition';
    var UNION_TYPE_DEFINITION = exports.UNION_TYPE_DEFINITION = 'UnionTypeDefinition';
    var ENUM_TYPE_DEFINITION = exports.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition';
    var ENUM_VALUE_DEFINITION = exports.ENUM_VALUE_DEFINITION = 'EnumValueDefinition';
    var INPUT_OBJECT_TYPE_DEFINITION = exports.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition';

    // Type Extensions

    var SCALAR_TYPE_EXTENSION = exports.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension';
    var OBJECT_TYPE_EXTENSION = exports.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension';
    var INTERFACE_TYPE_EXTENSION = exports.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension';
    var UNION_TYPE_EXTENSION = exports.UNION_TYPE_EXTENSION = 'UnionTypeExtension';
    var ENUM_TYPE_EXTENSION = exports.ENUM_TYPE_EXTENSION = 'EnumTypeExtension';
    var INPUT_OBJECT_TYPE_EXTENSION = exports.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension';

    // Directive Definitions

    var DIRECTIVE_DEFINITION = exports.DIRECTIVE_DEFINITION = 'DirectiveDefinition';
    });

    unwrapExports(kinds);
    var kinds_1 = kinds.NAME;
    var kinds_2 = kinds.DOCUMENT;
    var kinds_3 = kinds.OPERATION_DEFINITION;
    var kinds_4 = kinds.VARIABLE_DEFINITION;
    var kinds_5 = kinds.VARIABLE;
    var kinds_6 = kinds.SELECTION_SET;
    var kinds_7 = kinds.FIELD;
    var kinds_8 = kinds.ARGUMENT;
    var kinds_9 = kinds.FRAGMENT_SPREAD;
    var kinds_10 = kinds.INLINE_FRAGMENT;
    var kinds_11 = kinds.FRAGMENT_DEFINITION;
    var kinds_12 = kinds.INT;
    var kinds_13 = kinds.FLOAT;
    var kinds_14 = kinds.STRING;
    var kinds_15 = kinds.BOOLEAN;
    var kinds_16 = kinds.NULL;
    var kinds_17 = kinds.ENUM;
    var kinds_18 = kinds.LIST;
    var kinds_19 = kinds.OBJECT;
    var kinds_20 = kinds.OBJECT_FIELD;
    var kinds_21 = kinds.DIRECTIVE;
    var kinds_22 = kinds.NAMED_TYPE;
    var kinds_23 = kinds.LIST_TYPE;
    var kinds_24 = kinds.NON_NULL_TYPE;
    var kinds_25 = kinds.SCHEMA_DEFINITION;
    var kinds_26 = kinds.OPERATION_TYPE_DEFINITION;
    var kinds_27 = kinds.SCALAR_TYPE_DEFINITION;
    var kinds_28 = kinds.OBJECT_TYPE_DEFINITION;
    var kinds_29 = kinds.FIELD_DEFINITION;
    var kinds_30 = kinds.INPUT_VALUE_DEFINITION;
    var kinds_31 = kinds.INTERFACE_TYPE_DEFINITION;
    var kinds_32 = kinds.UNION_TYPE_DEFINITION;
    var kinds_33 = kinds.ENUM_TYPE_DEFINITION;
    var kinds_34 = kinds.ENUM_VALUE_DEFINITION;
    var kinds_35 = kinds.INPUT_OBJECT_TYPE_DEFINITION;
    var kinds_36 = kinds.SCALAR_TYPE_EXTENSION;
    var kinds_37 = kinds.OBJECT_TYPE_EXTENSION;
    var kinds_38 = kinds.INTERFACE_TYPE_EXTENSION;
    var kinds_39 = kinds.UNION_TYPE_EXTENSION;
    var kinds_40 = kinds.ENUM_TYPE_EXTENSION;
    var kinds_41 = kinds.INPUT_OBJECT_TYPE_EXTENSION;
    var kinds_42 = kinds.DIRECTIVE_DEFINITION;

    var directiveLocation = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    /**
     * The set of allowed directive location values.
     */
    var DirectiveLocation = exports.DirectiveLocation = {
      // Request Definitions
      QUERY: 'QUERY',
      MUTATION: 'MUTATION',
      SUBSCRIPTION: 'SUBSCRIPTION',
      FIELD: 'FIELD',
      FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
      FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
      INLINE_FRAGMENT: 'INLINE_FRAGMENT',
      // Type System Definitions
      SCHEMA: 'SCHEMA',
      SCALAR: 'SCALAR',
      OBJECT: 'OBJECT',
      FIELD_DEFINITION: 'FIELD_DEFINITION',
      ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
      INTERFACE: 'INTERFACE',
      UNION: 'UNION',
      ENUM: 'ENUM',
      ENUM_VALUE: 'ENUM_VALUE',
      INPUT_OBJECT: 'INPUT_OBJECT',
      INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
    };

    /**
     * The enum type representing the directive location values.
     */
    });

    unwrapExports(directiveLocation);
    var directiveLocation_1 = directiveLocation.DirectiveLocation;

    var parser = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parse = parse;
    exports.parseValue = parseValue;
    exports.parseType = parseType;
    exports.parseConstValue = parseConstValue;
    exports.parseTypeReference = parseTypeReference;
    exports.parseNamedType = parseNamedType;











    /**
     * Given a GraphQL source, parses it into a Document.
     * Throws GraphQLError if a syntax error is encountered.
     */


    /**
     * Configuration options to control parser behavior
     */
    function parse(source$$1, options) {
      var sourceObj = typeof source$$1 === 'string' ? new source.Source(source$$1) : source$$1;
      if (!(sourceObj instanceof source.Source)) {
        throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
      }
      var lexer$$1 = (0, lexer.createLexer)(sourceObj, options || {});
      return parseDocument(lexer$$1);
    }

    /**
     * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
     * that value.
     * Throws GraphQLError if a syntax error is encountered.
     *
     * This is useful within tools that operate upon GraphQL Values directly and
     * in isolation of complete GraphQL documents.
     *
     * Consider providing the results to the utility function: valueFromAST().
     */
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function parseValue(source$$1, options) {
      var sourceObj = typeof source$$1 === 'string' ? new source.Source(source$$1) : source$$1;
      var lexer$$1 = (0, lexer.createLexer)(sourceObj, options || {});
      expect(lexer$$1, lexer.TokenKind.SOF);
      var value = parseValueLiteral(lexer$$1, false);
      expect(lexer$$1, lexer.TokenKind.EOF);
      return value;
    }

    /**
     * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
     * that type.
     * Throws GraphQLError if a syntax error is encountered.
     *
     * This is useful within tools that operate upon GraphQL Types directly and
     * in isolation of complete GraphQL documents.
     *
     * Consider providing the results to the utility function: typeFromAST().
     */
    function parseType(source$$1, options) {
      var sourceObj = typeof source$$1 === 'string' ? new source.Source(source$$1) : source$$1;
      var lexer$$1 = (0, lexer.createLexer)(sourceObj, options || {});
      expect(lexer$$1, lexer.TokenKind.SOF);
      var type = parseTypeReference(lexer$$1);
      expect(lexer$$1, lexer.TokenKind.EOF);
      return type;
    }

    /**
     * Converts a name lex token into a name parse node.
     */
    function parseName(lexer$$1) {
      var token = expect(lexer$$1, lexer.TokenKind.NAME);
      return {
        kind: kinds.NAME,
        value: token.value,
        loc: loc(lexer$$1, token)
      };
    }

    // Implements the parsing rules in the Document section.

    /**
     * Document : Definition+
     */
    function parseDocument(lexer$$1) {
      var start = lexer$$1.token;
      expect(lexer$$1, lexer.TokenKind.SOF);
      var definitions = [];
      do {
        definitions.push(parseDefinition(lexer$$1));
      } while (!skip(lexer$$1, lexer.TokenKind.EOF));

      return {
        kind: kinds.DOCUMENT,
        definitions: definitions,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * Definition :
     *   - ExecutableDefinition
     *   - TypeSystemDefinition
     */
    function parseDefinition(lexer$$1) {
      if (peek(lexer$$1, lexer.TokenKind.NAME)) {
        switch (lexer$$1.token.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
          case 'fragment':
            return parseExecutableDefinition(lexer$$1);
          case 'schema':
          case 'scalar':
          case 'type':
          case 'interface':
          case 'union':
          case 'enum':
          case 'input':
          case 'extend':
          case 'directive':
            // Note: The schema definition language is an experimental addition.
            return parseTypeSystemDefinition(lexer$$1);
        }
      } else if (peek(lexer$$1, lexer.TokenKind.BRACE_L)) {
        return parseExecutableDefinition(lexer$$1);
      } else if (peekDescription(lexer$$1)) {
        // Note: The schema definition language is an experimental addition.
        return parseTypeSystemDefinition(lexer$$1);
      }

      throw unexpected(lexer$$1);
    }

    /**
     * ExecutableDefinition :
     *   - OperationDefinition
     *   - FragmentDefinition
     */
    function parseExecutableDefinition(lexer$$1) {
      if (peek(lexer$$1, lexer.TokenKind.NAME)) {
        switch (lexer$$1.token.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return parseOperationDefinition(lexer$$1);

          case 'fragment':
            return parseFragmentDefinition(lexer$$1);
        }
      } else if (peek(lexer$$1, lexer.TokenKind.BRACE_L)) {
        return parseOperationDefinition(lexer$$1);
      }

      throw unexpected(lexer$$1);
    }

    // Implements the parsing rules in the Operations section.

    /**
     * OperationDefinition :
     *  - SelectionSet
     *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
     */
    function parseOperationDefinition(lexer$$1) {
      var start = lexer$$1.token;
      if (peek(lexer$$1, lexer.TokenKind.BRACE_L)) {
        return {
          kind: kinds.OPERATION_DEFINITION,
          operation: 'query',
          name: undefined,
          variableDefinitions: [],
          directives: [],
          selectionSet: parseSelectionSet(lexer$$1),
          loc: loc(lexer$$1, start)
        };
      }
      var operation = parseOperationType(lexer$$1);
      var name = void 0;
      if (peek(lexer$$1, lexer.TokenKind.NAME)) {
        name = parseName(lexer$$1);
      }
      return {
        kind: kinds.OPERATION_DEFINITION,
        operation: operation,
        name: name,
        variableDefinitions: parseVariableDefinitions(lexer$$1),
        directives: parseDirectives(lexer$$1, false),
        selectionSet: parseSelectionSet(lexer$$1),
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * OperationType : one of query mutation subscription
     */
    function parseOperationType(lexer$$1) {
      var operationToken = expect(lexer$$1, lexer.TokenKind.NAME);
      switch (operationToken.value) {
        case 'query':
          return 'query';
        case 'mutation':
          return 'mutation';
        case 'subscription':
          return 'subscription';
      }

      throw unexpected(lexer$$1, operationToken);
    }

    /**
     * VariableDefinitions : ( VariableDefinition+ )
     */
    function parseVariableDefinitions(lexer$$1) {
      return peek(lexer$$1, lexer.TokenKind.PAREN_L) ? many(lexer$$1, lexer.TokenKind.PAREN_L, parseVariableDefinition, lexer.TokenKind.PAREN_R) : [];
    }

    /**
     * VariableDefinition : Variable : Type DefaultValue?
     */
    function parseVariableDefinition(lexer$$1) {
      var start = lexer$$1.token;
      return {
        kind: kinds.VARIABLE_DEFINITION,
        variable: parseVariable(lexer$$1),
        type: (expect(lexer$$1, lexer.TokenKind.COLON), parseTypeReference(lexer$$1)),
        defaultValue: skip(lexer$$1, lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer$$1, true) : undefined,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * Variable : $ Name
     */
    function parseVariable(lexer$$1) {
      var start = lexer$$1.token;
      expect(lexer$$1, lexer.TokenKind.DOLLAR);
      return {
        kind: kinds.VARIABLE,
        name: parseName(lexer$$1),
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * SelectionSet : { Selection+ }
     */
    function parseSelectionSet(lexer$$1) {
      var start = lexer$$1.token;
      return {
        kind: kinds.SELECTION_SET,
        selections: many(lexer$$1, lexer.TokenKind.BRACE_L, parseSelection, lexer.TokenKind.BRACE_R),
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * Selection :
     *   - Field
     *   - FragmentSpread
     *   - InlineFragment
     */
    function parseSelection(lexer$$1) {
      return peek(lexer$$1, lexer.TokenKind.SPREAD) ? parseFragment(lexer$$1) : parseField(lexer$$1);
    }

    /**
     * Field : Alias? Name Arguments? Directives? SelectionSet?
     *
     * Alias : Name :
     */
    function parseField(lexer$$1) {
      var start = lexer$$1.token;

      var nameOrAlias = parseName(lexer$$1);
      var alias = void 0;
      var name = void 0;
      if (skip(lexer$$1, lexer.TokenKind.COLON)) {
        alias = nameOrAlias;
        name = parseName(lexer$$1);
      } else {
        name = nameOrAlias;
      }

      return {
        kind: kinds.FIELD,
        alias: alias,
        name: name,
        arguments: parseArguments(lexer$$1, false),
        directives: parseDirectives(lexer$$1, false),
        selectionSet: peek(lexer$$1, lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer$$1) : undefined,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * Arguments[Const] : ( Argument[?Const]+ )
     */
    function parseArguments(lexer$$1, isConst) {
      var item = isConst ? parseConstArgument : parseArgument;
      return peek(lexer$$1, lexer.TokenKind.PAREN_L) ? many(lexer$$1, lexer.TokenKind.PAREN_L, item, lexer.TokenKind.PAREN_R) : [];
    }

    /**
     * Argument[Const] : Name : Value[?Const]
     */
    function parseArgument(lexer$$1) {
      var start = lexer$$1.token;
      return {
        kind: kinds.ARGUMENT,
        name: parseName(lexer$$1),
        value: (expect(lexer$$1, lexer.TokenKind.COLON), parseValueLiteral(lexer$$1, false)),
        loc: loc(lexer$$1, start)
      };
    }

    function parseConstArgument(lexer$$1) {
      var start = lexer$$1.token;
      return {
        kind: kinds.ARGUMENT,
        name: parseName(lexer$$1),
        value: (expect(lexer$$1, lexer.TokenKind.COLON), parseConstValue(lexer$$1)),
        loc: loc(lexer$$1, start)
      };
    }

    // Implements the parsing rules in the Fragments section.

    /**
     * Corresponds to both FragmentSpread and InlineFragment in the spec.
     *
     * FragmentSpread : ... FragmentName Directives?
     *
     * InlineFragment : ... TypeCondition? Directives? SelectionSet
     */
    function parseFragment(lexer$$1) {
      var start = lexer$$1.token;
      expect(lexer$$1, lexer.TokenKind.SPREAD);
      if (peek(lexer$$1, lexer.TokenKind.NAME) && lexer$$1.token.value !== 'on') {
        return {
          kind: kinds.FRAGMENT_SPREAD,
          name: parseFragmentName(lexer$$1),
          directives: parseDirectives(lexer$$1, false),
          loc: loc(lexer$$1, start)
        };
      }
      var typeCondition = void 0;
      if (lexer$$1.token.value === 'on') {
        lexer$$1.advance();
        typeCondition = parseNamedType(lexer$$1);
      }
      return {
        kind: kinds.INLINE_FRAGMENT,
        typeCondition: typeCondition,
        directives: parseDirectives(lexer$$1, false),
        selectionSet: parseSelectionSet(lexer$$1),
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * FragmentDefinition :
     *   - fragment FragmentName on TypeCondition Directives? SelectionSet
     *
     * TypeCondition : NamedType
     */
    function parseFragmentDefinition(lexer$$1) {
      var start = lexer$$1.token;
      expectKeyword(lexer$$1, 'fragment');
      // Experimental support for defining variables within fragments changes
      // the grammar of FragmentDefinition:
      //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
      if (lexer$$1.options.experimentalFragmentVariables) {
        return {
          kind: kinds.FRAGMENT_DEFINITION,
          name: parseFragmentName(lexer$$1),
          variableDefinitions: parseVariableDefinitions(lexer$$1),
          typeCondition: (expectKeyword(lexer$$1, 'on'), parseNamedType(lexer$$1)),
          directives: parseDirectives(lexer$$1, false),
          selectionSet: parseSelectionSet(lexer$$1),
          loc: loc(lexer$$1, start)
        };
      }
      return {
        kind: kinds.FRAGMENT_DEFINITION,
        name: parseFragmentName(lexer$$1),
        typeCondition: (expectKeyword(lexer$$1, 'on'), parseNamedType(lexer$$1)),
        directives: parseDirectives(lexer$$1, false),
        selectionSet: parseSelectionSet(lexer$$1),
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * FragmentName : Name but not `on`
     */
    function parseFragmentName(lexer$$1) {
      if (lexer$$1.token.value === 'on') {
        throw unexpected(lexer$$1);
      }
      return parseName(lexer$$1);
    }

    // Implements the parsing rules in the Values section.

    /**
     * Value[Const] :
     *   - [~Const] Variable
     *   - IntValue
     *   - FloatValue
     *   - StringValue
     *   - BooleanValue
     *   - NullValue
     *   - EnumValue
     *   - ListValue[?Const]
     *   - ObjectValue[?Const]
     *
     * BooleanValue : one of `true` `false`
     *
     * NullValue : `null`
     *
     * EnumValue : Name but not `true`, `false` or `null`
     */
    function parseValueLiteral(lexer$$1, isConst) {
      var token = lexer$$1.token;
      switch (token.kind) {
        case lexer.TokenKind.BRACKET_L:
          return parseList(lexer$$1, isConst);
        case lexer.TokenKind.BRACE_L:
          return parseObject(lexer$$1, isConst);
        case lexer.TokenKind.INT:
          lexer$$1.advance();
          return {
            kind: kinds.INT,
            value: token.value,
            loc: loc(lexer$$1, token)
          };
        case lexer.TokenKind.FLOAT:
          lexer$$1.advance();
          return {
            kind: kinds.FLOAT,
            value: token.value,
            loc: loc(lexer$$1, token)
          };
        case lexer.TokenKind.STRING:
        case lexer.TokenKind.BLOCK_STRING:
          return parseStringLiteral(lexer$$1);
        case lexer.TokenKind.NAME:
          if (token.value === 'true' || token.value === 'false') {
            lexer$$1.advance();
            return {
              kind: kinds.BOOLEAN,
              value: token.value === 'true',
              loc: loc(lexer$$1, token)
            };
          } else if (token.value === 'null') {
            lexer$$1.advance();
            return {
              kind: kinds.NULL,
              loc: loc(lexer$$1, token)
            };
          }
          lexer$$1.advance();
          return {
            kind: kinds.ENUM,
            value: token.value,
            loc: loc(lexer$$1, token)
          };
        case lexer.TokenKind.DOLLAR:
          if (!isConst) {
            return parseVariable(lexer$$1);
          }
          break;
      }
      throw unexpected(lexer$$1);
    }

    function parseStringLiteral(lexer$$1) {
      var token = lexer$$1.token;
      lexer$$1.advance();
      return {
        kind: kinds.STRING,
        value: token.value,
        block: token.kind === lexer.TokenKind.BLOCK_STRING,
        loc: loc(lexer$$1, token)
      };
    }

    function parseConstValue(lexer$$1) {
      return parseValueLiteral(lexer$$1, true);
    }

    function parseValueValue(lexer$$1) {
      return parseValueLiteral(lexer$$1, false);
    }

    /**
     * ListValue[Const] :
     *   - [ ]
     *   - [ Value[?Const]+ ]
     */
    function parseList(lexer$$1, isConst) {
      var start = lexer$$1.token;
      var item = isConst ? parseConstValue : parseValueValue;
      return {
        kind: kinds.LIST,
        values: any(lexer$$1, lexer.TokenKind.BRACKET_L, item, lexer.TokenKind.BRACKET_R),
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * ObjectValue[Const] :
     *   - { }
     *   - { ObjectField[?Const]+ }
     */
    function parseObject(lexer$$1, isConst) {
      var start = lexer$$1.token;
      expect(lexer$$1, lexer.TokenKind.BRACE_L);
      var fields = [];
      while (!skip(lexer$$1, lexer.TokenKind.BRACE_R)) {
        fields.push(parseObjectField(lexer$$1, isConst));
      }
      return {
        kind: kinds.OBJECT,
        fields: fields,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * ObjectField[Const] : Name : Value[?Const]
     */
    function parseObjectField(lexer$$1, isConst) {
      var start = lexer$$1.token;
      return {
        kind: kinds.OBJECT_FIELD,
        name: parseName(lexer$$1),
        value: (expect(lexer$$1, lexer.TokenKind.COLON), parseValueLiteral(lexer$$1, isConst)),
        loc: loc(lexer$$1, start)
      };
    }

    // Implements the parsing rules in the Directives section.

    /**
     * Directives[Const] : Directive[?Const]+
     */
    function parseDirectives(lexer$$1, isConst) {
      var directives = [];
      while (peek(lexer$$1, lexer.TokenKind.AT)) {
        directives.push(parseDirective(lexer$$1, isConst));
      }
      return directives;
    }

    /**
     * Directive[Const] : @ Name Arguments[?Const]?
     */
    function parseDirective(lexer$$1, isConst) {
      var start = lexer$$1.token;
      expect(lexer$$1, lexer.TokenKind.AT);
      return {
        kind: kinds.DIRECTIVE,
        name: parseName(lexer$$1),
        arguments: parseArguments(lexer$$1, isConst),
        loc: loc(lexer$$1, start)
      };
    }

    // Implements the parsing rules in the Types section.

    /**
     * Type :
     *   - NamedType
     *   - ListType
     *   - NonNullType
     */
    function parseTypeReference(lexer$$1) {
      var start = lexer$$1.token;
      var type = void 0;
      if (skip(lexer$$1, lexer.TokenKind.BRACKET_L)) {
        type = parseTypeReference(lexer$$1);
        expect(lexer$$1, lexer.TokenKind.BRACKET_R);
        type = {
          kind: kinds.LIST_TYPE,
          type: type,
          loc: loc(lexer$$1, start)
        };
      } else {
        type = parseNamedType(lexer$$1);
      }
      if (skip(lexer$$1, lexer.TokenKind.BANG)) {
        return {
          kind: kinds.NON_NULL_TYPE,
          type: type,
          loc: loc(lexer$$1, start)
        };
      }
      return type;
    }

    /**
     * NamedType : Name
     */
    function parseNamedType(lexer$$1) {
      var start = lexer$$1.token;
      return {
        kind: kinds.NAMED_TYPE,
        name: parseName(lexer$$1),
        loc: loc(lexer$$1, start)
      };
    }

    // Implements the parsing rules in the Type Definition section.

    /**
     * TypeSystemDefinition :
     *   - SchemaDefinition
     *   - TypeDefinition
     *   - TypeExtension
     *   - DirectiveDefinition
     *
     * TypeDefinition :
     *   - ScalarTypeDefinition
     *   - ObjectTypeDefinition
     *   - InterfaceTypeDefinition
     *   - UnionTypeDefinition
     *   - EnumTypeDefinition
     *   - InputObjectTypeDefinition
     */
    function parseTypeSystemDefinition(lexer$$1) {
      // Many definitions begin with a description and require a lookahead.
      var keywordToken = peekDescription(lexer$$1) ? lexer$$1.lookahead() : lexer$$1.token;

      if (keywordToken.kind === lexer.TokenKind.NAME) {
        switch (keywordToken.value) {
          case 'schema':
            return parseSchemaDefinition(lexer$$1);
          case 'scalar':
            return parseScalarTypeDefinition(lexer$$1);
          case 'type':
            return parseObjectTypeDefinition(lexer$$1);
          case 'interface':
            return parseInterfaceTypeDefinition(lexer$$1);
          case 'union':
            return parseUnionTypeDefinition(lexer$$1);
          case 'enum':
            return parseEnumTypeDefinition(lexer$$1);
          case 'input':
            return parseInputObjectTypeDefinition(lexer$$1);
          case 'extend':
            return parseTypeExtension(lexer$$1);
          case 'directive':
            return parseDirectiveDefinition(lexer$$1);
        }
      }

      throw unexpected(lexer$$1, keywordToken);
    }

    function peekDescription(lexer$$1) {
      return peek(lexer$$1, lexer.TokenKind.STRING) || peek(lexer$$1, lexer.TokenKind.BLOCK_STRING);
    }

    /**
     * Description : StringValue
     */
    function parseDescription(lexer$$1) {
      if (peekDescription(lexer$$1)) {
        return parseStringLiteral(lexer$$1);
      }
    }

    /**
     * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
     */
    function parseSchemaDefinition(lexer$$1) {
      var start = lexer$$1.token;
      expectKeyword(lexer$$1, 'schema');
      var directives = parseDirectives(lexer$$1, true);
      var operationTypes = many(lexer$$1, lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, lexer.TokenKind.BRACE_R);
      return {
        kind: kinds.SCHEMA_DEFINITION,
        directives: directives,
        operationTypes: operationTypes,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * OperationTypeDefinition : OperationType : NamedType
     */
    function parseOperationTypeDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var operation = parseOperationType(lexer$$1);
      expect(lexer$$1, lexer.TokenKind.COLON);
      var type = parseNamedType(lexer$$1);
      return {
        kind: kinds.OPERATION_TYPE_DEFINITION,
        operation: operation,
        type: type,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
     */
    function parseScalarTypeDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      expectKeyword(lexer$$1, 'scalar');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      return {
        kind: kinds.SCALAR_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * ObjectTypeDefinition :
     *   Description?
     *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
     */
    function parseObjectTypeDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      expectKeyword(lexer$$1, 'type');
      var name = parseName(lexer$$1);
      var interfaces = parseImplementsInterfaces(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var fields = parseFieldsDefinition(lexer$$1);
      return {
        kind: kinds.OBJECT_TYPE_DEFINITION,
        description: description,
        name: name,
        interfaces: interfaces,
        directives: directives,
        fields: fields,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * ImplementsInterfaces : implements NamedType+
     */
    function parseImplementsInterfaces(lexer$$1) {
      var types = [];
      if (lexer$$1.token.value === 'implements') {
        lexer$$1.advance();
        do {
          types.push(parseNamedType(lexer$$1));
        } while (peek(lexer$$1, lexer.TokenKind.NAME));
      }
      return types;
    }

    /**
     * FieldsDefinition : { FieldDefinition+ }
     */
    function parseFieldsDefinition(lexer$$1) {
      return peek(lexer$$1, lexer.TokenKind.BRACE_L) ? many(lexer$$1, lexer.TokenKind.BRACE_L, parseFieldDefinition, lexer.TokenKind.BRACE_R) : [];
    }

    /**
     * FieldDefinition :
     *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
     */
    function parseFieldDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      var name = parseName(lexer$$1);
      var args = parseArgumentDefs(lexer$$1);
      expect(lexer$$1, lexer.TokenKind.COLON);
      var type = parseTypeReference(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      return {
        kind: kinds.FIELD_DEFINITION,
        description: description,
        name: name,
        arguments: args,
        type: type,
        directives: directives,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * ArgumentsDefinition : ( InputValueDefinition+ )
     */
    function parseArgumentDefs(lexer$$1) {
      if (!peek(lexer$$1, lexer.TokenKind.PAREN_L)) {
        return [];
      }
      return many(lexer$$1, lexer.TokenKind.PAREN_L, parseInputValueDef, lexer.TokenKind.PAREN_R);
    }

    /**
     * InputValueDefinition :
     *   - Description? Name : Type DefaultValue? Directives[Const]?
     */
    function parseInputValueDef(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      var name = parseName(lexer$$1);
      expect(lexer$$1, lexer.TokenKind.COLON);
      var type = parseTypeReference(lexer$$1);
      var defaultValue = void 0;
      if (skip(lexer$$1, lexer.TokenKind.EQUALS)) {
        defaultValue = parseConstValue(lexer$$1);
      }
      var directives = parseDirectives(lexer$$1, true);
      return {
        kind: kinds.INPUT_VALUE_DEFINITION,
        description: description,
        name: name,
        type: type,
        defaultValue: defaultValue,
        directives: directives,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * InterfaceTypeDefinition :
     *   - Description? interface Name Directives[Const]? FieldsDefinition?
     */
    function parseInterfaceTypeDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      expectKeyword(lexer$$1, 'interface');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var fields = parseFieldsDefinition(lexer$$1);
      return {
        kind: kinds.INTERFACE_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        fields: fields,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * UnionTypeDefinition :
     *   - Description? union Name Directives[Const]? MemberTypesDefinition?
     */
    function parseUnionTypeDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      expectKeyword(lexer$$1, 'union');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var types = parseMemberTypesDefinition(lexer$$1);
      return {
        kind: kinds.UNION_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        types: types,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * MemberTypesDefinition : = MemberTypes
     *
     * MemberTypes :
     *   - `|`? NamedType
     *   - MemberTypes | NamedType
     */
    function parseMemberTypesDefinition(lexer$$1) {
      var types = [];
      if (skip(lexer$$1, lexer.TokenKind.EQUALS)) {
        // Optional leading pipe
        skip(lexer$$1, lexer.TokenKind.PIPE);
        do {
          types.push(parseNamedType(lexer$$1));
        } while (skip(lexer$$1, lexer.TokenKind.PIPE));
      }
      return types;
    }

    /**
     * EnumTypeDefinition :
     *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
     */
    function parseEnumTypeDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      expectKeyword(lexer$$1, 'enum');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var values = parseEnumValuesDefinition(lexer$$1);
      return {
        kind: kinds.ENUM_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        values: values,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * EnumValuesDefinition : { EnumValueDefinition+ }
     */
    function parseEnumValuesDefinition(lexer$$1) {
      return peek(lexer$$1, lexer.TokenKind.BRACE_L) ? many(lexer$$1, lexer.TokenKind.BRACE_L, parseEnumValueDefinition, lexer.TokenKind.BRACE_R) : [];
    }

    /**
     * EnumValueDefinition : Description? EnumValue Directives[Const]?
     *
     * EnumValue : Name
     */
    function parseEnumValueDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      return {
        kind: kinds.ENUM_VALUE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * InputObjectTypeDefinition :
     *   - Description? input Name Directives[Const]? InputFieldsDefinition?
     */
    function parseInputObjectTypeDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      expectKeyword(lexer$$1, 'input');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var fields = parseInputFieldsDefinition(lexer$$1);
      return {
        kind: kinds.INPUT_OBJECT_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        fields: fields,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * InputFieldsDefinition : { InputValueDefinition+ }
     */
    function parseInputFieldsDefinition(lexer$$1) {
      return peek(lexer$$1, lexer.TokenKind.BRACE_L) ? many(lexer$$1, lexer.TokenKind.BRACE_L, parseInputValueDef, lexer.TokenKind.BRACE_R) : [];
    }

    /**
     * TypeExtension :
     *   - ScalarTypeExtension
     *   - ObjectTypeExtension
     *   - InterfaceTypeExtension
     *   - UnionTypeExtension
     *   - EnumTypeExtension
     *   - InputObjectTypeDefinition
     */
    function parseTypeExtension(lexer$$1) {
      var keywordToken = lexer$$1.lookahead();

      if (keywordToken.kind === lexer.TokenKind.NAME) {
        switch (keywordToken.value) {
          case 'scalar':
            return parseScalarTypeExtension(lexer$$1);
          case 'type':
            return parseObjectTypeExtension(lexer$$1);
          case 'interface':
            return parseInterfaceTypeExtension(lexer$$1);
          case 'union':
            return parseUnionTypeExtension(lexer$$1);
          case 'enum':
            return parseEnumTypeExtension(lexer$$1);
          case 'input':
            return parseInputObjectTypeExtension(lexer$$1);
        }
      }

      throw unexpected(lexer$$1, keywordToken);
    }

    /**
     * ScalarTypeExtension :
     *   - extend scalar Name Directives[Const]
     */
    function parseScalarTypeExtension(lexer$$1) {
      var start = lexer$$1.token;
      expectKeyword(lexer$$1, 'extend');
      expectKeyword(lexer$$1, 'scalar');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      if (directives.length === 0) {
        throw unexpected(lexer$$1);
      }
      return {
        kind: kinds.SCALAR_TYPE_EXTENSION,
        name: name,
        directives: directives,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * ObjectTypeExtension :
     *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend type Name ImplementsInterfaces? Directives[Const]
     *  - extend type Name ImplementsInterfaces
     */
    function parseObjectTypeExtension(lexer$$1) {
      var start = lexer$$1.token;
      expectKeyword(lexer$$1, 'extend');
      expectKeyword(lexer$$1, 'type');
      var name = parseName(lexer$$1);
      var interfaces = parseImplementsInterfaces(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var fields = parseFieldsDefinition(lexer$$1);
      if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
        throw unexpected(lexer$$1);
      }
      return {
        kind: kinds.OBJECT_TYPE_EXTENSION,
        name: name,
        interfaces: interfaces,
        directives: directives,
        fields: fields,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * InterfaceTypeExtension :
     *   - extend interface Name Directives[Const]? FieldsDefinition
     *   - extend interface Name Directives[Const]
     */
    function parseInterfaceTypeExtension(lexer$$1) {
      var start = lexer$$1.token;
      expectKeyword(lexer$$1, 'extend');
      expectKeyword(lexer$$1, 'interface');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var fields = parseFieldsDefinition(lexer$$1);
      if (directives.length === 0 && fields.length === 0) {
        throw unexpected(lexer$$1);
      }
      return {
        kind: kinds.INTERFACE_TYPE_EXTENSION,
        name: name,
        directives: directives,
        fields: fields,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * UnionTypeExtension :
     *   - extend union Name Directives[Const]? MemberTypesDefinition
     *   - extend union Name Directives[Const]
     */
    function parseUnionTypeExtension(lexer$$1) {
      var start = lexer$$1.token;
      expectKeyword(lexer$$1, 'extend');
      expectKeyword(lexer$$1, 'union');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var types = parseMemberTypesDefinition(lexer$$1);
      if (directives.length === 0 && types.length === 0) {
        throw unexpected(lexer$$1);
      }
      return {
        kind: kinds.UNION_TYPE_EXTENSION,
        name: name,
        directives: directives,
        types: types,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * EnumTypeExtension :
     *   - extend enum Name Directives[Const]? EnumValuesDefinition
     *   - extend enum Name Directives[Const]
     */
    function parseEnumTypeExtension(lexer$$1) {
      var start = lexer$$1.token;
      expectKeyword(lexer$$1, 'extend');
      expectKeyword(lexer$$1, 'enum');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var values = parseEnumValuesDefinition(lexer$$1);
      if (directives.length === 0 && values.length === 0) {
        throw unexpected(lexer$$1);
      }
      return {
        kind: kinds.ENUM_TYPE_EXTENSION,
        name: name,
        directives: directives,
        values: values,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * InputObjectTypeExtension :
     *   - extend input Name Directives[Const]? InputFieldsDefinition
     *   - extend input Name Directives[Const]
     */
    function parseInputObjectTypeExtension(lexer$$1) {
      var start = lexer$$1.token;
      expectKeyword(lexer$$1, 'extend');
      expectKeyword(lexer$$1, 'input');
      var name = parseName(lexer$$1);
      var directives = parseDirectives(lexer$$1, true);
      var fields = parseInputFieldsDefinition(lexer$$1);
      if (directives.length === 0 && fields.length === 0) {
        throw unexpected(lexer$$1);
      }
      return {
        kind: kinds.INPUT_OBJECT_TYPE_EXTENSION,
        name: name,
        directives: directives,
        fields: fields,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * DirectiveDefinition :
     *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
     */
    function parseDirectiveDefinition(lexer$$1) {
      var start = lexer$$1.token;
      var description = parseDescription(lexer$$1);
      expectKeyword(lexer$$1, 'directive');
      expect(lexer$$1, lexer.TokenKind.AT);
      var name = parseName(lexer$$1);
      var args = parseArgumentDefs(lexer$$1);
      expectKeyword(lexer$$1, 'on');
      var locations = parseDirectiveLocations(lexer$$1);
      return {
        kind: kinds.DIRECTIVE_DEFINITION,
        description: description,
        name: name,
        arguments: args,
        locations: locations,
        loc: loc(lexer$$1, start)
      };
    }

    /**
     * DirectiveLocations :
     *   - `|`? DirectiveLocation
     *   - DirectiveLocations | DirectiveLocation
     */
    function parseDirectiveLocations(lexer$$1) {
      // Optional leading pipe
      skip(lexer$$1, lexer.TokenKind.PIPE);
      var locations = [];
      do {
        locations.push(parseDirectiveLocation(lexer$$1));
      } while (skip(lexer$$1, lexer.TokenKind.PIPE));
      return locations;
    }

    /*
     * DirectiveLocation :
     *   - ExecutableDirectiveLocation
     *   - TypeSystemDirectiveLocation
     *
     * ExecutableDirectiveLocation : one of
     *   `QUERY`
     *   `MUTATION`
     *   `SUBSCRIPTION`
     *   `FIELD`
     *   `FRAGMENT_DEFINITION`
     *   `FRAGMENT_SPREAD`
     *   `INLINE_FRAGMENT`
     *
     * TypeSystemDirectiveLocation : one of
     *   `SCHEMA`
     *   `SCALAR`
     *   `OBJECT`
     *   `FIELD_DEFINITION`
     *   `ARGUMENT_DEFINITION`
     *   `INTERFACE`
     *   `UNION`
     *   `ENUM`
     *   `ENUM_VALUE`
     *   `INPUT_OBJECT`
     *   `INPUT_FIELD_DEFINITION`
     */
    function parseDirectiveLocation(lexer$$1) {
      var start = lexer$$1.token;
      var name = parseName(lexer$$1);
      if (directiveLocation.DirectiveLocation.hasOwnProperty(name.value)) {
        return name;
      }
      throw unexpected(lexer$$1, start);
    }

    // Core parsing utility functions

    /**
     * Returns a location object, used to identify the place in
     * the source that created a given parsed object.
     */
    function loc(lexer$$1, startToken) {
      if (!lexer$$1.options.noLocation) {
        return new Loc(startToken, lexer$$1.lastToken, lexer$$1.source);
      }
    }

    function Loc(startToken, endToken, source$$1) {
      this.start = startToken.start;
      this.end = endToken.end;
      this.startToken = startToken;
      this.endToken = endToken;
      this.source = source$$1;
    }

    // Print a simplified form when appearing in JSON/util.inspect.
    Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
      return { start: this.start, end: this.end };
    };

    /**
     * Determines if the next token is of a given kind
     */
    function peek(lexer$$1, kind) {
      return lexer$$1.token.kind === kind;
    }

    /**
     * If the next token is of the given kind, return true after advancing
     * the lexer. Otherwise, do not change the parser state and return false.
     */
    function skip(lexer$$1, kind) {
      var match = lexer$$1.token.kind === kind;
      if (match) {
        lexer$$1.advance();
      }
      return match;
    }

    /**
     * If the next token is of the given kind, return that token after advancing
     * the lexer. Otherwise, do not change the parser state and throw an error.
     */
    function expect(lexer$$1, kind) {
      var token = lexer$$1.token;
      if (token.kind === kind) {
        lexer$$1.advance();
        return token;
      }
      throw (0, error.syntaxError)(lexer$$1.source, token.start, 'Expected ' + kind + ', found ' + (0, lexer.getTokenDesc)(token));
    }

    /**
     * If the next token is a keyword with the given value, return that token after
     * advancing the lexer. Otherwise, do not change the parser state and return
     * false.
     */
    function expectKeyword(lexer$$1, value) {
      var token = lexer$$1.token;
      if (token.kind === lexer.TokenKind.NAME && token.value === value) {
        lexer$$1.advance();
        return token;
      }
      throw (0, error.syntaxError)(lexer$$1.source, token.start, 'Expected "' + value + '", found ' + (0, lexer.getTokenDesc)(token));
    }

    /**
     * Helper function for creating an error when an unexpected lexed token
     * is encountered.
     */
    function unexpected(lexer$$1, atToken) {
      var token = atToken || lexer$$1.token;
      return (0, error.syntaxError)(lexer$$1.source, token.start, 'Unexpected ' + (0, lexer.getTokenDesc)(token));
    }

    /**
     * Returns a possibly empty list of parse nodes, determined by
     * the parseFn. This list begins with a lex token of openKind
     * and ends with a lex token of closeKind. Advances the parser
     * to the next lex token after the closing token.
     */
    function any(lexer$$1, openKind, parseFn, closeKind) {
      expect(lexer$$1, openKind);
      var nodes = [];
      while (!skip(lexer$$1, closeKind)) {
        nodes.push(parseFn(lexer$$1));
      }
      return nodes;
    }

    /**
     * Returns a non-empty list of parse nodes, determined by
     * the parseFn. This list begins with a lex token of openKind
     * and ends with a lex token of closeKind. Advances the parser
     * to the next lex token after the closing token.
     */
    function many(lexer$$1, openKind, parseFn, closeKind) {
      expect(lexer$$1, openKind);
      var nodes = [parseFn(lexer$$1)];
      while (!skip(lexer$$1, closeKind)) {
        nodes.push(parseFn(lexer$$1));
      }
      return nodes;
    }
    });

    unwrapExports(parser);
    var parser_1 = parser.parse;
    var parser_2 = parser.parseValue;
    var parser_3 = parser.parseType;
    var parser_4 = parser.parseConstValue;
    var parser_5 = parser.parseTypeReference;
    var parser_6 = parser.parseNamedType;

    var visitor = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.visit = visit;
    exports.visitInParallel = visitInParallel;
    exports.visitWithTypeInfo = visitWithTypeInfo;
    exports.getVisitFn = getVisitFn;


    /**
     * A visitor is comprised of visit functions, which are called on each node
     * during the visitor's traversal.
     */


    /**
     * A visitor is provided to visit, it contains the collection of
     * relevant functions to be called during the visitor's traversal.
     */
    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    var QueryDocumentKeys = exports.QueryDocumentKeys = {
      Name: [],

      Document: ['definitions'],
      OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
      VariableDefinition: ['variable', 'type', 'defaultValue'],
      Variable: ['name'],
      SelectionSet: ['selections'],
      Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
      Argument: ['name', 'value'],

      FragmentSpread: ['name', 'directives'],
      InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
      FragmentDefinition: ['name',
      // Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],

      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ['values'],
      ObjectValue: ['fields'],
      ObjectField: ['name', 'value'],

      Directive: ['name', 'arguments'],

      NamedType: ['name'],
      ListType: ['type'],
      NonNullType: ['type'],

      SchemaDefinition: ['directives', 'operationTypes'],
      OperationTypeDefinition: ['type'],

      ScalarTypeDefinition: ['description', 'name', 'directives'],
      ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
      FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
      InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
      InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
      UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
      EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
      EnumValueDefinition: ['description', 'name', 'directives'],
      InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],

      ScalarTypeExtension: ['name', 'directives'],
      ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      InterfaceTypeExtension: ['name', 'directives', 'fields'],
      UnionTypeExtension: ['name', 'directives', 'types'],
      EnumTypeExtension: ['name', 'directives', 'values'],
      InputObjectTypeExtension: ['name', 'directives', 'fields'],

      DirectiveDefinition: ['description', 'name', 'arguments', 'locations']
    };

    /**
     * A KeyMap describes each the traversable properties of each kind of node.
     */
    var BREAK = exports.BREAK = {};

    /**
     * visit() will walk through an AST using a depth first traversal, calling
     * the visitor's enter function at each node in the traversal, and calling the
     * leave function after visiting that node and all of its child nodes.
     *
     * By returning different values from the enter and leave functions, the
     * behavior of the visitor can be altered, including skipping over a sub-tree of
     * the AST (by returning false), editing the AST by returning a value or null
     * to remove the value, or to stop the whole traversal by returning BREAK.
     *
     * When using visit() to edit an AST, the original AST will not be modified, and
     * a new version of the AST with the changes applied will be returned from the
     * visit function.
     *
     *     const editedAST = visit(ast, {
     *       enter(node, key, parent, path, ancestors) {
     *         // @return
     *         //   undefined: no action
     *         //   false: skip visiting this node
     *         //   visitor.BREAK: stop visiting altogether
     *         //   null: delete this node
     *         //   any value: replace this node with the returned value
     *       },
     *       leave(node, key, parent, path, ancestors) {
     *         // @return
     *         //   undefined: no action
     *         //   false: no action
     *         //   visitor.BREAK: stop visiting altogether
     *         //   null: delete this node
     *         //   any value: replace this node with the returned value
     *       }
     *     });
     *
     * Alternatively to providing enter() and leave() functions, a visitor can
     * instead provide functions named the same as the kinds of AST nodes, or
     * enter/leave visitors at a named key, leading to four permutations of
     * visitor API:
     *
     * 1) Named visitors triggered when entering a node a specific kind.
     *
     *     visit(ast, {
     *       Kind(node) {
     *         // enter the "Kind" node
     *       }
     *     })
     *
     * 2) Named visitors that trigger upon entering and leaving a node of
     *    a specific kind.
     *
     *     visit(ast, {
     *       Kind: {
     *         enter(node) {
     *           // enter the "Kind" node
     *         }
     *         leave(node) {
     *           // leave the "Kind" node
     *         }
     *       }
     *     })
     *
     * 3) Generic visitors that trigger upon entering and leaving any node.
     *
     *     visit(ast, {
     *       enter(node) {
     *         // enter any node
     *       },
     *       leave(node) {
     *         // leave any node
     *       }
     *     })
     *
     * 4) Parallel visitors for entering and leaving nodes of a specific kind.
     *
     *     visit(ast, {
     *       enter: {
     *         Kind(node) {
     *           // enter the "Kind" node
     *         }
     *       },
     *       leave: {
     *         Kind(node) {
     *           // leave the "Kind" node
     *         }
     *       }
     *     })
     */
    function visit(root, visitor) {
      var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

      /* eslint-disable no-undef-init */
      var stack = undefined;
      var inArray = Array.isArray(root);
      var keys = [root];
      var index = -1;
      var edits = [];
      var node = undefined;
      var key = undefined;
      var parent = undefined;
      var path = [];
      var ancestors = [];
      var newRoot = root;
      /* eslint-enable no-undef-init */

      do {
        index++;
        var isLeaving = index === keys.length;
        var isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
          key = ancestors.length === 0 ? undefined : path[path.length - 1];
          node = parent;
          parent = ancestors.pop();
          if (isEdited) {
            if (inArray) {
              node = node.slice();
            } else {
              var clone = {};
              for (var k in node) {
                if (node.hasOwnProperty(k)) {
                  clone[k] = node[k];
                }
              }
              node = clone;
            }
            var editOffset = 0;
            for (var ii = 0; ii < edits.length; ii++) {
              var editKey = edits[ii][0];
              var editValue = edits[ii][1];
              if (inArray) {
                editKey -= editOffset;
              }
              if (inArray && editValue === null) {
                node.splice(editKey, 1);
                editOffset++;
              } else {
                node[editKey] = editValue;
              }
            }
          }
          index = stack.index;
          keys = stack.keys;
          edits = stack.edits;
          inArray = stack.inArray;
          stack = stack.prev;
        } else {
          key = parent ? inArray ? index : keys[index] : undefined;
          node = parent ? parent[key] : newRoot;
          if (node === null || node === undefined) {
            continue;
          }
          if (parent) {
            path.push(key);
          }
        }

        var result = void 0;
        if (!Array.isArray(node)) {
          if (!isNode(node)) {
            throw new Error('Invalid AST Node: ' + JSON.stringify(node));
          }
          var visitFn = getVisitFn(visitor, node.kind, isLeaving);
          if (visitFn) {
            result = visitFn.call(visitor, node, key, parent, path, ancestors);

            if (result === BREAK) {
              break;
            }

            if (result === false) {
              if (!isLeaving) {
                path.pop();
                continue;
              }
            } else if (result !== undefined) {
              edits.push([key, result]);
              if (!isLeaving) {
                if (isNode(result)) {
                  node = result;
                } else {
                  path.pop();
                  continue;
                }
              }
            }
          }
        }

        if (result === undefined && isEdited) {
          edits.push([key, node]);
        }

        if (isLeaving) {
          path.pop();
        } else {
          stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
          inArray = Array.isArray(node);
          keys = inArray ? node : visitorKeys[node.kind] || [];
          index = -1;
          edits = [];
          if (parent) {
            ancestors.push(parent);
          }
          parent = node;
        }
      } while (stack !== undefined);

      if (edits.length !== 0) {
        newRoot = edits[edits.length - 1][1];
      }

      return newRoot;
    }

    function isNode(maybeNode) {
      return Boolean(maybeNode && typeof maybeNode.kind === 'string');
    }

    /**
     * Creates a new visitor instance which delegates to many visitors to run in
     * parallel. Each visitor will be visited for each node before moving on.
     *
     * If a prior visitor edits a node, no following visitors will see that node.
     */
    function visitInParallel(visitors) {
      var skipping = new Array(visitors.length);

      return {
        enter: function enter(node) {
          for (var i = 0; i < visitors.length; i++) {
            if (!skipping[i]) {
              var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
              if (fn) {
                var result = fn.apply(visitors[i], arguments);
                if (result === false) {
                  skipping[i] = node;
                } else if (result === BREAK) {
                  skipping[i] = BREAK;
                } else if (result !== undefined) {
                  return result;
                }
              }
            }
          }
        },
        leave: function leave(node) {
          for (var i = 0; i < visitors.length; i++) {
            if (!skipping[i]) {
              var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
              if (fn) {
                var result = fn.apply(visitors[i], arguments);
                if (result === BREAK) {
                  skipping[i] = BREAK;
                } else if (result !== undefined && result !== false) {
                  return result;
                }
              }
            } else if (skipping[i] === node) {
              skipping[i] = null;
            }
          }
        }
      };
    }

    /**
     * Creates a new visitor instance which maintains a provided TypeInfo instance
     * along with visiting visitor.
     */
    function visitWithTypeInfo(typeInfo, visitor) {
      return {
        enter: function enter(node) {
          typeInfo.enter(node);
          var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitor, arguments);
            if (result !== undefined) {
              typeInfo.leave(node);
              if (isNode(result)) {
                typeInfo.enter(result);
              }
            }
            return result;
          }
        },
        leave: function leave(node) {
          var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
          var result = void 0;
          if (fn) {
            result = fn.apply(visitor, arguments);
          }
          typeInfo.leave(node);
          return result;
        }
      };
    }

    /**
     * Given a visitor instance, if it is leaving or not, and a node kind, return
     * the function the visitor runtime should call.
     */
    function getVisitFn(visitor, kind, isLeaving) {
      var kindVisitor = visitor[kind];
      if (kindVisitor) {
        if (!isLeaving && typeof kindVisitor === 'function') {
          // { Kind() {} }
          return kindVisitor;
        }
        var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
        if (typeof kindSpecificVisitor === 'function') {
          // { Kind: { enter() {}, leave() {} } }
          return kindSpecificVisitor;
        }
      } else {
        var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
        if (specificVisitor) {
          if (typeof specificVisitor === 'function') {
            // { enter() {}, leave() {} }
            return specificVisitor;
          }
          var specificKindVisitor = specificVisitor[kind];
          if (typeof specificKindVisitor === 'function') {
            // { enter: { Kind() {} }, leave: { Kind() {} } }
            return specificKindVisitor;
          }
        }
      }
    }
    });

    unwrapExports(visitor);
    var visitor_1 = visitor.visit;
    var visitor_2 = visitor.visitInParallel;
    var visitor_3 = visitor.visitWithTypeInfo;
    var visitor_4 = visitor.getVisitFn;
    var visitor_5 = visitor.QueryDocumentKeys;
    var visitor_6 = visitor.BREAK;

    var printer = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.print = print;



    /**
     * Converts an AST into a string, using one set of reasonable
     * formatting rules.
     */
    function print(ast) {
      return (0, visitor.visit)(ast, { leave: printDocASTReducer });
    } /**
       * Copyright (c) 2015-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

    var printDocASTReducer = {
      Name: function Name(node) {
        return node.value;
      },
      Variable: function Variable(node) {
        return '$' + node.name;
      },

      // Document

      Document: function Document(node) {
        return join(node.definitions, '\n\n') + '\n';
      },

      OperationDefinition: function OperationDefinition(node) {
        var op = node.operation;
        var name = node.name;
        var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
        var directives = join(node.directives, ' ');
        var selectionSet = node.selectionSet;
        // Anonymous queries with no directives or variable definitions can use
        // the query short form.
        return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
      },


      VariableDefinition: function VariableDefinition(_ref) {
        var variable = _ref.variable,
            type = _ref.type,
            defaultValue = _ref.defaultValue;
        return variable + ': ' + type + wrap(' = ', defaultValue);
      },

      SelectionSet: function SelectionSet(_ref2) {
        var selections = _ref2.selections;
        return block(selections);
      },

      Field: function Field(_ref3) {
        var alias = _ref3.alias,
            name = _ref3.name,
            args = _ref3.arguments,
            directives = _ref3.directives,
            selectionSet = _ref3.selectionSet;
        return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
      },

      Argument: function Argument(_ref4) {
        var name = _ref4.name,
            value = _ref4.value;
        return name + ': ' + value;
      },

      // Fragments

      FragmentSpread: function FragmentSpread(_ref5) {
        var name = _ref5.name,
            directives = _ref5.directives;
        return '...' + name + wrap(' ', join(directives, ' '));
      },

      InlineFragment: function InlineFragment(_ref6) {
        var typeCondition = _ref6.typeCondition,
            directives = _ref6.directives,
            selectionSet = _ref6.selectionSet;
        return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
      },

      FragmentDefinition: function FragmentDefinition(_ref7) {
        var name = _ref7.name,
            typeCondition = _ref7.typeCondition,
            variableDefinitions = _ref7.variableDefinitions,
            directives = _ref7.directives,
            selectionSet = _ref7.selectionSet;
        return (
          // Note: fragment variable definitions are experimental and may be changed
          // or removed in the future.
          'fragment ' + name + wrap('(', join(variableDefinitions, ', '), ')') + ' ' + ('on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ')) + selectionSet
        );
      },

      // Value

      IntValue: function IntValue(_ref8) {
        var value = _ref8.value;
        return value;
      },
      FloatValue: function FloatValue(_ref9) {
        var value = _ref9.value;
        return value;
      },
      StringValue: function StringValue(_ref10, key) {
        var value = _ref10.value,
            isBlockString = _ref10.block;
        return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
      },
      BooleanValue: function BooleanValue(_ref11) {
        var value = _ref11.value;
        return JSON.stringify(value);
      },
      NullValue: function NullValue() {
        return 'null';
      },
      EnumValue: function EnumValue(_ref12) {
        var value = _ref12.value;
        return value;
      },
      ListValue: function ListValue(_ref13) {
        var values = _ref13.values;
        return '[' + join(values, ', ') + ']';
      },
      ObjectValue: function ObjectValue(_ref14) {
        var fields = _ref14.fields;
        return '{' + join(fields, ', ') + '}';
      },
      ObjectField: function ObjectField(_ref15) {
        var name = _ref15.name,
            value = _ref15.value;
        return name + ': ' + value;
      },

      // Directive

      Directive: function Directive(_ref16) {
        var name = _ref16.name,
            args = _ref16.arguments;
        return '@' + name + wrap('(', join(args, ', '), ')');
      },

      // Type

      NamedType: function NamedType(_ref17) {
        var name = _ref17.name;
        return name;
      },
      ListType: function ListType(_ref18) {
        var type = _ref18.type;
        return '[' + type + ']';
      },
      NonNullType: function NonNullType(_ref19) {
        var type = _ref19.type;
        return type + '!';
      },

      // Type System Definitions

      SchemaDefinition: function SchemaDefinition(_ref20) {
        var directives = _ref20.directives,
            operationTypes = _ref20.operationTypes;
        return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
      },

      OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
        var operation = _ref21.operation,
            type = _ref21.type;
        return operation + ': ' + type;
      },

      ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
        var description = _ref22.description,
            name = _ref22.name,
            directives = _ref22.directives;
        return join([description, join(['scalar', name, join(directives, ' ')], ' ')], '\n');
      },

      ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
        var description = _ref23.description,
            name = _ref23.name,
            interfaces = _ref23.interfaces,
            directives = _ref23.directives,
            fields = _ref23.fields;
        return join([description, join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ')], '\n');
      },

      FieldDefinition: function FieldDefinition(_ref24) {
        var description = _ref24.description,
            name = _ref24.name,
            args = _ref24.arguments,
            type = _ref24.type,
            directives = _ref24.directives;
        return join([description, name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '))], '\n');
      },

      InputValueDefinition: function InputValueDefinition(_ref25) {
        var description = _ref25.description,
            name = _ref25.name,
            type = _ref25.type,
            defaultValue = _ref25.defaultValue,
            directives = _ref25.directives;
        return join([description, join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ')], '\n');
      },

      InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
        var description = _ref26.description,
            name = _ref26.name,
            directives = _ref26.directives,
            fields = _ref26.fields;
        return join([description, join(['interface', name, join(directives, ' '), block(fields)], ' ')], '\n');
      },

      UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
        var description = _ref27.description,
            name = _ref27.name,
            directives = _ref27.directives,
            types = _ref27.types;
        return join([description, join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ')], '\n');
      },

      EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
        var description = _ref28.description,
            name = _ref28.name,
            directives = _ref28.directives,
            values = _ref28.values;
        return join([description, join(['enum', name, join(directives, ' '), block(values)], ' ')], '\n');
      },

      EnumValueDefinition: function EnumValueDefinition(_ref29) {
        var description = _ref29.description,
            name = _ref29.name,
            directives = _ref29.directives;
        return join([description, join([name, join(directives, ' ')], ' ')], '\n');
      },

      InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
        var description = _ref30.description,
            name = _ref30.name,
            directives = _ref30.directives,
            fields = _ref30.fields;
        return join([description, join(['input', name, join(directives, ' '), block(fields)], ' ')], '\n');
      },

      ScalarTypeExtension: function ScalarTypeExtension(_ref31) {
        var name = _ref31.name,
            directives = _ref31.directives;
        return join(['extend scalar', name, join(directives, ' ')], ' ');
      },

      ObjectTypeExtension: function ObjectTypeExtension(_ref32) {
        var name = _ref32.name,
            interfaces = _ref32.interfaces,
            directives = _ref32.directives,
            fields = _ref32.fields;
        return join(['extend type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
      },

      InterfaceTypeExtension: function InterfaceTypeExtension(_ref33) {
        var name = _ref33.name,
            directives = _ref33.directives,
            fields = _ref33.fields;
        return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
      },

      UnionTypeExtension: function UnionTypeExtension(_ref34) {
        var name = _ref34.name,
            directives = _ref34.directives,
            types = _ref34.types;
        return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
      },

      EnumTypeExtension: function EnumTypeExtension(_ref35) {
        var name = _ref35.name,
            directives = _ref35.directives,
            values = _ref35.values;
        return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
      },

      InputObjectTypeExtension: function InputObjectTypeExtension(_ref36) {
        var name = _ref36.name,
            directives = _ref36.directives,
            fields = _ref36.fields;
        return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
      },

      DirectiveDefinition: function DirectiveDefinition(_ref37) {
        var description = _ref37.description,
            name = _ref37.name,
            args = _ref37.arguments,
            locations = _ref37.locations;
        return join([description, 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ')], '\n');
      }
    };

    /**
     * Given maybeArray, print an empty string if it is null or empty, otherwise
     * print all items together separated by separator if provided
     */
    function join(maybeArray, separator) {
      return maybeArray ? maybeArray.filter(function (x) {
        return x;
      }).join(separator || '') : '';
    }

    /**
     * Given array, print each item on its own line, wrapped in an
     * indented "{ }" block.
     */
    function block(array) {
      return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '';
    }

    /**
     * If maybeString is not null or empty, then wrap with start and end, otherwise
     * print an empty string.
     */
    function wrap(start, maybeString, end) {
      return maybeString ? start + maybeString + (end || '') : '';
    }

    function indent(maybeString) {
      return maybeString && maybeString.replace(/\n/g, '\n  ');
    }

    /**
     * Print a block string in the indented block form by adding a leading and
     * trailing blank line. However, if a block string starts with whitespace and is
     * a single-line, adding a leading blank line would strip that whitespace.
     */
    function printBlockString(value, isDescription) {
      return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1 ? '"""' + value.replace(/"""/g, '\\"""') + '"""' : isDescription ? '"""\n' + value.replace(/"""/g, '\\"""') + '\n"""' : indent('"""\n' + value.replace(/"""/g, '\\"""')) + '\n"""';
    }
    });

    unwrapExports(printer);
    var printer_1 = printer.print;

    /**
     * Capitalizes the first letter of the given string.
     *
     * @param {string} input
     * @returns {string}
     */
    function upcaseFirstLetter(input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
    /**
     * Down cases the first letter of the given string.
     *
     * @param {string} input
     * @returns {string}
     */
    function downcaseFirstLetter(input) {
        return input.charAt(0).toLowerCase() + input.slice(1);
    }
    /**
     * Takes a string with a graphql query and formats it. Useful for debug output and the tests.
     * @param {string} query
     * @returns {string}
     */
    function prettify(query) {
        return printer_1(parser_1(query));
    }
    /**
     * Tells if a object is just a simple object.
     *
     * @param {any} value - Value to check.
     */
    function isPlainObject(value) {
        if (!(typeof value === 'object' && value !== null) || value.toString() !== '[object Object]') {
            return false;
        }
        if (Object.getPrototypeOf(value) === null) {
            return true;
        }
        var proto = value;
        while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(value) === proto;
    }
    /**
     * Creates an object composed of the picked `object` properties.
     * @param {object} object - Object.
     * @param {array} props - Properties to pick.
     */
    function pick(object, props) {
        if (!object) {
            return {};
        }
        var index = -1;
        var length = props.length;
        var result = {};
        while (++index < length) {
            var prop = props[index];
            result[prop] = object[prop];
        }
        return result;
    }
    function isEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    function clone(input) {
        JSON.parse(JSON.stringify(input));
    }
    function takeWhile(array, predicate) {
        var index = -1;
        while (++index < array.length && predicate(array[index], index, array)) {
            // just increase index
        }
        return array.slice(0, index);
    }

    /**
     * Vuex-ORM-Apollo Debug Logger.
     * Wraps console and only logs if enabled.
     *
     * Also contains some methods to format graphql queries for the output
     */
    var Logger = /** @class */ (function () {
        /**
         * @constructor
         * @param {boolean} enabled Tells if any logging should happen
         */
        function Logger(enabled) {
            /**
             * Fancy Vuex-ORM-Apollo prefix for all log messages.
             * @type {string[]}
             */
            this.PREFIX = [
                "%c Vuex-ORM: GraphQL Plugin %c",
                "background: #35495e; padding: 1px 0; border-radius: 3px; color: #eee;",
                "background: transparent;"
            ];
            this.enabled = enabled;
            this.log("Logging is enabled.");
        }
        /**
         * Wraps console.group. In TEST env console.log is used instead because console.group doesn't work on CLI.
         * If available console.groupCollapsed will be used instead.
         * @param {Array<any>} messages
         */
        Logger.prototype.group = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            if (this.enabled) {
                if (console.groupCollapsed) {
                    console.groupCollapsed.apply(console, this.PREFIX.concat(messages));
                }
                else {
                    console.log.apply(console, this.PREFIX.concat(messages));
                }
            }
        };
        /**
         * Wrapper for console.groupEnd. In TEST env nothing happens because console.groupEnd doesn't work on CLI.
         */
        Logger.prototype.groupEnd = function () {
            if (this.enabled && console.groupEnd)
                console.groupEnd();
        };
        /**
         * Wrapper for console.log.
         * @param {Array<any>} messages
         */
        Logger.prototype.log = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            if (this.enabled) {
                console.log.apply(console, this.PREFIX.concat(messages));
            }
        };
        /**
         * Wrapper for console.warn.
         * @param {Array<any>} messages
         */
        Logger.prototype.warn = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            if (this.enabled) {
                console.warn.apply(console, this.PREFIX.concat(messages));
            }
        };
        /**
         * Logs a graphql query in a readable format and with all information like fetch policy and variables.
         * @param {string | DocumentNode} query
         * @param {Arguments} variables
         * @param {FetchPolicy} fetchPolicy
         */
        Logger.prototype.logQuery = function (query, variables, fetchPolicy) {
            if (this.enabled) {
                try {
                    var prettified = "";
                    if (isPlainObject(query) && query.loc) {
                        prettified = prettify(query.loc.source.body);
                    }
                    else {
                        prettified = prettify(query);
                    }
                    this.group("Sending query:", prettified
                        .split("\n")[1]
                        .replace("{", "")
                        .trim());
                    console.log(prettified);
                    if (variables)
                        console.log("VARIABLES:", variables);
                    if (fetchPolicy)
                        console.log("FETCH POLICY:", fetchPolicy);
                    this.groupEnd();
                }
                catch (e) {
                    console.error("[Vuex-ORM-Apollo] There is a syntax error in the query!", e, query);
                }
            }
        };
        return Logger;
    }());

    var inflection = require("inflection");
    /**
     * Wrapper around a Vuex-ORM model with some useful methods.
     *
     * Also provides a mock system, to define mocking responses for actions.
     */
    var Model = /** @class */ (function () {
        /**
         * @constructor
         * @param {Model} baseModel The original Vuex-ORM model
         */
        function Model(baseModel) {
            var _this = this;
            /**
             * The fields of the model
             * @type {Map<string, Field>}
             */
            this.fields = new Map();
            /**
             * Container for the mocks.
             * @type {Object}
             */
            this.mocks = {};
            this.baseModel = baseModel;
            // Generate name variants
            this.singularName = inflection.singularize(this.baseModel.entity);
            this.pluralName = inflection.pluralize(this.baseModel.entity);
            // Cache the fields of the model in this.fields
            var fields = this.baseModel.fields();
            Object.keys(fields).forEach(function (name) {
                _this.fields.set(name, fields[name]);
            });
        }
        /**
         * Tells if a field is a numeric field.
         *
         * @param {Field | undefined} field
         * @returns {boolean}
         */
        Model.isFieldNumber = function (field) {
            if (!field)
                return false;
            var context = Context.getInstance();
            return (field instanceof context.components.Number || field instanceof context.components.Increment);
        };
        /**
         * Tells if a field is a attribute (and thus not a relation)
         * @param {Field} field
         * @returns {boolean}
         */
        Model.isFieldAttribute = function (field) {
            var context = Context.getInstance();
            return (field instanceof context.components.Increment ||
                field instanceof context.components.Attr ||
                field instanceof context.components.String ||
                field instanceof context.components.Number ||
                field instanceof context.components.Boolean);
        };
        /**
         * Tells if a field which represents a relation is a connection (multiple).
         * @param {Field} field
         * @returns {boolean}
         */
        Model.isConnection = function (field) {
            var context = Context.getInstance();
            return !(field instanceof context.components.BelongsTo ||
                field instanceof context.components.HasOne ||
                field instanceof context.components.MorphTo ||
                field instanceof context.components.MorphOne);
        };
        /**
         * Adds $isPersisted and other meta fields to the model by overwriting the fields() method.
         * @todo is this a good way to add fields?
         * @param {Model} model
         */
        Model.augment = function (model) {
            var originalFieldGenerator = model.baseModel.fields.bind(model.baseModel);
            model.baseModel.fields = function () {
                var originalFields = originalFieldGenerator();
                originalFields["$isPersisted"] = model.baseModel.boolean(false);
                return originalFields;
            };
        };
        /**
         * Returns all fields which should be included in a graphql query: All attributes which are not included in the
         * skipFields array or start with $.
         * @returns {Array<string>} field names which should be queried
         */
        Model.prototype.getQueryFields = function () {
            var _this = this;
            var fields = [];
            this.fields.forEach(function (field, name) {
                if (Model.isFieldAttribute(field) && !_this.skipField(name)) {
                    fields.push(name);
                }
            });
            return fields;
        };
        /**
         * Tells if a field should be ignored. This is true for fields that start with a `$` or is it is within the skipField
         * property or is the foreignKey of a belongsTo/hasOne relation.
         *
         * @param {string} field
         * @returns {boolean}
         */
        Model.prototype.skipField = function (field) {
            if (field.startsWith("$"))
                return true;
            if (this.baseModel.skipFields && this.baseModel.skipFields.indexOf(field) >= 0)
                return true;
            var context = Context.getInstance();
            var shouldSkipField = false;
            this.getRelations().forEach(function (relation) {
                if ((relation instanceof context.components.BelongsTo ||
                    relation instanceof context.components.HasOne) &&
                    relation.foreignKey === field) {
                    shouldSkipField = true;
                    return false;
                }
                return true;
            });
            return shouldSkipField;
        };
        /**
         * @returns {Map<string, Field>} all relations of the model which should be included in a graphql query
         */
        Model.prototype.getRelations = function () {
            var relations = new Map();
            this.fields.forEach(function (field, name) {
                if (!Model.isFieldAttribute(field)) {
                    relations.set(name, field);
                }
            });
            return relations;
        };
        /**
         * This accepts a field like `subjectType` and checks if this is just randomly named `...Type` or it is part
         * of a polymorphic relation.
         * @param {string} name
         * @returns {boolean}
         */
        Model.prototype.isTypeFieldOfPolymorphicRelation = function (name) {
            var _this = this;
            var context = Context.getInstance();
            var found = false;
            context.models.forEach(function (model) {
                if (found)
                    return false;
                model.getRelations().forEach(function (relation) {
                    if (relation instanceof context.components.MorphMany ||
                        relation instanceof context.components.MorphedByMany ||
                        relation instanceof context.components.MorphOne ||
                        relation instanceof context.components.MorphTo ||
                        relation instanceof context.components.MorphToMany) {
                        if (relation.type === name &&
                            relation.related &&
                            relation.related.entity === _this.baseModel.entity) {
                            found = true;
                            return false;
                        }
                    }
                    return true;
                });
                return true;
            });
            return found;
        };
        /**
         * Returns a record of this model with the given ID.
         * @param {number} id
         * @returns {any}
         */
        Model.prototype.getRecordWithId = function (id) {
            return this.baseModel
                .query()
                .withAllRecursive()
                .where("id", id)
                .first();
        };
        /**
         * Determines if we should eager load (means: add as a field in the graphql query) a related entity. belongsTo or
         * hasOne related entities are always eager loaded. Others can be added to the `eagerLoad` array of the model.
         *
         * @param {string} fieldName Name of the field
         * @param {Field} field Relation field
         * @param {Model} relatedModel Related model
         * @returns {boolean}
         */
        Model.prototype.shouldEagerLoadRelation = function (fieldName, field, relatedModel) {
            var context = Context.getInstance();
            if (field instanceof context.components.HasOne ||
                field instanceof context.components.BelongsTo ||
                field instanceof context.components.MorphOne) {
                return true;
            }
            var eagerLoadList = this.baseModel.eagerLoad || [];
            return (eagerLoadList.find(function (n) {
                return n === relatedModel.singularName || n === relatedModel.pluralName || n === fieldName;
            }) !== undefined);
        };
        /**
         * Adds a mock.
         *
         * @param {Mock} mock - Mock config.
         * @returns {boolean}
         */
        Model.prototype.$addMock = function (mock) {
            if (this.$findMock(mock.action, mock.options))
                return false;
            if (!this.mocks[mock.action])
                this.mocks[mock.action] = [];
            this.mocks[mock.action].push(mock);
            return true;
        };
        /**
         * Finds a mock for the given action and options.
         *
         * @param {string} action - Name of the action like 'fetch'.
         * @param {MockOptions} options - MockOptions like { variables: { id: 42 } }.
         * @returns {Mock | null} null when no mock was found.
         */
        Model.prototype.$findMock = function (action, options) {
            if (this.mocks[action]) {
                return (this.mocks[action].find(function (m) {
                    if (!m.options || !options)
                        return true;
                    var relevantOptions = pick(options, Object.keys(m.options));
                    return isEqual(relevantOptions, m.options || {});
                }) || null);
            }
            return null;
        };
        /**
         * Hook to be called by all actions in order to get the mock returnValue.
         *
         * @param {string} action - Name of the action like 'fetch'.
         * @param {MockOptions} options - MockOptions.
         * @returns {any} null when no mock was found.
         */
        Model.prototype.$mockHook = function (action, options) {
            var _a;
            var returnValue = null;
            var mock = this.$findMock(action, options);
            if (mock) {
                if (mock.returnValue instanceof Function) {
                    returnValue = mock.returnValue();
                }
                else {
                    returnValue = mock.returnValue || null;
                }
            }
            if (returnValue) {
                if (returnValue instanceof Array) {
                    returnValue.forEach(function (r) { return (r.$isPersisted = true); });
                }
                else {
                    returnValue.$isPersisted = true;
                }
                return _a = {}, _a[this.pluralName] = returnValue, _a;
            }
            return null;
        };
        return Model;
    }());

    var fastJsonStableStringify = function (data, opts) {
        if (!opts) opts = {};
        if (typeof opts === 'function') opts = { cmp: opts };
        var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

        var cmp = opts.cmp && (function (f) {
            return function (node) {
                return function (a, b) {
                    var aobj = { key: a, value: node[a] };
                    var bobj = { key: b, value: node[b] };
                    return f(aobj, bobj);
                };
            };
        })(opts.cmp);

        var seen = [];
        return (function stringify (node) {
            if (node && node.toJSON && typeof node.toJSON === 'function') {
                node = node.toJSON();
            }

            if (node === undefined) return;
            if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
            if (typeof node !== 'object') return JSON.stringify(node);

            var i, out;
            if (Array.isArray(node)) {
                out = '[';
                for (i = 0; i < node.length; i++) {
                    if (i) out += ',';
                    out += stringify(node[i]) || 'null';
                }
                return out + ']';
            }

            if (node === null) return 'null';

            if (seen.indexOf(node) !== -1) {
                if (cycles) return JSON.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }

            var seenIndex = seen.push(node) - 1;
            var keys = Object.keys(node).sort(cmp && cmp(node));
            out = '';
            for (i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node[key]);

                if (!value) continue;
                if (out) out += ',';
                out += JSON.stringify(key) + ':' + value;
            }
            seen.splice(seenIndex, 1);
            return '{' + out + '}';
        })(data);
    };

    var __assign$1 = (undefined && undefined.__assign) || function () {
        __assign$1 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    function isStringValue(value) {
        return value.kind === 'StringValue';
    }
    function isBooleanValue(value) {
        return value.kind === 'BooleanValue';
    }
    function isIntValue(value) {
        return value.kind === 'IntValue';
    }
    function isFloatValue(value) {
        return value.kind === 'FloatValue';
    }
    function isVariable(value) {
        return value.kind === 'Variable';
    }
    function isObjectValue(value) {
        return value.kind === 'ObjectValue';
    }
    function isListValue(value) {
        return value.kind === 'ListValue';
    }
    function isEnumValue(value) {
        return value.kind === 'EnumValue';
    }
    function isNullValue(value) {
        return value.kind === 'NullValue';
    }
    function valueToObjectRepresentation(argObj, name, value, variables) {
        if (isIntValue(value) || isFloatValue(value)) {
            argObj[name.value] = Number(value.value);
        }
        else if (isBooleanValue(value) || isStringValue(value)) {
            argObj[name.value] = value.value;
        }
        else if (isObjectValue(value)) {
            var nestedArgObj_1 = {};
            value.fields.map(function (obj) {
                return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
            });
            argObj[name.value] = nestedArgObj_1;
        }
        else if (isVariable(value)) {
            var variableValue = (variables || {})[value.name.value];
            argObj[name.value] = variableValue;
        }
        else if (isListValue(value)) {
            argObj[name.value] = value.values.map(function (listValue) {
                var nestedArgArrayObj = {};
                valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
                return nestedArgArrayObj[name.value];
            });
        }
        else if (isEnumValue(value)) {
            argObj[name.value] = value.value;
        }
        else if (isNullValue(value)) {
            argObj[name.value] = null;
        }
        else {
            throw new Error("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
                'is not supported. Use variables instead of inline arguments to ' +
                'overcome this limitation.');
        }
    }
    function storeKeyNameFromField(field, variables) {
        var directivesObj = null;
        if (field.directives) {
            directivesObj = {};
            field.directives.forEach(function (directive) {
                directivesObj[directive.name.value] = {};
                if (directive.arguments) {
                    directive.arguments.forEach(function (_a) {
                        var name = _a.name, value = _a.value;
                        return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                    });
                }
            });
        }
        var argObj = null;
        if (field.arguments && field.arguments.length) {
            argObj = {};
            field.arguments.forEach(function (_a) {
                var name = _a.name, value = _a.value;
                return valueToObjectRepresentation(argObj, name, value, variables);
            });
        }
        return getStoreKeyName(field.name.value, argObj, directivesObj);
    }
    var KNOWN_DIRECTIVES = [
        'connection',
        'include',
        'skip',
        'client',
        'rest',
        'export',
    ];
    function getStoreKeyName(fieldName, args, directives) {
        if (directives &&
            directives['connection'] &&
            directives['connection']['key']) {
            if (directives['connection']['filter'] &&
                directives['connection']['filter'].length > 0) {
                var filterKeys = directives['connection']['filter']
                    ? directives['connection']['filter']
                    : [];
                filterKeys.sort();
                var queryArgs_1 = args;
                var filteredArgs_1 = {};
                filterKeys.forEach(function (key) {
                    filteredArgs_1[key] = queryArgs_1[key];
                });
                return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
            }
            else {
                return directives['connection']['key'];
            }
        }
        var completeFieldName = fieldName;
        if (args) {
            var stringifiedArgs = fastJsonStableStringify(args);
            completeFieldName += "(" + stringifiedArgs + ")";
        }
        if (directives) {
            Object.keys(directives).forEach(function (key) {
                if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                    return;
                if (directives[key] && Object.keys(directives[key]).length) {
                    completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
                }
                else {
                    completeFieldName += "@" + key;
                }
            });
        }
        return completeFieldName;
    }
    function argumentsObjectFromField(field, variables) {
        if (field.arguments && field.arguments.length) {
            var argObj_1 = {};
            field.arguments.forEach(function (_a) {
                var name = _a.name, value = _a.value;
                return valueToObjectRepresentation(argObj_1, name, value, variables);
            });
            return argObj_1;
        }
        return null;
    }
    function resultKeyNameFromField(field) {
        return field.alias ? field.alias.value : field.name.value;
    }
    function isField(selection) {
        return selection.kind === 'Field';
    }
    function isInlineFragment(selection) {
        return selection.kind === 'InlineFragment';
    }
    function isIdValue(idObject) {
        return idObject && idObject.type === 'id';
    }
    function toIdValue(idConfig, generated) {
        if (generated === void 0) { generated = false; }
        return __assign$1({ type: 'id', generated: generated }, (typeof idConfig === 'string'
            ? { id: idConfig, typename: undefined }
            : idConfig));
    }
    function isJsonValue(jsonObject) {
        return (jsonObject != null &&
            typeof jsonObject === 'object' &&
            jsonObject.type === 'json');
    }

    function getDirectiveInfoFromField(field, variables) {
        if (field.directives && field.directives.length) {
            var directiveObj_1 = {};
            field.directives.forEach(function (directive) {
                directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
            });
            return directiveObj_1;
        }
        return null;
    }
    function shouldInclude(selection, variables) {
        if (variables === void 0) { variables = {}; }
        if (!selection.directives) {
            return true;
        }
        var res = true;
        selection.directives.forEach(function (directive) {
            if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
                return;
            }
            var directiveArguments = directive.arguments || [];
            var directiveName = directive.name.value;
            if (directiveArguments.length !== 1) {
                throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
            }
            var ifArgument = directiveArguments[0];
            if (!ifArgument.name || ifArgument.name.value !== 'if') {
                throw new Error("Invalid argument for the @" + directiveName + " directive.");
            }
            var ifValue = directiveArguments[0].value;
            var evaledValue = false;
            if (!ifValue || ifValue.kind !== 'BooleanValue') {
                if (ifValue.kind !== 'Variable') {
                    throw new Error("Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
                }
                else {
                    evaledValue = variables[ifValue.name.value];
                    if (evaledValue === undefined) {
                        throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
                    }
                }
            }
            else {
                evaledValue = ifValue.value;
            }
            if (directiveName === 'skip') {
                evaledValue = !evaledValue;
            }
            if (!evaledValue) {
                res = false;
            }
        });
        return res;
    }
    function flattenSelections(selection) {
        if (!selection.selectionSet ||
            !(selection.selectionSet.selections.length > 0))
            return [selection];
        return [selection].concat(selection.selectionSet.selections
            .map(function (selectionNode) {
            return [selectionNode].concat(flattenSelections(selectionNode));
        })
            .reduce(function (selections, selected) { return selections.concat(selected); }, []));
    }
    function getDirectiveNames(doc) {
        var directiveNames = doc.definitions
            .filter(function (definition) {
            return definition.selectionSet && definition.selectionSet.selections;
        })
            .map(function (x) { return flattenSelections(x); })
            .reduce(function (selections, selected) { return selections.concat(selected); }, [])
            .filter(function (selection) {
            return selection.directives && selection.directives.length > 0;
        })
            .map(function (selection) { return selection.directives; })
            .reduce(function (directives, directive) { return directives.concat(directive); }, [])
            .map(function (directive) { return directive.name.value; });
        return directiveNames;
    }
    function hasDirectives(names, doc) {
        return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
    }

    var __assign$2 = (undefined && undefined.__assign) || function () {
        __assign$2 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };
    function getFragmentQueryDocument(document, fragmentName) {
        var actualFragmentName = fragmentName;
        var fragments = [];
        document.definitions.forEach(function (definition) {
            if (definition.kind === 'OperationDefinition') {
                throw new Error("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                    'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
            }
            if (definition.kind === 'FragmentDefinition') {
                fragments.push(definition);
            }
        });
        if (typeof actualFragmentName === 'undefined') {
            if (fragments.length !== 1) {
                throw new Error("Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
            }
            actualFragmentName = fragments[0].name.value;
        }
        var query = __assign$2({}, document, { definitions: [
                {
                    kind: 'OperationDefinition',
                    operation: 'query',
                    selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                            {
                                kind: 'FragmentSpread',
                                name: {
                                    kind: 'Name',
                                    value: actualFragmentName,
                                },
                            },
                        ],
                    },
                }
            ].concat(document.definitions) });
        return query;
    }

    function assign(target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        sources.forEach(function (source) {
            if (typeof source === 'undefined' || source === null) {
                return;
            }
            Object.keys(source).forEach(function (key) {
                target[key] = source[key];
            });
        });
        return target;
    }

    function getMutationDefinition(doc) {
        checkDocument(doc);
        var mutationDef = doc.definitions.filter(function (definition) {
            return definition.kind === 'OperationDefinition' &&
                definition.operation === 'mutation';
        })[0];
        if (!mutationDef) {
            throw new Error('Must contain a mutation definition.');
        }
        return mutationDef;
    }
    function checkDocument(doc) {
        if (doc.kind !== 'Document') {
            throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
        }
        var operations = doc.definitions
            .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
            .map(function (definition) {
            if (definition.kind !== 'OperationDefinition') {
                throw new Error("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
            }
            return definition;
        });
        if (operations.length > 1) {
            throw new Error("Ambiguous GraphQL document: contains " + operations.length + " operations");
        }
    }
    function getOperationDefinition(doc) {
        checkDocument(doc);
        return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
    }
    function getOperationDefinitionOrDie(document) {
        var def = getOperationDefinition(document);
        if (!def) {
            throw new Error("GraphQL document is missing an operation");
        }
        return def;
    }
    function getOperationName(doc) {
        return (doc.definitions
            .filter(function (definition) {
            return definition.kind === 'OperationDefinition' && definition.name;
        })
            .map(function (x) { return x.name.value; })[0] || null);
    }
    function getFragmentDefinitions(doc) {
        return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
    }
    function getQueryDefinition(doc) {
        var queryDef = getOperationDefinition(doc);
        if (!queryDef || queryDef.operation !== 'query') {
            throw new Error('Must contain a query definition.');
        }
        return queryDef;
    }
    function getMainDefinition(queryDoc) {
        checkDocument(queryDoc);
        var fragmentDefinition;
        for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            if (definition.kind === 'OperationDefinition') {
                var operation = definition.operation;
                if (operation === 'query' ||
                    operation === 'mutation' ||
                    operation === 'subscription') {
                    return definition;
                }
            }
            if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
                fragmentDefinition = definition;
            }
        }
        if (fragmentDefinition) {
            return fragmentDefinition;
        }
        throw new Error('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
    }
    function createFragmentMap(fragments) {
        if (fragments === void 0) { fragments = []; }
        var symTable = {};
        fragments.forEach(function (fragment) {
            symTable[fragment.name.value] = fragment;
        });
        return symTable;
    }
    function getDefaultValues(definition) {
        if (definition &&
            definition.variableDefinitions &&
            definition.variableDefinitions.length) {
            var defaultValues = definition.variableDefinitions
                .filter(function (_a) {
                var defaultValue = _a.defaultValue;
                return defaultValue;
            })
                .map(function (_a) {
                var variable = _a.variable, defaultValue = _a.defaultValue;
                var defaultValueObj = {};
                valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
                return defaultValueObj;
            });
            return assign.apply(void 0, [{}].concat(defaultValues));
        }
        return {};
    }

    var fclone = createCommonjsModule(function (module) {
    (function (root, factory) {
        if (module.exports) {
    			  //node
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.fclone = factory();
        }
    }(commonjsGlobal, function () {

    // see if it looks and smells like an iterable object, and do accept length === 0

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

    function isArrayLike(item) {
      if (Array.isArray(item)) return true;

      var len = item && item.length;
      return typeof len === 'number' && (len === 0 || len - 1 in item) && typeof item.indexOf === 'function';
    }

    function fclone(obj, refs) {
      if (!obj || "object" !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;

      if (obj instanceof Date) {
        return new Date(obj);
      }

      if (typeof Buffer !== 'undefined' && Buffer.isBuffer(obj)) {
        return new Buffer(obj);
      }

      // typed array Int32Array etc.
      if (typeof obj.subarray === 'function' && /[A-Z][A-Za-z\d]+Array/.test(Object.prototype.toString.call(obj))) {
        return obj.subarray(0);
      }

      if (!refs) {
        refs = [];
      }

      if (isArrayLike(obj)) {
        refs[refs.length] = obj;
        var _l = obj.length;
        var i = -1;
        var _copy = [];

        while (_l > ++i) {
          _copy[i] = ~refs.indexOf(obj[i]) ? '[Circular]' : fclone(obj[i], refs);
        }

        refs.length && refs.length--;
        return _copy;
      }

      refs[refs.length] = obj;
      var copy = {};

      if (obj instanceof Error) {
        copy.name = obj.name;
        copy.message = obj.message;
        copy.stack = obj.stack;
      }

      var keys = Object.keys(obj);
      var l = keys.length;

      while (l--) {
        var k = keys[l];
        copy[k] = ~refs.indexOf(obj[k]) ? '[Circular]' : fclone(obj[k], refs);
      }

      refs.length && refs.length--;
      return copy;
    }

    fclone.default = fclone;
      return fclone
    }));
    });

    function cloneDeep(value) {
        return fclone(value);
    }

    var TYPENAME_FIELD = {
        kind: 'Field',
        name: {
            kind: 'Name',
            value: '__typename',
        },
    };
    function isNotEmpty(op, fragments) {
        return (op.selectionSet.selections.filter(function (selectionSet) {
            return !(selectionSet &&
                selectionSet.kind === 'FragmentSpread' &&
                !isNotEmpty(fragments[selectionSet.name.value], fragments));
        }).length > 0);
    }
    function getDirectiveMatcher(directives) {
        return function directiveMatcher(directive) {
            return directives.some(function (dir) {
                if (dir.name && dir.name === directive.name.value)
                    return true;
                if (dir.test && dir.test(directive))
                    return true;
                return false;
            });
        };
    }
    function addTypenameToSelectionSet(selectionSet, isRoot) {
        if (isRoot === void 0) { isRoot = false; }
        if (selectionSet.selections) {
            if (!isRoot) {
                var alreadyHasThisField = selectionSet.selections.some(function (selection) {
                    return (selection.kind === 'Field' &&
                        selection.name.value === '__typename');
                });
                if (!alreadyHasThisField) {
                    selectionSet.selections.push(TYPENAME_FIELD);
                }
            }
            selectionSet.selections.forEach(function (selection) {
                if (selection.kind === 'Field') {
                    if (selection.name.value.lastIndexOf('__', 0) !== 0 &&
                        selection.selectionSet) {
                        addTypenameToSelectionSet(selection.selectionSet);
                    }
                }
                else if (selection.kind === 'InlineFragment') {
                    if (selection.selectionSet) {
                        addTypenameToSelectionSet(selection.selectionSet);
                    }
                }
            });
        }
    }
    function removeDirectivesFromSelectionSet(directives, selectionSet) {
        if (!selectionSet.selections)
            return selectionSet;
        var agressiveRemove = directives.some(function (dir) { return dir.remove; });
        selectionSet.selections = selectionSet.selections
            .map(function (selection) {
            if (selection.kind !== 'Field' ||
                !selection ||
                !selection.directives)
                return selection;
            var directiveMatcher = getDirectiveMatcher(directives);
            var remove;
            selection.directives = selection.directives.filter(function (directive) {
                var shouldKeep = !directiveMatcher(directive);
                if (!remove && !shouldKeep && agressiveRemove)
                    remove = true;
                return shouldKeep;
            });
            return remove ? null : selection;
        })
            .filter(function (x) { return !!x; });
        selectionSet.selections.forEach(function (selection) {
            if ((selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
                selection.selectionSet) {
                removeDirectivesFromSelectionSet(directives, selection.selectionSet);
            }
        });
        return selectionSet;
    }
    function removeDirectivesFromDocument(directives, doc) {
        var docClone = cloneDeep(doc);
        docClone.definitions.forEach(function (definition) {
            removeDirectivesFromSelectionSet(directives, definition.selectionSet);
        });
        var operation = getOperationDefinitionOrDie(docClone);
        var fragments = createFragmentMap(getFragmentDefinitions(docClone));
        return isNotEmpty(operation, fragments) ? docClone : null;
    }
    function addTypenameToDocument(doc) {
        checkDocument(doc);
        var docClone = cloneDeep(doc);
        docClone.definitions.forEach(function (definition) {
            var isRoot = definition.kind === 'OperationDefinition';
            addTypenameToSelectionSet(definition.selectionSet, isRoot);
        });
        return docClone;
    }
    var connectionRemoveConfig = {
        test: function (directive) {
            var willRemove = directive.name.value === 'connection';
            if (willRemove) {
                if (!directive.arguments ||
                    !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                    console.warn('Removing an @connection directive even though it does not have a key. ' +
                        'You may want to use the key parameter to specify a store key.');
                }
            }
            return willRemove;
        },
    };
    function removeConnectionDirectiveFromDocument(doc) {
        checkDocument(doc);
        return removeDirectivesFromDocument([connectionRemoveConfig], doc);
    }

    function getEnv() {
        if (typeof process !== 'undefined' && process.env.NODE_ENV) {
            return process.env.NODE_ENV;
        }
        return 'development';
    }
    function isEnv(env) {
        return getEnv() === env;
    }
    function isProduction() {
        return isEnv('production') === true;
    }
    function isTest() {
        return isEnv('test') === true;
    }

    function tryFunctionOrLogError(f) {
        try {
            return f();
        }
        catch (e) {
            if (console.error) {
                console.error(e);
            }
        }
    }
    function graphQLResultHasError(result) {
        return result.errors && result.errors.length;
    }

    function isEqual$1(a, b) {
        if (a === b) {
            return true;
        }
        if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
        }
        if (a != null &&
            typeof a === 'object' &&
            b != null &&
            typeof b === 'object') {
            for (var key in a) {
                if (Object.prototype.hasOwnProperty.call(a, key)) {
                    if (!Object.prototype.hasOwnProperty.call(b, key)) {
                        return false;
                    }
                    if (!isEqual$1(a[key], b[key])) {
                        return false;
                    }
                }
            }
            for (var key in b) {
                if (!Object.prototype.hasOwnProperty.call(a, key)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    var haveWarned = Object.create({});
    function warnOnceInDevelopment(msg, type) {
        if (type === void 0) { type = 'warn'; }
        if (isProduction()) {
            return;
        }
        if (!haveWarned[msg]) {
            if (!isTest()) {
                haveWarned[msg] = true;
            }
            switch (type) {
                case 'error':
                    console.error(msg);
                    break;
                default:
                    console.warn(msg);
            }
        }
    }

    var NetworkStatus;
    (function (NetworkStatus) {
        NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
        NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
        NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
        NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
        NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
        NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
        NetworkStatus[NetworkStatus["error"] = 8] = "error";
    })(NetworkStatus || (NetworkStatus = {}));
    function isNetworkRequestInFlight(networkStatus) {
        return networkStatus < 7;
    }

    var Observable_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    // === Symbol Support ===

    var hasSymbols = function () {
      return typeof Symbol === 'function';
    };
    var hasSymbol = function (name) {
      return hasSymbols() && Boolean(Symbol[name]);
    };
    var getSymbol = function (name) {
      return hasSymbol(name) ? Symbol[name] : '@@' + name;
    };

    if (hasSymbols() && !hasSymbol('observable')) {
      Symbol.observable = Symbol('observable');
    }

    // === Abstract Operations ===

    function getMethod(obj, key) {
      var value = obj[key];

      if (value == null) return undefined;

      if (typeof value !== 'function') throw new TypeError(value + ' is not a function');

      return value;
    }

    function getSpecies(obj) {
      var ctor = obj.constructor;
      if (ctor !== undefined) {
        ctor = ctor[getSymbol('species')];
        if (ctor === null) {
          ctor = undefined;
        }
      }
      return ctor !== undefined ? ctor : Observable;
    }

    function isObservable(x) {
      return x instanceof Observable; // SPEC: Brand check
    }

    function hostReportError(e) {
      if (hostReportError.log) {
        hostReportError.log(e);
      } else {
        setTimeout(function () {
          throw e;
        });
      }
    }

    function enqueue(fn) {
      Promise.resolve().then(function () {
        try {
          fn();
        } catch (e) {
          hostReportError(e);
        }
      });
    }

    function cleanupSubscription(subscription) {
      var cleanup = subscription._cleanup;
      if (cleanup === undefined) return;

      subscription._cleanup = undefined;

      if (!cleanup) {
        return;
      }

      try {
        if (typeof cleanup === 'function') {
          cleanup();
        } else {
          var unsubscribe = getMethod(cleanup, 'unsubscribe');
          if (unsubscribe) {
            unsubscribe.call(cleanup);
          }
        }
      } catch (e) {
        hostReportError(e);
      }
    }

    function closeSubscription(subscription) {
      subscription._observer = undefined;
      subscription._queue = undefined;
      subscription._state = 'closed';
    }

    function flushSubscription(subscription) {
      var queue = subscription._queue;
      if (!queue) {
        return;
      }
      subscription._queue = undefined;
      subscription._state = 'ready';
      for (var i = 0; i < queue.length; ++i) {
        notifySubscription(subscription, queue[i].type, queue[i].value);
        if (subscription._state === 'closed') break;
      }
    }

    function notifySubscription(subscription, type, value) {
      subscription._state = 'running';

      var observer = subscription._observer;

      try {
        var m = getMethod(observer, type);
        switch (type) {
          case 'next':
            if (m) m.call(observer, value);
            break;
          case 'error':
            closeSubscription(subscription);
            if (m) m.call(observer, value);else throw value;
            break;
          case 'complete':
            closeSubscription(subscription);
            if (m) m.call(observer);
            break;
        }
      } catch (e) {
        hostReportError(e);
      }

      if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
    }

    function onNotify(subscription, type, value) {
      if (subscription._state === 'closed') return;

      if (subscription._state === 'buffering') {
        subscription._queue.push({ type: type, value: value });
        return;
      }

      if (subscription._state !== 'ready') {
        subscription._state = 'buffering';
        subscription._queue = [{ type: type, value: value }];
        enqueue(function () {
          return flushSubscription(subscription);
        });
        return;
      }

      notifySubscription(subscription, type, value);
    }

    var Subscription = function () {
      function Subscription(observer, subscriber) {
        _classCallCheck(this, Subscription);

        // ASSERT: observer is an object
        // ASSERT: subscriber is callable

        this._cleanup = undefined;
        this._observer = observer;
        this._queue = undefined;
        this._state = 'initializing';

        var subscriptionObserver = new SubscriptionObserver(this);

        try {
          this._cleanup = subscriber.call(undefined, subscriptionObserver);
        } catch (e) {
          subscriptionObserver.error(e);
        }

        if (this._state === 'initializing') this._state = 'ready';
      }

      _createClass(Subscription, [{
        key: 'unsubscribe',
        value: function unsubscribe() {
          if (this._state !== 'closed') {
            closeSubscription(this);
            cleanupSubscription(this);
          }
        }
      }, {
        key: 'closed',
        get: function () {
          return this._state === 'closed';
        }
      }]);

      return Subscription;
    }();

    var SubscriptionObserver = function () {
      function SubscriptionObserver(subscription) {
        _classCallCheck(this, SubscriptionObserver);

        this._subscription = subscription;
      }

      _createClass(SubscriptionObserver, [{
        key: 'next',
        value: function next(value) {
          onNotify(this._subscription, 'next', value);
        }
      }, {
        key: 'error',
        value: function error(value) {
          onNotify(this._subscription, 'error', value);
        }
      }, {
        key: 'complete',
        value: function complete() {
          onNotify(this._subscription, 'complete');
        }
      }, {
        key: 'closed',
        get: function () {
          return this._subscription._state === 'closed';
        }
      }]);

      return SubscriptionObserver;
    }();

    var Observable = exports.Observable = function () {
      function Observable(subscriber) {
        _classCallCheck(this, Observable);

        if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');

        if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');

        this._subscriber = subscriber;
      }

      _createClass(Observable, [{
        key: 'subscribe',
        value: function subscribe(observer) {
          if (typeof observer !== 'object' || observer === null) {
            observer = {
              next: observer,
              error: arguments[1],
              complete: arguments[2]
            };
          }
          return new Subscription(observer, this._subscriber);
        }
      }, {
        key: 'forEach',
        value: function forEach(fn) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            if (typeof fn !== 'function') {
              reject(new TypeError(fn + ' is not a function'));
              return;
            }

            function done() {
              subscription.unsubscribe();
              resolve();
            }

            var subscription = _this.subscribe({
              next: function (value) {
                try {
                  fn(value, done);
                } catch (e) {
                  reject(e);
                  subscription.unsubscribe();
                }
              },

              error: reject,
              complete: resolve
            });
          });
        }
      }, {
        key: 'map',
        value: function map(fn) {
          var _this2 = this;

          if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

          var C = getSpecies(this);

          return new C(function (observer) {
            return _this2.subscribe({
              next: function (value) {
                try {
                  value = fn(value);
                } catch (e) {
                  return observer.error(e);
                }
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                observer.complete();
              }
            });
          });
        }
      }, {
        key: 'filter',
        value: function filter(fn) {
          var _this3 = this;

          if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

          var C = getSpecies(this);

          return new C(function (observer) {
            return _this3.subscribe({
              next: function (value) {
                try {
                  if (!fn(value)) return;
                } catch (e) {
                  return observer.error(e);
                }
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                observer.complete();
              }
            });
          });
        }
      }, {
        key: 'reduce',
        value: function reduce(fn) {
          var _this4 = this;

          if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

          var C = getSpecies(this);
          var hasSeed = arguments.length > 1;
          var hasValue = false;
          var seed = arguments[1];
          var acc = seed;

          return new C(function (observer) {
            return _this4.subscribe({
              next: function (value) {
                var first = !hasValue;
                hasValue = true;

                if (!first || hasSeed) {
                  try {
                    acc = fn(acc, value);
                  } catch (e) {
                    return observer.error(e);
                  }
                } else {
                  acc = value;
                }
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));

                observer.next(acc);
                observer.complete();
              }
            });
          });
        }
      }, {
        key: 'concat',
        value: function concat() {
          var _this5 = this;

          for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
            sources[_key] = arguments[_key];
          }

          var C = getSpecies(this);

          return new C(function (observer) {
            var subscription = void 0;

            function startNext(next) {
              subscription = next.subscribe({
                next: function (v) {
                  observer.next(v);
                },
                error: function (e) {
                  observer.error(e);
                },
                complete: function () {
                  if (sources.length === 0) {
                    subscription = undefined;
                    observer.complete();
                  } else {
                    startNext(C.from(sources.shift()));
                  }
                }
              });
            }

            startNext(_this5);

            return function () {
              if (subscription) {
                subscription.unsubscribe();
                subscription = undefined;
              }
            };
          });
        }
      }, {
        key: 'flatMap',
        value: function flatMap(fn) {
          var _this6 = this;

          if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

          var C = getSpecies(this);

          return new C(function (observer) {
            var subscriptions = [];

            var outer = _this6.subscribe({
              next: function (value) {
                if (fn) {
                  try {
                    value = fn(value);
                  } catch (e) {
                    return observer.error(e);
                  }
                }

                var inner = C.from(value).subscribe({
                  next: function (value) {
                    observer.next(value);
                  },
                  error: function (e) {
                    observer.error(e);
                  },
                  complete: function () {
                    var i = subscriptions.indexOf(inner);
                    if (i >= 0) subscriptions.splice(i, 1);
                    completeIfDone();
                  }
                });

                subscriptions.push(inner);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                completeIfDone();
              }
            });

            function completeIfDone() {
              if (outer.closed && subscriptions.length === 0) observer.complete();
            }

            return function () {
              subscriptions.forEach(function (s) {
                return s.unsubscribe();
              });
              outer.unsubscribe();
            };
          });
        }
      }, {
        key: getSymbol('observable'),
        value: function () {
          return this;
        }
      }], [{
        key: 'from',
        value: function from(x) {
          var C = typeof this === 'function' ? this : Observable;

          if (x == null) throw new TypeError(x + ' is not an object');

          var method = getMethod(x, getSymbol('observable'));
          if (method) {
            var observable = method.call(x);

            if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');

            if (isObservable(observable) && observable.constructor === C) return observable;

            return new C(function (observer) {
              return observable.subscribe(observer);
            });
          }

          if (hasSymbol('iterator')) {
            method = getMethod(x, getSymbol('iterator'));
            if (method) {
              return new C(function (observer) {
                enqueue(function () {
                  if (observer.closed) return;
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var item = _step.value;

                      observer.next(item);
                      if (observer.closed) return;
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }

                  observer.complete();
                });
              });
            }
          }

          if (Array.isArray(x)) {
            return new C(function (observer) {
              enqueue(function () {
                if (observer.closed) return;
                for (var i = 0; i < x.length; ++i) {
                  observer.next(x[i]);
                  if (observer.closed) return;
                }
                observer.complete();
              });
            });
          }

          throw new TypeError(x + ' is not observable');
        }
      }, {
        key: 'of',
        value: function of() {
          for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            items[_key2] = arguments[_key2];
          }

          var C = typeof this === 'function' ? this : Observable;

          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              for (var i = 0; i < items.length; ++i) {
                observer.next(items[i]);
                if (observer.closed) return;
              }
              observer.complete();
            });
          });
        }
      }, {
        key: getSymbol('species'),
        get: function () {
          return this;
        }
      }]);

      return Observable;
    }();

    if (hasSymbols()) {
      Object.defineProperty(Observable, Symbol('extensions'), {
        value: {
          symbol: getSymbol('observable'),
          hostReportError: hostReportError
        },
        configurabe: true
      });
    }
    });

    unwrapExports(Observable_1);
    var Observable_2 = Observable_1.Observable;

    var zenObservable = Observable_1.Observable;

    /* tslint:disable */
    var Observable$1 = zenObservable;

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$3 = (undefined && undefined.__assign) || function () {
        __assign$3 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$3.apply(this, arguments);
    };
    function validateOperation(operation) {
        var OPERATION_FIELDS = [
            'query',
            'operationName',
            'variables',
            'extensions',
            'context',
        ];
        for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
            var key = _a[_i];
            if (OPERATION_FIELDS.indexOf(key) < 0) {
                throw new Error("illegal argument: " + key);
            }
        }
        return operation;
    }
    var LinkError = /** @class */ (function (_super) {
        __extends$1(LinkError, _super);
        function LinkError(message, link) {
            var _this = _super.call(this, message) || this;
            _this.link = link;
            return _this;
        }
        return LinkError;
    }(Error));
    function isTerminating(link) {
        return link.request.length <= 1;
    }
    function fromError(errorValue) {
        return new Observable$1(function (observer) {
            observer.error(errorValue);
        });
    }
    function transformOperation(operation) {
        var transformedOperation = {
            variables: operation.variables || {},
            extensions: operation.extensions || {},
            operationName: operation.operationName,
            query: operation.query,
        };
        // best guess at an operation name
        if (!transformedOperation.operationName) {
            transformedOperation.operationName =
                typeof transformedOperation.query !== 'string'
                    ? getOperationName(transformedOperation.query)
                    : '';
        }
        return transformedOperation;
    }
    function createOperation(starting, operation) {
        var context = __assign$3({}, starting);
        var setContext = function (next) {
            if (typeof next === 'function') {
                context = __assign$3({}, context, next(context));
            }
            else {
                context = __assign$3({}, context, next);
            }
        };
        var getContext = function () { return (__assign$3({}, context)); };
        Object.defineProperty(operation, 'setContext', {
            enumerable: false,
            value: setContext,
        });
        Object.defineProperty(operation, 'getContext', {
            enumerable: false,
            value: getContext,
        });
        Object.defineProperty(operation, 'toKey', {
            enumerable: false,
            value: function () { return getKey(operation); },
        });
        return operation;
    }
    function getKey(operation) {
        // XXX we're assuming here that variables will be serialized in the same order.
        // that might not always be true
        return printer_1(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
    }

    var passthrough = function (op, forward) { return (forward ? forward(op) : Observable$1.of()); };
    var toLink = function (handler) {
        return typeof handler === 'function' ? new ApolloLink(handler) : handler;
    };
    var empty = function () {
        return new ApolloLink(function (op, forward) { return Observable$1.of(); });
    };
    var from = function (links) {
        if (links.length === 0)
            return empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    var split = function (test, left, right) {
        if (right === void 0) { right = new ApolloLink(passthrough); }
        var leftLink = toLink(left);
        var rightLink = toLink(right);
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || Observable$1.of()
                    : rightLink.request(operation) || Observable$1.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || Observable$1.of()
                    : rightLink.request(operation, forward) || Observable$1.of();
            });
        }
    };
    // join two Links together
    var concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            console.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || Observable$1.of(); }) || Observable$1.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || Observable$1.of();
                }) || Observable$1.of());
            });
        }
    };
    var ApolloLink = /** @class */ (function () {
        function ApolloLink(request) {
            if (request)
                this.request = request;
        }
        ApolloLink.prototype.split = function (test, left, right) {
            if (right === void 0) { right = new ApolloLink(passthrough); }
            return this.concat(split(test, left, right));
        };
        ApolloLink.prototype.concat = function (next) {
            return concat(this, next);
        };
        ApolloLink.prototype.request = function (operation, forward) {
            throw new Error('request is not implemented');
        };
        ApolloLink.empty = empty;
        ApolloLink.from = from;
        ApolloLink.split = split;
        ApolloLink.execute = execute;
        return ApolloLink;
    }());
    function execute(link, operation) {
        return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable$1.of());
    }

    function symbolObservablePonyfill(root) {
    	var result;
    	var Symbol = root.Symbol;

    	if (typeof Symbol === 'function') {
    		if (Symbol.observable) {
    			result = Symbol.observable;
    		} else {
    			result = Symbol('observable');
    			Symbol.observable = result;
    		}
    	} else {
    		result = '@@observable';
    	}

    	return result;
    }

    /* global window */

    var root;

    if (typeof self !== 'undefined') {
      root = self;
    } else if (typeof window !== 'undefined') {
      root = window;
    } else if (typeof global !== 'undefined') {
      root = global;
    } else if (typeof module !== 'undefined') {
      root = module;
    } else {
      root = Function('return this')();
    }

    var result = symbolObservablePonyfill(root);

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Observable$2 = (function (_super) {
        __extends$2(Observable$$1, _super);
        function Observable$$1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Observable$$1.prototype[result] = function () {
            return this;
        };
        Observable$$1.prototype['@@observable'] = function () {
            return this;
        };
        return Observable$$1;
    }(Observable$1));

    var __extends$3 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    function isApolloError(err) {
        return err.hasOwnProperty('graphQLErrors');
    }
    var generateErrorMessage = function (err) {
        var message = '';
        if (Array.isArray(err.graphQLErrors) && err.graphQLErrors.length !== 0) {
            err.graphQLErrors.forEach(function (graphQLError) {
                var errorMessage = graphQLError
                    ? graphQLError.message
                    : 'Error message not found.';
                message += "GraphQL error: " + errorMessage + "\n";
            });
        }
        if (err.networkError) {
            message += 'Network error: ' + err.networkError.message + '\n';
        }
        message = message.replace(/\n$/, '');
        return message;
    };
    var ApolloError = (function (_super) {
        __extends$3(ApolloError, _super);
        function ApolloError(_a) {
            var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
            var _this = _super.call(this, errorMessage) || this;
            _this.graphQLErrors = graphQLErrors || [];
            _this.networkError = networkError || null;
            if (!errorMessage) {
                _this.message = generateErrorMessage(_this);
            }
            else {
                _this.message = errorMessage;
            }
            _this.extraInfo = extraInfo;
            _this.__proto__ = ApolloError.prototype;
            return _this;
        }
        return ApolloError;
    }(Error));

    var FetchType;
    (function (FetchType) {
        FetchType[FetchType["normal"] = 1] = "normal";
        FetchType[FetchType["refetch"] = 2] = "refetch";
        FetchType[FetchType["poll"] = 3] = "poll";
    })(FetchType || (FetchType = {}));

    var __extends$4 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$4 = (undefined && undefined.__assign) || function () {
        __assign$4 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$4.apply(this, arguments);
    };
    var hasError = function (storeValue, policy) {
        if (policy === void 0) { policy = 'none'; }
        return storeValue &&
            ((storeValue.graphQLErrors &&
                storeValue.graphQLErrors.length > 0 &&
                policy === 'none') ||
                storeValue.networkError);
    };
    var ObservableQuery = (function (_super) {
        __extends$4(ObservableQuery, _super);
        function ObservableQuery(_a) {
            var scheduler = _a.scheduler, options = _a.options, _b = _a.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
            var _this = _super.call(this, function (observer) {
                return _this.onSubscribe(observer);
            }) || this;
            _this.isCurrentlyPolling = false;
            _this.isTornDown = false;
            _this.options = options;
            _this.variables = options.variables || {};
            _this.queryId = scheduler.queryManager.generateQueryId();
            _this.shouldSubscribe = shouldSubscribe;
            _this.scheduler = scheduler;
            _this.queryManager = scheduler.queryManager;
            _this.observers = [];
            _this.subscriptionHandles = [];
            return _this;
        }
        ObservableQuery.prototype.result = function () {
            var that = this;
            return new Promise(function (resolve, reject) {
                var subscription;
                var observer = {
                    next: function (result) {
                        resolve(result);
                        if (!that.observers.some(function (obs) { return obs !== observer; })) {
                            that.queryManager.removeQuery(that.queryId);
                        }
                        setTimeout(function () {
                            subscription.unsubscribe();
                        }, 0);
                    },
                    error: function (error) {
                        reject(error);
                    },
                };
                subscription = that.subscribe(observer);
            });
        };
        ObservableQuery.prototype.currentResult = function () {
            if (this.isTornDown) {
                return {
                    data: this.lastError ? {} : this.lastResult ? this.lastResult.data : {},
                    error: this.lastError,
                    loading: false,
                    networkStatus: NetworkStatus.error,
                };
            }
            var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
            if (hasError(queryStoreValue, this.options.errorPolicy)) {
                return {
                    data: {},
                    loading: false,
                    networkStatus: queryStoreValue.networkStatus,
                    error: new ApolloError({
                        graphQLErrors: queryStoreValue.graphQLErrors,
                        networkError: queryStoreValue.networkError,
                    }),
                };
            }
            var _a = this.queryManager.getCurrentQueryResult(this), data = _a.data, partial = _a.partial;
            var queryLoading = !queryStoreValue ||
                queryStoreValue.networkStatus === NetworkStatus.loading;
            var loading = (this.options.fetchPolicy === 'network-only' && queryLoading) ||
                (partial && this.options.fetchPolicy !== 'cache-only');
            var networkStatus;
            if (queryStoreValue) {
                networkStatus = queryStoreValue.networkStatus;
            }
            else {
                networkStatus = loading ? NetworkStatus.loading : NetworkStatus.ready;
            }
            var result = {
                data: data,
                loading: isNetworkRequestInFlight(networkStatus),
                networkStatus: networkStatus,
            };
            if (queryStoreValue &&
                queryStoreValue.graphQLErrors &&
                this.options.errorPolicy === 'all') {
                result.errors = queryStoreValue.graphQLErrors;
            }
            if (!partial) {
                var stale = false;
                this.lastResult = __assign$4({}, result, { stale: stale });
            }
            return __assign$4({}, result, { partial: partial });
        };
        ObservableQuery.prototype.getLastResult = function () {
            return this.lastResult;
        };
        ObservableQuery.prototype.getLastError = function () {
            return this.lastError;
        };
        ObservableQuery.prototype.resetLastResults = function () {
            delete this.lastResult;
            delete this.lastError;
            this.isTornDown = false;
        };
        ObservableQuery.prototype.refetch = function (variables) {
            var fetchPolicy = this.options.fetchPolicy;
            if (fetchPolicy === 'cache-only') {
                return Promise.reject(new Error('cache-only fetchPolicy option should not be used together with query refetch.'));
            }
            if (!isEqual$1(this.variables, variables)) {
                this.variables = Object.assign({}, this.variables, variables);
            }
            if (!isEqual$1(this.options.variables, this.variables)) {
                this.options.variables = Object.assign({}, this.options.variables, this.variables);
            }
            var isNetworkFetchPolicy = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
            var combinedOptions = __assign$4({}, this.options, { fetchPolicy: isNetworkFetchPolicy ? fetchPolicy : 'network-only' });
            return this.queryManager
                .fetchQuery(this.queryId, combinedOptions, FetchType.refetch)
                .then(function (result) { return result; });
        };
        ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
            var _this = this;
            if (!fetchMoreOptions.updateQuery) {
                throw new Error('updateQuery option is required. This function defines how to update the query data with the new results.');
            }
            var combinedOptions;
            return Promise.resolve()
                .then(function () {
                var qid = _this.queryManager.generateQueryId();
                if (fetchMoreOptions.query) {
                    combinedOptions = fetchMoreOptions;
                }
                else {
                    combinedOptions = __assign$4({}, _this.options, fetchMoreOptions, { variables: Object.assign({}, _this.variables, fetchMoreOptions.variables) });
                }
                combinedOptions.fetchPolicy = 'network-only';
                return _this.queryManager.fetchQuery(qid, combinedOptions, FetchType.normal, _this.queryId);
            })
                .then(function (fetchMoreResult) {
                _this.updateQuery(function (previousResult) {
                    return fetchMoreOptions.updateQuery(previousResult, {
                        fetchMoreResult: fetchMoreResult.data,
                        variables: combinedOptions.variables,
                    });
                });
                return fetchMoreResult;
            });
        };
        ObservableQuery.prototype.subscribeToMore = function (options) {
            var _this = this;
            var subscription = this.queryManager
                .startGraphQLSubscription({
                query: options.document,
                variables: options.variables,
            })
                .subscribe({
                next: function (subscriptionData) {
                    if (options.updateQuery) {
                        _this.updateQuery(function (previous, _a) {
                            var variables = _a.variables;
                            return options.updateQuery(previous, {
                                subscriptionData: subscriptionData,
                                variables: variables,
                            });
                        });
                    }
                },
                error: function (err) {
                    if (options.onError) {
                        options.onError(err);
                        return;
                    }
                    console.error('Unhandled GraphQL subscription error', err);
                },
            });
            this.subscriptionHandles.push(subscription);
            return function () {
                var i = _this.subscriptionHandles.indexOf(subscription);
                if (i >= 0) {
                    _this.subscriptionHandles.splice(i, 1);
                    subscription.unsubscribe();
                }
            };
        };
        ObservableQuery.prototype.setOptions = function (opts) {
            var oldOptions = this.options;
            this.options = Object.assign({}, this.options, opts);
            if (opts.pollInterval) {
                this.startPolling(opts.pollInterval);
            }
            else if (opts.pollInterval === 0) {
                this.stopPolling();
            }
            var tryFetch = (oldOptions.fetchPolicy !== 'network-only' &&
                opts.fetchPolicy === 'network-only') ||
                (oldOptions.fetchPolicy === 'cache-only' &&
                    opts.fetchPolicy !== 'cache-only') ||
                (oldOptions.fetchPolicy === 'standby' &&
                    opts.fetchPolicy !== 'standby') ||
                false;
            return this.setVariables(this.options.variables, tryFetch, opts.fetchResults);
        };
        ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
            if (tryFetch === void 0) { tryFetch = false; }
            if (fetchResults === void 0) { fetchResults = true; }
            this.isTornDown = false;
            var newVariables = variables ? variables : this.variables;
            if (isEqual$1(newVariables, this.variables) && !tryFetch) {
                if (this.observers.length === 0 || !fetchResults) {
                    return new Promise(function (resolve) { return resolve(); });
                }
                return this.result();
            }
            else {
                this.variables = newVariables;
                this.options.variables = newVariables;
                if (this.observers.length === 0) {
                    return new Promise(function (resolve) { return resolve(); });
                }
                return this.queryManager
                    .fetchQuery(this.queryId, __assign$4({}, this.options, { variables: this.variables }))
                    .then(function (result) { return result; });
            }
        };
        ObservableQuery.prototype.updateQuery = function (mapFn) {
            var _a = this.queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a.previousResult, variables = _a.variables, document = _a.document;
            var newResult = tryFunctionOrLogError(function () {
                return mapFn(previousResult, { variables: variables });
            });
            if (newResult) {
                this.queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
                this.queryManager.broadcastQueries();
            }
        };
        ObservableQuery.prototype.stopPolling = function () {
            if (this.isCurrentlyPolling) {
                this.scheduler.stopPollingQuery(this.queryId);
                this.options.pollInterval = undefined;
                this.isCurrentlyPolling = false;
            }
        };
        ObservableQuery.prototype.startPolling = function (pollInterval) {
            if (this.options.fetchPolicy === 'cache-first' ||
                this.options.fetchPolicy === 'cache-only') {
                throw new Error('Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
            }
            if (this.isCurrentlyPolling) {
                this.scheduler.stopPollingQuery(this.queryId);
                this.isCurrentlyPolling = false;
            }
            this.options.pollInterval = pollInterval;
            this.isCurrentlyPolling = true;
            this.scheduler.startPollingQuery(this.options, this.queryId);
        };
        ObservableQuery.prototype.onSubscribe = function (observer) {
            var _this = this;
            if (observer._subscription &&
                observer._subscription._observer &&
                !observer._subscription._observer.error) {
                observer._subscription._observer.error = function (error) {
                    console.error('Unhandled error', error.message, error.stack);
                };
            }
            this.observers.push(observer);
            if (observer.next && this.lastResult)
                observer.next(this.lastResult);
            if (observer.error && this.lastError)
                observer.error(this.lastError);
            if (this.observers.length === 1)
                this.setUpQuery();
            return function () {
                _this.observers = _this.observers.filter(function (obs) { return obs !== observer; });
                if (_this.observers.length === 0) {
                    _this.tearDownQuery();
                }
            };
        };
        ObservableQuery.prototype.setUpQuery = function () {
            var _this = this;
            if (this.shouldSubscribe) {
                this.queryManager.addObservableQuery(this.queryId, this);
            }
            if (!!this.options.pollInterval) {
                if (this.options.fetchPolicy === 'cache-first' ||
                    this.options.fetchPolicy === 'cache-only') {
                    throw new Error('Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
                }
                this.isCurrentlyPolling = true;
                this.scheduler.startPollingQuery(this.options, this.queryId);
            }
            var observer = {
                next: function (result) {
                    _this.lastResult = result;
                    _this.observers.forEach(function (obs) { return obs.next && obs.next(result); });
                },
                error: function (error) {
                    _this.lastError = error;
                    _this.observers.forEach(function (obs) { return obs.error && obs.error(error); });
                },
            };
            this.queryManager.startQuery(this.queryId, this.options, this.queryManager.queryListenerForObserver(this.queryId, this.options, observer));
        };
        ObservableQuery.prototype.tearDownQuery = function () {
            this.isTornDown = true;
            if (this.isCurrentlyPolling) {
                this.scheduler.stopPollingQuery(this.queryId);
                this.isCurrentlyPolling = false;
            }
            this.subscriptionHandles.forEach(function (sub) { return sub.unsubscribe(); });
            this.subscriptionHandles = [];
            this.queryManager.removeObservableQuery(this.queryId);
            this.queryManager.stopQuery(this.queryId);
            this.observers = [];
        };
        return ObservableQuery;
    }(Observable$2));

    var __extends$5 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /*
     * Expects context to contain the forceFetch field if no dedup
     */
    var DedupLink = /** @class */ (function (_super) {
        __extends$5(DedupLink, _super);
        function DedupLink() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.inFlightRequestObservables = new Map();
            _this.subscribers = new Map();
            return _this;
        }
        DedupLink.prototype.request = function (operation, forward) {
            var _this = this;
            // sometimes we might not want to deduplicate a request, for example when we want to force fetch it.
            if (operation.getContext().forceFetch) {
                return forward(operation);
            }
            var key = operation.toKey();
            var cleanup = function (operationKey) {
                _this.inFlightRequestObservables.delete(operationKey);
                var prev = _this.subscribers.get(operationKey);
                return prev;
            };
            if (!this.inFlightRequestObservables.get(key)) {
                // this is a new request, i.e. we haven't deduplicated it yet
                // call the next link
                var singleObserver_1 = forward(operation);
                var subscription_1;
                var sharedObserver = new Observable$1(function (observer) {
                    // this will still be called by each subscriber regardless of
                    // deduplication status
                    var prev = _this.subscribers.get(key);
                    if (!prev)
                        prev = { next: [], error: [], complete: [] };
                    _this.subscribers.set(key, {
                        next: prev.next.concat([observer.next.bind(observer)]),
                        error: prev.error.concat([observer.error.bind(observer)]),
                        complete: prev.complete.concat([observer.complete.bind(observer)]),
                    });
                    if (!subscription_1) {
                        subscription_1 = singleObserver_1.subscribe({
                            next: function (result) {
                                var previous = cleanup(key);
                                _this.subscribers.delete(key);
                                if (previous) {
                                    previous.next.forEach(function (next) { return next(result); });
                                    previous.complete.forEach(function (complete) { return complete(); });
                                }
                            },
                            error: function (error) {
                                var previous = cleanup(key);
                                _this.subscribers.delete(key);
                                if (previous)
                                    previous.error.forEach(function (err) { return err(error); });
                            },
                        });
                    }
                    return function () {
                        if (subscription_1)
                            subscription_1.unsubscribe();
                        _this.inFlightRequestObservables.delete(key);
                    };
                });
                this.inFlightRequestObservables.set(key, sharedObserver);
            }
            // return shared Observable
            return this.inFlightRequestObservables.get(key);
        };
        return DedupLink;
    }(ApolloLink));

    var __assign$5 = (undefined && undefined.__assign) || function () {
        __assign$5 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$5.apply(this, arguments);
    };
    var QueryScheduler = (function () {
        function QueryScheduler(_a) {
            var queryManager = _a.queryManager, ssrMode = _a.ssrMode;
            this.inFlightQueries = {};
            this.registeredQueries = {};
            this.intervalQueries = {};
            this.pollingTimers = {};
            this.ssrMode = false;
            this.queryManager = queryManager;
            this.ssrMode = ssrMode || false;
        }
        QueryScheduler.prototype.checkInFlight = function (queryId) {
            var query = this.queryManager.queryStore.get(queryId);
            return (query &&
                query.networkStatus !== NetworkStatus.ready &&
                query.networkStatus !== NetworkStatus.error);
        };
        QueryScheduler.prototype.fetchQuery = function (queryId, options, fetchType) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.queryManager
                    .fetchQuery(queryId, options, fetchType)
                    .then(function (result) {
                    resolve(result);
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        };
        QueryScheduler.prototype.startPollingQuery = function (options, queryId, listener) {
            if (!options.pollInterval) {
                throw new Error('Attempted to start a polling query without a polling interval.');
            }
            if (this.ssrMode)
                return queryId;
            this.registeredQueries[queryId] = options;
            if (listener) {
                this.queryManager.addQueryListener(queryId, listener);
            }
            this.addQueryOnInterval(queryId, options);
            return queryId;
        };
        QueryScheduler.prototype.stopPollingQuery = function (queryId) {
            delete this.registeredQueries[queryId];
        };
        QueryScheduler.prototype.fetchQueriesOnInterval = function (interval) {
            var _this = this;
            this.intervalQueries[interval] = this.intervalQueries[interval].filter(function (queryId) {
                if (!(_this.registeredQueries.hasOwnProperty(queryId) &&
                    _this.registeredQueries[queryId].pollInterval === interval)) {
                    return false;
                }
                if (_this.checkInFlight(queryId)) {
                    return true;
                }
                var queryOptions = _this.registeredQueries[queryId];
                var pollingOptions = __assign$5({}, queryOptions);
                pollingOptions.fetchPolicy = 'network-only';
                _this.fetchQuery(queryId, pollingOptions, FetchType.poll).catch(function () { });
                return true;
            });
            if (this.intervalQueries[interval].length === 0) {
                clearInterval(this.pollingTimers[interval]);
                delete this.intervalQueries[interval];
            }
        };
        QueryScheduler.prototype.addQueryOnInterval = function (queryId, queryOptions) {
            var _this = this;
            var interval = queryOptions.pollInterval;
            if (!interval) {
                throw new Error("A poll interval is required to start polling query with id '" + queryId + "'.");
            }
            if (this.intervalQueries.hasOwnProperty(interval.toString()) &&
                this.intervalQueries[interval].length > 0) {
                this.intervalQueries[interval].push(queryId);
            }
            else {
                this.intervalQueries[interval] = [queryId];
                this.pollingTimers[interval] = setInterval(function () {
                    _this.fetchQueriesOnInterval(interval);
                }, interval);
            }
        };
        QueryScheduler.prototype.registerPollingQuery = function (queryOptions) {
            if (!queryOptions.pollInterval) {
                throw new Error('Attempted to register a non-polling query with the scheduler.');
            }
            return new ObservableQuery({
                scheduler: this,
                options: queryOptions,
            });
        };
        return QueryScheduler;
    }());

    var MutationStore = (function () {
        function MutationStore() {
            this.store = {};
        }
        MutationStore.prototype.getStore = function () {
            return this.store;
        };
        MutationStore.prototype.get = function (mutationId) {
            return this.store[mutationId];
        };
        MutationStore.prototype.initMutation = function (mutationId, mutationString, variables) {
            this.store[mutationId] = {
                mutationString: mutationString,
                variables: variables || {},
                loading: true,
                error: null,
            };
        };
        MutationStore.prototype.markMutationError = function (mutationId, error) {
            var mutation = this.store[mutationId];
            if (!mutation) {
                return;
            }
            mutation.loading = false;
            mutation.error = error;
        };
        MutationStore.prototype.markMutationResult = function (mutationId) {
            var mutation = this.store[mutationId];
            if (!mutation) {
                return;
            }
            mutation.loading = false;
            mutation.error = null;
        };
        MutationStore.prototype.reset = function () {
            this.store = {};
        };
        return MutationStore;
    }());

    var __assign$6 = (undefined && undefined.__assign) || function () {
        __assign$6 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$6.apply(this, arguments);
    };
    var QueryStore = (function () {
        function QueryStore() {
            this.store = {};
        }
        QueryStore.prototype.getStore = function () {
            return this.store;
        };
        QueryStore.prototype.get = function (queryId) {
            return this.store[queryId];
        };
        QueryStore.prototype.initQuery = function (query) {
            var previousQuery = this.store[query.queryId];
            if (previousQuery &&
                previousQuery.document !== query.document &&
                printer_1(previousQuery.document) !== printer_1(query.document)) {
                throw new Error('Internal Error: may not update existing query string in store');
            }
            var isSetVariables = false;
            var previousVariables = null;
            if (query.storePreviousVariables &&
                previousQuery &&
                previousQuery.networkStatus !== NetworkStatus.loading) {
                if (!isEqual$1(previousQuery.variables, query.variables)) {
                    isSetVariables = true;
                    previousVariables = previousQuery.variables;
                }
            }
            var networkStatus;
            if (isSetVariables) {
                networkStatus = NetworkStatus.setVariables;
            }
            else if (query.isPoll) {
                networkStatus = NetworkStatus.poll;
            }
            else if (query.isRefetch) {
                networkStatus = NetworkStatus.refetch;
            }
            else {
                networkStatus = NetworkStatus.loading;
            }
            var graphQLErrors = [];
            if (previousQuery && previousQuery.graphQLErrors) {
                graphQLErrors = previousQuery.graphQLErrors;
            }
            this.store[query.queryId] = {
                document: query.document,
                variables: query.variables,
                previousVariables: previousVariables,
                networkError: null,
                graphQLErrors: graphQLErrors,
                networkStatus: networkStatus,
                metadata: query.metadata,
            };
            if (typeof query.fetchMoreForQueryId === 'string' &&
                this.store[query.fetchMoreForQueryId]) {
                this.store[query.fetchMoreForQueryId].networkStatus =
                    NetworkStatus.fetchMore;
            }
        };
        QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
            if (!this.store[queryId])
                return;
            this.store[queryId].networkError = null;
            this.store[queryId].graphQLErrors =
                result.errors && result.errors.length ? result.errors : [];
            this.store[queryId].previousVariables = null;
            this.store[queryId].networkStatus = NetworkStatus.ready;
            if (typeof fetchMoreForQueryId === 'string' &&
                this.store[fetchMoreForQueryId]) {
                this.store[fetchMoreForQueryId].networkStatus = NetworkStatus.ready;
            }
        };
        QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
            if (!this.store[queryId])
                return;
            this.store[queryId].networkError = error;
            this.store[queryId].networkStatus = NetworkStatus.error;
            if (typeof fetchMoreForQueryId === 'string') {
                this.markQueryResultClient(fetchMoreForQueryId, true);
            }
        };
        QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
            if (!this.store[queryId])
                return;
            this.store[queryId].networkError = null;
            this.store[queryId].previousVariables = null;
            this.store[queryId].networkStatus = complete
                ? NetworkStatus.ready
                : NetworkStatus.loading;
        };
        QueryStore.prototype.stopQuery = function (queryId) {
            delete this.store[queryId];
        };
        QueryStore.prototype.reset = function (observableQueryIds) {
            var _this = this;
            this.store = Object.keys(this.store)
                .filter(function (queryId) {
                return observableQueryIds.indexOf(queryId) > -1;
            })
                .reduce(function (res, key) {
                res[key] = __assign$6({}, _this.store[key], { networkStatus: NetworkStatus.loading });
                return res;
            }, {});
        };
        return QueryStore;
    }());

    var __assign$7 = (undefined && undefined.__assign) || function () {
        __assign$7 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$7.apply(this, arguments);
    };
    var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var defaultQueryInfo = {
        listeners: [],
        invalidated: false,
        document: null,
        newData: null,
        lastRequestId: null,
        observableQuery: null,
        subscriptions: [],
    };
    var QueryManager = (function () {
        function QueryManager(_a) {
            var link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, store = _a.store, _c = _a.onBroadcast, onBroadcast = _c === void 0 ? function () { return undefined; } : _c, _d = _a.ssrMode, ssrMode = _d === void 0 ? false : _d;
            this.mutationStore = new MutationStore();
            this.queryStore = new QueryStore();
            this.idCounter = 1;
            this.queries = new Map();
            this.fetchQueryPromises = new Map();
            this.queryIdsByName = {};
            this.link = link;
            this.deduplicator = ApolloLink.from([new DedupLink(), link]);
            this.queryDeduplication = queryDeduplication;
            this.dataStore = store;
            this.onBroadcast = onBroadcast;
            this.scheduler = new QueryScheduler({ queryManager: this, ssrMode: ssrMode });
        }
        QueryManager.prototype.mutate = function (_a) {
            var _this = this;
            var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueriesByName = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, _e = _a.context, context = _e === void 0 ? {} : _e;
            if (!mutation) {
                throw new Error('mutation option is required. You must specify your GraphQL document in the mutation option.');
            }
            if (fetchPolicy && fetchPolicy !== 'no-cache') {
                throw new Error("fetchPolicy for mutations currently only supports the 'no-cache' policy");
            }
            var mutationId = this.generateQueryId();
            var cache = this.dataStore.getCache();
            (mutation = cache.transformDocument(mutation)),
                (variables = assign({}, getDefaultValues(getMutationDefinition(mutation)), variables));
            var mutationString = printer_1(mutation);
            this.setQuery(mutationId, function () { return ({ document: mutation }); });
            var generateUpdateQueriesInfo = function () {
                var ret = {};
                if (updateQueriesByName) {
                    Object.keys(updateQueriesByName).forEach(function (queryName) {
                        return (_this.queryIdsByName[queryName] || []).forEach(function (queryId) {
                            ret[queryId] = {
                                updater: updateQueriesByName[queryName],
                                query: _this.queryStore.get(queryId),
                            };
                        });
                    });
                }
                return ret;
            };
            this.mutationStore.initMutation(mutationId, mutationString, variables);
            this.dataStore.markMutationInit({
                mutationId: mutationId,
                document: mutation,
                variables: variables || {},
                updateQueries: generateUpdateQueriesInfo(),
                update: updateWithProxyFn,
                optimisticResponse: optimisticResponse,
            });
            this.broadcastQueries();
            return new Promise(function (resolve, reject) {
                var storeResult;
                var error;
                var operation = _this.buildOperationForLink(mutation, variables, __assign$7({}, context, { optimisticResponse: optimisticResponse }));
                var completeMutation = function () { return __awaiter$1(_this, void 0, void 0, function () {
                    var refetchQueryPromises, _i, refetchQueries_1, refetchQuery, promise, queryOptions;
                    return __generator$1(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (error) {
                                    this.mutationStore.markMutationError(mutationId, error);
                                }
                                this.dataStore.markMutationComplete({
                                    mutationId: mutationId,
                                    optimisticResponse: optimisticResponse,
                                });
                                this.broadcastQueries();
                                if (error) {
                                    throw error;
                                }
                                if (typeof refetchQueries === 'function') {
                                    refetchQueries = refetchQueries(storeResult);
                                }
                                refetchQueryPromises = [];
                                for (_i = 0, refetchQueries_1 = refetchQueries; _i < refetchQueries_1.length; _i++) {
                                    refetchQuery = refetchQueries_1[_i];
                                    if (typeof refetchQuery === 'string') {
                                        promise = this.refetchQueryByName(refetchQuery);
                                        if (promise) {
                                            refetchQueryPromises.push(promise);
                                        }
                                        continue;
                                    }
                                    queryOptions = {
                                        query: refetchQuery.query,
                                        variables: refetchQuery.variables,
                                        fetchPolicy: 'network-only',
                                    };
                                    if (refetchQuery.context) {
                                        queryOptions.context = refetchQuery.context;
                                    }
                                    refetchQueryPromises.push(this.query(queryOptions));
                                }
                                if (!awaitRefetchQueries) return [3, 2];
                                return [4, Promise.all(refetchQueryPromises)];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                this.setQuery(mutationId, function () { return ({ document: undefined }); });
                                if (errorPolicy === 'ignore' &&
                                    storeResult &&
                                    graphQLResultHasError(storeResult)) {
                                    delete storeResult.errors;
                                }
                                return [2, storeResult];
                        }
                    });
                }); };
                execute(_this.link, operation).subscribe({
                    next: function (result) {
                        if (graphQLResultHasError(result) && errorPolicy === 'none') {
                            error = new ApolloError({
                                graphQLErrors: result.errors,
                            });
                            return;
                        }
                        _this.mutationStore.markMutationResult(mutationId);
                        if (fetchPolicy !== 'no-cache') {
                            _this.dataStore.markMutationResult({
                                mutationId: mutationId,
                                result: result,
                                document: mutation,
                                variables: variables || {},
                                updateQueries: generateUpdateQueriesInfo(),
                                update: updateWithProxyFn,
                            });
                        }
                        storeResult = result;
                    },
                    error: function (err) {
                        _this.mutationStore.markMutationError(mutationId, err);
                        _this.dataStore.markMutationComplete({
                            mutationId: mutationId,
                            optimisticResponse: optimisticResponse,
                        });
                        _this.broadcastQueries();
                        _this.setQuery(mutationId, function () { return ({ document: undefined }); });
                        reject(new ApolloError({
                            networkError: err,
                        }));
                    },
                    complete: function () { return completeMutation().then(resolve, reject); },
                });
            });
        };
        QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
            var _this = this;
            var _a = options.variables, variables = _a === void 0 ? {} : _a, _b = options.metadata, metadata = _b === void 0 ? null : _b, _c = options.fetchPolicy, fetchPolicy = _c === void 0 ? 'cache-first' : _c;
            var cache = this.dataStore.getCache();
            var query = cache.transformDocument(options.query);
            var storeResult;
            var needToFetch = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
            if (fetchType !== FetchType.refetch &&
                fetchPolicy !== 'network-only' &&
                fetchPolicy !== 'no-cache') {
                var _d = this.dataStore.getCache().diff({
                    query: query,
                    variables: variables,
                    returnPartialData: true,
                    optimistic: false,
                }), complete = _d.complete, result = _d.result;
                needToFetch = !complete || fetchPolicy === 'cache-and-network';
                storeResult = result;
            }
            var shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
            if (hasDirectives(['live'], query))
                shouldFetch = true;
            var requestId = this.generateRequestId();
            var cancel = this.updateQueryWatch(queryId, query, options);
            this.setQuery(queryId, function () { return ({
                document: query,
                lastRequestId: requestId,
                invalidated: true,
                cancel: cancel,
            }); });
            this.invalidate(true, fetchMoreForQueryId);
            this.queryStore.initQuery({
                queryId: queryId,
                document: query,
                storePreviousVariables: shouldFetch,
                variables: variables,
                isPoll: fetchType === FetchType.poll,
                isRefetch: fetchType === FetchType.refetch,
                metadata: metadata,
                fetchMoreForQueryId: fetchMoreForQueryId,
            });
            this.broadcastQueries();
            var shouldDispatchClientResult = !shouldFetch || fetchPolicy === 'cache-and-network';
            if (shouldDispatchClientResult) {
                this.queryStore.markQueryResultClient(queryId, !shouldFetch);
                this.invalidate(true, queryId, fetchMoreForQueryId);
                this.broadcastQueries();
            }
            if (shouldFetch) {
                var networkResult = this.fetchRequest({
                    requestId: requestId,
                    queryId: queryId,
                    document: query,
                    options: options,
                    fetchMoreForQueryId: fetchMoreForQueryId,
                }).catch(function (error) {
                    if (isApolloError(error)) {
                        throw error;
                    }
                    else {
                        var lastRequestId = _this.getQuery(queryId).lastRequestId;
                        if (requestId >= (lastRequestId || 1)) {
                            _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                            _this.invalidate(true, queryId, fetchMoreForQueryId);
                            _this.broadcastQueries();
                        }
                        _this.removeFetchQueryPromise(requestId);
                        throw new ApolloError({ networkError: error });
                    }
                });
                if (fetchPolicy !== 'cache-and-network') {
                    return networkResult;
                }
                else {
                    networkResult.catch(function () { });
                }
            }
            return Promise.resolve({ data: storeResult });
        };
        QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
            var _this = this;
            var previouslyHadError = false;
            return function (queryStoreValue, newData) {
                _this.invalidate(false, queryId);
                if (!queryStoreValue)
                    return;
                var observableQuery = _this.getQuery(queryId).observableQuery;
                var fetchPolicy = observableQuery
                    ? observableQuery.options.fetchPolicy
                    : options.fetchPolicy;
                if (fetchPolicy === 'standby')
                    return;
                var errorPolicy = observableQuery
                    ? observableQuery.options.errorPolicy
                    : options.errorPolicy;
                var lastResult = observableQuery
                    ? observableQuery.getLastResult()
                    : null;
                var lastError = observableQuery ? observableQuery.getLastError() : null;
                var shouldNotifyIfLoading = (!newData && queryStoreValue.previousVariables != null) ||
                    fetchPolicy === 'cache-only' ||
                    fetchPolicy === 'cache-and-network';
                var networkStatusChanged = Boolean(lastResult &&
                    queryStoreValue.networkStatus !== lastResult.networkStatus);
                var errorStatusChanged = errorPolicy &&
                    (lastError && lastError.graphQLErrors) !==
                        queryStoreValue.graphQLErrors &&
                    errorPolicy !== 'none';
                if (!isNetworkRequestInFlight(queryStoreValue.networkStatus) ||
                    (networkStatusChanged && options.notifyOnNetworkStatusChange) ||
                    shouldNotifyIfLoading) {
                    if (((!errorPolicy || errorPolicy === 'none') &&
                        queryStoreValue.graphQLErrors &&
                        queryStoreValue.graphQLErrors.length > 0) ||
                        queryStoreValue.networkError) {
                        var apolloError_1 = new ApolloError({
                            graphQLErrors: queryStoreValue.graphQLErrors,
                            networkError: queryStoreValue.networkError,
                        });
                        previouslyHadError = true;
                        if (observer.error) {
                            try {
                                observer.error(apolloError_1);
                            }
                            catch (e) {
                                setTimeout(function () {
                                    throw e;
                                }, 0);
                            }
                        }
                        else {
                            setTimeout(function () {
                                throw apolloError_1;
                            }, 0);
                            if (!isProduction()) {
                                console.info('An unhandled error was thrown because no error handler is registered ' +
                                    'for the query ' +
                                    printer_1(queryStoreValue.document));
                            }
                        }
                        return;
                    }
                    try {
                        var data = void 0;
                        var isMissing = void 0;
                        if (newData) {
                            if (fetchPolicy !== 'no-cache') {
                                _this.setQuery(queryId, function () { return ({ newData: null }); });
                            }
                            data = newData.result;
                            isMissing = !newData.complete || false;
                        }
                        else {
                            if (lastResult && lastResult.data && !errorStatusChanged) {
                                data = lastResult.data;
                                isMissing = false;
                            }
                            else {
                                var document_1 = _this.getQuery(queryId).document;
                                var readResult = _this.dataStore.getCache().diff({
                                    query: document_1,
                                    variables: queryStoreValue.previousVariables ||
                                        queryStoreValue.variables,
                                    optimistic: true,
                                });
                                data = readResult.result;
                                isMissing = !readResult.complete;
                            }
                        }
                        var resultFromStore = void 0;
                        if (isMissing && fetchPolicy !== 'cache-only') {
                            resultFromStore = {
                                data: lastResult && lastResult.data,
                                loading: isNetworkRequestInFlight(queryStoreValue.networkStatus),
                                networkStatus: queryStoreValue.networkStatus,
                                stale: true,
                            };
                        }
                        else {
                            resultFromStore = {
                                data: data,
                                loading: isNetworkRequestInFlight(queryStoreValue.networkStatus),
                                networkStatus: queryStoreValue.networkStatus,
                                stale: false,
                            };
                        }
                        if (errorPolicy === 'all' &&
                            queryStoreValue.graphQLErrors &&
                            queryStoreValue.graphQLErrors.length > 0) {
                            resultFromStore.errors = queryStoreValue.graphQLErrors;
                        }
                        if (observer.next) {
                            var isDifferentResult = !(lastResult &&
                                resultFromStore &&
                                lastResult.networkStatus === resultFromStore.networkStatus &&
                                lastResult.stale === resultFromStore.stale &&
                                lastResult.data === resultFromStore.data);
                            if (isDifferentResult || previouslyHadError) {
                                try {
                                    observer.next(resultFromStore);
                                }
                                catch (e) {
                                    setTimeout(function () {
                                        throw e;
                                    }, 0);
                                }
                            }
                        }
                        previouslyHadError = false;
                    }
                    catch (error) {
                        previouslyHadError = true;
                        if (observer.error)
                            observer.error(new ApolloError({ networkError: error }));
                        return;
                    }
                }
            };
        };
        QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
            if (shouldSubscribe === void 0) { shouldSubscribe = true; }
            if (options.fetchPolicy === 'standby') {
                throw new Error('client.watchQuery cannot be called with fetchPolicy set to "standby"');
            }
            var queryDefinition = getQueryDefinition(options.query);
            if (queryDefinition.variableDefinitions &&
                queryDefinition.variableDefinitions.length) {
                var defaultValues = getDefaultValues(queryDefinition);
                options.variables = assign({}, defaultValues, options.variables);
            }
            if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
                options.notifyOnNetworkStatusChange = false;
            }
            var transformedOptions = __assign$7({}, options);
            return new ObservableQuery({
                scheduler: this.scheduler,
                options: transformedOptions,
                shouldSubscribe: shouldSubscribe,
            });
        };
        QueryManager.prototype.query = function (options) {
            var _this = this;
            if (!options.query) {
                throw new Error('query option is required. You must specify your GraphQL document ' +
                    'in the query option.');
            }
            if (options.query.kind !== 'Document') {
                throw new Error('You must wrap the query string in a "gql" tag.');
            }
            if (options.returnPartialData) {
                throw new Error('returnPartialData option only supported on watchQuery.');
            }
            if (options.pollInterval) {
                throw new Error('pollInterval option only supported on watchQuery.');
            }
            var requestId = this.idCounter;
            return new Promise(function (resolve, reject) {
                _this.addFetchQueryPromise(requestId, resolve, reject);
                return _this.watchQuery(options, false)
                    .result()
                    .then(function (result) {
                    _this.removeFetchQueryPromise(requestId);
                    resolve(result);
                })
                    .catch(function (error) {
                    _this.removeFetchQueryPromise(requestId);
                    reject(error);
                });
            });
        };
        QueryManager.prototype.generateQueryId = function () {
            var queryId = this.idCounter.toString();
            this.idCounter++;
            return queryId;
        };
        QueryManager.prototype.stopQueryInStore = function (queryId) {
            this.queryStore.stopQuery(queryId);
            this.invalidate(true, queryId);
            this.broadcastQueries();
        };
        QueryManager.prototype.addQueryListener = function (queryId, listener) {
            this.setQuery(queryId, function (_a) {
                var _b = _a.listeners, listeners = _b === void 0 ? [] : _b;
                return ({
                    listeners: listeners.concat([listener]),
                    invalidate: false,
                });
            });
        };
        QueryManager.prototype.updateQueryWatch = function (queryId, document, options) {
            var _this = this;
            var cancel = this.getQuery(queryId).cancel;
            if (cancel)
                cancel();
            var previousResult = function () {
                var previousResult = null;
                var observableQuery = _this.getQuery(queryId).observableQuery;
                if (observableQuery) {
                    var lastResult = observableQuery.getLastResult();
                    if (lastResult) {
                        previousResult = lastResult.data;
                    }
                }
                return previousResult;
            };
            return this.dataStore.getCache().watch({
                query: document,
                variables: options.variables,
                optimistic: true,
                previousResult: previousResult,
                callback: function (newData) {
                    _this.setQuery(queryId, function () { return ({ invalidated: true, newData: newData }); });
                },
            });
        };
        QueryManager.prototype.addFetchQueryPromise = function (requestId, resolve, reject) {
            this.fetchQueryPromises.set(requestId.toString(), {
                resolve: resolve,
                reject: reject,
            });
        };
        QueryManager.prototype.removeFetchQueryPromise = function (requestId) {
            this.fetchQueryPromises.delete(requestId.toString());
        };
        QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
            this.setQuery(queryId, function () { return ({ observableQuery: observableQuery }); });
            var queryDef = getQueryDefinition(observableQuery.options.query);
            if (queryDef.name && queryDef.name.value) {
                var queryName = queryDef.name.value;
                this.queryIdsByName[queryName] = this.queryIdsByName[queryName] || [];
                this.queryIdsByName[queryName].push(observableQuery.queryId);
            }
        };
        QueryManager.prototype.removeObservableQuery = function (queryId) {
            var _a = this.getQuery(queryId), observableQuery = _a.observableQuery, cancel = _a.cancel;
            if (cancel)
                cancel();
            if (!observableQuery)
                return;
            var definition = getQueryDefinition(observableQuery.options.query);
            var queryName = definition.name ? definition.name.value : null;
            this.setQuery(queryId, function () { return ({ observableQuery: null }); });
            if (queryName) {
                this.queryIdsByName[queryName] = this.queryIdsByName[queryName].filter(function (val) {
                    return !(observableQuery.queryId === val);
                });
            }
        };
        QueryManager.prototype.clearStore = function () {
            this.fetchQueryPromises.forEach(function (_a) {
                var reject = _a.reject;
                reject(new Error('Store reset while query was in flight(not completed in link chain)'));
            });
            var resetIds = [];
            this.queries.forEach(function (_a, queryId) {
                var observableQuery = _a.observableQuery;
                if (observableQuery)
                    resetIds.push(queryId);
            });
            this.queryStore.reset(resetIds);
            this.mutationStore.reset();
            var reset = this.dataStore.reset();
            return reset;
        };
        QueryManager.prototype.resetStore = function () {
            var _this = this;
            return this.clearStore().then(function () {
                return _this.reFetchObservableQueries();
            });
        };
        QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
            var observableQueryPromises = this.getObservableQueryPromises(includeStandby);
            this.broadcastQueries();
            return Promise.all(observableQueryPromises);
        };
        QueryManager.prototype.startQuery = function (queryId, options, listener) {
            this.addQueryListener(queryId, listener);
            this.fetchQuery(queryId, options)
                .catch(function () { return undefined; });
            return queryId;
        };
        QueryManager.prototype.startGraphQLSubscription = function (options) {
            var _this = this;
            var query = options.query;
            var isCacheEnabled = !(options.fetchPolicy && options.fetchPolicy === 'no-cache');
            var cache = this.dataStore.getCache();
            var transformedDoc = cache.transformDocument(query);
            var variables = assign({}, getDefaultValues(getOperationDefinition(query)), options.variables);
            var sub;
            var observers = [];
            return new Observable$2(function (observer) {
                observers.push(observer);
                if (observers.length === 1) {
                    var handler = {
                        next: function (result) {
                            if (isCacheEnabled) {
                                _this.dataStore.markSubscriptionResult(result, transformedDoc, variables);
                                _this.broadcastQueries();
                            }
                            observers.forEach(function (obs) {
                                if (graphQLResultHasError(result) && obs.error) {
                                    obs.error(new ApolloError({
                                        graphQLErrors: result.errors,
                                    }));
                                }
                                else if (obs.next) {
                                    obs.next(result);
                                }
                            });
                        },
                        error: function (error) {
                            observers.forEach(function (obs) {
                                if (obs.error) {
                                    obs.error(error);
                                }
                            });
                        },
                    };
                    var operation = _this.buildOperationForLink(transformedDoc, variables);
                    sub = execute(_this.link, operation).subscribe(handler);
                }
                return function () {
                    observers = observers.filter(function (obs) { return obs !== observer; });
                    if (observers.length === 0 && sub) {
                        sub.unsubscribe();
                    }
                };
            });
        };
        QueryManager.prototype.stopQuery = function (queryId) {
            this.stopQueryInStore(queryId);
            this.removeQuery(queryId);
        };
        QueryManager.prototype.removeQuery = function (queryId) {
            var subscriptions = this.getQuery(queryId).subscriptions;
            subscriptions.forEach(function (x) { return x.unsubscribe(); });
            this.queries.delete(queryId);
        };
        QueryManager.prototype.getCurrentQueryResult = function (observableQuery, optimistic) {
            if (optimistic === void 0) { optimistic = true; }
            var _a = observableQuery.options, variables = _a.variables, query = _a.query;
            var lastResult = observableQuery.getLastResult();
            var newData = this.getQuery(observableQuery.queryId).newData;
            if (newData) {
                return { data: newData.result, partial: false };
            }
            else {
                try {
                    var data = this.dataStore.getCache().read({
                        query: query,
                        variables: variables,
                        previousResult: lastResult ? lastResult.data : undefined,
                        optimistic: optimistic,
                    });
                    return { data: data, partial: false };
                }
                catch (e) {
                    return { data: {}, partial: true };
                }
            }
        };
        QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable) {
            var observableQuery;
            if (typeof queryIdOrObservable === 'string') {
                var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
                if (!foundObserveableQuery) {
                    throw new Error("ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
                }
                observableQuery = foundObserveableQuery;
            }
            else {
                observableQuery = queryIdOrObservable;
            }
            var _a = observableQuery.options, variables = _a.variables, query = _a.query;
            var data = this.getCurrentQueryResult(observableQuery, false).data;
            return {
                previousResult: data,
                variables: variables,
                document: query,
            };
        };
        QueryManager.prototype.broadcastQueries = function () {
            var _this = this;
            this.onBroadcast();
            this.queries.forEach(function (info, id) {
                if (!info.invalidated || !info.listeners)
                    return;
                info.listeners
                    .filter(function (x) { return !!x; })
                    .forEach(function (listener) {
                    listener(_this.queryStore.get(id), info.newData);
                });
            });
        };
        QueryManager.prototype.getObservableQueryPromises = function (includeStandby) {
            var _this = this;
            var observableQueryPromises = [];
            this.queries.forEach(function (_a, queryId) {
                var observableQuery = _a.observableQuery;
                if (!observableQuery)
                    return;
                var fetchPolicy = observableQuery.options.fetchPolicy;
                observableQuery.resetLastResults();
                if (fetchPolicy !== 'cache-only' &&
                    (includeStandby || fetchPolicy !== 'standby')) {
                    observableQueryPromises.push(observableQuery.refetch());
                }
                _this.setQuery(queryId, function () { return ({ newData: null }); });
                _this.invalidate(true, queryId);
            });
            return observableQueryPromises;
        };
        QueryManager.prototype.fetchRequest = function (_a) {
            var _this = this;
            var requestId = _a.requestId, queryId = _a.queryId, document = _a.document, options = _a.options, fetchMoreForQueryId = _a.fetchMoreForQueryId;
            var variables = options.variables, context = options.context, _b = options.errorPolicy, errorPolicy = _b === void 0 ? 'none' : _b, fetchPolicy = options.fetchPolicy;
            var operation = this.buildOperationForLink(document, variables, __assign$7({}, context, { forceFetch: !this.queryDeduplication }));
            var resultFromStore;
            var errorsFromStore;
            return new Promise(function (resolve, reject) {
                _this.addFetchQueryPromise(requestId, resolve, reject);
                var subscription = execute(_this.deduplicator, operation).subscribe({
                    next: function (result) {
                        var lastRequestId = _this.getQuery(queryId).lastRequestId;
                        if (requestId >= (lastRequestId || 1)) {
                            if (fetchPolicy !== 'no-cache') {
                                try {
                                    _this.dataStore.markQueryResult(result, document, variables, fetchMoreForQueryId, errorPolicy === 'ignore' || errorPolicy === 'all');
                                }
                                catch (e) {
                                    reject(e);
                                    return;
                                }
                            }
                            else {
                                _this.setQuery(queryId, function () { return ({
                                    newData: { result: result.data, complete: true },
                                }); });
                            }
                            _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);
                            _this.invalidate(true, queryId, fetchMoreForQueryId);
                            _this.broadcastQueries();
                        }
                        if (result.errors && errorPolicy === 'none') {
                            reject(new ApolloError({
                                graphQLErrors: result.errors,
                            }));
                            return;
                        }
                        else if (errorPolicy === 'all') {
                            errorsFromStore = result.errors;
                        }
                        if (fetchMoreForQueryId || fetchPolicy === 'no-cache') {
                            resultFromStore = result.data;
                        }
                        else {
                            try {
                                resultFromStore = _this.dataStore.getCache().read({
                                    variables: variables,
                                    query: document,
                                    optimistic: false,
                                });
                            }
                            catch (e) { }
                        }
                    },
                    error: function (error) {
                        _this.removeFetchQueryPromise(requestId);
                        _this.setQuery(queryId, function (_a) {
                            var subscriptions = _a.subscriptions;
                            return ({
                                subscriptions: subscriptions.filter(function (x) { return x !== subscription; }),
                            });
                        });
                        reject(error);
                    },
                    complete: function () {
                        _this.removeFetchQueryPromise(requestId);
                        _this.setQuery(queryId, function (_a) {
                            var subscriptions = _a.subscriptions;
                            return ({
                                subscriptions: subscriptions.filter(function (x) { return x !== subscription; }),
                            });
                        });
                        resolve({
                            data: resultFromStore,
                            errors: errorsFromStore,
                            loading: false,
                            networkStatus: NetworkStatus.ready,
                            stale: false,
                        });
                    },
                });
                _this.setQuery(queryId, function (_a) {
                    var subscriptions = _a.subscriptions;
                    return ({
                        subscriptions: subscriptions.concat([subscription]),
                    });
                });
            });
        };
        QueryManager.prototype.refetchQueryByName = function (queryName) {
            var _this = this;
            var refetchedQueries = this.queryIdsByName[queryName];
            if (refetchedQueries === undefined)
                return;
            return Promise.all(refetchedQueries
                .map(function (id) { return _this.getQuery(id).observableQuery; })
                .filter(function (x) { return !!x; })
                .map(function (x) { return x.refetch(); }));
        };
        QueryManager.prototype.generateRequestId = function () {
            var requestId = this.idCounter;
            this.idCounter++;
            return requestId;
        };
        QueryManager.prototype.getQuery = function (queryId) {
            return this.queries.get(queryId) || __assign$7({}, defaultQueryInfo);
        };
        QueryManager.prototype.setQuery = function (queryId, updater) {
            var prev = this.getQuery(queryId);
            var newInfo = __assign$7({}, prev, updater(prev));
            this.queries.set(queryId, newInfo);
        };
        QueryManager.prototype.invalidate = function (invalidated, queryId, fetchMoreForQueryId) {
            if (queryId)
                this.setQuery(queryId, function () { return ({ invalidated: invalidated }); });
            if (fetchMoreForQueryId) {
                this.setQuery(fetchMoreForQueryId, function () { return ({ invalidated: invalidated }); });
            }
        };
        QueryManager.prototype.buildOperationForLink = function (document, variables, extraContext) {
            var cache = this.dataStore.getCache();
            return {
                query: cache.transformForLink
                    ? cache.transformForLink(document)
                    : document,
                variables: variables,
                operationName: getOperationName(document) || undefined,
                context: __assign$7({}, extraContext, { cache: cache, getCacheKey: function (obj) {
                        if (cache.config) {
                            return cache.config.dataIdFromObject(obj);
                        }
                        else {
                            throw new Error('To use context.getCacheKey, you need to use a cache that has a configurable dataIdFromObject, like apollo-cache-inmemory.');
                        }
                    } }),
            };
        };
        return QueryManager;
    }());

    var DataStore = (function () {
        function DataStore(initialCache) {
            this.cache = initialCache;
        }
        DataStore.prototype.getCache = function () {
            return this.cache;
        };
        DataStore.prototype.markQueryResult = function (result, document, variables, fetchMoreForQueryId, ignoreErrors) {
            if (ignoreErrors === void 0) { ignoreErrors = false; }
            var writeWithErrors = !graphQLResultHasError(result);
            if (ignoreErrors && graphQLResultHasError(result) && result.data) {
                writeWithErrors = true;
            }
            if (!fetchMoreForQueryId && writeWithErrors) {
                this.cache.write({
                    result: result.data,
                    dataId: 'ROOT_QUERY',
                    query: document,
                    variables: variables,
                });
            }
        };
        DataStore.prototype.markSubscriptionResult = function (result, document, variables) {
            if (!graphQLResultHasError(result)) {
                this.cache.write({
                    result: result.data,
                    dataId: 'ROOT_SUBSCRIPTION',
                    query: document,
                    variables: variables,
                });
            }
        };
        DataStore.prototype.markMutationInit = function (mutation) {
            var _this = this;
            if (mutation.optimisticResponse) {
                var optimistic_1;
                if (typeof mutation.optimisticResponse === 'function') {
                    optimistic_1 = mutation.optimisticResponse(mutation.variables);
                }
                else {
                    optimistic_1 = mutation.optimisticResponse;
                }
                var changeFn_1 = function () {
                    _this.markMutationResult({
                        mutationId: mutation.mutationId,
                        result: { data: optimistic_1 },
                        document: mutation.document,
                        variables: mutation.variables,
                        updateQueries: mutation.updateQueries,
                        update: mutation.update,
                    });
                };
                this.cache.recordOptimisticTransaction(function (c) {
                    var orig = _this.cache;
                    _this.cache = c;
                    try {
                        changeFn_1();
                    }
                    finally {
                        _this.cache = orig;
                    }
                }, mutation.mutationId);
            }
        };
        DataStore.prototype.markMutationResult = function (mutation) {
            var _this = this;
            if (!graphQLResultHasError(mutation.result)) {
                var cacheWrites_1 = [];
                cacheWrites_1.push({
                    result: mutation.result.data,
                    dataId: 'ROOT_MUTATION',
                    query: mutation.document,
                    variables: mutation.variables,
                });
                if (mutation.updateQueries) {
                    Object.keys(mutation.updateQueries)
                        .filter(function (id) { return mutation.updateQueries[id]; })
                        .forEach(function (queryId) {
                        var _a = mutation.updateQueries[queryId], query = _a.query, updater = _a.updater;
                        var _b = _this.cache.diff({
                            query: query.document,
                            variables: query.variables,
                            returnPartialData: true,
                            optimistic: false,
                        }), currentQueryResult = _b.result, complete = _b.complete;
                        if (!complete) {
                            return;
                        }
                        var nextQueryResult = tryFunctionOrLogError(function () {
                            return updater(currentQueryResult, {
                                mutationResult: mutation.result,
                                queryName: getOperationName(query.document) || undefined,
                                queryVariables: query.variables,
                            });
                        });
                        if (nextQueryResult) {
                            cacheWrites_1.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: query.document,
                                variables: query.variables,
                            });
                        }
                    });
                }
                this.cache.performTransaction(function (c) {
                    cacheWrites_1.forEach(function (write) { return c.write(write); });
                });
                var update_1 = mutation.update;
                if (update_1) {
                    this.cache.performTransaction(function (c) {
                        tryFunctionOrLogError(function () { return update_1(c, mutation.result); });
                    });
                }
            }
        };
        DataStore.prototype.markMutationComplete = function (_a) {
            var mutationId = _a.mutationId, optimisticResponse = _a.optimisticResponse;
            if (!optimisticResponse)
                return;
            this.cache.removeOptimistic(mutationId);
        };
        DataStore.prototype.markUpdateQueryResult = function (document, variables, newResult) {
            this.cache.write({
                result: newResult,
                dataId: 'ROOT_QUERY',
                variables: variables,
                query: document,
            });
        };
        DataStore.prototype.reset = function () {
            return this.cache.reset();
        };
        return DataStore;
    }());

    var version_1 = "2.4.2";

    var __assign$8 = (undefined && undefined.__assign) || function () {
        __assign$8 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$8.apply(this, arguments);
    };
    var hasSuggestedDevtools = false;
    var supportedDirectives = new ApolloLink(function (operation, forward) {
        operation.query = removeConnectionDirectiveFromDocument(operation.query);
        return forward(operation);
    });
    var ApolloClient = (function () {
        function ApolloClient(options) {
            var _this = this;
            this.defaultOptions = {};
            this.resetStoreCallbacks = [];
            var link = options.link, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions = options.defaultOptions;
            if (!link || !cache) {
                throw new Error("\n        In order to initialize Apollo Client, you must specify link & cache properties on the config object.\n        This is part of the required upgrade when migrating from Apollo Client 1.0 to Apollo Client 2.0.\n        For more information, please visit:\n          https://www.apollographql.com/docs/react/basics/setup.html\n        to help you get started.\n      ");
            }
            this.link = supportedDirectives.concat(link);
            this.cache = cache;
            this.store = new DataStore(cache);
            this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
            this.queryDeduplication = queryDeduplication;
            this.ssrMode = ssrMode;
            this.defaultOptions = defaultOptions || {};
            if (ssrForceFetchDelay) {
                setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
            }
            this.watchQuery = this.watchQuery.bind(this);
            this.query = this.query.bind(this);
            this.mutate = this.mutate.bind(this);
            this.resetStore = this.resetStore.bind(this);
            this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
            var defaultConnectToDevTools = !isProduction() &&
                typeof window !== 'undefined' &&
                !window.__APOLLO_CLIENT__;
            if (typeof connectToDevTools === 'undefined'
                ? defaultConnectToDevTools
                : connectToDevTools && typeof window !== 'undefined') {
                window.__APOLLO_CLIENT__ = this;
            }
            if (!hasSuggestedDevtools && !isProduction()) {
                hasSuggestedDevtools = true;
                if (typeof window !== 'undefined' &&
                    window.document &&
                    window.top === window.self) {
                    if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                        if (window.navigator &&
                            window.navigator.userAgent.indexOf('Chrome') > -1) {
                            console.debug('Download the Apollo DevTools ' +
                                'for a better development experience: ' +
                                'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
                        }
                    }
                }
            }
            this.version = version_1;
        }
        ApolloClient.prototype.watchQuery = function (options) {
            if (this.defaultOptions.watchQuery) {
                options = __assign$8({}, this.defaultOptions.watchQuery, options);
            }
            if (this.disableNetworkFetches &&
                (options.fetchPolicy === 'network-only' ||
                    options.fetchPolicy === 'cache-and-network')) {
                options = __assign$8({}, options, { fetchPolicy: 'cache-first' });
            }
            return this.initQueryManager().watchQuery(options);
        };
        ApolloClient.prototype.query = function (options) {
            if (this.defaultOptions.query) {
                options = __assign$8({}, this.defaultOptions.query, options);
            }
            if (options.fetchPolicy === 'cache-and-network') {
                throw new Error('cache-and-network fetchPolicy can only be used with watchQuery');
            }
            if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
                options = __assign$8({}, options, { fetchPolicy: 'cache-first' });
            }
            return this.initQueryManager().query(options);
        };
        ApolloClient.prototype.mutate = function (options) {
            if (this.defaultOptions.mutate) {
                options = __assign$8({}, this.defaultOptions.mutate, options);
            }
            return this.initQueryManager().mutate(options);
        };
        ApolloClient.prototype.subscribe = function (options) {
            return this.initQueryManager().startGraphQLSubscription(options);
        };
        ApolloClient.prototype.readQuery = function (options, optimistic) {
            if (optimistic === void 0) { optimistic = false; }
            return this.initProxy().readQuery(options, optimistic);
        };
        ApolloClient.prototype.readFragment = function (options, optimistic) {
            if (optimistic === void 0) { optimistic = false; }
            return this.initProxy().readFragment(options, optimistic);
        };
        ApolloClient.prototype.writeQuery = function (options) {
            var result = this.initProxy().writeQuery(options);
            this.initQueryManager().broadcastQueries();
            return result;
        };
        ApolloClient.prototype.writeFragment = function (options) {
            var result = this.initProxy().writeFragment(options);
            this.initQueryManager().broadcastQueries();
            return result;
        };
        ApolloClient.prototype.writeData = function (options) {
            var result = this.initProxy().writeData(options);
            this.initQueryManager().broadcastQueries();
            return result;
        };
        ApolloClient.prototype.__actionHookForDevTools = function (cb) {
            this.devToolsHookCb = cb;
        };
        ApolloClient.prototype.__requestRaw = function (payload) {
            return execute(this.link, payload);
        };
        ApolloClient.prototype.initQueryManager = function () {
            var _this = this;
            if (!this.queryManager) {
                this.queryManager = new QueryManager({
                    link: this.link,
                    store: this.store,
                    queryDeduplication: this.queryDeduplication,
                    ssrMode: this.ssrMode,
                    onBroadcast: function () {
                        if (_this.devToolsHookCb) {
                            _this.devToolsHookCb({
                                action: {},
                                state: {
                                    queries: _this.queryManager
                                        ? _this.queryManager.queryStore.getStore()
                                        : {},
                                    mutations: _this.queryManager
                                        ? _this.queryManager.mutationStore.getStore()
                                        : {},
                                },
                                dataWithOptimisticResults: _this.cache.extract(true),
                            });
                        }
                    },
                });
            }
            return this.queryManager;
        };
        ApolloClient.prototype.resetStore = function () {
            var _this = this;
            return Promise.resolve()
                .then(function () {
                return _this.queryManager
                    ? _this.queryManager.clearStore()
                    : Promise.resolve(null);
            })
                .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
                .then(function () {
                return _this.queryManager && _this.queryManager.reFetchObservableQueries
                    ? _this.queryManager.reFetchObservableQueries()
                    : Promise.resolve(null);
            });
        };
        ApolloClient.prototype.clearStore = function () {
            var queryManager = this.queryManager;
            return Promise.resolve().then(function () { return (queryManager ? queryManager.clearStore() : Promise.resolve(null)); });
        };
        ApolloClient.prototype.onResetStore = function (cb) {
            var _this = this;
            this.resetStoreCallbacks.push(cb);
            return function () {
                _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
            };
        };
        ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
            return this.queryManager
                ? this.queryManager.reFetchObservableQueries(includeStandby)
                : Promise.resolve(null);
        };
        ApolloClient.prototype.extract = function (optimistic) {
            return this.initProxy().extract(optimistic);
        };
        ApolloClient.prototype.restore = function (serializedState) {
            return this.initProxy().restore(serializedState);
        };
        ApolloClient.prototype.initProxy = function () {
            if (!this.proxy) {
                this.initQueryManager();
                this.proxy = this.cache;
            }
            return this.proxy;
        };
        return ApolloClient;
    }());

    function queryFromPojo(obj) {
        var op = {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {
                kind: 'Name',
                value: 'GeneratedClientQuery',
            },
            selectionSet: selectionSetFromObj(obj),
        };
        var out = {
            kind: 'Document',
            definitions: [op],
        };
        return out;
    }
    function fragmentFromPojo(obj, typename) {
        var frag = {
            kind: 'FragmentDefinition',
            typeCondition: {
                kind: 'NamedType',
                name: {
                    kind: 'Name',
                    value: typename || '__FakeType',
                },
            },
            name: {
                kind: 'Name',
                value: 'GeneratedClientQuery',
            },
            selectionSet: selectionSetFromObj(obj),
        };
        var out = {
            kind: 'Document',
            definitions: [frag],
        };
        return out;
    }
    function selectionSetFromObj(obj) {
        if (typeof obj === 'number' ||
            typeof obj === 'boolean' ||
            typeof obj === 'string' ||
            typeof obj === 'undefined' ||
            obj === null) {
            return null;
        }
        if (Array.isArray(obj)) {
            return selectionSetFromObj(obj[0]);
        }
        var selections = [];
        Object.keys(obj).forEach(function (key) {
            var field = {
                kind: 'Field',
                name: {
                    kind: 'Name',
                    value: key,
                },
            };
            var nestedSelSet = selectionSetFromObj(obj[key]);
            if (nestedSelSet) {
                field.selectionSet = nestedSelSet;
            }
            selections.push(field);
        });
        var selectionSet = {
            kind: 'SelectionSet',
            selections: selections,
        };
        return selectionSet;
    }
    var justTypenameQuery = {
        kind: 'Document',
        definitions: [
            {
                kind: 'OperationDefinition',
                operation: 'query',
                name: null,
                variableDefinitions: null,
                directives: [],
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'Field',
                            alias: null,
                            name: {
                                kind: 'Name',
                                value: '__typename',
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: null,
                        },
                    ],
                },
            },
        ],
    };

    var ApolloCache = (function () {
        function ApolloCache() {
        }
        ApolloCache.prototype.transformDocument = function (document) {
            return document;
        };
        ApolloCache.prototype.transformForLink = function (document) {
            return document;
        };
        ApolloCache.prototype.readQuery = function (options, optimistic) {
            if (optimistic === void 0) { optimistic = false; }
            return this.read({
                query: options.query,
                variables: options.variables,
                optimistic: optimistic,
            });
        };
        ApolloCache.prototype.readFragment = function (options, optimistic) {
            if (optimistic === void 0) { optimistic = false; }
            return this.read({
                query: getFragmentQueryDocument(options.fragment, options.fragmentName),
                variables: options.variables,
                rootId: options.id,
                optimistic: optimistic,
            });
        };
        ApolloCache.prototype.writeQuery = function (options) {
            this.write({
                dataId: 'ROOT_QUERY',
                result: options.data,
                query: options.query,
                variables: options.variables,
            });
        };
        ApolloCache.prototype.writeFragment = function (options) {
            this.write({
                dataId: options.id,
                result: options.data,
                variables: options.variables,
                query: getFragmentQueryDocument(options.fragment, options.fragmentName),
            });
        };
        ApolloCache.prototype.writeData = function (_a) {
            var id = _a.id, data = _a.data;
            if (typeof id !== 'undefined') {
                var typenameResult = null;
                try {
                    typenameResult = this.read({
                        rootId: id,
                        optimistic: false,
                        query: justTypenameQuery,
                    });
                }
                catch (e) {
                }
                var __typename = (typenameResult && typenameResult.__typename) || '__ClientData';
                var dataToWrite = Object.assign({ __typename: __typename }, data);
                this.writeFragment({
                    id: id,
                    fragment: fragmentFromPojo(dataToWrite, __typename),
                    data: dataToWrite,
                });
            }
            else {
                this.writeQuery({ query: queryFromPojo(data), data: data });
            }
        };
        return ApolloCache;
    }());

    var haveWarned$1 = false;
    var HeuristicFragmentMatcher = (function () {
        function HeuristicFragmentMatcher() {
        }
        HeuristicFragmentMatcher.prototype.ensureReady = function () {
            return Promise.resolve();
        };
        HeuristicFragmentMatcher.prototype.canBypassInit = function () {
            return true;
        };
        HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
            var obj = context.store.get(idValue.id);
            if (!obj && idValue.id === 'ROOT_QUERY') {
                return true;
            }
            if (!obj) {
                return false;
            }
            if (!obj.__typename) {
                if (!haveWarned$1) {
                    console.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
                    console.warn('Could not find __typename on Fragment ', typeCondition, obj);
                    console.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " +
                        "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
                    if (!isTest()) {
                        haveWarned$1 = true;
                    }
                }
                context.returnPartialData = true;
                return true;
            }
            if (obj.__typename === typeCondition) {
                return true;
            }
            warnOnceInDevelopment('You are using the simple (heuristic) fragment matcher, but your ' +
                'queries contain union or interface types. Apollo Client will not be ' +
                'able to accurately map fragments. To make this error go away, use ' +
                'the `IntrospectionFragmentMatcher` as described in the docs: ' +
                'https://www.apollographql.com/docs/react/recipes/fragment-matching.html', 'error');
            context.returnPartialData = true;
            return true;
        };
        return HeuristicFragmentMatcher;
    }());

    var ObjectCache = (function () {
        function ObjectCache(data) {
            if (data === void 0) { data = Object.create(null); }
            this.data = data;
        }
        ObjectCache.prototype.toObject = function () {
            return this.data;
        };
        ObjectCache.prototype.get = function (dataId) {
            return this.data[dataId];
        };
        ObjectCache.prototype.set = function (dataId, value) {
            this.data[dataId] = value;
        };
        ObjectCache.prototype.delete = function (dataId) {
            this.data[dataId] = undefined;
        };
        ObjectCache.prototype.clear = function () {
            this.data = Object.create(null);
        };
        ObjectCache.prototype.replace = function (newData) {
            this.data = newData || Object.create(null);
        };
        return ObjectCache;
    }());
    function defaultNormalizedCacheFactory(seed) {
        return new ObjectCache(seed);
    }

    var __extends$6 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$9 = (undefined && undefined.__assign) || function () {
        __assign$9 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$9.apply(this, arguments);
    };
    var WriteError = (function (_super) {
        __extends$6(WriteError, _super);
        function WriteError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = 'WriteError';
            return _this;
        }
        return WriteError;
    }(Error));
    function enhanceErrorWithDocument(error, document) {
        var enhancedError = new WriteError("Error writing result to store for query:\n " + printer_1(document));
        enhancedError.message += '\n' + error.message;
        enhancedError.stack = error.stack;
        return enhancedError;
    }
    function writeResultToStore(_a) {
        var dataId = _a.dataId, result = _a.result, document = _a.document, _b = _a.storeFactory, storeFactory = _b === void 0 ? defaultNormalizedCacheFactory : _b, _c = _a.store, store = _c === void 0 ? storeFactory() : _c, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
        var operationDefinition = getOperationDefinition(document);
        var selectionSet = operationDefinition.selectionSet;
        var fragmentMap = createFragmentMap(getFragmentDefinitions(document));
        variables = assign({}, getDefaultValues(operationDefinition), variables);
        try {
            return writeSelectionSetToStore({
                result: result,
                dataId: dataId,
                selectionSet: selectionSet,
                context: {
                    store: store,
                    storeFactory: storeFactory,
                    processedData: {},
                    variables: variables,
                    dataIdFromObject: dataIdFromObject,
                    fragmentMap: fragmentMap,
                    fragmentMatcherFunction: fragmentMatcherFunction,
                },
            });
        }
        catch (e) {
            throw enhanceErrorWithDocument(e, document);
        }
    }
    function writeSelectionSetToStore(_a) {
        var result = _a.result, dataId = _a.dataId, selectionSet = _a.selectionSet, context = _a.context;
        var variables = context.variables, store = context.store, fragmentMap = context.fragmentMap;
        selectionSet.selections.forEach(function (selection) {
            var included = shouldInclude(selection, variables);
            if (isField(selection)) {
                var resultFieldKey = resultKeyNameFromField(selection);
                var value = result[resultFieldKey];
                if (included) {
                    if (typeof value !== 'undefined') {
                        writeFieldToStore({
                            dataId: dataId,
                            value: value,
                            field: selection,
                            context: context,
                        });
                    }
                    else {
                        var isDefered = selection.directives &&
                            selection.directives.length &&
                            selection.directives.some(function (directive) { return directive.name && directive.name.value === 'defer'; });
                        if (!isDefered && context.fragmentMatcherFunction) {
                            if (!isProduction()) {
                                console.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                            }
                        }
                    }
                }
            }
            else {
                var fragment = void 0;
                if (isInlineFragment(selection)) {
                    fragment = selection;
                }
                else {
                    fragment = (fragmentMap || {})[selection.name.value];
                    if (!fragment) {
                        throw new Error("No fragment named " + selection.name.value + ".");
                    }
                }
                var matches = true;
                if (context.fragmentMatcherFunction && fragment.typeCondition) {
                    var idValue = toIdValue({ id: 'self', typename: undefined });
                    var fakeContext = {
                        store: new ObjectCache({ self: result }),
                        returnPartialData: false,
                        hasMissingField: false,
                        cacheRedirects: {},
                    };
                    matches = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                    if (!isProduction() && fakeContext.returnPartialData) {
                        console.error('WARNING: heuristic fragment matching going on!');
                    }
                }
                if (included && matches) {
                    writeSelectionSetToStore({
                        result: result,
                        selectionSet: fragment.selectionSet,
                        dataId: dataId,
                        context: context,
                    });
                }
            }
        });
        return store;
    }
    function isGeneratedId(id) {
        return id[0] === '$';
    }
    function mergeWithGenerated(generatedKey, realKey, cache) {
        var generated = cache.get(generatedKey);
        var real = cache.get(realKey);
        Object.keys(generated).forEach(function (key) {
            var value = generated[key];
            var realValue = real[key];
            if (isIdValue(value) && isGeneratedId(value.id) && isIdValue(realValue)) {
                mergeWithGenerated(value.id, realValue.id, cache);
            }
            cache.delete(generatedKey);
            cache.set(realKey, __assign$9({}, generated, real));
        });
    }
    function isDataProcessed(dataId, field, processedData) {
        if (!processedData) {
            return false;
        }
        if (processedData[dataId]) {
            if (processedData[dataId].indexOf(field) >= 0) {
                return true;
            }
            else {
                processedData[dataId].push(field);
            }
        }
        else {
            processedData[dataId] = [field];
        }
        return false;
    }
    function writeFieldToStore(_a) {
        var field = _a.field, value = _a.value, dataId = _a.dataId, context = _a.context;
        var _b;
        var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store;
        var storeValue;
        var storeObject;
        var storeFieldName = storeKeyNameFromField(field, variables);
        var shouldMerge = false;
        var generatedKey = '';
        if (!field.selectionSet || value === null) {
            storeValue =
                value != null && typeof value === 'object'
                    ?
                        { type: 'json', json: value }
                    :
                        value;
        }
        else if (Array.isArray(value)) {
            var generatedId = dataId + "." + storeFieldName;
            storeValue = processArrayValue(value, generatedId, field.selectionSet, context);
        }
        else {
            var valueDataId = dataId + "." + storeFieldName;
            var generated = true;
            if (!isGeneratedId(valueDataId)) {
                valueDataId = '$' + valueDataId;
            }
            if (dataIdFromObject) {
                var semanticId = dataIdFromObject(value);
                if (semanticId && isGeneratedId(semanticId)) {
                    throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.');
                }
                if (semanticId || (typeof semanticId === 'number' && semanticId === 0)) {
                    valueDataId = semanticId;
                    generated = false;
                }
            }
            if (!isDataProcessed(valueDataId, field, context.processedData)) {
                writeSelectionSetToStore({
                    dataId: valueDataId,
                    result: value,
                    selectionSet: field.selectionSet,
                    context: context,
                });
            }
            var typename = value.__typename;
            storeValue = toIdValue({ id: valueDataId, typename: typename }, generated);
            storeObject = store.get(dataId);
            var escapedId = storeObject && storeObject[storeFieldName];
            if (escapedId !== storeValue && isIdValue(escapedId)) {
                var hadTypename = escapedId.typename !== undefined;
                var hasTypename = typename !== undefined;
                var typenameChanged = hadTypename && hasTypename && escapedId.typename !== typename;
                if (generated && !escapedId.generated && !typenameChanged) {
                    throw new Error("Store error: the application attempted to write an object with no provided id" +
                        (" but the store already contains an id of " + escapedId.id + " for this object. The selectionSet") +
                        " that was trying to be written is:\n" +
                        printer_1(field));
                }
                if (hadTypename && !hasTypename) {
                    throw new Error("Store error: the application attempted to write an object with no provided typename" +
                        (" but the store already contains an object with typename of " + escapedId.typename + " for the object of id " + escapedId.id + ". The selectionSet") +
                        " that was trying to be written is:\n" +
                        printer_1(field));
                }
                if (escapedId.generated) {
                    generatedKey = escapedId.id;
                    if (typenameChanged) {
                        if (!generated) {
                            store.delete(generatedKey);
                        }
                    }
                    else {
                        shouldMerge = true;
                    }
                }
            }
        }
        var newStoreObj = __assign$9({}, store.get(dataId), (_b = {}, _b[storeFieldName] = storeValue, _b));
        if (shouldMerge) {
            mergeWithGenerated(generatedKey, storeValue.id, store);
        }
        storeObject = store.get(dataId);
        if (!storeObject || storeValue !== storeObject[storeFieldName]) {
            store.set(dataId, newStoreObj);
        }
    }
    function processArrayValue(value, generatedId, selectionSet, context) {
        return value.map(function (item, index) {
            if (item === null) {
                return null;
            }
            var itemDataId = generatedId + "." + index;
            if (Array.isArray(item)) {
                return processArrayValue(item, itemDataId, selectionSet, context);
            }
            var generated = true;
            if (context.dataIdFromObject) {
                var semanticId = context.dataIdFromObject(item);
                if (semanticId) {
                    itemDataId = semanticId;
                    generated = false;
                }
            }
            if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
                writeSelectionSetToStore({
                    dataId: itemDataId,
                    result: item,
                    selectionSet: selectionSet,
                    context: context,
                });
            }
            return toIdValue({ id: itemDataId, typename: item.__typename }, generated);
        });
    }

    function graphql(resolver, document, rootValue, contextValue, variableValues, execOptions) {
        if (execOptions === void 0) { execOptions = {}; }
        var mainDefinition = getMainDefinition(document);
        var fragments = getFragmentDefinitions(document);
        var fragmentMap = createFragmentMap(fragments);
        var resultMapper = execOptions.resultMapper;
        var fragmentMatcher = execOptions.fragmentMatcher || (function () { return true; });
        var execContext = {
            fragmentMap: fragmentMap,
            contextValue: contextValue,
            variableValues: variableValues,
            resultMapper: resultMapper,
            resolver: resolver,
            fragmentMatcher: fragmentMatcher,
        };
        return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
    }
    function executeSelectionSet(selectionSet, rootValue, execContext) {
        var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
        var result = {};
        selectionSet.selections.forEach(function (selection) {
            if (!shouldInclude(selection, variables)) {
                return;
            }
            if (isField(selection)) {
                var fieldResult = executeField(selection, rootValue, execContext);
                var resultFieldKey = resultKeyNameFromField(selection);
                if (fieldResult !== undefined) {
                    if (result[resultFieldKey] === undefined) {
                        result[resultFieldKey] = fieldResult;
                    }
                    else {
                        merge(result[resultFieldKey], fieldResult);
                    }
                }
            }
            else {
                var fragment = void 0;
                if (isInlineFragment(selection)) {
                    fragment = selection;
                }
                else {
                    fragment = fragmentMap[selection.name.value];
                    if (!fragment) {
                        throw new Error("No fragment named " + selection.name.value);
                    }
                }
                var typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                    var fragmentResult = executeSelectionSet(fragment.selectionSet, rootValue, execContext);
                    merge(result, fragmentResult);
                }
            }
        });
        if (execContext.resultMapper) {
            return execContext.resultMapper(result, rootValue);
        }
        return result;
    }
    function executeField(field, rootValue, execContext) {
        var variables = execContext.variableValues, contextValue = execContext.contextValue, resolver = execContext.resolver;
        var fieldName = field.name.value;
        var args = argumentsObjectFromField(field, variables);
        var info = {
            isLeaf: !field.selectionSet,
            resultKey: resultKeyNameFromField(field),
            directives: getDirectiveInfoFromField(field, variables),
        };
        var result = resolver(fieldName, rootValue, args, contextValue, info);
        if (!field.selectionSet) {
            return result;
        }
        if (result == null) {
            return result;
        }
        if (Array.isArray(result)) {
            return executeSubSelectedArray(field, result, execContext);
        }
        return executeSelectionSet(field.selectionSet, result, execContext);
    }
    function executeSubSelectedArray(field, result, execContext) {
        return result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return executeSubSelectedArray(field, item, execContext);
            }
            return executeSelectionSet(field.selectionSet, item, execContext);
        });
    }
    var hasOwn = Object.prototype.hasOwnProperty;
    function merge(dest, src) {
        if (src !== null && typeof src === 'object') {
            Object.keys(src).forEach(function (key) {
                var srcVal = src[key];
                if (!hasOwn.call(dest, key)) {
                    dest[key] = srcVal;
                }
                else {
                    merge(dest[key], srcVal);
                }
            });
        }
    }

    var __assign$a = (undefined && undefined.__assign) || function () {
        __assign$a = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$a.apply(this, arguments);
    };
    var ID_KEY = typeof Symbol !== 'undefined' ? Symbol('id') : '@@id';
    function readQueryFromStore(options) {
        var optsPatch = { returnPartialData: false };
        return diffQueryAgainstStore(__assign$a({}, options, optsPatch)).result;
    }
    var readStoreResolver = function (fieldName, idValue, args, context, _a) {
        var resultKey = _a.resultKey, directives = _a.directives;
        assertIdValue(idValue);
        var objId = idValue.id;
        var obj = context.store.get(objId);
        var storeKeyName = fieldName;
        if (args || directives) {
            storeKeyName = getStoreKeyName(storeKeyName, args, directives);
        }
        var fieldValue = void 0;
        if (obj) {
            fieldValue = obj[storeKeyName];
            if (typeof fieldValue === 'undefined' &&
                context.cacheRedirects &&
                (obj.__typename || objId === 'ROOT_QUERY')) {
                var typename = obj.__typename || 'Query';
                var type = context.cacheRedirects[typename];
                if (type) {
                    var resolver = type[fieldName];
                    if (resolver) {
                        fieldValue = resolver(obj, args, {
                            getCacheKey: function (storeObj) {
                                return toIdValue({
                                    id: context.dataIdFromObject(storeObj),
                                    typename: storeObj.__typename,
                                });
                            },
                        });
                    }
                }
            }
        }
        if (typeof fieldValue === 'undefined') {
            if (!context.returnPartialData) {
                throw new Error("Can't find field " + storeKeyName + " on object (" + objId + ") " + JSON.stringify(obj, null, 2) + ".");
            }
            context.hasMissingField = true;
            return fieldValue;
        }
        if (isJsonValue(fieldValue)) {
            if (idValue.previousResult &&
                isEqual$1(idValue.previousResult[resultKey], fieldValue.json)) {
                return idValue.previousResult[resultKey];
            }
            return fieldValue.json;
        }
        if (idValue.previousResult) {
            fieldValue = addPreviousResultToIdValues(fieldValue, idValue.previousResult[resultKey]);
        }
        return fieldValue;
    };
    function diffQueryAgainstStore(_a) {
        var store = _a.store, query = _a.query, variables = _a.variables, previousResult = _a.previousResult, _b = _a.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a.rootId, rootId = _c === void 0 ? 'ROOT_QUERY' : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction, config = _a.config;
        var queryDefinition = getQueryDefinition(query);
        variables = assign({}, getDefaultValues(queryDefinition), variables);
        var context = {
            store: store,
            returnPartialData: returnPartialData,
            dataIdFromObject: (config && config.dataIdFromObject) || null,
            cacheRedirects: (config && config.cacheRedirects) || {},
            hasMissingField: false,
        };
        var rootIdValue = {
            type: 'id',
            id: rootId,
            previousResult: previousResult,
        };
        var result = graphql(readStoreResolver, query, rootIdValue, context, variables, {
            fragmentMatcher: fragmentMatcherFunction,
            resultMapper: resultMapper,
        });
        return {
            result: result,
            complete: !context.hasMissingField,
        };
    }
    function assertIdValue(idValue) {
        if (!isIdValue(idValue)) {
            throw new Error("Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
        }
    }
    function addPreviousResultToIdValues(value, previousResult) {
        if (isIdValue(value)) {
            return __assign$a({}, value, { previousResult: previousResult });
        }
        else if (Array.isArray(value)) {
            var idToPreviousResult_1 = new Map();
            if (Array.isArray(previousResult)) {
                previousResult.forEach(function (item) {
                    if (item && item[ID_KEY]) {
                        idToPreviousResult_1.set(item[ID_KEY], item);
                    }
                });
            }
            return value.map(function (item, i) {
                var itemPreviousResult = previousResult && previousResult[i];
                if (isIdValue(item)) {
                    itemPreviousResult =
                        idToPreviousResult_1.get(item.id) || itemPreviousResult;
                }
                return addPreviousResultToIdValues(item, itemPreviousResult);
            });
        }
        return value;
    }
    function resultMapper(resultFields, idValue) {
        if (idValue.previousResult) {
            var currentResultKeys_1 = Object.keys(resultFields);
            var sameAsPreviousResult = Object.keys(idValue.previousResult).every(function (key) { return currentResultKeys_1.indexOf(key) > -1; }) &&
                currentResultKeys_1.every(function (key) {
                    return areNestedArrayItemsStrictlyEqual(resultFields[key], idValue.previousResult[key]);
                });
            if (sameAsPreviousResult) {
                return idValue.previousResult;
            }
        }
        Object.defineProperty(resultFields, ID_KEY, {
            enumerable: false,
            configurable: true,
            writable: false,
            value: idValue.id,
        });
        return resultFields;
    }
    function areNestedArrayItemsStrictlyEqual(a, b) {
        if (a === b) {
            return true;
        }
        if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
            return false;
        }
        return a.every(function (item, i) { return areNestedArrayItemsStrictlyEqual(item, b[i]); });
    }

    var __assign$b = (undefined && undefined.__assign) || function () {
        __assign$b = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$b.apply(this, arguments);
    };
    var RecordingCache = (function () {
        function RecordingCache(data) {
            if (data === void 0) { data = {}; }
            this.data = data;
            this.recordedData = {};
        }
        RecordingCache.prototype.record = function (transaction) {
            transaction(this);
            var recordedData = this.recordedData;
            this.recordedData = {};
            return recordedData;
        };
        RecordingCache.prototype.toObject = function () {
            return __assign$b({}, this.data, this.recordedData);
        };
        RecordingCache.prototype.get = function (dataId) {
            if (this.recordedData.hasOwnProperty(dataId)) {
                return this.recordedData[dataId];
            }
            return this.data[dataId];
        };
        RecordingCache.prototype.set = function (dataId, value) {
            if (this.get(dataId) !== value) {
                this.recordedData[dataId] = value;
            }
        };
        RecordingCache.prototype.delete = function (dataId) {
            this.recordedData[dataId] = undefined;
        };
        RecordingCache.prototype.clear = function () {
            var _this = this;
            Object.keys(this.data).forEach(function (dataId) { return _this.delete(dataId); });
            this.recordedData = {};
        };
        RecordingCache.prototype.replace = function (newData) {
            this.clear();
            this.recordedData = __assign$b({}, newData);
        };
        return RecordingCache;
    }());
    function record(startingState, transaction) {
        var recordingCache = new RecordingCache(startingState);
        return recordingCache.record(transaction);
    }

    var __extends$7 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$c = (undefined && undefined.__assign) || function () {
        __assign$c = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$c.apply(this, arguments);
    };
    var defaultConfig = {
        fragmentMatcher: new HeuristicFragmentMatcher(),
        dataIdFromObject: defaultDataIdFromObject,
        addTypename: true,
        storeFactory: defaultNormalizedCacheFactory,
    };
    function defaultDataIdFromObject(result) {
        if (result.__typename) {
            if (result.id !== undefined) {
                return result.__typename + ":" + result.id;
            }
            if (result._id !== undefined) {
                return result.__typename + ":" + result._id;
            }
        }
        return null;
    }
    var InMemoryCache = (function (_super) {
        __extends$7(InMemoryCache, _super);
        function InMemoryCache(config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this) || this;
            _this.optimistic = [];
            _this.watches = [];
            _this.typenameDocumentCache = new WeakMap();
            _this.silenceBroadcast = false;
            _this.config = __assign$c({}, defaultConfig, config);
            if (_this.config.customResolvers) {
                console.warn('customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.');
                _this.config.cacheRedirects = _this.config.customResolvers;
            }
            if (_this.config.cacheResolvers) {
                console.warn('cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.');
                _this.config.cacheRedirects = _this.config.cacheResolvers;
            }
            _this.addTypename = _this.config.addTypename;
            _this.data = _this.config.storeFactory();
            return _this;
        }
        InMemoryCache.prototype.restore = function (data) {
            if (data)
                this.data.replace(data);
            return this;
        };
        InMemoryCache.prototype.extract = function (optimistic) {
            if (optimistic === void 0) { optimistic = false; }
            if (optimistic && this.optimistic.length > 0) {
                var patches = this.optimistic.map(function (opt) { return opt.data; });
                return Object.assign.apply(Object, [{}, this.data.toObject()].concat(patches));
            }
            return this.data.toObject();
        };
        InMemoryCache.prototype.read = function (query) {
            if (query.rootId && this.data.get(query.rootId) === undefined) {
                return null;
            }
            return readQueryFromStore({
                store: this.config.storeFactory(this.extract(query.optimistic)),
                query: this.transformDocument(query.query),
                variables: query.variables,
                rootId: query.rootId,
                fragmentMatcherFunction: this.config.fragmentMatcher.match,
                previousResult: query.previousResult,
                config: this.config,
            });
        };
        InMemoryCache.prototype.write = function (write) {
            writeResultToStore({
                dataId: write.dataId,
                result: write.result,
                variables: write.variables,
                document: this.transformDocument(write.query),
                store: this.data,
                dataIdFromObject: this.config.dataIdFromObject,
                fragmentMatcherFunction: this.config.fragmentMatcher.match,
            });
            this.broadcastWatches();
        };
        InMemoryCache.prototype.diff = function (query) {
            return diffQueryAgainstStore({
                store: this.config.storeFactory(this.extract(query.optimistic)),
                query: this.transformDocument(query.query),
                variables: query.variables,
                returnPartialData: query.returnPartialData,
                previousResult: query.previousResult,
                fragmentMatcherFunction: this.config.fragmentMatcher.match,
                config: this.config,
            });
        };
        InMemoryCache.prototype.watch = function (watch) {
            var _this = this;
            this.watches.push(watch);
            return function () {
                _this.watches = _this.watches.filter(function (c) { return c !== watch; });
            };
        };
        InMemoryCache.prototype.evict = function (query) {
            throw new Error("eviction is not implemented on InMemory Cache");
        };
        InMemoryCache.prototype.reset = function () {
            this.data.clear();
            this.broadcastWatches();
            return Promise.resolve();
        };
        InMemoryCache.prototype.removeOptimistic = function (id) {
            var _this = this;
            var toPerform = this.optimistic.filter(function (item) { return item.id !== id; });
            this.optimistic = [];
            toPerform.forEach(function (change) {
                _this.recordOptimisticTransaction(change.transaction, change.id);
            });
            this.broadcastWatches();
        };
        InMemoryCache.prototype.performTransaction = function (transaction) {
            var alreadySilenced = this.silenceBroadcast;
            this.silenceBroadcast = true;
            transaction(this);
            if (!alreadySilenced) {
                this.silenceBroadcast = false;
            }
            this.broadcastWatches();
        };
        InMemoryCache.prototype.recordOptimisticTransaction = function (transaction, id) {
            var _this = this;
            this.silenceBroadcast = true;
            var patch = record(this.extract(true), function (recordingCache) {
                var dataCache = _this.data;
                _this.data = recordingCache;
                _this.performTransaction(transaction);
                _this.data = dataCache;
            });
            this.optimistic.push({
                id: id,
                transaction: transaction,
                data: patch,
            });
            this.silenceBroadcast = false;
            this.broadcastWatches();
        };
        InMemoryCache.prototype.transformDocument = function (document) {
            if (this.addTypename) {
                var result = this.typenameDocumentCache.get(document);
                if (!result) {
                    this.typenameDocumentCache.set(document, (result = addTypenameToDocument(document)));
                }
                return result;
            }
            return document;
        };
        InMemoryCache.prototype.readQuery = function (options, optimistic) {
            if (optimistic === void 0) { optimistic = false; }
            return this.read({
                query: options.query,
                variables: options.variables,
                optimistic: optimistic,
            });
        };
        InMemoryCache.prototype.readFragment = function (options, optimistic) {
            if (optimistic === void 0) { optimistic = false; }
            return this.read({
                query: this.transformDocument(getFragmentQueryDocument(options.fragment, options.fragmentName)),
                variables: options.variables,
                rootId: options.id,
                optimistic: optimistic,
            });
        };
        InMemoryCache.prototype.writeQuery = function (options) {
            this.write({
                dataId: 'ROOT_QUERY',
                result: options.data,
                query: this.transformDocument(options.query),
                variables: options.variables,
            });
        };
        InMemoryCache.prototype.writeFragment = function (options) {
            this.write({
                dataId: options.id,
                result: options.data,
                query: this.transformDocument(getFragmentQueryDocument(options.fragment, options.fragmentName)),
                variables: options.variables,
            });
        };
        InMemoryCache.prototype.broadcastWatches = function () {
            var _this = this;
            if (this.silenceBroadcast)
                return;
            this.watches.forEach(function (c) {
                var newData = _this.diff({
                    query: c.query,
                    variables: c.variables,
                    previousResult: c.previousResult && c.previousResult(),
                    optimistic: c.optimistic,
                });
                c.callback(newData);
            });
        };
        return InMemoryCache;
    }(ApolloCache));

    var __assign$d = (undefined && undefined.__assign) || function () {
        __assign$d = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$d.apply(this, arguments);
    };
    var defaultHttpOptions = {
        includeQuery: true,
        includeExtensions: false,
    };
    var defaultHeaders = {
        // headers are case insensitive (https://stackoverflow.com/a/5259004)
        accept: '*/*',
        'content-type': 'application/json',
    };
    var defaultOptions = {
        method: 'POST',
    };
    var fallbackHttpConfig = {
        http: defaultHttpOptions,
        headers: defaultHeaders,
        options: defaultOptions,
    };
    var throwServerError = function (response, result, message) {
        var error = new Error(message);
        error.response = response;
        error.statusCode = response.status;
        error.result = result;
        throw error;
    };
    //TODO: when conditional types come in ts 2.8, operations should be a generic type that extends Operation | Array<Operation>
    var parseAndCheckHttpResponse = function (operations) { return function (response) {
        return (response
            .text()
            .then(function (bodyText) {
            try {
                return JSON.parse(bodyText);
            }
            catch (err) {
                var parseError = err;
                parseError.response = response;
                parseError.statusCode = response.status;
                parseError.bodyText = bodyText;
                return Promise.reject(parseError);
            }
        })
            //TODO: when conditional types come out then result should be T extends Array ? Array<FetchResult> : FetchResult
            .then(function (result) {
            if (response.status >= 300) {
                //Network error
                throwServerError(response, result, "Response not successful: Received status code " + response.status);
            }
            //TODO should really error per response in a Batch based on properties
            //    - could be done in a validation link
            if (!Array.isArray(result) &&
                !result.hasOwnProperty('data') &&
                !result.hasOwnProperty('errors')) {
                //Data error
                throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                    ? operations.map(function (op) { return op.operationName; })
                    : operations.operationName) + "'.");
            }
            return result;
        }));
    }; };
    var checkFetcher = function (fetcher) {
        if (!fetcher && typeof fetch === 'undefined') {
            var library = 'unfetch';
            if (typeof window === 'undefined')
                library = 'node-fetch';
            throw new Error("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/" + library + ".\n\nFor example:\nimport fetch from '" + library + "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });");
        }
    };
    var createSignalIfSupported = function () {
        if (typeof AbortController === 'undefined')
            return { controller: false, signal: false };
        var controller = new AbortController();
        var signal = controller.signal;
        return { controller: controller, signal: signal };
    };
    var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
        var configs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            configs[_i - 2] = arguments[_i];
        }
        var options = __assign$d({}, fallbackConfig.options, { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
        var http = fallbackConfig.http;
        /*
         * use the rest of the configs to populate the options
         * configs later in the list will overwrite earlier fields
         */
        configs.forEach(function (config) {
            options = __assign$d({}, options, config.options, { headers: __assign$d({}, options.headers, config.headers) });
            if (config.credentials)
                options.credentials = config.credentials;
            http = __assign$d({}, http, config.http);
        });
        //The body depends on the http options
        var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
        var body = { operationName: operationName, variables: variables };
        if (http.includeExtensions)
            body.extensions = extensions;
        // not sending the query (i.e persisted queries)
        if (http.includeQuery)
            body.query = printer_1(query);
        return {
            options: options,
            body: body,
        };
    };
    var serializeFetchParameter = function (p, label) {
        var serialized;
        try {
            serialized = JSON.stringify(p);
        }
        catch (e) {
            var parseError = new Error("Network request failed. " + label + " is not serializable: " + e.message);
            parseError.parseError = e;
            throw parseError;
        }
        return serialized;
    };
    //selects "/graphql" by default
    var selectURI = function (operation, fallbackURI) {
        var context = operation.getContext();
        var contextURI = context.uri;
        if (contextURI) {
            return contextURI;
        }
        else if (typeof fallbackURI === 'function') {
            return fallbackURI(operation);
        }
        else {
            return fallbackURI || '/graphql';
        }
    };

    /* tslint:disable */
    var __extends$8 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var createHttpLink = function (linkOptions) {
        if (linkOptions === void 0) { linkOptions = {}; }
        var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, 
        // use default global fetch is nothing passed in
        fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, requestOptions = __rest$1(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries"]);
        // dev warnings to ensure fetch is present
        checkFetcher(fetcher);
        //fetcher is set here rather than the destructuring to ensure fetch is
        //declared before referencing it. Reference in the destructuring would cause
        //a ReferenceError
        if (!fetcher) {
            fetcher = fetch;
        }
        var linkConfig = {
            http: { includeExtensions: includeExtensions },
            options: requestOptions.fetchOptions,
            credentials: requestOptions.credentials,
            headers: requestOptions.headers,
        };
        return new ApolloLink(function (operation) {
            var chosenURI = selectURI(operation, uri);
            var context = operation.getContext();
            var contextConfig = {
                http: context.http,
                options: context.fetchOptions,
                credentials: context.credentials,
                headers: context.headers,
            };
            //uses fallback, link, and then context to build options
            var _a = selectHttpOptionsAndBody(operation, fallbackHttpConfig, linkConfig, contextConfig), options = _a.options, body = _a.body;
            var controller;
            if (!options.signal) {
                var _b = createSignalIfSupported(), _controller = _b.controller, signal = _b.signal;
                controller = _controller;
                if (controller)
                    options.signal = signal;
            }
            // If requested, set method to GET if there are no mutations.
            var definitionIsMutation = function (d) {
                return d.kind === 'OperationDefinition' && d.operation === 'mutation';
            };
            if (useGETForQueries &&
                !operation.query.definitions.some(definitionIsMutation)) {
                options.method = 'GET';
            }
            if (options.method === 'GET') {
                var _c = rewriteURIForGET(chosenURI, body), newURI = _c.newURI, parseError = _c.parseError;
                if (parseError) {
                    return fromError(parseError);
                }
                chosenURI = newURI;
            }
            else {
                try {
                    options.body = serializeFetchParameter(body, 'Payload');
                }
                catch (parseError) {
                    return fromError(parseError);
                }
            }
            return new Observable$1(function (observer) {
                fetcher(chosenURI, options)
                    .then(function (response) {
                    operation.setContext({ response: response });
                    return response;
                })
                    .then(parseAndCheckHttpResponse(operation))
                    .then(function (result) {
                    // we have data and can send it to back up the link chain
                    observer.next(result);
                    observer.complete();
                    return result;
                })
                    .catch(function (err) {
                    // fetch was cancelled so its already been cleaned up in the unsubscribe
                    if (err.name === 'AbortError')
                        return;
                    // if it is a network error, BUT there is graphql result info
                    // fire the next observer before calling error
                    // this gives apollo-client (and react-apollo) the `graphqlErrors` and `networErrors`
                    // to pass to UI
                    // this should only happen if we *also* have data as part of the response key per
                    // the spec
                    if (err.result && err.result.errors && err.result.data) {
                        // if we dont' call next, the UI can only show networkError because AC didn't
                        // get andy graphqlErrors
                        // this is graphql execution result info (i.e errors and possibly data)
                        // this is because there is no formal spec how errors should translate to
                        // http status codes. So an auth error (401) could have both data
                        // from a public field, errors from a private field, and a status of 401
                        // {
                        //  user { // this will have errors
                        //    firstName
                        //  }
                        //  products { // this is public so will have data
                        //    cost
                        //  }
                        // }
                        //
                        // the result of above *could* look like this:
                        // {
                        //   data: { products: [{ cost: "$10" }] },
                        //   errors: [{
                        //      message: 'your session has timed out',
                        //      path: []
                        //   }]
                        // }
                        // status code of above would be a 401
                        // in the UI you want to show data where you can, errors as data where you can
                        // and use correct http status codes
                        observer.next(err.result);
                    }
                    observer.error(err);
                });
                return function () {
                    // XXX support canceling this request
                    // https://developers.google.com/web/updates/2017/09/abortable-fetch
                    if (controller)
                        controller.abort();
                };
            });
        });
    };
    // For GET operations, returns the given URI rewritten with parameters, or a
    // parse error.
    function rewriteURIForGET(chosenURI, body) {
        // Implement the standard HTTP GET serialization, plus 'extensions'. Note
        // the extra level of JSON serialization!
        var queryParams = [];
        var addQueryParam = function (key, value) {
            queryParams.push(key + "=" + encodeURIComponent(value));
        };
        if ('query' in body) {
            addQueryParam('query', body.query);
        }
        if (body.operationName) {
            addQueryParam('operationName', body.operationName);
        }
        if (body.variables) {
            var serializedVariables = void 0;
            try {
                serializedVariables = serializeFetchParameter(body.variables, 'Variables map');
            }
            catch (parseError) {
                return { parseError: parseError };
            }
            addQueryParam('variables', serializedVariables);
        }
        if (body.extensions) {
            var serializedExtensions = void 0;
            try {
                serializedExtensions = serializeFetchParameter(body.extensions, 'Extensions map');
            }
            catch (parseError) {
                return { parseError: parseError };
            }
            addQueryParam('extensions', serializedExtensions);
        }
        // Reconstruct the URI with added query params.
        // XXX This assumes that the URI is well-formed and that it doesn't
        //     already contain any of these query params. We could instead use the
        //     URL API and take a polyfill (whatwg-url@6) for older browsers that
        //     don't support URLSearchParams. Note that some browsers (and
        //     versions of whatwg-url) support URL but not URLSearchParams!
        var fragment = '', preFragment = chosenURI;
        var fragmentStart = chosenURI.indexOf('#');
        if (fragmentStart !== -1) {
            fragment = chosenURI.substr(fragmentStart);
            preFragment = chosenURI.substr(0, fragmentStart);
        }
        var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
        var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
        return { newURI: newURI };
    }
    var HttpLink = /** @class */ (function (_super) {
        __extends$8(HttpLink, _super);
        function HttpLink(opts) {
            return _super.call(this, createHttpLink(opts).request) || this;
        }
        return HttpLink;
    }(ApolloLink));

    var inflection$1 = require("inflection");
    /**
     * This class provides methods to transform incoming data from GraphQL in to a format Vuex-ORM understands and
     * vice versa.
     */
    var Transformer = /** @class */ (function () {
        function Transformer() {
        }
        /**
         * Transforms outgoing data. Use for variables param.
         *
         * Omits relations and some other fields.
         *
         * @param model
         * @param {Data} data
         * @param {Array<String>} whitelist of fields
         * @returns {Data}
         */
        Transformer.transformOutgoingData = function (model, data, whitelist) {
            var _this = this;
            var context = Context.getInstance();
            var relations = model.getRelations();
            var returnValue = {};
            Object.keys(data).forEach(function (key) {
                var value = data[key];
                // Always add fields on the whitelist. Ignore hasMany/One connections, empty fields and internal fields ($)
                if ((whitelist && whitelist.includes(key)) ||
                    ((!relations.has(key) || relations.get(key) instanceof context.components.BelongsTo) &&
                        !key.startsWith("$") &&
                        value !== null)) {
                    var relatedModel = relations.get(key) && relations.get(key).parent
                        ? context.getModel(inflection$1.singularize(relations.get(key).parent.entity), true)
                        : null;
                    if (value instanceof Array) {
                        // Iterate over all fields and transform them if value is an array
                        var arrayModel_1 = context.getModel(inflection$1.singularize(key));
                        returnValue[key] = value.map(function (v) { return _this.transformOutgoingData(arrayModel_1 || model, v); });
                    }
                    else if (typeof value === "object" && value.$id !== undefined) {
                        if (!relatedModel) {
                            relatedModel = context.getModel(value.$self().entity);
                        }
                        // Value is a record, transform that too
                        returnValue[key] = _this.transformOutgoingData(relatedModel, value);
                    }
                    else {
                        // In any other case just let the value be what ever it is
                        returnValue[key] = value;
                    }
                }
            });
            return returnValue;
        };
        /**
         * Transforms a set of incoming data to the format vuex-orm requires.
         *
         * @param {Data | Array<Data>} data
         * @param model
         * @param mutation required to transform something like `disableUserAddress` to the actual model name.
         * @param {boolean} recursiveCall
         * @returns {Data}
         */
        Transformer.transformIncomingData = function (data, model, mutation, recursiveCall) {
            var _this = this;
            if (mutation === void 0) { mutation = false; }
            if (recursiveCall === void 0) { recursiveCall = false; }
            var result = {};
            var context = Context.getInstance();
            if (!recursiveCall) {
                context.logger.group("Transforming incoming data");
                context.logger.log("Raw data:", data);
            }
            if (Array.isArray(data)) {
                result = data.map(function (d) { return _this.transformIncomingData(d, model, mutation, true); });
            }
            else {
                Object.keys(data).forEach(function (key) {
                    if (data[key] !== undefined && data[key] !== null) {
                        if (isPlainObject(data[key])) {
                            var localModel = context.getModel(key, true) || model;
                            if (data[key].nodes && context.connectionQueryMode === "nodes") {
                                result[inflection$1.pluralize(key)] = _this.transformIncomingData(data[key].nodes, localModel, mutation, true);
                            }
                            else if (data[key].edges && context.connectionQueryMode === "edges") {
                                result[inflection$1.pluralize(key)] = _this.transformIncomingData(data[key].edges, localModel, mutation, true);
                            }
                            else if (data["node"] && context.connectionQueryMode === "edges") {
                                result = _this.transformIncomingData(data["node"], localModel, mutation, true);
                            }
                            else {
                                var newKey = key;
                                if (mutation && !recursiveCall) {
                                    newKey = data[key].nodes ? localModel.pluralName : localModel.singularName;
                                    newKey = downcaseFirstLetter(newKey);
                                }
                                result[newKey] = _this.transformIncomingData(data[key], localModel, mutation, true);
                            }
                        }
                        else if (Model.isFieldNumber(model.fields.get(key))) {
                            result[key] = parseFloat(data[key]);
                        }
                        else if (key.endsWith("Type") && model.isTypeFieldOfPolymorphicRelation(key)) {
                            result[key] = inflection$1.pluralize(downcaseFirstLetter(data[key]));
                        }
                        else {
                            result[key] = data[key];
                        }
                    }
                });
            }
            if (!recursiveCall) {
                context.logger.log("Transformed data:", result);
                context.logger.groupEnd();
            }
            else {
                result["$isPersisted"] = true;
            }
            // Make sure this is really a plain JS object. We had some issues in testing here.
            return clone(result);
        };
        return Transformer;
    }());

    var parse = parser.parse;

    // Strip insignificant whitespace
    // Note that this could do a lot more, such as reorder fields etc.
    function normalize(string) {
      return string.replace(/[\s,]+/g, ' ').trim();
    }

    // A map docString -> graphql document
    var docCache = {};

    // A map fragmentName -> [normalized source]
    var fragmentSourceMap = {};

    function cacheKeyFromLoc(loc) {
      return normalize(loc.source.body.substring(loc.start, loc.end));
    }

    // For testing.
    function resetCaches() {
      docCache = {};
      fragmentSourceMap = {};
    }

    // Take a unstripped parsed document (query/mutation or even fragment), and
    // check all fragment definitions, checking for name->source uniqueness.
    // We also want to make sure only unique fragments exist in the document.
    var printFragmentWarnings = true;
    function processFragments(ast) {
      var astFragmentMap = {};
      var definitions = [];

      for (var i = 0; i < ast.definitions.length; i++) {
        var fragmentDefinition = ast.definitions[i];

        if (fragmentDefinition.kind === 'FragmentDefinition') {
          var fragmentName = fragmentDefinition.name.value;
          var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

          // We know something about this fragment
          if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

            // this is a problem because the app developer is trying to register another fragment with
            // the same name as one previously registered. So, we tell them about it.
            if (printFragmentWarnings) {
              console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
                + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
                + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
            }

            fragmentSourceMap[fragmentName][sourceKey] = true;

          } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
            fragmentSourceMap[fragmentName] = {};
            fragmentSourceMap[fragmentName][sourceKey] = true;
          }

          if (!astFragmentMap[sourceKey]) {
            astFragmentMap[sourceKey] = true;
            definitions.push(fragmentDefinition);
          }
        } else {
          definitions.push(fragmentDefinition);
        }
      }

      ast.definitions = definitions;
      return ast;
    }

    function disableFragmentWarnings() {
      printFragmentWarnings = false;
    }

    function stripLoc(doc, removeLocAtThisLevel) {
      var docType = Object.prototype.toString.call(doc);

      if (docType === '[object Array]') {
        return doc.map(function (d) {
          return stripLoc(d, removeLocAtThisLevel);
        });
      }

      if (docType !== '[object Object]') {
        throw new Error('Unexpected input.');
      }

      // We don't want to remove the root loc field so we can use it
      // for fragment substitution (see below)
      if (removeLocAtThisLevel && doc.loc) {
        delete doc.loc;
      }

      // https://github.com/apollographql/graphql-tag/issues/40
      if (doc.loc) {
        delete doc.loc.startToken;
        delete doc.loc.endToken;
      }

      var keys = Object.keys(doc);
      var key;
      var value;
      var valueType;

      for (key in keys) {
        if (keys.hasOwnProperty(key)) {
          value = doc[keys[key]];
          valueType = Object.prototype.toString.call(value);

          if (valueType === '[object Object]' || valueType === '[object Array]') {
            doc[keys[key]] = stripLoc(value, true);
          }
        }
      }

      return doc;
    }

    var experimentalFragmentVariables = false;
    function parseDocument(doc) {
      var cacheKey = normalize(doc);

      if (docCache[cacheKey]) {
        return docCache[cacheKey];
      }

      var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
      if (!parsed || parsed.kind !== 'Document') {
        throw new Error('Not a valid GraphQL document.');
      }

      // check that all "new" fragments inside the documents are consistent with
      // existing fragments of the same name
      parsed = processFragments(parsed);
      parsed = stripLoc(parsed, false);
      docCache[cacheKey] = parsed;

      return parsed;
    }

    function enableExperimentalFragmentVariables() {
      experimentalFragmentVariables = true;
    }

    function disableExperimentalFragmentVariables() {
      experimentalFragmentVariables = false;
    }

    // XXX This should eventually disallow arbitrary string interpolation, like Relay does
    function gql(/* arguments */) {
      var args = Array.prototype.slice.call(arguments);

      var literals = args[0];

      // We always get literals[0] and then matching post literals for each arg given
      var result = (typeof(literals) === "string") ? literals : literals[0];

      for (var i = 1; i < args.length; i++) {
        if (args[i] && args[i].kind && args[i].kind === 'Document') {
          result += args[i].loc.source.body;
        } else {
          result += args[i];
        }

        result += literals[i];
      }

      return parseDocument(result);
    }

    // Support typescript, which isn't as nice as Babel about default exports
    gql.default = gql;
    gql.resetCaches = resetCaches;
    gql.disableFragmentWarnings = disableFragmentWarnings;
    gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
    gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

    var src = gql;

    /**
     * This class takes care of the communication with the graphql endpoint by leveraging the awesome apollo-client lib.
     */
    var Apollo = /** @class */ (function () {
        /**
         * @constructor
         */
        function Apollo() {
            var context = Context.getInstance();
            // This allows the test suite to pass a custom link
            if (context.options.link) {
                this.httpLink = context.options.link;
            }
            else {
                this.httpLink = new HttpLink({
                    uri: context.options.url ? context.options.url : '/graphql',
                    credentials: context.options.credentials ? context.options.credentials : 'same-origin',
                    useGETForQueries: Boolean(context.options.useGETForQueries)
                });
            }
            this.apolloClient = new ApolloClient({
                link: this.httpLink,
                cache: new InMemoryCache(),
                connectToDevTools: context.debugMode
            });
        }
        /**
         * Sends a request to the GraphQL API via apollo
         * @param model
         * @param {any} query The query to send (result from gql())
         * @param {Arguments} variables Optional. The variables to send with the query
         * @param {boolean} mutation Optional. If this is a mutation (true) or a query (false, default)
         * @param {boolean} bypassCache If true the query will be send to the server without using the cache. For queries only
         * @returns {Promise<Data>} The new records
         */
        Apollo.prototype.request = function (model, query, variables, mutation, bypassCache) {
            if (mutation === void 0) { mutation = false; }
            if (bypassCache === void 0) { bypassCache = false; }
            return __awaiter(this, void 0, void 0, function () {
                var fetchPolicy, context, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fetchPolicy = bypassCache ? 'network-only' : 'cache-first';
                            Context.getInstance().logger.logQuery(query, variables, fetchPolicy);
                            context = { headers: Apollo.getHeaders() };
                            if (!mutation) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.apolloClient.mutate({ mutation: query, variables: variables, context: context })];
                        case 1:
                            response = _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.apolloClient.query({ query: query, variables: variables, fetchPolicy: fetchPolicy, context: context })];
                        case 3:
                            response = _a.sent();
                            _a.label = 4;
                        case 4: 
                        // Transform incoming data into something useful
                        return [2 /*return*/, Transformer.transformIncomingData(response.data, model, mutation)];
                    }
                });
            });
        };
        Apollo.prototype.simpleQuery = function (query, variables, bypassCache, context) {
            if (bypassCache === void 0) { bypassCache = false; }
            return __awaiter(this, void 0, void 0, function () {
                var fetchPolicy;
                return __generator(this, function (_a) {
                    fetchPolicy = bypassCache ? 'network-only' : 'cache-first';
                    return [2 /*return*/, this.apolloClient.query({ query: src(query), variables: variables, fetchPolicy: fetchPolicy, context: { headers: Apollo.getHeaders() } })];
                });
            });
        };
        Apollo.prototype.simpleMutation = function (query, variables, context) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.apolloClient.mutate({ mutation: src(query), variables: variables, context: { headers: Apollo.getHeaders() } })];
                });
            });
        };
        Apollo.getHeaders = function () {
            var context = Context.getInstance();
            var headers = context.options.headers ? context.options.headers : {};
            if (headers instanceof Function) {
                headers = headers(context);
            }
            return headers;
        };
        return Apollo;
    }());

    var Schema = /** @class */ (function () {
        function Schema(schema) {
            var _this = this;
            this.schema = schema;
            this.types = new Map();
            this.mutations = new Map();
            this.queries = new Map();
            this.schema.types.forEach(function (t) { return _this.types.set(t.name, t); });
            this.getType('Query').fields.forEach(function (f) { return _this.queries.set(f.name, f); });
            this.getType('Mutation').fields.forEach(function (f) { return _this.mutations.set(f.name, f); });
        }
        Schema.prototype.determineQueryMode = function () {
            var _this = this;
            var connection = null;
            this.queries.forEach(function (query) {
                var typeName = Schema.getTypeNameOfField(query);
                if (typeName.endsWith('TypeConnection')) {
                    connection = _this.getType(typeName);
                    return false; // break
                }
                return true;
            });
            if (!connection) {
                throw new Error("Can't determine the connection mode due to the fact that here are no connection types in the schema. Please set the connectionQueryMode via Vuex-ORM-GraphQL options!");
            }
            if (connection.fields.find(function (f) { return f.name === 'nodes'; })) {
                return 'nodes';
            }
            else if (connection.fields.find(function (f) { return f.name === 'edges'; })) {
                return 'edges';
            }
            else {
                return 'plain';
            }
        };
        Schema.prototype.getType = function (name, allowNull) {
            if (allowNull === void 0) { allowNull = false; }
            name = upcaseFirstLetter(name);
            var type = this.types.get(name);
            if (!allowNull && !type)
                throw new Error("Couldn't find Type of name " + name + " in the GraphQL Schema.");
            return type || null;
        };
        Schema.prototype.getMutation = function (name, allowNull) {
            if (allowNull === void 0) { allowNull = false; }
            var mutation = this.mutations.get(name);
            if (!allowNull && !mutation)
                throw new Error("Couldn't find Mutation of name " + name + " in the GraphQL Schema.");
            return mutation || null;
        };
        Schema.prototype.getQuery = function (name, allowNull) {
            if (allowNull === void 0) { allowNull = false; }
            var query = this.queries.get(name);
            if (!allowNull && !query)
                throw new Error("Couldn't find Query of name " + name + " in the GraphQL Schema.");
            return query || null;
        };
        Schema.returnsConnection = function (field) {
            return (Schema.getTypeNameOfField(field).endsWith('TypeConnection'));
        };
        Schema.getRealType = function (type) {
            if (type.kind === 'NON_NULL') {
                return this.getRealType(type.ofType);
            }
            else {
                return type;
            }
        };
        Schema.getTypeNameOfField = function (field) {
            var type = this.getRealType(field.type);
            if (type.kind === 'LIST') {
                return "[" + type.ofType.name + "]";
            }
            var name = type.name || type.ofType.name || type.ofType.ofType.name;
            if (!name)
                throw new Error("Can't find type name for field " + field.name);
            return name;
        };
        return Schema;
    }());

    var inflection$2 = require("inflection");
    var introspectionQuery = "\nquery Introspection {\n  __schema {\n    types {\n      name\n      description\n      fields(includeDeprecated: true) {\n        name\n        description\n        args {\n          name\n          description\n          type {\n            name\n            kind\n\n            ofType {\n              kind\n\n              name\n              ofType {\n                kind\n                name\n\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n\n        type {\n          name\n          kind\n\n          ofType {\n            kind\n\n            name\n            ofType {\n              kind\n              name\n\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n\n      inputFields {\n        name\n        description\n        type {\n          name\n          kind\n\n          ofType {\n            kind\n\n            name\n            ofType {\n              kind\n              name\n\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n";
    /**
     * Internal context of the plugin. This class contains all information, the models, database, logger and so on.
     *
     * It's a singleton class, so just call Context.getInstance() anywhere you need the context.
     */
    var Context = /** @class */ (function () {
        /**
         * Private constructor, called by the setup method
         *
         * @constructor
         * @param {Components} components The Vuex-ORM Components collection
         * @param {Options} options The options passed to VuexORM.install
         */
        function Context(components, options) {
            /**
             * Collection of all Vuex-ORM models wrapped in a Model instance.
             * @type {Map<any, any>}
             */
            this.models = new Map();
            /**
             * When true, the logging is enabled.
             * @type {boolean}
             */
            this.debugMode = false;
            /**
             * Defines how to query connections. 'auto' | 'nodes' | 'edges' | 'plain'
             */
            this.connectionQueryMode = "auto";
            /**
             * Container for the global mocks.
             * @type {Object}
             */
            this.globalMocks = {};
            this.components = components;
            this.options = options;
            this.database = options.database;
            this.debugMode = Boolean(options.debug);
            this.logger = new Logger(this.debugMode);
            if (!options.database) {
                throw new Error("database param is required to initialize vuex-orm-graphql!");
            }
        }
        /**
         * Get the singleton instance of the context.
         * @returns {Context}
         */
        Context.getInstance = function () {
            return this.instance;
        };
        /**
         * This is called only once and creates a new instance of the Context.
         * @param {Components} components The Vuex-ORM Components collection
         * @param {Options} options The options passed to VuexORM.install
         * @returns {Context}
         */
        Context.setup = function (components, options) {
            this.instance = new Context(components, options);
            this.instance.apollo = new Apollo();
            this.instance.collectModels();
            this.instance.logger.group("Context setup");
            this.instance.logger.log("components", this.instance.components);
            this.instance.logger.log("options", this.instance.options);
            this.instance.logger.log("database", this.instance.database);
            this.instance.logger.log("models", this.instance.models);
            this.instance.logger.groupEnd();
            return this.instance;
        };
        Context.prototype.loadSchema = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (!this.schemaWillBeLoaded) {
                        this.schemaWillBeLoaded = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var context, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.logger.log("Fetching GraphQL Schema initially ...");
                                        if (this.options.connectionQueryMode) {
                                            this.connectionQueryMode = this.options.connectionQueryMode;
                                        }
                                        else {
                                            this.connectionQueryMode = "auto";
                                        }
                                        context = {
                                            headers: { "X-GraphQL-Introspection-Query": "true" }
                                        };
                                        return [4 /*yield*/, this.apollo.simpleQuery(introspectionQuery, {}, true, context)];
                                    case 1:
                                        result = _a.sent();
                                        this.schema = new Schema(result.data.__schema);
                                        this.logger.log("GraphQL Schema successful fetched", result);
                                        this.logger.log("Starting to process the schema ...");
                                        this.processSchema();
                                        this.logger.log("Schema procession done!");
                                        resolve(this.schema);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    return [2 /*return*/, this.schemaWillBeLoaded];
                });
            });
        };
        Context.prototype.processSchema = function () {
            var _this = this;
            this.models.forEach(function (model) {
                var type;
                try {
                    type = _this.schema.getType(model.singularName);
                }
                catch (error) {
                    _this.logger.warn("Ignoring entity " + model.singularName + " because it's not in the schema.");
                    return;
                }
                model.fields.forEach(function (field, fieldName) {
                    if (!type.fields.find(function (f) { return f.name === fieldName; })) {
                        _this.logger.warn("Ignoring field " + model.singularName + "." + fieldName + " because it's not in the schema.");
                        // TODO: Move skipFields to the model
                        model.baseModel.skipFields = model.baseModel.skipFields ? model.baseModel.skipFields : [];
                        if (!model.baseModel.skipFields.includes(fieldName)) {
                            model.baseModel.skipFields.push(fieldName);
                        }
                    }
                });
            });
            if (this.connectionQueryMode === "auto") {
                this.connectionQueryMode = this.schema.determineQueryMode();
                this.logger.log("Connection Query Mode is " + this.connectionQueryMode + " by automatic detection");
            }
            else {
                this.logger.log("Connection Query Mode is " + this.connectionQueryMode + " by config");
            }
        };
        /**
         * Returns a model from the model collection by it's name
         *
         * @param {Model|string} model A Model instance, a singular or plural name of the model
         * @param {boolean} allowNull When true this method returns null instead of throwing an exception when no model was
         *                            found. Default is false
         * @returns {Model}
         */
        Context.prototype.getModel = function (model, allowNull) {
            if (allowNull === void 0) { allowNull = false; }
            if (typeof model === "string") {
                var name_1 = inflection$2.singularize(downcaseFirstLetter(model));
                model = this.models.get(name_1);
                if (!allowNull && !model)
                    throw new Error("No such model " + name_1 + "!");
            }
            return model;
        };
        /**
         * Will add a mock for simple mutations or queries. These are model unrelated and have to be
         * handled  globally.
         *
         * @param {Mock} mock - Mock config.
         */
        Context.prototype.addGlobalMock = function (mock) {
            if (this.findGlobalMock(mock.action, mock.options))
                return false;
            if (!this.globalMocks[mock.action])
                this.globalMocks[mock.action] = [];
            this.globalMocks[mock.action].push(mock);
            return true;
        };
        /**
         * Finds a global mock for the given action and options.
         *
         * @param {string} action - Name of the action like 'simpleQuery' or 'simpleMutation'.
         * @param {MockOptions} options - MockOptions like { name: 'example' }.
         * @returns {Mock | null} null when no mock was found.
         */
        Context.prototype.findGlobalMock = function (action, options) {
            if (this.globalMocks[action]) {
                return (this.globalMocks[action].find(function (m) {
                    if (!m.options || !options)
                        return true;
                    var relevantOptions = pick(options, Object.keys(m.options));
                    return isEqual(relevantOptions, m.options || {});
                }) || null);
            }
            return null;
        };
        /**
         * Hook to be called by simpleMutation and simpleQuery actions in order to get the global mock
         * returnValue.
         *
         * @param {string} action - Name of the action like 'simpleQuery' or 'simpleMutation'.
         * @param {MockOptions} options - MockOptions.
         * @returns {any} null when no mock was found.
         */
        Context.prototype.globalMockHook = function (action, options) {
            var returnValue = null;
            var mock = this.findGlobalMock(action, options);
            if (mock) {
                if (mock.returnValue instanceof Function) {
                    returnValue = mock.returnValue();
                }
                else {
                    returnValue = mock.returnValue || null;
                }
            }
            return returnValue;
        };
        /**
         * Wraps all Vuex-ORM entities in a Model object and saves them into this.models
         */
        Context.prototype.collectModels = function () {
            var _this = this;
            this.database.entities.forEach(function (entity) {
                var model = new Model(entity.model);
                _this.models.set(model.singularName, model);
                Model.augment(model);
            });
        };
        return Context;
    }());

    /**
     * Contains all logic to build GraphQL queries/mutations.
     */
    var QueryBuilder = /** @class */ (function () {
        function QueryBuilder() {
        }
        /**
         * Builds a field for the GraphQL query and a specific model
         *
         * @param {Model|string} model The model to use
         * @param {boolean} multiple Determines whether plural/nodes syntax or singular syntax is used.
         * @param {Arguments} args The args that will be passed to the query field ( user(role: $role) )
         * @param {Array<Model>} path The relations in this list are ignored (while traversing relations).
         *                                    Mainly for recursion
         * @param {string} name Optional name of the field. If not provided, this will be the model name
         * @param filter
         * @param {boolean} allowIdFields Optional. Determines if id fields will be ignored for the argument generation.
         *                                See buildArguments
         * @returns {string}
         *
         * @todo Do we need the allowIdFields param?
         */
        QueryBuilder.buildField = function (model, multiple, args, path, name, filter, allowIdFields) {
            if (multiple === void 0) { multiple = true; }
            if (path === void 0) { path = []; }
            if (filter === void 0) { filter = false; }
            if (allowIdFields === void 0) { allowIdFields = false; }
            var context = Context.getInstance();
            model = context.getModel(model);
            name = name ? name : model.pluralName;
            var field = context.schema.getMutation(name, true) || context.schema.getQuery(name, true);
            var params = this.buildArguments(model, args, false, filter, allowIdFields, field);
            path = path.length === 0 ? [model.singularName] : path;
            var fields = "\n      " + model.getQueryFields().join(" ") + "\n      " + this.buildRelationsQuery(model, path) + "\n    ";
            if (multiple) {
                var header = "" + name + params;
                if (context.connectionQueryMode === "nodes") {
                    return "\n          " + header + " {\n            nodes {\n              " + fields + "\n            }\n          }\n        ";
                }
                else if (context.connectionQueryMode === "edges") {
                    return "\n          " + header + " {\n            edges {\n              node {\n                " + fields + "\n              }\n            }\n          }\n        ";
                }
                else {
                    return "\n          " + header + " {\n            " + fields + "\n          }\n        ";
                }
            }
            else {
                return "\n        " + (name ? name : model.singularName) + params + " {\n          " + fields + "\n        }\n      ";
            }
        };
        /**
         * Generates a query.
         * Currently only one root field for the query is possible.
         * @param {string} type 'mutation' or 'query'
         * @param {Model | string} model The model this query or mutation affects. This mainly determines the query fields.
         * @param {string} name Optional name of the query/mutation. Will overwrite the name from the model.
         * @param {Arguments} args Arguments for the query
         * @param {boolean} multiple Determines if the root query field is a connection or not (will be passed to buildField)
         * @param {boolean} filter When true the query arguments are passed via a filter object.
         * @returns {any} Whatever gql() returns
         */
        QueryBuilder.buildQuery = function (type, model, name, args, multiple, filter) {
            var context = Context.getInstance();
            // model
            model = context.getModel(model);
            if (!model)
                throw new Error("No model provided to build the query!");
            // args
            args = args ? clone(args) : {};
            if (!args)
                throw new Error("args is undefined");
            Object.keys(args).forEach(function (key) {
                if (args && args[key] && isPlainObject(args[key])) {
                    args[key] = { __type: upcaseFirstLetter(key) };
                }
            });
            // multiple
            multiple = multiple === undefined ? !args["id"] : multiple;
            // name
            if (!name)
                name = multiple ? model.pluralName : model.singularName;
            // field
            var field = context.schema.getMutation(name, true) || context.schema.getQuery(name, true);
            // build query
            var query = type + " " + upcaseFirstLetter(name) + this.buildArguments(model, args, true, filter, true, field) + " {\n" +
                ("  " + this.buildField(model, multiple, args, [], name, filter, true) + "\n") +
                "}";
            return src(query);
        };
        /**
         * Generates the arguments string for a graphql query based on a given map.
         *
         * There are three types of arguments:
         *
         * 1) Signatures with primitive types (signature = true)
         *      => 'mutation createUser($name: String!)'
         *
         * 2) Signatures with object types (signature = true, args = { user: { __type: 'User' }})
         *      => 'mutation createUser($user: UserInput!)'
         *
         * 3) Fields with variables (signature = false)
         *      => 'user(id: $id)'
         *
         * 4) Filter fields with variables (signature = false, filter = true)
         *      => 'users(filter: { active: $active })'
         *
         * @param model
         * @param {Arguments | undefined} args
         * @param {boolean} signature When true, then this method generates a query signature instead of key/value pairs
         * @param filter
         * @param {boolean} allowIdFields If true, ID fields will be included in the arguments list
         * @param {GraphQLField} field Optional. The GraphQL mutation or query field
         * @returns {String}
         */
        QueryBuilder.buildArguments = function (model, args, signature, filter, allowIdFields, field) {
            var _this = this;
            if (signature === void 0) { signature = false; }
            if (filter === void 0) { filter = false; }
            if (allowIdFields === void 0) { allowIdFields = true; }
            if (field === void 0) { field = null; }
            if (args === undefined)
                return "";
            var returnValue = "";
            var first = true;
            if (args) {
                Object.keys(args).forEach(function (key) {
                    var value = args[key];
                    var isForeignKey = model.skipField(key);
                    var skipFieldDueId = (key === "id" || isForeignKey) && !allowIdFields;
                    var schemaField = _this.findSchemaFieldForArgument(key, field, model, filter);
                    var isConnectionField = schemaField && Schema.getTypeNameOfField(schemaField).endsWith("TypeConnection");
                    // Ignore null fields, ids and connections
                    if (value && !skipFieldDueId && !isConnectionField) {
                        var typeOrValue = "";
                        if (signature) {
                            if (isPlainObject(value) && value.__type) {
                                // Case 2 (User!)
                                typeOrValue = value.__type + "Input!";
                            }
                            else if (Array.isArray(value) && field) {
                                var arg = QueryBuilder.findSchemaFieldForArgument(key, field, model, filter);
                                if (!arg) {
                                    throw new Error("The argument " + key + " is of type array but it's not possible to determine the type, because it's not in the field " + field.name);
                                }
                                typeOrValue = Schema.getTypeNameOfField(arg) + "!";
                            }
                            else if (schemaField && Schema.getTypeNameOfField(schemaField)) {
                                // Case 1, 3 and 4
                                typeOrValue = Schema.getTypeNameOfField(schemaField) + "!";
                            }
                            else if (key === "id" || isForeignKey) {
                                // Case 1 (ID!)
                                typeOrValue = "ID!";
                            }
                            else {
                                // Case 1 (String!)
                                typeOrValue = _this.determineAttributeType(model, key, value, field || undefined);
                                typeOrValue = typeOrValue + "!";
                            }
                        }
                        else {
                            // Case 3 or 4
                            typeOrValue = "$" + key;
                        }
                        returnValue = "" + returnValue + (first ? "" : ", ") + ((signature ? "$" : "") +
                            key) + ": " + typeOrValue;
                        first = false;
                    }
                });
                if (!first) {
                    if (!signature && filter)
                        returnValue = "filter: { " + returnValue + " }";
                    returnValue = "(" + returnValue + ")";
                }
            }
            return returnValue;
        };
        /**
         * Determines the GraphQL primitive type of a field in the variables hash by the field type or (when
         * the field type is generic attribute) by the variable type.
         * @param {Model} model
         * @param {string} key
         * @param {string} value
         * @param {GraphQLField} query Pass when we have to detect the type of an argument
         * @returns {string}
         */
        QueryBuilder.determineAttributeType = function (model, key, value, query) {
            var context = Context.getInstance();
            var field = model.fields.get(key);
            var schemaField;
            if (query) {
                schemaField = query.args.find(function (f) { return f.name === key; });
                if (!schemaField) {
                    var filterField = query.args.find(function (f) { return f.name === "filter"; });
                    if (filterField) {
                        schemaField = this.findSchemaFieldForArgument(key, null, model, true);
                    }
                }
            }
            else {
                schemaField = context.schema.getType(model.singularName).fields.find(function (f) { return f.name === key; });
            }
            if (schemaField && Schema.getTypeNameOfField(schemaField)) {
                return Schema.getTypeNameOfField(schemaField);
            }
            else {
                if (field instanceof context.components.String) {
                    return "String";
                }
                else if (field && field instanceof context.components.Number) {
                    return "Int";
                }
                else if (field && field instanceof context.components.Boolean) {
                    return "Boolean";
                }
                else {
                    if (typeof value === "number")
                        return "Int";
                    if (typeof value === "string")
                        return "String";
                    if (typeof value === "boolean")
                        return "Boolean";
                    throw new Error("Can't find suitable graphql type for field '" + model.singularName + "." + key + "'.");
                }
            }
        };
        QueryBuilder.findSchemaFieldForArgument = function (name, field, model, isFilter) {
            var schema = Context.getInstance().schema;
            var schemaField;
            if (field) {
                schemaField = field.args.find(function (f) { return f.name === name; });
                if (schemaField)
                    return schemaField;
            }
            // We try to find the FilterType or at least the Type this query belongs to.
            var type = schema.getType(model.singularName + (isFilter ? "Filter" : ""), true);
            // Next we try to find the field from the type
            schemaField = type
                ? (isFilter ? type.inputFields : type.fields).find(function (f) { return f.name === name; })
                : undefined;
            // Warn before we return null
            if (!schemaField) {
                Context.getInstance().logger.warn("Couldn't find the argument with name " + name + " for the mutation/query " + (field ? field.name : "(?)"));
            }
            return schemaField;
        };
        /**
         * Generates the fields for all related models.
         *
         * @param {Model} model
         * @param {Array<Model>} path
         * @returns {string}
         */
        QueryBuilder.buildRelationsQuery = function (model, path) {
            var _this = this;
            if (path === void 0) { path = []; }
            if (model === null)
                return "";
            var context = Context.getInstance();
            var relationQueries = [];
            model.getRelations().forEach(function (field, name) {
                var relatedModel;
                if (field.related) {
                    relatedModel = context.getModel(field.related.entity);
                }
                else if (field.parent) {
                    relatedModel = context.getModel(field.parent.entity);
                }
                else {
                    relatedModel = context.getModel(name);
                    context.logger.log("WARNING: field has neither parent nor related property. Fallback to attribute name", field);
                }
                // We will ignore the field, when it's already in the path. Means: When it's already queried. However there are
                // cases where the model will have a relationship to itself. For example a nested category strucure where the
                // category model has a parent: belongsTo(Category). So we also check if the model references itself. If this is
                // the case, we allow the nesting up to 5 times.
                var referencesItSelf = takeWhile(path.slice(0).reverse(), function (p) { return p === relatedModel.singularName; }).length;
                var ignore = referencesItSelf
                    ? referencesItSelf > 5
                    : path.includes(relatedModel.singularName);
                // console.log(`-----> Will ${ignore ? '' : 'not'} ignore ${model.singularName}.${name}, path: ${path.join('.')}`);
                if (model.shouldEagerLoadRelation(name, field, relatedModel) && !ignore) {
                    var newPath = path.slice(0);
                    newPath.push(relatedModel.singularName);
                    relationQueries.push(_this.buildField(relatedModel, Model.isConnection(field), undefined, newPath, name, false));
                }
            });
            return relationQueries.join("\n");
        };
        return QueryBuilder;
    }());

    /**
     * Provides some helper methods to interact with the Vuex-ORM store
     */
    var Store = /** @class */ (function () {
        function Store() {
        }
        /**
         * Inserts incoming data into the store. Existing data will be updated.
         *
         * @param {Data} data New data to insert/update
         * @param {Function} dispatch Vuex Dispatch method for the model
         * @return {Promise<Data>} Inserted data as hash
         */
        Store.insertData = function (data, dispatch) {
            return __awaiter(this, void 0, void 0, function () {
                var insertedData;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            insertedData = {};
                            return [4 /*yield*/, Promise.all(Object.keys(data).map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                                    var value, newData;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                value = data[key];
                                                Context.getInstance().logger.log('Inserting records', value);
                                                return [4 /*yield*/, dispatch('insertOrUpdate', { data: value })];
                                            case 1:
                                                newData = _a.sent();
                                                Object.keys(newData).forEach(function (dataKey) {
                                                    if (!insertedData[dataKey])
                                                        insertedData[dataKey] = [];
                                                    insertedData[dataKey] = insertedData[dataKey].concat(newData[dataKey]);
                                                });
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, insertedData];
                    }
                });
            });
        };
        return Store;
    }());

    /**
     * Generic name generator for mutations and queries. In the future these methods may be influenced by the configuration.
     */
    var NameGenerator = /** @class */ (function () {
        function NameGenerator() {
        }
        NameGenerator.getNameForPersist = function (model) {
            return this.getCRUDName("create", model);
        };
        NameGenerator.getNameForPush = function (model) {
            return this.getCRUDName("update", model);
        };
        NameGenerator.getNameForDestroy = function (model) {
            return this.getCRUDName("delete", model);
        };
        NameGenerator.getNameForFetch = function (model, plural) {
            if (plural === void 0) { plural = false; }
            return plural ? model.pluralName : model.singularName;
        };
        /**
         * Internal helper to keep the code DRY. Just generates a name by leveraging the models singular name.
         * @param {string} action Name of the action like 'create'
         * @param {Model} model
         * @returns {string} For example 'createBlogPost'
         */
        NameGenerator.getCRUDName = function (action, model) {
            return "" + action + upcaseFirstLetter(model.singularName);
        };
        return NameGenerator;
    }());

    var inflection$3 = require("inflection");
    /**
     * Base class for all Vuex actions. Contains some utility and convenience methods.
     */
    var Action = /** @class */ (function () {
        function Action() {
        }
        /**
         * Sends a mutation.
         *
         * @param {string} name Name of the mutation like 'createUser'
         * @param {Data | undefined} variables Variables to send with the mutation
         * @param {Function} dispatch Vuex Dispatch method for the model
         * @param {Model} model The model this mutation affects.
         * @param {boolean} multiple Tells if we're requesting a single record or multiple.
         * @returns {Promise<any>}
         */
        Action.mutation = function (name, variables, dispatch, model) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, context, schema, multiple, query, newData, insertedData, records, newRecord;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!variables) return [3 /*break*/, 5];
                            context = Context.getInstance();
                            return [4 /*yield*/, context.loadSchema()];
                        case 1:
                            schema = _b.sent();
                            multiple = Schema.returnsConnection(schema.getMutation(name));
                            query = QueryBuilder.buildQuery("mutation", model, name, variables, multiple);
                            return [4 /*yield*/, Context.getInstance().apollo.request(model, query, variables, true)];
                        case 2:
                            newData = _b.sent();
                            if (!(name !== NameGenerator.getNameForDestroy(model))) return [3 /*break*/, 4];
                            newData = newData[Object.keys(newData)[0]];
                            // IDs as String cause terrible issues, so we convert them to integers.
                            newData.id = parseInt(newData.id, 10);
                            return [4 /*yield*/, Store.insertData((_a = {}, _a[model.pluralName] = newData, _a), dispatch)];
                        case 3:
                            insertedData = _b.sent();
                            records = insertedData[model.pluralName];
                            newRecord = records[records.length - 1];
                            if (newRecord) {
                                return [2 /*return*/, newRecord];
                            }
                            else {
                                Context.getInstance().logger.log("Couldn't find the record of type '", model.pluralName, "' within", insertedData, ". Falling back to find()");
                                return [2 /*return*/, model.baseModel.query().last()];
                            }
                            _b.label = 4;
                        case 4: return [2 /*return*/, true];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Convenience method to get the model from the state.
         * @param {RootState} state Vuex state
         * @returns {Model}
         */
        Action.getModelFromState = function (state) {
            return Context.getInstance().getModel(state.$name);
        };
        /**
         * Makes sure args is a hash.
         *
         * @param {Arguments|undefined} args
         * @param {any} id When not undefined, it's added to the args
         * @returns {Arguments}
         */
        Action.prepareArgs = function (args, id) {
            args = args || {};
            if (id)
                args["id"] = id;
            return args;
        };
        /**
         * Adds the record itself to the args and sends it through transformOutgoingData. Key is named by the singular name
         * of the model.
         *
         * @param {Arguments} args
         * @param {Model} model
         * @param {Data} data
         * @returns {Arguments}
         */
        Action.addRecordToArgs = function (args, model, data) {
            args[model.singularName] = Transformer.transformOutgoingData(model, data);
            return args;
        };
        /**
         * Transforms each field of the args which contains a model.
         * @param {Arguments} args
         * @returns {Arguments}
         */
        Action.transformArgs = function (args) {
            var context = Context.getInstance();
            Object.keys(args).forEach(function (key) {
                var value = args[key];
                if (value instanceof context.components.Model) {
                    var model = context.getModel(inflection$3.singularize(value.$self().entity));
                    var transformedValue = Transformer.transformOutgoingData(model, value);
                    context.logger.log("A", key, "model was found within the variables and will be transformed from", value, "to", transformedValue);
                    args[key] = transformedValue;
                }
            });
            return args;
        };
        return Action;
    }());

    /**
     * Destroy action for sending a delete mutation. Will be used for record.$destroy().
     */
    var Destroy = /** @class */ (function (_super) {
        __extends(Destroy, _super);
        function Destroy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {State} state The Vuex state
         * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
         * @param {string} id ID of the record to delete
         * @returns {Promise<any>} true
         */
        Destroy.call = function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var id = _b.id, args = _b.args;
            return __awaiter(this, void 0, void 0, function () {
                var model, mutationName, mockReturnValue;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!id) return [3 /*break*/, 4];
                            model = this.getModelFromState(state);
                            mutationName = NameGenerator.getNameForDestroy(model);
                            mockReturnValue = model.$mockHook("destroy", { id: id });
                            if (!mockReturnValue) return [3 /*break*/, 2];
                            return [4 /*yield*/, Store.insertData(mockReturnValue, dispatch)];
                        case 1:
                            _c.sent();
                            return [2 /*return*/, true];
                        case 2:
                            args = this.prepareArgs(args, id);
                            return [4 /*yield*/, Action.mutation(mutationName, args, dispatch, model)];
                        case 3:
                            _c.sent();
                            return [2 /*return*/, true];
                        case 4: throw new Error("The destroy action requires the 'id' to be set");
                    }
                });
            });
        };
        return Destroy;
    }(Action));

    /**
     * Fetch action for sending a query. Will be used for Model.fetch().
     */
    var Fetch = /** @class */ (function (_super) {
        __extends(Fetch, _super);
        function Fetch() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {any} state The Vuex state
         * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
         * @param {ActionParams} params Optional params to send with the query
         * @returns {Promise<Data>} The fetched records as hash
         */
        Fetch.call = function (_a, params) {
            var state = _a.state, dispatch = _a.dispatch;
            return __awaiter(this, void 0, void 0, function () {
                var context, model, mockReturnValue, filter, bypassCache, multiple, name, query, data;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            context = Context.getInstance();
                            model = this.getModelFromState(state);
                            mockReturnValue = model.$mockHook("fetch", {
                                filter: params ? params.filter || {} : {}
                            });
                            if (mockReturnValue) {
                                return [2 /*return*/, Store.insertData(mockReturnValue, dispatch)];
                            }
                            return [4 /*yield*/, context.loadSchema()];
                        case 1:
                            _b.sent();
                            filter = params && params.filter
                                ? Transformer.transformOutgoingData(model, params.filter, Object.keys(params.filter))
                                : {};
                            bypassCache = params && params.bypassCache;
                            multiple = !filter["id"];
                            name = NameGenerator.getNameForFetch(model, multiple);
                            query = QueryBuilder.buildQuery("query", model, name, filter, multiple, multiple);
                            return [4 /*yield*/, context.apollo.request(model, query, filter, false, bypassCache)];
                        case 2:
                            data = _b.sent();
                            // Insert incoming data into the store
                            return [2 /*return*/, Store.insertData(data, dispatch)];
                    }
                });
            });
        };
        return Fetch;
    }(Action));

    /**
     * Mutate action for sending a custom mutation. Will be used for Model.mutate() and record.$mutate().
     */
    var Mutate = /** @class */ (function (_super) {
        __extends(Mutate, _super);
        function Mutate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {any} state The Vuex state
         * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
         * @param {string} name Name of the query
         * @param {boolean} multiple Fetch one or multiple?
         * @param {Arguments} args Arguments for the mutation. Must contain a 'mutation' field.
         * @returns {Promise<Data>} The new record if any
         */
        Mutate.call = function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var args = _b.args, name = _b.name;
            return __awaiter(this, void 0, void 0, function () {
                var context, model, mockReturnValue, schema;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!name) return [3 /*break*/, 2];
                            context = Context.getInstance();
                            model = this.getModelFromState(state);
                            mockReturnValue = model.$mockHook("mutate", {
                                name: name,
                                args: args || {}
                            });
                            if (mockReturnValue) {
                                return [2 /*return*/, Store.insertData(mockReturnValue, dispatch)];
                            }
                            return [4 /*yield*/, context.loadSchema()];
                        case 1:
                            schema = _c.sent();
                            args = this.prepareArgs(args);
                            // There could be anything in the args, but we have to be sure that all records are gone through
                            // transformOutgoingData()
                            this.transformArgs(args);
                            // Send the mutation
                            return [2 /*return*/, Action.mutation(name, args, dispatch, model)];
                        case 2: throw new Error("The mutate action requires the mutation name ('mutation') to be set");
                    }
                });
            });
        };
        return Mutate;
    }(Action));

    /**
     * Persist action for sending a create mutation. Will be used for record.$persist().
     */
    var Persist = /** @class */ (function (_super) {
        __extends(Persist, _super);
        function Persist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {any} state The Vuex state
         * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
         * @param {string} id ID of the record to persist
         * @returns {Promise<Data>} The saved record
         */
        Persist.call = function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var id = _b.id, args = _b.args;
            return __awaiter(this, void 0, void 0, function () {
                var model, mutationName, oldRecord, mockReturnValue, newRecord_1, newRecord;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!id) return [3 /*break*/, 5];
                            model = this.getModelFromState(state);
                            mutationName = NameGenerator.getNameForPersist(model);
                            oldRecord = model.getRecordWithId(id);
                            mockReturnValue = model.$mockHook("persist", {
                                id: id,
                                args: args || {}
                            });
                            if (!mockReturnValue) return [3 /*break*/, 2];
                            newRecord_1 = Store.insertData(mockReturnValue, dispatch);
                            return [4 /*yield*/, this.deleteObsoleteRecord(model, newRecord_1, oldRecord)];
                        case 1:
                            _c.sent();
                            return [2 /*return*/, newRecord_1];
                        case 2:
                            // Arguments
                            args = this.prepareArgs(args);
                            this.addRecordToArgs(args, model, oldRecord);
                            return [4 /*yield*/, Action.mutation(mutationName, args, dispatch, model)];
                        case 3:
                            newRecord = _c.sent();
                            // Delete the old record if necessary
                            return [4 /*yield*/, this.deleteObsoleteRecord(model, newRecord, oldRecord)];
                        case 4:
                            // Delete the old record if necessary
                            _c.sent();
                            return [2 /*return*/, newRecord];
                        case 5: throw new Error("The persist action requires the 'id' to be set");
                    }
                });
            });
        };
        /**
         * It's very likely that the server generated different ID for this record.
         * In this case Action.mutation has inserted a new record instead of updating the existing one.
         *
         * @param {Model} model
         * @param {Data} record
         * @returns {Promise<void>}
         */
        Persist.deleteObsoleteRecord = function (model, newRecord, oldRecord) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (newRecord && oldRecord && newRecord.id !== oldRecord.id) {
                        Context.getInstance().logger.log("Dropping deprecated record", oldRecord);
                        return [2 /*return*/, oldRecord.$delete()];
                    }
                    return [2 /*return*/];
                });
            });
        };
        return Persist;
    }(Action));

    /**
     * Push action for sending a update mutation. Will be used for record.$push().
     */
    var Push = /** @class */ (function (_super) {
        __extends(Push, _super);
        function Push() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {any} state The Vuex state
         * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
         * @param {Arguments} data New data to save
         * @param {Arguments} args Additional arguments
         * @returns {Promise<Data>} The updated record
         */
        Push.call = function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var data = _b.data, args = _b.args;
            return __awaiter(this, void 0, void 0, function () {
                var model, mutationName, mockReturnValue;
                return __generator(this, function (_c) {
                    if (data) {
                        model = this.getModelFromState(state);
                        mutationName = NameGenerator.getNameForPush(model);
                        mockReturnValue = model.$mockHook("push", {
                            data: data,
                            args: args || {}
                        });
                        if (mockReturnValue) {
                            return [2 /*return*/, Store.insertData(mockReturnValue, dispatch)];
                        }
                        // Arguments
                        args = this.prepareArgs(args, data.id);
                        this.addRecordToArgs(args, model, data);
                        // Send the mutation
                        return [2 /*return*/, Action.mutation(mutationName, args, dispatch, model)];
                    }
                    else {
                        throw new Error("The persist action requires the 'data' to be set");
                    }
                    return [2 /*return*/];
                });
            });
        };
        return Push;
    }(Action));

    /**
     * Query action for sending a custom query. Will be used for Model.customQuery() and record.$customQuery.
     */
    var Query = /** @class */ (function (_super) {
        __extends(Query, _super);
        function Query() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {any} state The Vuex state
         * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
         * @param {string} name Name of the query
         * @param {boolean} multiple Fetch one or multiple?
         * @param {object} filter Filter object (arguments)
         * @param {boolean} bypassCache Whether to bypass the cache
         * @returns {Promise<Data>} The fetched records as hash
         */
        Query.call = function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var name = _b.name, filter = _b.filter, bypassCache = _b.bypassCache;
            return __awaiter(this, void 0, void 0, function () {
                var context, model, mockReturnValue, schema, multiple, query, data;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!name) return [3 /*break*/, 3];
                            context = Context.getInstance();
                            model = this.getModelFromState(state);
                            mockReturnValue = model.$mockHook("query", {
                                name: name,
                                filter: filter || {}
                            });
                            if (mockReturnValue) {
                                return [2 /*return*/, Store.insertData(mockReturnValue, dispatch)];
                            }
                            return [4 /*yield*/, context.loadSchema()];
                        case 1:
                            schema = _c.sent();
                            // Filter
                            filter = filter ? Transformer.transformOutgoingData(model, filter) : {};
                            multiple = Schema.returnsConnection(schema.getQuery(name));
                            query = QueryBuilder.buildQuery("query", model, name, filter, multiple, false);
                            return [4 /*yield*/, context.apollo.request(model, query, filter, false, bypassCache)];
                        case 2:
                            data = _c.sent();
                            // Insert incoming data into the store
                            return [2 /*return*/, Store.insertData(data, dispatch)];
                        case 3: throw new Error("The customQuery action requires the query name ('name') to be set");
                    }
                });
            });
        };
        return Query;
    }(Action));

    /**
     * SimpleQuery action for sending a model unrelated simple query.
     */
    var SimpleQuery = /** @class */ (function (_super) {
        __extends(SimpleQuery, _super);
        function SimpleQuery() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
         * @param {string} query The query to send
         * @param {Arguments} variables
         * @param {boolean} bypassCache Whether to bypass the cache
         * @returns {Promise<any>} The result
         */
        SimpleQuery.call = function (_a, _b) {
            var dispatch = _a.dispatch;
            var query = _b.query, bypassCache = _b.bypassCache, variables = _b.variables;
            return __awaiter(this, void 0, void 0, function () {
                var context, parsedQuery, mockReturnValue, result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            context = Context.getInstance();
                            if (!query) return [3 /*break*/, 2];
                            parsedQuery = parser_1(query);
                            mockReturnValue = context.globalMockHook("simpleQuery", {
                                name: parsedQuery.definitions[0]["name"].value,
                                variables: variables
                            });
                            if (mockReturnValue) {
                                return [2 /*return*/, mockReturnValue];
                            }
                            variables = this.prepareArgs(variables);
                            return [4 /*yield*/, context.apollo.simpleQuery(query, variables, bypassCache)];
                        case 1:
                            result = _c.sent();
                            // remove the symbols
                            return [2 /*return*/, clone(result.data)];
                        case 2: throw new Error("The simpleQuery action requires the 'query' to be set");
                    }
                });
            });
        };
        return SimpleQuery;
    }(Action));

    /**
     * SimpleMutation action for sending a model unrelated simple mutation.
     */
    var SimpleMutation = /** @class */ (function (_super) {
        __extends(SimpleMutation, _super);
        function SimpleMutation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
         * @param {string} query The query to send
         * @param {Arguments} variables
         * @returns {Promise<any>} The result
         */
        SimpleMutation.call = function (_a, _b) {
            var dispatch = _a.dispatch;
            var query = _b.query, variables = _b.variables;
            return __awaiter(this, void 0, void 0, function () {
                var context, parsedQuery, mockReturnValue, result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            context = Context.getInstance();
                            if (!query) return [3 /*break*/, 2];
                            parsedQuery = parser_1(query);
                            mockReturnValue = context.globalMockHook("simpleMutation", {
                                name: parsedQuery.definitions[0]["name"].value,
                                variables: variables
                            });
                            if (mockReturnValue) {
                                return [2 /*return*/, mockReturnValue];
                            }
                            variables = this.prepareArgs(variables);
                            return [4 /*yield*/, context.apollo.simpleMutation(query, variables)];
                        case 1:
                            result = _c.sent();
                            // remove the symbols
                            return [2 /*return*/, clone(result.data)];
                        case 2: throw new Error("The simpleMutation action requires the 'query' to be set");
                    }
                });
            });
        };
        return SimpleMutation;
    }(Action));

    /**
     * Main class of the plugin. Setups the internal context, Vuex actions and model methods
     */
    var VuexORMGraphQL = /** @class */ (function () {
        /**
         * @constructor
         * @param {Components} components The Vuex-ORM Components collection
         * @param {Options} options The options passed to VuexORM.install
         */
        function VuexORMGraphQL(components, options) {
            Context.setup(components, options);
            VuexORMGraphQL.setupActions();
            VuexORMGraphQL.setupModelMethods();
        }
        /**
         * Allow everything to read the context.
         */
        VuexORMGraphQL.prototype.getContext = function () {
            return Context.getInstance();
        };
        /**
         * This method will setup following Vuex actions: fetch, persist, push, destroy, mutate
         */
        VuexORMGraphQL.setupActions = function () {
            var context = Context.getInstance();
            context.components.RootActions.simpleQuery = SimpleQuery.call.bind(SimpleQuery);
            context.components.RootActions.simpleMutation = SimpleMutation.call.bind(SimpleMutation);
            context.components.Actions.fetch = Fetch.call.bind(Fetch);
            context.components.Actions.persist = Persist.call.bind(Persist);
            context.components.Actions.push = Push.call.bind(Push);
            context.components.Actions.destroy = Destroy.call.bind(Destroy);
            context.components.Actions.mutate = Mutate.call.bind(Mutate);
            context.components.Actions.query = Query.call.bind(Query);
        };
        /**
         * This method will setup following model methods: Model.fetch, Model.mutate, Model.customQuery, record.$mutate,
         * record.$persist, record.$push, record.$destroy and record.$deleteAndDestroy, record.$customQuery
         */
        VuexORMGraphQL.setupModelMethods = function () {
            var context = Context.getInstance();
            // Register static model convenience methods
            context.components.Model.fetch = function (filter, bypassCache) {
                if (bypassCache === void 0) { bypassCache = false; }
                return __awaiter(this, void 0, void 0, function () {
                    var filterObj;
                    return __generator(this, function (_a) {
                        filterObj = filter;
                        if (!isPlainObject(filterObj))
                            filterObj = { id: filter };
                        return [2 /*return*/, this.dispatch("fetch", { filter: filterObj, bypassCache: bypassCache })];
                    });
                });
            };
            context.components.Model.mutate = function (params) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.dispatch("mutate", params)];
                    });
                });
            };
            context.components.Model.customQuery = function (_a) {
                var name = _a.name, filter = _a.filter, multiple = _a.multiple, bypassCache = _a.bypassCache;
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        return [2 /*return*/, this.dispatch("query", { name: name, filter: filter, multiple: multiple, bypassCache: bypassCache })];
                    });
                });
            };
            // Register model convenience methods
            var model = context.components.Model.prototype;
            model.$mutate = function (_a) {
                var name = _a.name, args = _a.args, multiple = _a.multiple;
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        args = args || {};
                        if (!args["id"])
                            args["id"] = this.id;
                        return [2 /*return*/, this.$dispatch("mutate", { name: name, args: args, multiple: multiple })];
                    });
                });
            };
            model.$customQuery = function (_a) {
                var name = _a.name, filter = _a.filter, multiple = _a.multiple, bypassCache = _a.bypassCache;
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        filter = filter || {};
                        if (!filter["id"])
                            filter["id"] = this.id;
                        return [2 /*return*/, this.$dispatch("query", { name: name, filter: filter, multiple: multiple, bypassCache: bypassCache })];
                    });
                });
            };
            model.$persist = function (args) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.$dispatch("persist", { id: this.id, args: args })];
                    });
                });
            };
            model.$push = function (args) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.$dispatch("push", { data: this, args: args })];
                    });
                });
            };
            model.$destroy = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.$dispatch("destroy", { id: this.id })];
                    });
                });
            };
            model.$deleteAndDestroy = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.$delete()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, this.$destroy()];
                        }
                    });
                });
            };
        };
        return VuexORMGraphQL;
    }());

    return VuexORMGraphQL;

})));
//# sourceMappingURL=vuex-orm-graphql.umd.js.map