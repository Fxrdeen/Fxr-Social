"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("User is not authenticated");
  }
  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          recieverId: userId,
        },
      });
      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            recieverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("user not authenticated");
  }
  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });
    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const acceptFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }
  const exisitingFollowRequest = await prisma.followRequest.findFirst({
    where: {
      senderId: userId,
      recieverId: currentUserId,
    },
  });
  if (exisitingFollowRequest) {
    await prisma.followRequest.delete({
      where: {
        id: exisitingFollowRequest.id,
      },
    });
    await prisma.follower.create({
      data: {
        followerId: userId,
        followingId: currentUserId,
      },
    });
  }
};

export const declineFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }
  const exisitingFollowRequest = await prisma.followRequest.findFirst({
    where: {
      senderId: userId,
      recieverId: currentUserId,
    },
  });
  if (exisitingFollowRequest) {
    await prisma.followRequest.delete({
      where: {
        id: exisitingFollowRequest.id,
      },
    });
  }
};

export const updateProfile = async (formdata: FormData, cover: string) => {
  const fields = Object.fromEntries(formdata);
  const filteredFields = Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );
  console.log(fields);
  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(60).optional(),
    surname: z.string().max(60).optional(),
    desc: z.string().max(60).optional(),
    city: z.string().max(60).optional(),
    school: z.string().max(60).optional(),
    work: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
  });
  const { userId } = auth();
  if (!userId) return "err";
  const validatedFields = Profile.safeParse({ cover, ...filteredFields });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return;
  }
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },

      data: validatedFields.data,
    });
  } catch (error) {
    console.log(error);
  }
};
