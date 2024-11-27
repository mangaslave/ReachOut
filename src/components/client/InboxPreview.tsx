export default function InboxPreview({ sender, subject, content, time }: { sender: string; subject: string; content: string, time: string }) {
    return (
        <>
           <div className="w-9/12">
                <div className="flex justify-between mt-10">
                    <div className="flex items-center justify-center leading-2">
                        <div className="bg-red-700 w-3 h-3 rounded-full mr-1"></div>
                            <h3 className="font-semibold text-lg">{sender}</h3>
                        </div>
                        <p className="-ml-1 text-xs">{time}</p>
                    </div>
                        <p className="mb-2 font-semibold ml-4 text-sm">{subject}</p>
                        <p className="mt-1 ml-4 text-gray-500 text-sm">{content}</p>
            </div>  
        </>
    )
}