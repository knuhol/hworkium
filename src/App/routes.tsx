const ROUTE = {
  HOME: '/',
  HELLO_WORLD: '/hello-world',
  TEST: '/test',
};

export type Route = typeof ROUTE[keyof typeof ROUTE];

export { ROUTE };
