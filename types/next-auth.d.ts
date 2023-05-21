declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name: {
        first: string;
        last: string;
      };
    };
  }
  interface User {
    email: string;
    name: {
      first: string;
      last: string;
    };
  }
}
