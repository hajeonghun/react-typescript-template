"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./assets/default.css");
function App(props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "HI TEST"),
        react_1.default.createElement(Bpp, { name: 1 })));
}
function Bpp(name) {
    console.log({ name });
}
exports.default = App;
