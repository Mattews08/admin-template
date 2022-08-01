export default interface IUser {
    uid: string
    email: string | null
    name: string | null
    token: string
    provedor?: string
    imgmUrl: string | null
}