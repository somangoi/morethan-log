import { CONFIG } from "site.config"
import React from "react"
import { IoMdFlash } from "react-icons/io"
import Image from "next/image"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <div className="p-1 mb-1 flex align-middle gap-2 opacity-90">
        <Image
          src={"/android-chrome-192x192.png"}
          width={24}
          height={24}
          alt=""
        />
        <span className="dark:text-white font-extralight ">
          cool things I made
        </span>
      </div>
      <ul className="rounded-2xl mb-5 bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.projects.map((item) => {
          return (
            <a
              key={item.name}
              href={`${item.href}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
            >
              <IoMdFlash className="text-2l" />
              <div className="text-sm">{item.name}</div>
            </a>
          )
        })}
      </ul>
    </>
  )
}

export default ServiceCard
