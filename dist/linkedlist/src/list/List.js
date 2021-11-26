"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const Node_1 = require("./Node");
const lodash_1 = require("lodash");
class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node_1.Node(value);
        if (!this.len) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
            this.head.previous = this.tail;
            this.length++;
            return true;
        }
        let pointer = this.head;
        while (pointer && pointer.next !== this.head) {
            pointer = pointer.next;
        }
        pointer.next = newNode;
        this.tail = newNode;
        this.tail.previous = pointer;
        this.tail.next = this.head;
        this.head.previous = this.tail;
        this.length++;
        return true;
    }
    printList() {
        let ptr = this.head;
        let txt = '';
        for (let i = 0; i < this.len; i++) {
            txt += `${ptr.value}, `;
            ptr = ptr.next;
        }
        const txtFormatted = (0, lodash_1.trim)(txt, ', ');
        if (this.len) {
            return `[${txtFormatted}]`;
        }
        else {
            return '[]';
        }
    }
    getValueAt(pos) {
        if (pos === undefined)
            return false;
        if (!this.len)
            return false;
        let ptr = this.head;
        for (let i = 0; i < this.len; i++) {
            if (i === pos)
                return ptr.value;
            ptr = ptr.next;
        }
        return false;
    }
    pop(pos) {
        var _a, _b, _c;
        if (!this.len)
            return false;
        if (pos === undefined) {
            const toPop = this.tail;
            this.tail = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.previous;
            this.tail.next = this.head;
            this.head.previous = this.tail;
            toPop.next = null;
            toPop.previous = null;
            this.length--;
            return toPop;
        }
        if (pos === 0) {
            const toPop = this.head;
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
            this.head.previous = this.tail;
            this.tail.next = this.head;
            toPop.next = null;
            toPop.previous = null;
            this.length--;
            return toPop;
        }
        let index = 0;
        let pointer = this.head;
        while (pointer && index !== pos) {
            pointer = pointer.next;
            index++;
            if (pointer === this.head && index !== pos)
                return false;
        }
        const toPop = pointer;
        if ((pointer === null || pointer === void 0 ? void 0 : pointer.next) === this.head) {
            this.tail = (_c = this.tail) === null || _c === void 0 ? void 0 : _c.previous;
            this.tail.next = this.head;
            this.head.previous = this.tail;
            toPop.next = null;
            toPop.previous = null;
            this.length--;
            return toPop;
        }
        else {
            pointer.previous.next = pointer === null || pointer === void 0 ? void 0 : pointer.next;
            pointer.next.previous = pointer === null || pointer === void 0 ? void 0 : pointer.previous;
            toPop.next = null;
            toPop.previous = null;
            this.length--;
            return toPop;
        }
    }
    get first() {
        return this.head;
    }
    get len() {
        return this.length;
    }
    get last() {
        return this.tail;
    }
    static split(str, sep = ' ') {
        if (!str)
            return false;
        if (!str.includes(sep))
            return false;
        const new_list = new this();
        let txt = '';
        for (const strElement of str) {
            if (strElement === sep) {
                new_list.push(txt);
                txt = '';
            }
            else {
                txt += strElement;
            }
        }
        if (txt) {
            new_list.push(txt);
        }
        return new_list;
    }
}
exports.List = List;
