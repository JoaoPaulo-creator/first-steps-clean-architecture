import { MongoHelper } from "../infra/db/mongo-helper";
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;

MongoHelper.connect(mongoUrl)
  .then(async () => {
    console.log("Conectando ao banco de dados");
    const app = (await import("./config/app")).default;
    app.listen(3000, () =>
      console.log("Server is running at http://localhost:3000")
    );
  })
  .catch((error) => {
    console.log(error);
    MongoHelper.disconnect();
  });
