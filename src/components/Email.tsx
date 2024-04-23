import { useSelector, useDispatch } from "react-redux"
import { changeEmail } from "../redux/userSlice";

export const Email = () => {
    const dispatch = useDispatch();
    const email = useSelector((state: any) => state.user.email);

    const handleChange = (e: any) => {
        dispatch(changeEmail(e.target.value));
    };

    return (
        <input type='email' value={email} placeholder='Email' onChange={handleChange} />
    )
}