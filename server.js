/* === External modules === */
const express = require("express");
/* === Internal modules === */
/* === System Variables === */
const app = express();
const PORT = 4000;
/* === Server Configuration === */
/* === Middleware === */
/* === Routes === */
/* === Server Listener === */
app.listen(PORT, function () {
  console.log(`Server is live and listening at localhost:${PORT}. 🤑`);
});
