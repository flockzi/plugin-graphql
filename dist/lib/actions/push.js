"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __importDefault(require("./action"));
var name_generator_1 = __importDefault(require("../graphql/name-generator"));
var store_1 = require("../orm/store");
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
                    mutationName = name_generator_1.default.getNameForPush(model);
                    mockReturnValue = model.$mockHook("push", {
                        data: data,
                        args: args || {}
                    });
                    if (mockReturnValue) {
                        return [2 /*return*/, store_1.Store.insertData(mockReturnValue, dispatch)];
                    }
                    // Arguments
                    args = this.prepareArgs(args, data.id);
                    this.addRecordToArgs(args, model, data);
                    // Send the mutation
                    return [2 /*return*/, action_1.default.mutation(mutationName, args, dispatch, model)];
                }
                else {
                    throw new Error("The persist action requires the 'data' to be set");
                }
                return [2 /*return*/];
            });
        });
    };
    return Push;
}(action_1.default));
exports.default = Push;
//# sourceMappingURL=push.js.map