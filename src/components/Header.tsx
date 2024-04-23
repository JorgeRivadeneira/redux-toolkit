import { useSelector } from "react-redux"

export const Header = () => {
    const user = useSelector((state: any) => state.user);
    return (
        <header>
            <h1>Redux toolkit example</h1>
            <ul>
                <li>Name: {user.name}</li>
                <li>Email:{user.email}</li>
                <li>Username:{user.username}</li>
            </ul>
        </header>
    )
}