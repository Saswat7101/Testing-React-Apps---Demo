# React Testing Bootcamp

This project is a hands-on tutorial for learning React component testing using Jest and React Testing Library. It demonstrates a progressive series of testing concepts, from basic unit tests to advanced scenarios like asynchronous code, mocks, user interactions, state management, and connected components.

## Features

- **Basic Component Testing**: Testing simple components like Greeting and Output.
- **Test Suites**: Organizing related tests into describe blocks.
- **User Interactions and State**: Simulating events, form inputs, and verifying state changes.
- **Connected Components**: Testing components integrated with app state or props.
- **Asynchronous Testing**: Handling promises, async/await, timers, and API mocks.
- **Mocks**: Mocking modules, functions, and external dependencies for isolated tests.

## Project Structure

```
src/
├── components/
│   ├── Greeting.js & Greeting.test.js
│   ├── Output.js
│   ├── Async.js & Async.test.js
├── App.js & App.css
├── index.js
└── setupTests.js
```

## Setup & Run

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm start
   ```

   Opens at `http://localhost:3000`.

3. Run tests:

   ```
   npm test
   ```

4. Build for production:
   ```
   npm run build
   ```

## Testing Coverage

All components include comprehensive test suites covering:

- Rendering
- Prop validation
- User events
- Async behavior
- Mocked dependencies

This project serves as a reference for best practices in React testing.
