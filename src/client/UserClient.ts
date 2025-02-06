import {axiosPOST} from './AxiosUtils'
import type {ClientRequest} from './AxiosUtils'

interface RegisterParam {
    user: {
        email: string
        username: string
        password: string
    }
}

interface LoginParam {
    user: {
        email: string
        password: string
    }
}

export interface UserWithToken {
    email: string
    username: string
    bio: string
    image: string
    token: string
}

const UserClient = {
    createUser(registration: RegisterParam): ClientRequest<UserWithToken> {
        return axiosPOST<UserWithToken>('/api/users', registration, data => data.user)
    },
    userLogin(login: LoginParam): ClientRequest<UserWithToken> {
        return axiosPOST<UserWithToken>('/api/users/login', login, data => data.user)
    }
}

export default UserClient
