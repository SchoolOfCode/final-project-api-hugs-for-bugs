import express from "express";
import { addEvent } from "../models/events.js";

const eventsRouter = express.Router();

// using addEvent function to add data to DB
// calling addEvent in try catch to catch any error messages and respond with those to front end
// else if successful, responds with data
eventsRouter.post("/", async (req, res) => {
  const { event_name, time, address, type, tags, user_id } = req.body;
  try {
    const data = await addEvent(event_name, time, address, type, tags, user_id);
    return res.json({
      success: true,
      payload: data,
    });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

export default eventsRouter;