import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/data',
            providesTags: ['User']
        }),
        getUser: builder.query({
            query: (id) => `/data/${id}`,
            providesTags: ['User']
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: '/data',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/data/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['User']
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/data/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['User']
        })
    })
})

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApi;