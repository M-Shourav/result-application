import csv from "csvtojson";
import fs from "fs";
import { Result } from "../models/Result.js";

// Upload CSV
export const uploadResults = async (req, res) => {
  try {
    const filePath = req.file.path;
    const jsonArray = await csv().fromFile(filePath);

    // Parse dynamically
    const formatted = jsonArray.map((row) => {
      const { roll, name, class: className, section, year, ...rest } = row;

      // 'rest' contains all subjects for that class
      const subjects = {};
      Object.entries(rest).forEach(([key, value]) => {
        subjects[key] = Number(value);
      });

      return {
        roll: Number(roll),
        name,
        class: className,
        section,
        year,
        subjects,
      };
    });

    await Result.insertMany(formatted);
    fs.unlinkSync(filePath);

    res.status(200).json({
      success: true,
      message: `${formatted.length} results uploaded successfully!`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Upload failed" });
  }
};

// Find result by roll + class + section + year
export const getResultByRoll = async (req, res) => {
  try {
    const { roll, class: className, section, year } = req.body;
    if (!roll || !className || !year) {
      return res
        .status(400)
        .json({ error: "Roll, class and year are required" });
    }

    const student = await Result.findOne({
      roll,
      class: className,
      section,
      year,
    });
    if (!student) {
      return res.status(404).json({ error: "Result not found" });
    }

    res.status(200).json({ success: true, student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
