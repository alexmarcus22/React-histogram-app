import { gql } from '@apollo/client'

const GET_POSTS = gql`
  query GetLocations {
    allPosts(count: 300) {
      id
      title
      body
      createdAt
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