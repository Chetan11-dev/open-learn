# Frontend

## Start Frontend

```
cd frontend/
yarn
yarn start
```

## Frontend Folder Structure

    /app: entry point for application
    /assets: all images, svgs used in app
    /components: shared components used across pages
    /pages: Heart of application. It contains Pages such as Editor Page, Dashboard Page, Authentication Page
    /routes: routes linking to pages
    /store: redux store for storing global app state
    /utils: utilities used throughout the app

## Conventions

1.  For React component use Function component instead const component for consistency.

2.  Inside of component used const function.

3.  Prefer using function for other functions.

## Clean code principles

1. Use verbs for functions and nouns for components

2. Follow one word per concept rule:
   prefix with create for creators
   ```
   	createTree(): Nodes[]
   ```
   prefix with get for getting something based parameters
   ```
   	getById(xs:WithId[], x:string): WithId
   ```
   prefix with update for updation
   ```
   	updateId(xs:WithId[], x:string, u:string): void
   ```
   prefix with delete for deletion/removal
   ```
   	deleteNode(xs:Node[], x:string): void
   ```

# Tech Stack

Reactjs, Redux Toolkit, Tailwindcss

# Backend

## Start Backend

```
cd backend/
yarn
yarn start:dev:db
yarn start:dev
```

# Tech Stack

Nestjs, PostgreSQL

# Resources

Postman Documentation: https://documenter.getpostman.com/view/11453962/U16gQSmE#b9daab14-5905-4ad6-bc1b-87a69a0ed207
