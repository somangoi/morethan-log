import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import Link from "next/link"

type Props = {
  className?: string
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  return (
    <Link className={className} href={"/about"}>
      <div className="rounded-2xl bg-white dark:bg-zinc-700 w-full md:p-4 lg:p-4 mb-5 cursor-pointer">
        <div className="relative w-full after:content-[''] after:block after:pb-[100%]">
          <Image src={CONFIG.profile.image} layout="fill" alt="" />
        </div>
        <div className="bg-white p-2 flex flex-col items-center dark:bg-zinc-700 dark:text-white">
          <div className=" text-xl font-bold">{CONFIG.profile.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {CONFIG.profile.role}
          </div>
          <div className="text-sm mb-2">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </Link>
  )
}

export default ProfileCard
