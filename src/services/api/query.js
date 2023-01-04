import { gql } from '@apollo/client'

const GET_POSTS = gql`
    query GetLocations {
      allPosts(count: 25) {
      id
      title
      body
      createdAt
      likelyTopics {
        label
        likelihood
        __typename
      }
      author {
        firstName
        lastName
        email
        avatar
      }
    }
  }
`;

export default GET_POSTS;