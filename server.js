const app = require("./app");
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is listening on PORT", PORT);
});
