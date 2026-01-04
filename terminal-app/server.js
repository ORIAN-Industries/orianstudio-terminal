const express = require("express");
const { explainError, improveCode, explainCode } = require("./aiHelper");
const path = require("path");
const app = express();
app.use(express.json());

// ✅ HOME PAGE FIRST
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ STATIC FILES AFTER
app.use(express.static("public"));

// ✅ RUN CODE API
app.post("/run", (req, res) => {
  const { code, action } = req.body;

  let output = "";
  let aiHelp = "";

  try {
    const result = eval(code);
    output = result !== undefined ? String(result) : "Code ran successfully.";

    if (action === "explain") aiHelp = explainCode(code);
    if (action === "improve") aiHelp = improveCode(code);
  } catch (err) {
    output = err.message;
    aiHelp = explainError(err.toString());
  }

  res.json({ output, aiHelp });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ OrianStudio running on port ${PORT}`);
});

