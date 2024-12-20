// this file is configured in setupFilesAfterEnv config in jest so it's imported for every test file
import { server } from './mocks/server';

beforeAll(() => server.listen());
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
