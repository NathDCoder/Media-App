import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
        songs {
        _id
        songText
        createdAt
      }
    }
  }
`;

export const QUERY_SONGS = gql`
  query getSongs {
    songs {
      _id
      songText
      songAuthor
      createdAt
    }
  }
`;

export const QUERY_SONG = gql`
  query getSingleSong($songId: ID!) {
    song(songId: $songId) {
      _id
      songText
      songAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_PLAYLIST = gql`
  query me {
    me {
      _id
      username
      email
      songs {
        _id
        songText
        songAuthor
        createdAt
      }
    }
  }
`;
