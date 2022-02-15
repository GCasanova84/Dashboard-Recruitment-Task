import { useGetUsersQuery } from "../../services/users";
import { UsersTable } from "./ui/UsersTable"

export const DashboardPage = () => {

    const { data, error, isLoading, isFetching, isSuccess } = useGetUsersQuery();

    return (
        <>
            {error && <h5>Something went wrong</h5>}
            {isLoading && <h5>...is Loading</h5>}
            {isFetching && <h5>...is Fetching</h5>}
            {isSuccess && <UsersTable users={data} />}
        </>
    )
}