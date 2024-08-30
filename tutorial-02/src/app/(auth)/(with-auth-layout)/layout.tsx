"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'Forgot Password', href: '/forgot-password' },
]
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <>
            <div className="flex justify-end space-x-4">
                {
                    navLinks.map((link) => {
                        const isActive  = pathname.startsWith(link.href)
                        return(
                        <Link key={link.name} href={link.href} className={isActive ? 'text-blue-500 font-bold mr-4' : 'text-gray-500 mr-4'}>{link.name}</Link>
                        )
})
                }
            </div>
            {children}
        </>
    )
}