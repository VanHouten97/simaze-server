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
    registry?: string,
    birth?: string,
    phone?: {
        landline?: string,
        mobile?: string,
    },
    gender?: string,
    living?: {
        state?: string,
        city?: string,
        district?: string,
        street?: string,
        number?: string,
        zip?: string
    }
}
