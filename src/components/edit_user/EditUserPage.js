import { useLocation } from "react-router-dom";
import { Form } from "../ui/Form"

export const EditUserPage = () => {

    const location = useLocation();
    const user = location.state.user;
    return (
        <>
           <Form user={user} />
        </>
    )
}