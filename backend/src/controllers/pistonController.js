import fetch from "node-fetch";
import { ENV } from "../lib/env.js";

export async function executeCodeProxy(req, res) {
  try {
    const body = req.body;

    const pistonUrl = ENV.PISTON_API_URL || "https://emkc.org/api/v2/piston";

    const headers = { "Content-Type": "application/json" };
    if (ENV.PISTON_API_KEY)
      headers["Authorization"] = `Bearer ${ENV.PISTON_API_KEY}`;

    const response = await fetch(`${pistonUrl}/execute`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => null);

    res.status(response.status).json(data || { status: response.status });
  } catch (error) {
    console.error("Piston proxy error", error);
    res.status(500).json({ message: "Failed to execute code" });
  }
}
