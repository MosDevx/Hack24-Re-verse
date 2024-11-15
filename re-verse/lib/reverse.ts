"use server";
// import prisma from "./db";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStages() {
  const stages = await prisma.stage.findMany();
  return stages;
}

//function to get levels of a stage
export async function getStageLevels(stageId: number) {
  const levels = await prisma.level.findMany({
    where: {
      stageId: stageId,
    },
  });
  return levels;
}

//function to get level by id
export async function getLevelById(levelId: number) {
  const level = await prisma.level.findUnique({
    where: {
      id: levelId,
    },
  });
  return level;
}

//function to get question, options, type and correct answer// Function to get question, options, type, and correct answer
export const getLevelTriviaByLevelId = async (levelId: number) => {
  try {
    const questions = [];

    // Fetch level trivia for the specified levelId
    const levelTrivia = await prisma.levelTrivia.findMany({
      where: {
        levelId: levelId, // You may pass the levelId dynamically
      },
    });
    //   return levelTrivia;

    // Loop through each levelTrivia and fetch related options
    for (const trivia of levelTrivia) {
      const { id, question, answer, type } = trivia;

      // Fetch options for each trivia question based on levelTriviaId
      const options = await prisma.option.findMany({
        where: {
          levelTriviaId: id, // Fetching options based on the trivia id
        },
      });

      const extractedOptions = options.map(({ option }) => option);
      // Push the question details along with the options
      questions.push({
        question,
        id,
        answer,
        type,
        options: extractedOptions,
      });
    }

    return questions; // Return the populated questions array
  } catch (error) {
    console.error("Error fetching level trivia:", error);
    throw error;
  }
};

// Function to fetch options depending on levelTriviaId
export const getOptionsByLevelTriviaId = async (levelTriviaId: number) => {
  try {
    const options = await prisma.option.findMany({
      where: {
        levelTriviaId: levelTriviaId,
      },
    });
    return options;
  } catch (error) {
    console.error("Error fetching options:", error);
    throw error;
  }
};

//function to update users progress
export async function updateUserProgress(userId: number) {
  const user = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (user && user.progress !== null) {
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        progress: { increment: 1 },
      },
    });
    return updatedUser;
  } else {
    // Set progress to 1 if it's null
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        progress: 1,
      },
    });
    return updatedUser;
  }
}

//function to get all levelTrivias
export async function getAllLevelTrivia() {
  const levelTrivia = prisma.levelTrivia.findMany();
  return levelTrivia;
}

//function to fetch trivia with id
export const getTrivias = async () => {
  try {
    const questions = [];

    // Fetch  trivia for the specified trivia id
    const trivias = await prisma.trivia.findMany();
    //   return levelTrivia;

    // Loop through each levelTrivia and fetch related options
    for (const trivia of trivias) {
      const { id, question, answer, type } = trivia;

      // Fetch options for each trivia question based on levelTriviaId
      const options = await prisma.choice.findMany({
        where: {
          TriviaId: id, // Fetching options based on the trivia id
        },
      });

      const extractedOptions = options.map(({ choice }) => choice);
      // Push the question details along with the options
      questions.push({
        question,
        id,
        answer,
        type,
        options: extractedOptions,
      });
    }

    return questions; // Return the populated questions array
  } catch (error) {
    console.error("Error fetching level trivia:", error);
    throw error;
  }
};

//function to update users trivia_score
export async function updateUserTriviaScore(userId: number) {
  const user = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (user && user.trivia_score !== null) {
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        trivia_score: { increment: 1 },
      },
    });
    return updatedUser;
  } else {
    // Set progress to 1 if it's null
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        trivia_score: 1,
      },
    });
    return updatedUser;
  }
}

//function to get userData
export async function getUserData(userId: number) {
  const user = await prisma.users.findUnique({
    where: { id: userId },
  });
  return user;
}

//function to get users
export async function getUsers() {
  const users = await prisma.users.findMany({
    orderBy: {
      trivia_score: "desc",
    },
  });
  return users;
}

export async function createUser(email:string, fname: string,lname:string, profilePikUrl:string, gender:string, dob:Date, username:string){
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        first_name: fname,
        last_name: lname,
        username: username,
        date_of_birth : dob,
        profile_picture_url :profilePikUrl,
        gender : gender,
        role : "User"
      },
    });

    console.log("User created successfully:", user);
    return user; // You can return the user object for further actions
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Re-throw the error for handling in your React component
  }
}


