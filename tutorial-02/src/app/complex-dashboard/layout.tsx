
export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications
}:{
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode
}){
    return(
        <>
        <div>{children}</div>
         <div className="flex space-x-4">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-center items-center">{users}</div>
                <div>{revenue}</div>
            </div>
            <div>{notifications}</div>
         </div>
        </>
    )
}