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
import { useState } from "react"
import Modal from "@/components/Modal/Modal"
import ContactDetailsModal from "@/components/ContactDetailsModal/ContactDetailsModal"

export default function ContactCard({
    id,
    email,
    name,
    picture,
    lastContact,
}: Contact) {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    return (
        <Card className="w-full">
            <div className="flex flex-row p-2 gap-4 h-20 justify-between items-center">
                <Avatar className="w-16 h-16">
                    <AvatarImage src={picture} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-2xl w-full text-slate-900">
                    {name}
                </p>
                <div className="flex flex-column min-w-48 justify-end">
                    <div className="flex flex-row gap-2 justify-end pr-1">
                        <Button variant="outline"
                            onClick={() => setIsDetailsModalOpen(true)}>Details</Button>
                        <Modal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)}>
                            <ContactDetailsModal
                                id={id}
                                email={email}
                                name={name} 
                                picture={picture} 
                                lastContact={lastContact}
                            />
                        </Modal>
                    </div>
                    <p className="text-sm text-end text-slate-700">
                        { lastContact && `Last contacted ${lastContact}`}
                    </p>
                </div>
            </div>
        </Card>
    )
}