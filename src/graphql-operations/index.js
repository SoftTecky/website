import { gql } from "graphql-tag";

export const LOGIN = gql`
  query Login($email: String = "", $password: String = "") {
    users(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      email
      user_id
      lastname1
      lastname2
      name
      avatar
    }
  }
`;

export const INSERT_USER = gql`
  mutation InsertOneUser(
    $email: String = ""
    $lastname1: String = ""
    $lastname2: String = ""
    $name: String = ""
    $password: String = ""
    $description: String = ""
  ) {
    insert_users_one(
      object: {
        email: $email
        lastname1: $lastname1
        lastname2: $lastname2
        name: $name
        password: $password
        profiles: { data: { description: $description } }
      }
    ) {
      user_id
      email
      user_id
      lastname1
      lastname2
      name
    }
  }
`;

export const GET_USER_FRIENDS_BY_ID = gql`
  query GetUserFriends($user_id: Int = 10) {
    connections(where: { user_id: { _eq: $user_id } }) {
      user {
        user_id
        name
        lastname1
        lastname2
        telephone
        email
        avatar
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserByID($user_id: Int = 10) {
    users(where: { user_id: { _eq: $user_id } }) {
      user_id
      name
      lastname1
      lastname2
      profiles {
        description
        profile_id
      }
      telephone
      email
      avatar
    }
  }
`;

export const GET_NOT_CONNECTED_USERS = gql`
  query GetNotConnectUsers($user_id: Int = 10) {
    users(where: { user_id: { _neq: $user_id } }) {
      user_id
      name
      lastname1
      lastname2
      profiles {
        description
        profile_id
      }
      telephone
      email
      avatar
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(order_by: { date: desc }) {
      title
      user {
        name
        lastname1
        lastname2
        avatar
      }
      date
      description
    }
  }
`;

export const INSERT_ONE_POST = gql`
  mutation InsertOnePost(
    $title: String = ""
    $user_id: Int = 10
    $description: String = ""
    $date: timestamp = ""
  ) {
    insert_posts_one(
      object: {
        title: $title
        user_id: $user_id
        description: $description
        date: $date
      }
    ) {
      title
      user {
        name
        lastname1
        lastname2
      }
      date
      description
    }
  }
`;

export const INSERT_ONE_CONNECTION = gql`
  mutation InsertOneConnection($friend_id: Int = 10, $user_id: Int = 11) {
    insert_connections(
      objects: [
        { friend_id: $friend_id, user_id: $user_id }
        { friend_id: $user_id, user_id: $friend_id }
      ]
    ) {
      returning {
        connection_id
        friend_id
        user_id
      }
    }
  }
`;

export const INSERT_ONE_CONNECTION_REQUEST = gql`
  mutation SendConnectionRequest($friend_id: Int = 10, $user_id: Int = 10) {
    insert_connection_requests_one(
      object: { accepted: false, user_id: $user_id, friend_id: $friend_id }
    ) {
      connectionRequest_id
    }
  }
`;

export const INSERT_ONE_EVALUATION = gql`
  mutation InsertOneEvaluation(
    $date: timestamp = ""
    $evaluated_user_id: Int = 10
    $evaluating_user_id: Int = 10
    $result: Int = 10
    $softskill_id: Int = 10
  ) {
    insert_evaluations_one(
      object: {
        date: $date
        evaluated_user_id: $evaluated_user_id
        evaluating_user_id: $evaluating_user_id
        result: $result
        softskill_id: $softskill_id
      }
    ) {
      evaluation_id
    }
  }
`;

export const UPDATE_PROFILE_DESCRIPTION = gql`
  mutation UpdateProfileDescription(
    $user_id: Int = 10
    $description: String = ""
  ) {
    update_profiles(
      where: { user_id: { _eq: $user_id } }
      _set: { description: $description }
    ) {
      affected_rows
      returning {
        description
      }
    }
  }
`;

export const UPDATE_PROFILE_AVATAR = gql`
  mutation UpdateUserAvatar($avatar: String = "", $user_id: Int = 10) {
    update_users_by_pk(
      pk_columns: { user_id: $user_id }
      _set: { avatar: $avatar }
    ) {
      avatar
    }
  }
`;

export const GET_USER_CONNECTION_REQUESTS = gql`
  query GetConnectionRequests($user_id: Int = 11) {
    connection_requests(where: { friend_id: { _eq: $user_id } }) {
      connectionRequest_id
      accepted
      userByUserId {
        user_id
        name
        lastname1
        lastname2
        avatar
      }
    }
  }
`;

export const UPDATE_CONNECTION_REQUEST_STATUS = gql`
  mutation AcceptConnectionRequest($connectionRequest_id: Int = 10) {
    update_connection_requests_by_pk(
      pk_columns: { connectionRequest_id: $connectionRequest_id }
      _set: { accepted: true }
    ) {
      connectionRequest_id
      accepted
      friend_id
      user_id
    }
  }
`;
