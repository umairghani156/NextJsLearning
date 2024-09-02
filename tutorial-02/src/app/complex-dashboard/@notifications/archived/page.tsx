import Card from "@/components/card";
import Link from "next/link";
export default function ArchivedNotifications(){
    return (
    <Card>Notifications
         <div>
        <Link href="/complex-dashboard" className="text-blue-500 mr-2 hover:underline">Default</Link>
        </div>
    </Card>
)
}