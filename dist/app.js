"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("./database/models"));
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const {
  sequelize
} = _models.default;
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
const app = (0, _express.default)();
app.get("/", (req, res) => {
  res.status(200).send(`
<h1 style="text-align: center; margin-top: 20vh;"> my-brand  APIS</h1>
`);
});
var _default = app;
exports.default = _default;