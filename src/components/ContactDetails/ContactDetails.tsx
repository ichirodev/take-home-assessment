'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { ContactModel as Contact } from "@/models/contact"

export default function ContactDetails({
  id,
  name,
  email,
  picture,
  lastContact,
}: Contact) {
  return (
    <Card className="w-fit">
      <CardHeader className="flex flex-row content-between gap-x-2 items-center">
        <Avatar className="size-12 mt-1">
          <AvatarImage src={picture} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col h-fit">
          <CardTitle className="text-m">{name}</CardTitle>
          <CardDescription>{`Last contacted ${lastContact}`}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}