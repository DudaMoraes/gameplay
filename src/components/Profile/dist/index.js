"use strict";
exports.__esModule = true;
exports.Profile = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../Profile/styles");
var Avatar_1 = require("../../components/Avatar");
var auth_1 = require("../../hooks/auth");
function Profile() {
    var user = auth_1.useAuth().user;
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.container },
        react_1["default"].createElement(Avatar_1.Avatar, { urlImage: user.avatar }),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.user },
                react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.greeting }, "Ol\u00E1,"),
                user.firstName,
                react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.username })),
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.message }, "Hoje \u00E9 dia de derrota."))));
}
exports.Profile = Profile;
