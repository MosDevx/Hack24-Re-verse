
import {PrismaClient} from "@prisma/client"

const prismaClientSingleton = () =>{
	return new PrismaClient()
}


declare const globalForPrisma :{
	prismaGlobal : ReturnType<typeof prismaClientSingleton>

} & typeof global  

export const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton()


if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaGlobal = prisma