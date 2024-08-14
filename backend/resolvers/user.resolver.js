import { users } from '../data.js';

const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find(({ _id }) => _id === userId);
    },
  },
  Mutation: {},
};

export default userResolver;
