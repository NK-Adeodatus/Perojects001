import { redirect } from "react-router-dom"

export function requireAuth() {
    const authenticated = true
    if(!authenticated){
        throw redirect("/login")
    }
    // return null
}