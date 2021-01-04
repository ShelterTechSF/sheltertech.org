"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var InputText_module_css_1 = __importDefault(require("./InputText.module.css"));
/*
 * For responsive behavior, the width of the parent element
 * of this component should be set in a class and should
 * follow this example:
 *
 * In your js file:
 * <span className="my-wrapper"><InputText></span>
 *
 * In your css file:
 * .my-wrapper {
 *   width: 400px;
 *  }
 *
 *  @media (max-width: 720px) {
 *    .my-wrapper {
 *      width: 200px;
 *    }
 *  }
 *
 */
var InputText = function (_a) {
    var name = _a.name, placeholderText = _a.placeholderText, onChange = _a.onChange, value = _a.value, type = _a.type;
    return (<input className={InputText_module_css_1.default.inputText} type={type} name={name} placeholder={placeholderText} onChange={onChange} value={value}/>);
};
InputText.propTypes = {
    name: PropTypes.string,
    placeholderText: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
};
InputText.defaultProps = {
    name: undefined,
    placeholderText: undefined,
    onChange: undefined,
    value: undefined,
};
exports.default = InputText;
