import { replace, useNavigate, redirect, Form } from "react-router-dom"


export function actionGoToHomePage() {
    console.log('action works!!');
    return redirect("/")
}
export default function Login() {

    const navigate = useNavigate()

    return(
        <Form method="post">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <button >Log In</button>
        </Form>
    )
}