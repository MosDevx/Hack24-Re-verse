// File: lib/data.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getVersesForUser(userId: number) {
  const today = new Date();

  // Fetch due verses
  const dueVerses = await prisma.user_attempts3.findMany({
    where: {
      user_id: userId,
      due_date: {
        lte: today,
      },
    },
    include: {
      verse: true,
    },
  });

  // Fetch new verses if no due verses
  let newVerses = [];
  if (dueVerses.length === 0) {
    const seenVerseIds = await prisma.user_attempts.findMany({
      where: {
        user_id: userId,
      },
      select: { verse_id: true },
    });

    const seenIds = seenVerseIds.map((record) => record.verse_id);

    newVerses = await prisma.verses.findMany({
      where: {
        id: {
          notIn: seenIds,
        },
      },
      take: 10,
    });
  }

  return {
    dueVerses: dueVerses.map((attempt) => ({
      id: attempt.verse.id,
      reference: attempt.verse.reference,
      content: attempt.verse.content,
    })),
    newVerses,
  };
}
