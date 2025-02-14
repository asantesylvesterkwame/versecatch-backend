const bibleRoute = require("express").Router();
const axios = require("axios");

bibleRoute.get("/verse", async (req, res) => {
  const { reference, translation } = req.query;

  if (!reference) {
    return res.status(400).json({ error: "No Bible reference provided." });
  }

  try {
    const response = await axios.get(
      `https://bible-api.com/${reference}?translation=${translation || "WEB"}`
    );

    const verses = response.data.verses
      ? response.data.verses.map((v) => v.text).join(" ")
      : response.data.text;

    res.json({ reference, verses });
  } catch (error) {
    console.error("Error fetching verse:", error);
    res.status(500).json({ error: "Failed to fetch Bible verse." });
  }
});

module.exports = bibleRoute;
