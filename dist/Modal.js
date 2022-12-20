"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/modalStyle.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Modal = function Modal(_ref) {
  var title = _ref.title,
    textContent = _ref.textContent,
    openModal = _ref.openModal,
    closeModal = _ref.closeModal,
    textButton = _ref.textButton;
  if (openModal) {
    console.log("modal open");
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "title-modal"
    }, title), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-content"
    }, textContent), /*#__PURE__*/_react.default.createElement("button", {
      className: "close-modal",
      onClick: closeModal
    }, textButton)));
  }
};
var _default = Modal;
exports.default = _default;