'use client'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { ContactModel as Contact } from "@/models/contact"
import Modal from "@/components/Modal/Modal"
import { useState } from "react"
import EditContactModal from "@/components/EditContactModal/EditContactModal"

export default function ContactDetailsModal({
  id,
  name,
  email,
  picture,
  lastContact,
}: Contact) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card className="w-fit">
      <CardHeader className="flex flex-row content-between gap-x-2 items-center">
        <Avatar className="size-12 mt-1">
          <AvatarImage src={picture} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col h-fit">
          <CardTitle className="text-m">{name}</CardTitle>
          <CardDescription>{lastContact ? `Last contacted ${lastContact}` : 'Never contacted'}</CardDescription>
        </div>
        <div className="flex flex-row gap-2 justify-end pr-1">
          <Button variant="outline"
            onClick={() => {
              setIsModalOpen(true);
            }}>Edit</Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <EditContactModal id={id} email={email} name={name} picture={picture} lastContact={lastContact} />
          </Modal>
        </div>
      </CardHeader>
    </Card>
  );
}