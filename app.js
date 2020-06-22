// 加载express模块
const express = require("express");

// 加载path模块
const path = require("path");
// 加载cors模块
const cors = require("cors");
const app = express();

app.listen(3000, () => console.log("服务器启动了"));

// 配置应用级别中间件
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// 加载路由模块
app.use("/api", require(path.join(__dirname, "routers", "login")));
app.use("/my/article", require(path.join(__dirname, "routers", "category")));
app.use("/my/article", require(path.join(__dirname, "routers", "article")));
app.use("/my", require(path.join(__dirname, "routers", "user")));
