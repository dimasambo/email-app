export type NewUser = {
    username: string
    email: string
    password: string
}

export type CreatedUser = {
    id: number
    username: string
    email: string
    password: string
}

export type User = {
    id: number
    username: string
    email: string
}

export type AuthData = {
    username: string
    password: string
}

export type Emails = {
    count: number
    next: string
    previous: string
    results: Array<Email>
}

export type Email = {
    id: number,
    sender: number,
    recipient: string,
    subject: string,
    message: string
}

export type NewEmail = {
    sender: number,
    recipient: string,
    subject: string,
    message: string
}