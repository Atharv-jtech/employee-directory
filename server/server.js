require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/EmployeeRoute");

const app = express();
app.use(cors());
// Connect Database

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Employee Directory API Running");
});

const PORT = process.env.PORT || 5000;
app.use("/api/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
