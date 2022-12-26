const mongoose = require("mongoose");
const app = require("./app");
const socketConector = require("./helpers/socketconecter");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const uriDb = process.env.MONGO_DB_URI;
mongoose.Promise = global.Promise;

const connection = mongoose.connect(uriDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

socketConector(io);

connection
  .then(() => {
    server.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );
