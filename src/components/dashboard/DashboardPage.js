import { useSelector } from "react-redux";

import { UsersTable } from "./ui/UsersTable"

export const DashboardPage = () => {

    const state = useSelector(state => state);

    const users = [...state.users];

    return (
        <>
            <UsersTable users={users} />
        </>
    )
}