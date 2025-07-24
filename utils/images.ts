import md5 from "md5";
export const getGravatarUrl = (email:string): string => {
    return email ? `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}` : "/placeholder.svg";
}