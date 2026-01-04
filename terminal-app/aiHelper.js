function explainError(errorText) {
  // MOCK AI LOGIC (for now)
  if (errorText.includes("ReferenceError")) {
    return "It looks like you used a variable that was not defined. Check spelling or define it first.";
  }

  if (errorText.includes("SyntaxError")) {
    return "There is a syntax mistake in your code. Check brackets, quotes, or missing symbols.";
  }

  if (errorText.includes("TypeError")) {
    return "You are using a value in the wrong way. For example, calling something that is not a function.";
  }

  return "An error occurred. Read the error message carefully and check your code.";
}

module.exports = { explainError };
