export interface Error {
    err: number,
    data: any,
    internal?: any
}

export interface User {
    fullname?: string,
    nickname?: string,
    cpf?: string,
    email?: string,
    password?: string,
    role?: string,
    admission?: string,
    registry?: string,
    birth?: string,
    phone?: {
        landline?: string,
        mobile?: string,
    },
    gender?: string,
    living?: Address
}

export interface Address {
    state?: string,
    city?: string,
    district?: string,
    street?: string,
    number?: number,
    complement?: string,
    zip?: string
}
