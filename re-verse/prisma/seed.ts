import { PrismaClient, TaskType, QuizType, CommunityType, CommunityStatus, CommunityRole, CommunityActivityType, ProgressStatus, MemorySystem } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

	await prisma.$transaction([
    prisma.user.deleteMany(),
    prisma.streak.deleteMany(),
    prisma.streakDateLog.deleteMany(),
    prisma.stats.deleteMany(),
    prisma.module.deleteMany(),
    prisma.lesson.deleteMany(),
    prisma.task.deleteMany(),
    prisma.articleTask.deleteMany(),
    prisma.videoTask.deleteMany(),
    prisma.quizTask.deleteMany(),
    prisma.userTaskProgress.deleteMany(),
    prisma.community.deleteMany(),
    prisma.communityUserJoin.deleteMany(),
    prisma.communityMessage.deleteMany(),
    prisma.communityActivity.deleteMany(),
    prisma.communityActivityParticipants.deleteMany(),
    prisma.communityActivityMessage.deleteMany(),
    prisma.studyGroupCommunityActivity.deleteMany(),
    prisma.quizCommunityActivity.deleteMany(),
    prisma.moduleCommunityActivity.deleteMany(),
    prisma.studyMilestone.deleteMany(),
    prisma.studyMilestoneSection.deleteMany(),
    prisma.communityActivityProgress.deleteMany(),
    prisma.userVerseMemory.deleteMany(),
    prisma.verse.deleteMany(),
    prisma.tag.deleteMany(),
    prisma.verseTagJoin.deleteMany(),
    prisma.userFavouriteVerse.deleteMany(),
    prisma.navigatorTags.deleteMany(),
    prisma.navigatorVerse.deleteMany(),
    prisma.journalEntry.deleteMany(),
    prisma.journalEntryComment.deleteMany(),
  ]);

  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'john.doe@example.com',
      first_name: 'John',
      last_name: 'Doe',
      username: 'johndoe123',
      date_of_birth: new Date('1990-05-01'),
      profile_picture_url: 'https://avatar.iran.liara.run/public/boy',
      gender: 'Male',
      role: 'Admin',
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'jane.smith@example.com',
      first_name: 'Jane',
      last_name: 'Smith',
      username: 'janesmith456',
      date_of_birth: new Date('1995-07-15'),
      profile_picture_url: 'https://avatar.iran.liara.run/public/girl',
      gender: 'Female',
      role: 'User',
    },
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'alice.jones@example.com',
      first_name: 'Alice',
      last_name: 'Jones',
      username: 'alicejones789',
      date_of_birth: new Date('2000-03-25'),
      profile_picture_url: 'https://avatar.iran.liara.run/public/girl',
      gender: 'Female',
      role: 'User',
    },
  })

  // Create streaks for users
  await prisma.streak.create({
    data: {
      current_streak: 5,
      longest_streak: 10,
      userId: user1.id,
    },
  })

  await prisma.streak.create({
    data: {
      current_streak: 2,
      longest_streak: 4,
      userId: user2.id,
    },
  })

  await prisma.streak.create({
    data: {
      current_streak: 7,
      longest_streak: 12,
      userId: user3.id,
    },
  })

  // Create a module
  const module1 = await prisma.module.create({
    data: {
      title: 'Introduction to Discipleship',
      description: 'A foundational module on discipleship.',
      total_lessons: 5,
    },
  })

  // Create lessons for module
  const lesson1 = await prisma.lesson.create({
    data: {
      title: 'Lesson 1: The Basics',
      lesson_number: 1,
      description: 'An introduction to the basics of discipleship.',
      moduleId: module1.id,
    },
  })

  // Create tasks for lesson
  const task1 = await prisma.task.create({
    data: {
      lessonId: lesson1.id,
      title: 'Read the Introduction',
      taskType: TaskType.ARTICLE,
      orderPosition: 1,
    },
  })

  const task2 = await prisma.task.create({
    data: {
      lessonId: lesson1.id,
      title: 'Watch the Video',
      taskType: TaskType.VIDEO,
      orderPosition: 2,
    },
  })

  const task3 = await prisma.task.create({
    data: {
      lessonId: lesson1.id,
      title: 'Take the Quiz',
      taskType: TaskType.QUIZ,
      orderPosition: 3,
    },
  })

  // Create quiz task for lesson
  const quizTask = await prisma.quizTask.create({
    data: {
      quizType: QuizType.MULTIPLE_CHOICE,
      quizData: {
        question: 'What is discipleship?',
        options: ['A. Following Jesus', 'B. Attending church', 'C. Being a leader', 'D. All of the above'],
        answer: 'A',
      },
      taskId: task3.id,
    },
  })

  // Create community
  const community1 = await prisma.community.create({
    data: {
      name: 'Family Group',
      communityType: CommunityType.FAMILY,
      description: 'A community of family members.',
    },
  })

  // Create user community joins
  await prisma.communityUserJoin.create({
    data: {
      userId: user1.id,
      communityId: community1.id,
      status: CommunityStatus.ACTIVE,
      role: CommunityRole.SHEPHERD,
      lastActive: new Date(),
    },
  })

	await prisma.verse.createMany({
    data: [
      {
				reference: "Genesis 1:1",
        content: 'In the beginning, God created the heavens and the earth.',
      },
      {
				reference: "John 3:16",
        content: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
      },
      {
        reference:"Psalms 23:1",
        content: 'The Lord is my shepherd, I lack nothing.',
      },
    ],
  });

  await prisma.communityUserJoin.create({
    data: {
      userId: user2.id,
      communityId: community1.id,
      status: CommunityStatus.ACTIVE,
      role: CommunityRole.SHEEP,
      lastActive: new Date(),
      preferences: {},
    },
  })

  await prisma.communityUserJoin.create({
    data: {
      userId: user3.id,
      communityId: community1.id,
      status: CommunityStatus.PENDING,
      role: CommunityRole.SHEEP,
      lastActive: new Date(),
			preferences: {},
    },
  })

  // Create community activity
  const communityActivity1 = await prisma.communityActivity.create({
    data: {
      title: 'Quiz Night',
      description: 'A fun quiz event for all members.',
      activityType: CommunityActivityType.QUIZ,
      startDate: new Date(),
      endDate: new Date(),
      communityId: community1.id,
    },
  })

  // Create community activity participants
  await prisma.communityActivityParticipants.create({
    data: {
      userId: user1.id,
      communityActivityId: communityActivity1.id,
      role: CommunityRole.SHEPHERD,
    },
  })

  await prisma.communityActivityParticipants.create({
    data: {
      userId: user2.id,
      communityActivityId: communityActivity1.id,
      role: CommunityRole.SHEEP,
    },
  })

  // Create user task progress
  await prisma.userTaskProgress.create({
    data: {
      isCompleted: false,
      progressStatus: ProgressStatus.NOT_STARTED,
      completionDate: new Date(),
      userId: user1.id,
      taskId: task1.id,
			completionData:{}
    },
  })

  await prisma.userTaskProgress.create({
    data: {
      isCompleted: false,
      progressStatus: ProgressStatus.NOT_STARTED,
      completionDate: new Date(),
      userId: user2.id,
      taskId: task2.id,
			completionData:{}
    },
  })

  // Create user verse memory
  await prisma.userVerseMemory.create({
    data: {
      userId: user1.id,
      verseId: 1, // Assuming the verse with ID 1 exists
      successRate: 0.75,
      nextReviewDate: new Date(),
      intervalDays: new Date(),
      lastAttemptDate: new Date(),
      memorySystem: MemorySystem.NORMAL,
    },
  })

  await prisma.userVerseMemory.create({
    data: {
      userId: user2.id,
      verseId: 2, // Assuming the verse with ID 2 exists
      successRate: 0.85,
      nextReviewDate: new Date(),
      intervalDays: new Date(),
      lastAttemptDate: new Date(),
      memorySystem: MemorySystem.NAVIGATORS,
    },
  })

  console.log('Seeding completed.')
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
