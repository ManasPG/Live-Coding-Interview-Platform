import { chatClient } from "../lib/stream";

export async function getStreamToken(req, res) {
  try {
    const token = chatClient.createToken(req.user.clerkId);
  } catch (error) {}
}
