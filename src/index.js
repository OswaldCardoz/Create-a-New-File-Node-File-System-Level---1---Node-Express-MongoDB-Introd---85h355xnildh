const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
   try {
    // Use fs.promises.writeFile to create a new file with the given filename and content
    await fs.promises.writeFile(fileName, fileContent, "utf-8");

    // No need to return anything for this assignment
  } catch (error) {
    // Handle any errors that might occur during file creation
    console.error("Error creating the file:", error.message);
    throw error;
  }
};

module.exports = { writeFile };
