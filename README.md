# Contacts Page [Demo project]

## Getting Started

### Requirements
* Postgres Database
* Node (21.7.3 Prefered)

### Tech Stack
This app is made on [Next.js](https://nextjs.org/docs) which works as a full-stack app, the page is rendered client-side mostly, but data is managed server-side using the API Routes feature, securing all app connections and credentials.

The way we communicate with our database is using an ORM called [Prisma](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma), in this case prisma is configured by default to use [PostgreSQL](https://www.postgresql.org/).

To store images we are using [Cloudinary](https://cloudinary.com/), this service allows us to store media with an easy-to-use API.

### Set-up

1. Install the required dependencies:
```bash
npm install
```

2. Fill the .env file with your Postgres and Cloudinary credentials, this services will allow us to store data and images respectively. You should leave the variables that start with `NEXT_PUBLIC` unchanged, as these will change on the next step.

3. Create the tables on the database and the Prisma models 
```bash
npx prisma db push
npx prisma generate
```

4. initialize the demo app
```bash
npm run initialize
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the components and pages and the project will auto-update.

## Deployment
[App deployed on Vercel](https://contacts-demo-sage.vercel.app/)