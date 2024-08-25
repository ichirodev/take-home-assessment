'use client'

import {
    Card,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ContactModel as Contact } from "@/models/contact"

export default function ContactCard({
    id,
    email,
    name,
    picture,
    lastContact,
}: Contact) {
    return (
        <Card className="w-full">
            <div className="flex flex-row p-2 gap-4 h-20 justify-between items-center">
                <Avatar className="h-full w-auto">
                    <AvatarImage src={picture} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-2xl w-full text-slate-900">
                    {name}
                </p>
                <div className="flex flex-column min-w-48">
                    <div className="flex flex-row gap-2 justify-end pr-1">
                        <Button variant="outline">
                            Details
                        </Button>
                    </div>
                    <p className="text-sm text-end text-slate-700">
                        {lastContact ? lastContact : ""}
                    </p>
                </div>
            </div>
        </Card>
    )
}