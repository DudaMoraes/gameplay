"use strict";
exports.__esModule = true;
exports.Routes = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var SignIn_1 = require("../screens/SignIn");
var auth_routes_1 = require("./auth.routes");
var auth_1 = require("../hooks/auth");
function Routes() {
    var user = auth_1.useAuth().user;
    return (react_1["default"].createElement(native_1.NavigationContainer, null, user.id ? react_1["default"].createElement(auth_routes_1.AuthRoutes, null) : react_1["default"].createElement(SignIn_1.SignIn, null)));
}
exports.Routes = Routes;
