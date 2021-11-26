"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const list_1 = __importDefault(require("../../../linkedlist/src/list"));
class Stack extends list_1.default.List {
    push(value) {
        return super.push(value);
    }
    pop(pos) {
        if (pos === undefined) {
            return super.pop();
        }
        if (pos === 0) {
            return super.pop(0);
        }
        return super.pop(pos);
    }
}
exports.Stack = Stack;
