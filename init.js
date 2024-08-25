const { PrismaClient } = require('@prisma/client')
const fs = require('fs');
const path = require('path');

const envFilePath = path.resolve(__dirname, '.env');

const updateEnvFile = (key, value) => {
    const envFileContent = fs.readFileSync(envFilePath, {
        encoding: 'utf8'
    });
    const envLines = envFileContent.split('\n');
    const updatedLines = envLines.map(line => {
      if (line.startsWith(key)) {
        return `${key}=${value}`;
      }
      return line;
    });
  
    if (!envLines.some(line => line.startsWith(key))) {
      updatedLines.push(`${key}=${value}`);
    }
  
    fs.writeFileSync(envFilePath, updatedLines.join('\n'), {
        encoding: 'utf8'
    });
    console.log(`Updated ${key} in .env file`);
}

const createDemoUser = async () => {
    const prismaClient = new PrismaClient();

    console.log('Creating demo user!');

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

        updateEnvFile('NEXT_PUBLIC_DEMO_USER_ID', demoUser.id);
        updateEnvFile('NEXT_PUBLIC_DEMO_USER_NAME', demoUser.name);
        updateEnvFile('NEXT_PUBLIC_DEMO_USER_EMAIL', demoUser.email);
    } catch (creationException) {
        console.error(`Something happened while trying to create the demo data: ${creationException}`);
    }

    console.log('Finished!');
}

createDemoUser();