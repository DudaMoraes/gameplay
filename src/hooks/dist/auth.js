"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
exports.useAuth = exports.AuthProvider = exports.AuthContext = void 0;
var react_1 = require("react");
var AuthSession = require("expo-auth-session");
var configs_1 = require("../configs");
var api_1 = require("../services/api");
exports.AuthContext = react_1.createContext({});
function AuthProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState({}), user = _b[0], setUser = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    function signIn() {
        return __awaiter(this, void 0, void 0, function () {
            var authUrl, _a, type, params, userInfo, firstName, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        setLoading(true);
                        authUrl = api_1.api.defaults.baseURL + "/oauth2/authorize?client_id=" + configs_1.CLIENT_ID + "&redirect_uri=" + configs_1.REDIRECT_URI + "&response_type=" + configs_1.RESPONSE_TYPE + "&scope=" + configs_1.SCOPE;
                        return [4 /*yield*/, AuthSession
                                .startAsync({ authUrl: authUrl })];
                    case 1:
                        _a = _c.sent(), type = _a.type, params = _a.params;
                        if (!(type === 'success')) return [3 /*break*/, 3];
                        api_1.api.defaults.headers.authorization = "Bearer " + params.access_token;
                        return [4 /*yield*/, api_1.api.get('/users/@me')];
                    case 2:
                        userInfo = _c.sent();
                        firstName = userInfo.data.username.split(' ')[0];
                        userInfo.data.avatar = configs_1.CDN_IMAGE + "/avatars/" + userInfo.data.id + "/" + userInfo.data.avatar + ".png";
                        setUser(__assign(__assign({}, userInfo.data), { firstName: firstName, token: params.access_token }));
                        setLoading(false);
                        return [3 /*break*/, 4];
                    case 3:
                        setLoading(false);
                        _c.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        _b = _c.sent();
                        throw new Error('Não foi possivel autenticar');
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(exports.AuthContext.Provider, { value: {
            user: user,
            signIn: signIn,
            loading: loading
        } }, children));
}
exports.AuthProvider = AuthProvider;
function useAuth() {
    var context = react_1.useContext(exports.AuthContext);
    return context;
}
exports.useAuth = useAuth;
