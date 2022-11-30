import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PLAYLIST = gql`
  mutation addPlaylist($playlistText: String!) {
    addPlaylist(playlistText: $playlistText) {
      _id
      playlistText
      playlistAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($songId: ID!, $commentText: String!) {
    addComment(songId: $songId, commentText: $commentText) {
      _id
      songText
      songAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
