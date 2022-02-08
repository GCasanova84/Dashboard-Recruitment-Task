import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Form } from "../ui/Form"

export const EditUserPage = () => {

    const location = useLocation();
    const id = location.state.id;
    const state = useSelector(state => state);
    const user = state.users.find(user => user.id === parseInt(id))

    return (
        <>
           <Form user={user} />
        </>
    )
}