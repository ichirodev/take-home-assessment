const { PrismaClient } = require('@prisma/client')


const createDemoUser = async () => {
    const prismaClient = new PrismaClient();

    try {
        const contacts = [
            {
                name: 'Kevin Smith',
                email: 'kevinsmith@yahoo.com',
                picture: 'https://i.pinimg.com/736x/34/16/65/341665199bb597cdfae9848f975b844f.jpg',
            },
            {
                name: 'Lorena Castillo',
                email: 'lorecastillo1997@gmail.com',
                picture: 'https://images.pexels.com/photos/4670298/pexels-photo-4670298.jpeg',
            },
            {
                name: 'Jade Yu',
                email: 'jadeyu@gmail.com',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Flower_%28166180281%29.jpeg',
            }
        ]

        const demoUser = await prismaClient.user.create({
            data: {
                name: 'Samuel Smith',
                email: 'samuelsmith@hotmail.com',
                contacts: {
                    create: contacts
                }
            }
        });

        console.log(`Demo user created! ${JSON.stringify(demoUser)}`);
    } catch (creationException) {
        console.error(`Something happened while trying to create the demo data: ${creationException}`);
    }
}

await createDemoUser().finally(console.log('Finished initialization of the project!'));