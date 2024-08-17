const express = require("express");

const app = express();

const NODEJS_PORT = process.env.NODEJS_PORT ?? 8080;

app.use(express.static("public"));

app.listen(NODEJS_PORT, () => {
	console.log(`listening at ${NODEJS_PORT}`);
});
