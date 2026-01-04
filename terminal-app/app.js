const { explainError } = require("./aiHelper");

function runUserCode() {
  try {
    // ❌ INTENTIONAL ERROR (for testing AI)
    console.log(myVariable);
  } catch (err) {
    console.log("❌ ERROR DETECTED:");
    console.log(err.message);

    console.log("\n🤖 AI HELP:");
    console.log(explainError(err.toString()));
  }
}

runUserCode();
console.log("Welcome to OrianStudio Coding Terminal MVP");
console.log("You are running code in the cloud.");
