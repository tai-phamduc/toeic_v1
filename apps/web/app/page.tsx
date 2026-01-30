import "./globals.css"

import { User } from "@repo/types";
import { getUsers } from "../server/users";
export default async function Home() {
const users: User[] = await getUsers()
  
  return (
    <div className="bg-[url('https://res.cloudinary.com/dalaaegob/image/upload/v1769788980/8_ulba1f.png'),linear-gradient(#ededed,#ededed)] bg-cover w-full rounded-lg h-full py-4">
      <h2 className="text-3xl font-bold text-center py-4">Your TOEIC Learning Journey</h2>
      <div className="flex justify-center mb-4">
        <img src="https://demo2.pavothemes.com/gopet/wp-content/uploads/2021/11/h3_divider.png" alt="" />
      </div>
      <div className="flex items-center justify-center relative">
        <span className="relative">
          <div className="absolute top-4 -right-full p-8 rounded-lg  flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-center">Foundation</h3>
            <a href="/vocabulary" className="bg-primary py-4 px-8 rounded-2xl text-white text-center">Vocabulary</a>
            <a href="/vocabulary" className="bg-primary py-4 px-8 rounded-2xl text-white text-center">Grammar</a>
            <a href="/vocabulary" className="bg-primary py-4 px-8 rounded-2xl text-white text-center">Pronunciation</a>
          </div>
          <img src="https://res.cloudinary.com/dalaaegob/image/upload/v1769786381/roadmap_zxq0ki.png" alt="" className="w-72" />
        </span>
      </div>
    </div>


  );
}
