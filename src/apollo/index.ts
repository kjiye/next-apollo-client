import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

/**
 * ApolloClient 초기화
 */

export const authTokenVar = makeVar<string | null>(null);

// 헤더 내 토큰 설정
const setAuthorizationLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: authTokenVar(),
    },
  };
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
  cache: new InMemoryCache(),
  link: setAuthorizationLink,
  // defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

export default client;
