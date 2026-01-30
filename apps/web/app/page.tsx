import "./globals.css"

import { User } from "@repo/types";
import { getUsers } from "../server/users";
export default async function Home() {
const users: User[] = await getUsers()
  
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen p-8">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <h1 className="text-3xl text-primary font-bold underline">
      Hello world!
      </h1>
    </main>
  );
}
