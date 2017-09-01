# Vinyl

A community for record enthusiasts to review their favorite albums.


## Getting Started

Run `$ npm run` to see the list of commands available. To see what each command does, look at `package.json`.

The app uses a basic Express file structure, and uses Knex to set up the schema and import data.

```sh
src/
  package.json        # npm standard
  public/             # static assets go here
  README.md           # you are here
  server.js           # web server
  auth/               # authentication service files (passport)
  models/             # Models for handling and manipulating data
  views/              # Views for EJS templates
  controllers/        # Controllers for controlling data flow
  Models/db/           # Database integration files (knex)
```

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Create PostgreSQL database `vinyl`: `$ npm run db:create`
1. Load latest migration: ` $ npm run db:migrate`
1. Rollback migrations: ` $ npm run db:rollback`
1. Load seed data: ` $ npm run db:seed`
1. Reset database: ` $ npm run db:reset`
