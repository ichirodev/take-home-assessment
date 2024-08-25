export type SocialModel = {
    url: string;
}

export type ContactModel = {
    id: number;
    email: string | undefined;
    name: string;
    picture: string;
    lastContact: string | undefined;
}