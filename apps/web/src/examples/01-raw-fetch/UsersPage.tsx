import { useEffect, useState } from 'react'
import { graphql } from '../graphql'
import { print } from 'graphql'
import type { ResultOf } from 'gql.tada'

const UserQuery = graphql(`
  query getUsers {
    users {
      id
      name
      role
    }
  }
`)

type UserQueryResult = ResultOf<typeof UserQuery>

export default function UsersPage() {
  const [userData, setUserData] = useState<UserQueryResult['users']>([])

  useEffect(() => {
    async function fetchUsers() {
      const data: { data: UserQueryResult } = await fetch(
        'http://localhost:4000/graphql',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: print(UserQuery) }),
        },
      ).then((response) => response.json())
      setUserData(data.data.users)
    }

    fetchUsers()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold">Users</h2>
        <p className="mt-1 text-sm text-gray-400">
          This page will list all users fetched from the GraphQL API.
        </p>
      </div>

      <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900/50 p-12 text-center">
        <div className="text-sm text-gray-500">
          <ul>
            {userData.length > 0
              ? userData.map((user) => (
                  <li key={user.id}>
                    {user.id} {user.name} {user.role}
                  </li>
                ))
              : ''}
          </ul>
        </div>
      </div>
    </div>
  )
}
