import xlsx from "xlsx";
import fs from "fs";
import resultModels from "../models/resultModel.js";
import asyncHandler from "express-async-handler";

/*
 const resultUpload = asyncHandler(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded!",
      });
    }

    const filePath = req.file.path;
    const jsonArray = await csv().fromFile(filePath);

    //  Identify all core fields
    const coreFields = ["roll", "name", "class", "section", "year"];

    //  Convert each CSV row into model format dynamically
    const formattedData = jsonArray.map((row) => {
      const subjects = {};

      // সব column check করে subjects এ নেবে যদি coreFields এর মধ্যে না পড়ে
      Object.keys(row).forEach((key) => {
        if (!coreFields.includes(key)) {
          // convert numeric values
          subjects[key] = isNaN(row[key]) ? row[key] : Number(row[key]);
        }
      });

      return {
        roll: Number(row.roll),
        name: row.name,
        class: row.class,
        section: row.section,
        year: row.year,
        subjects,
      };
    });

    // Save to MongoDB
    await resultModels.insertMany(formattedData);

    // Remove uploaded CSV
    fs.unlinkSync(filePath);

    res.status(200).json({
      success: true,
      message: "Results uploaded successfully!",
      total: formattedData.length,
    });
  } catch (error) {
    console.error("result upload error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error while uploading results",
    });
  }
});
*/

const resultUpload = async (req, res) => {
  try {
    // 🟢 File check
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // 🟢 Read Excel/CSV file
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // 🟢 Convert Excel rows → MongoDB documents
    const results = sheetData.map((row) => {
      // Subject fields handle dynamically (based on column names)
      const subjects = [];
      for (let i = 1; i <= 10; i++) {
        const name = row[`subject${i}_name`];
        const code = row[`subject${i}_code`];
        const mark = row[`subject${i}_mark`];
        if (name && code && mark) {
          subjects.push({ name, code, mark });
        }
      }

      return {
        name: row.name,
        roll: row.roll,
        class: row.class,
        section: row.section,
        year: row.year,
        subjects,
        result: row.result,
        grade: row.grade,
        gpa: row.gpa,
      };
    });

    // 🟢 Insert into database
    await resultModels.insertMany(results);

    // // remove upload CSV
    fs.unlinkSync(req.file.path);

    res.status(201).json({
      success: true,
      message: "Results uploaded successfully!",
      count: results.length,
    });
  } catch (error) {
    console.error("Error uploading results:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const searchResult = asyncHandler(async (req, res) => {
  try {
    const { roll, class: studentClass, section } = req.query;
    if (!roll) {
      return res.json({
        success: false,
        message: "roll number is required!",
      });
    }
    if (!studentClass) {
      return res.json({
        success: false,
        message: "class name is required!",
      });
    }
    if (!section) {
      return res.json({
        success: false,
        message: "section is required!",
      });
    }

    const result = await resultModels.findOne({
      roll: Number(roll),
      class: studentClass,
      section: { $regex: `^${section}$`, $options: "i" },
    });

    if (!result) {
      return res.json({
        success: false,
        message: "result not found! please check your details",
      });
    }

    return res.json({
      success: true,
      message: "Result found successfully",
      data: result,
    });
  } catch (error) {
    console.log("Result Not found");
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

export { resultUpload, searchResult };
