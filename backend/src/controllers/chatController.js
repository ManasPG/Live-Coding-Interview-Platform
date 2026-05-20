import { chatClient, streamClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const chatToken = chatClient.createToken(req.user.clerkId);

    const videoToken =
      typeof streamClient.generateUserToken === "function"
        ? streamClient.generateUserToken({ user_id: req.user.clerkId })
        : streamClient.createToken(req.user.clerkId);

    return res.status(200).json({
      token: videoToken,
      chatToken,
      userId: req.user.clerkId,
      userName: req.user.name,
      profileImage: req.user.profileImage,
      userImage: req.user.profileImage,
    });
  } catch (error) {
    console.error("Error generating stream tokens", error);
    return res.status(500).json({ error: "Failed to generate tokens" });
  }
}
