'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ContactModel as Contact } from "@/models/contact"
import { useState } from "react";
import { fetcherPost as post } from "@/util/fetcher";
import useUserStore from "@/hooks/stores/useUserStore";
import { toBase64 } from "@/util/toBase64";

export default function EditContactModal({
  id,
  email,
  name,
  picture,
  lastContact,
}: Contact) {
  const [contact, setContact] = useState({
    id,
    email,
    name,
    picture,
    lastContact
  });
  const [file, setFile] = useState<File | null>(null);
  const user = useUserStore((state: any) => state.user);
  const [changesSaved, setChangesSaved] = useState(false);

  const body = {
    userId: user.id,
    contactId: contact.id,
    name: contact.name,
    email: contact.email,
    picture: contact.picture,
  }

  const pushChanges = async () => {
    if (!file) {
      post('/api/contacts/edit', body).then((res) => setChangesSaved(true));
      return;
    }

    const base64Image = await toBase64(file);
    await post('/api/pictures/upload', { base64: base64Image })
      .then(
        (res) => post('/api/contacts/edit', { ...body, picture: res.url }).then((res) => setChangesSaved(true))
      );
  };

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="text-m">Edit contact</CardTitle>
        <CardDescription>{`Modify the details of ${name}`}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" id="name" defaultValue={name} onChange={(e) => {
            e.preventDefault();
            setContact({
              ...contact,
              name: e.target.value,
            });
          }} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" onChange={(e) => {
            e.preventDefault();
            const file = e.target.files?.item(0);
            if (file) {
              setFile(file);
            }
          }} />
        </div>
        <Button className="w-fit" onClick={async () => await pushChanges()}>
          Save changes
        </Button>
        {changesSaved && <p>Changes saved!</p>}
      </CardContent>
    </Card>
  )
}