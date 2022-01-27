if (typeof window === "undefined") {
  console.log("Server");
  const { server } = require("./server");
  server.listen();
} else {
  console.log("Client");
  const { worker } = require("./browser");
  worker.start();
}
