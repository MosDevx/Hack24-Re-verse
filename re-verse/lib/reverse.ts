"use server";
import prisma from "./db";

export async function getStages() {
    const stages = await prisma.stage.findMany();
    return stages;
}

//function to get levels of a stage
export async function getStageLevels(stageId: number) {
    const levels = await prisma.level.findMany({
        where: {
            stageId: stageId
        }
    })
    return levels
}

//function to get level by id
export async function getLevelById(levelId: number) {
    const level = await prisma.level.findUnique({
        where: {
            id: levelId
        }
    })
    return level
}
