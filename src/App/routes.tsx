const ROUTE = {
  HOME: '/',
  JANITORS: '/janitors',
  TEST: '/test',
};

export type Route = typeof ROUTE[keyof typeof ROUTE];

export { ROUTE };
