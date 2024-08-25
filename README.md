# Contacts Page [Demo project]

## Getting Started

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