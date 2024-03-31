import { Mutation } from "./Mutation";
import { Query } from "./Query";
import {
  MoviePayload,
  MovieAndCastPayload,
  InfoPayload,
  PersonPayload,
} from "./__resolverTypes";

const resolvers = {
  Query: { ...Query },
  Mutation: { ...Mutation },
  MoviePayload: { ...MoviePayload },
  MovieAndCastPayload: { ...MovieAndCastPayload },
  InfoPayload: { ...InfoPayload },
  PersonPayload: { ...PersonPayload },
};

export default resolvers
