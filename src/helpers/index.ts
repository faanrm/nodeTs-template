import crypto from "crypto"
const SECRET = process.env.SECRET
export const random = ()=>crypto.randomBytes(128).toString("base64")
export const authentification = (salt: string, password: string): string => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
  }