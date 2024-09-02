const Card =({
    children 
}: {
    children: React.ReactNode
}) =>{
    
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-64 h-64 text-black">
            {
            children
            }
        </div>
    )
}

export default Card;