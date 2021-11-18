"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #242424;\n  height: 300px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  h2 {\n    @import url(\"https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap\");\n    font-family: \"Red Hat Mono\", monospace;\n    font-size: 0.7rem;\n    margin-top: 1rem;\n    margin-bottom: 0.2rem;\n  }\n  ul {\n    margin-top: 0.2rem;\n    margin-bottom: 0rem;\n    display: flex;\n    flex-grow: 1;\n    align-items: center;\n    padding: 0;\n    list-style: none;\n    width: 12%;\n    justify-content: space-between;\n    svg {\n      font-size: 0.8rem;\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFooter = _styledComponents["default"].div(_templateObject());

var _default = StyledFooter;
exports["default"] = _default;