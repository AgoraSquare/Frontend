import gql from "graphql-tag";
// TODO: rename variables for query
const LOGIN_USER_BY_EMAIL = gql`
    mutation TokenAuth($username: String!, $password: String!) {
        tokenAuth(username: $username password: $password) {
            success
            token
            refreshToken
            errors
            
        }
    }
`;

export default LOGIN_USER_BY_EMAIL;