"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
// Native
const path_1 = require("path");
const url_1 = require("url");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Packages
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const electron_next_1 = __importDefault(require("electron-next"));
let mainWindow;
const TOKEN_FILE = path.join(electron_1.app.getPath('userData'), 'token.json');
// Prepare the renderer once the app is ready
electron_1.app.on("ready", async () => {
    await (0, electron_next_1.default)("./renderer");
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: (0, path_1.join)(__dirname, "preload.js"),
        },
        fullscreen: true
    });
    const url = electron_is_dev_1.default
        ? "http://localhost:8000/"
        : (0, url_1.format)({
            pathname: (0, path_1.join)(__dirname, "../renderer/out/index.html"),
            protocol: "file:",
            slashes: true,
        });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(url);
});
// Quit the app once all windows are closed
electron_1.app.on("window-all-closed", electron_1.app.quit);
// Token management functions
function saveToken(token) {
    fs.writeFileSync(TOKEN_FILE, JSON.stringify({ token }));
}
function getToken() {
    try {
        const data = fs.readFileSync(TOKEN_FILE, 'utf8');
        return JSON.parse(data).token;
    }
    catch (error) {
        return null;
    }
}
function clearToken() {
    try {
        fs.unlinkSync(TOKEN_FILE);
    }
    catch (error) {
        console.error('Error clearing token:', error);
    }
}
// listen the channel `message` and resend the received message to the renderer process
electron_1.ipcMain.on("message", (event, message) => {
    console.log(message);
    setTimeout(() => event.sender.send("message", "hi from electron"), 500);
});
electron_1.ipcMain.on('login-success', async (event, userData) => {
    console.log('Login successful:', userData);
    event.sender.send("message", "Login successful");
    await saveToken(userData.token);
    if (mainWindow) {
        mainWindow.loadURL('http://localhost:8000/dashboard');
    }
});
// IPC handlers
electron_1.ipcMain.on('save-token', (event, token) => {
    event.sender.send("message", "Token saved");
    saveToken(token);
});
electron_1.ipcMain.handle('get-token', () => {
    return getToken();
});
electron_1.ipcMain.on('clear-token', () => {
    clearToken();
});
