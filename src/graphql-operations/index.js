import { gql } from "graphql-tag"

export const LOGIN= gql`
    query Login($email: String = "", $password: String = "") {
        users(where: {email: {_eq: $email}, password: {_eq: $password}}) {
            email
            user_id
            lastname1
            lastname2
            name
        }
    }
`

export const INSERT_USER = gql`
    mutation InsertOneUser($birthdate: timestamp = "", $email: String = "", $gender_id: Int = 4, $lastname1: String = "", $lastname2: String = "", $name: String = "", $password: String = "", $description: String = "", $telephone: String = "") {
        insert_users_one(
            object: {
                birthdate: $birthdate,
                email: $email,
                gender_id: $gender_id,
                lastname1: $lastname1,
                lastname2: $lastname2,
                name: $name,
                password: $password,
                telephone: $telephone,
                profiles: {
                    data: {
                        description:
                        $description
                    }
                }
            }
        )
    }
`;

export const GET_USER_FRIENDS_BY_ID = gql`
    query GetUserFriendsByID($_eq: Int = 10) {
        users(where: {user_id: {_eq: $_eq}}, limit: 50) {
            user_id
            name
            lastname1
            lastname2
            email
            telephone
        }
    }
`

export const GET_USER_BY_ID = gql`
    query GetUserByID($_eq: Int = 10) {
        users(where: {user_id: {_eq: $_eq}}) {
            name
            lastname1
            lastname2
            profiles {
                description
                profile_id
            }
        }
    }
`

export const GET_ALL_POSTS = gql`
    query GetAllPosts {
        posts {
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
`

export const INSERT_ONE_POST = gql`
    mutation InsertOnePost($title: String = "", $user_id: Int = 10, $description: String = "", $date: timestamp = "") {
        insert_posts_one(object: {title: $title, user_id: $user_id, description: $description, date: $date}) {
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
`

export const INSERT_ONE_CONNECTION = gql`
    mutation InsertOneConnection($friend_id: Int = 10, $date: timestamp = "2023-06-08 18:36:59", $user_id: Int = 1) {
        insert_connections_one(object: {friend_id: $friend_id, user_id: $user_id, date: $date}) {
            friend_id
            user_id
            connection_id
        }
    }
`

export const INSERT_ONE_CONNECTION_REQUEST = gql`
    mutation InsertOneConnectionRequest($date: timestamp = "2023-06-08 18:36:59", $friend_id: Int = 7, $user_id: Int = 2) {
        insert_connection_requests_one(object: {date: $date, friend_id: $friend_id, user_id: $user_id, accepted: false}) {
            friend_id
            user_id
            connectionRequest_id
            accepted
        }
    }
`