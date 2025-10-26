import csv from "csvtojson";
import fs from "fs";
import resultModels from "../models/resultModel.js";
import asyncHandler from "express-async-handler";

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
/* const resultSearch = asyncHandler(async (req, res) => {
  try {
    const { roll, class: studentClass, year, section } = req.query;

    // Validation
    if (!roll || !studentClass || !year) {
      return res.status(400).json({
        success: false,
        message: "Please provide roll, class, and year to search result.",
      });
    }

    // Find result
    const result = await ResultModel.findOne({
      roll: Number(roll),
      class: studentClass,
      year,
      ...(section && { section }), // section optional
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Result found successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Result search error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error while searching result.",
    });
  }
}); */

/* const resultSearch = asyncHandler(async (req, res) => {
  try {
    const { roll, class: studentClass, year } = req.body;

    const result = await ResultModel.findOne({
      roll: Number(roll),
      class: studentClass,
      year,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found!",
      });
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}); */

/* const resultSearch = asyncHandler(async (req, res) => {
  try {
    const { roll, class: studentClass, section, year } = req.query;

    if (!roll || !studentClass || !year) {
      return res.status(400).json({
        success: false,
        message: "Please provide roll, class, and year to search result.",
      });
    }

    const query = {
      roll: Number(roll),
      class: studentClass,
      year,
    };

    if (section) query.section = section; // optional section

    const result = await ResultModel.findOne(query);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Result found successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Result search error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error while searching result.",
    });
  }
}); */

// const resultSearch = asyncHandler(async (res, res) => {
//   try {
//     const { roll, class: studentClass, section } = req.query;
//     if (!roll) {
//       return res.json({
//         success: false,
//         message: "roll number is required!",
//       });
//     }
//     if (!studentClass) {
//       return res.json({
//         success: false,
//         message: "class name is required!",
//       });
//     }
//     if (!section) {
//       return res.json({
//         success: false,
//         message: "section is required!",
//       });
//     }

//     const result = await resultModels.findOne({
//       roll: Number(roll),
//       class: studentClass,
//       section,
//     });

//     if (!result) {
//       return res.json({
//         success: false,
//         message: "result not found! please check your details",
//       });
//     }

//     return res.json({
//       success: true,
//       message: "Result found successfully",
//       data: result,
//     });
//   } catch (error) {
//     console.log("Result Not found");
//     return res.json({
//       success: false,
//       message: error?.message || "Internal server error",
//     });
//   }
// });

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
      section,
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
