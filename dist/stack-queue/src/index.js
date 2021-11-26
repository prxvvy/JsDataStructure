"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const List_1 = require("../../linkedlist/src/list/List");
const Stack_1 = require("./structures/Stack");
/**
 * Example of a stack implementation.
 */
const prompt = (0, prompt_sync_1.default)();
const stack = new Stack_1.Stack();
console.log('Type in the postfix expression.');
const expression = prompt('-> ');
if (!expression.includes(' ')) {
    console.log('The postfix expression must be seperated by whitespaces.');
    process.exit(1);
}
const subList = List_1.List.split(expression);
for (let i = 0; i < subList.len; i++) {
    const tmpInt = parseInt(String(subList.getValueAt(i)));
    if (Number.isInteger(tmpInt)) {
        stack.push(tmpInt);
    }
    else {
        switch (subList.getValueAt(i)) {
            case '+':
                const number1Sum = stack.pop()
                    .value;
                const number2Sum = stack.pop()
                    .value;
                stack.push(number2Sum + number1Sum);
                break;
            case '-':
                const number1Sub = stack.pop()
                    .value;
                const number2Sub = stack.pop()
                    .value;
                stack.push(number2Sub - number1Sub);
                break;
            case '*':
                const number1Mul = stack.pop()
                    .value;
                const number2Mul = stack.pop()
                    .value;
                stack.push(number2Mul * number1Mul);
                break;
            case '/':
                const number1Div = stack.pop()
                    .value;
                const number2Div = stack.pop()
                    .value;
                stack.push(number2Div / number1Div);
                break;
            default:
                console.log('An invalid op was found.');
        }
    }
}
if (stack.len) {
    console.log(`Result's ${stack.getValueAt(0)}.`);
}
