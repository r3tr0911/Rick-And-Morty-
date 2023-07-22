const http = require("http");
const { getById } = require ("./controllers/getCharById.js");
 
http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const id = req.url.split("/").at(-1);

        if (req.url.includes("onSearch")){
            return getById(res, id);
        }
        if(req.url.includes("detail")){
            return getById(res, id);
        }
    })
    .listen(3001, () => {
        console.log("port on 3001")
    });