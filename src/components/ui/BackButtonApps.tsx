'use client'

import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const BackButtonPage = () => {
  return (
   <div className="mb-6">
  <Link
    href="/apps"
    className="group inline-flex items-center justify-center rounded-full p-2 text-slate-500 transition-all duration-200 hover:bg-purple-100 hover:text-purple-600"
    aria-label="Back to Apps"
  >
    <FiArrowLeft
      size={22}
      className="transition-transform duration-200 group-hover:-translate-x-1"
    />
  </Link>
</div>
  )
}

export default BackButtonPage
