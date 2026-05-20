import { clerkClient } from "@clerk/express";
import User from "../models/User.js";

const buildUserPayload = ({ clerkId, clerkUser, body }) => {
  const emailFromClerk = clerkUser?.emailAddresses?.[0]?.emailAddress;
  const nameFromClerk =
    `${clerkUser?.firstName || ""} ${clerkUser?.lastName || ""}`.trim() ||
    clerkUser?.username;
  const imageFromClerk = clerkUser?.imageUrl;

  const email = emailFromClerk || body?.email || `${clerkId}@no-email.local`;
  const name = body?.name || nameFromClerk || email;
  const profileImage = body?.profileImage || imageFromClerk || "";

  return { clerkId, email, name, profileImage };
};

export async function syncCurrentUser(req, res) {
  try {
    const clerkId = req.auth()?.userId;

    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    let clerkUser = null;
    try {
      clerkUser = await clerkClient.users.getUser(clerkId);
    } catch (error) {
      console.warn(
        "Clerk user fetch failed during sync, falling back to request body",
        {
          clerkId,
          error: error?.message || error,
        },
      );
    }

    const payload = buildUserPayload({ clerkId, clerkUser, body: req.body });

    const user = await User.findOneAndUpdate(
      { clerkId },
      {
        $set: {
          name: payload.name,
          email: payload.email,
          profileImage: payload.profileImage,
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error syncing user", error);
    return res.status(500).json({ message: "Failed to sync user" });
  }
}
