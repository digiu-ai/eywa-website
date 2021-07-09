import { config } from "dotenv";
import { useStaticRendering } from "mobx-react-lite";

config({ path: ".env" });
// if import syntax is used webpack doesnt load .env before app
const app = require("./app").app;

// use whatever condition you want/need, this is just an example
useStaticRendering(true);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
