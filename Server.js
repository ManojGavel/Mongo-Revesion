const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
console.log(process.env.MONGOUSER_NAME, process.env.MONGO_PASSWORD, process.env.PORT, process.env.URL)
mongoose
  .connect(
    `mongodb+srv://manoj123:29Rsgk0eK8ePm4th@cluster0.qdsyalo.mongodb.net/mongoRevesion`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connection successful!")).catch(err => console.log(err.message));

  app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.URL}/`);
  });