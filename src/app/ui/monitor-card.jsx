'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function MonitorCard({ monitor }) {
  return (
    <>
      <Link
        href={monitor.isDisable ? '#' : `/book/${monitor._id}`}
        className={`${monitor.isDisable ? 'filter grayscale bg-slate-100' : ''} basis-[calc(50%-0.5rem)] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100`}
      >
        <Image
          src={`/billboards/${monitor.imageSrc}`}
          className={`object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg`}
          alt={monitor.location}
          width={300}
          height={300}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {monitor.location}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{monitor.province}</p>
        </div>
      </Link>
    </>
  )
}
