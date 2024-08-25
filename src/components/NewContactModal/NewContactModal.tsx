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
import { useState } from "react";
import { fetcherPost as post } from "@/util/fetcher";
import useUserStore from "@/hooks/stores/useUserStore";
import { toBase64 } from "@/util/toBase64";

export default function NewContactModal() {
  const [contact, setContact] = useState<any>({
    name: '',
    email: '',
    picture: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const user = useUserStore((state: any) => state.user);
  const [changesSaved, setChangesSaved] = useState(false);

  let body: any = {
    userId: user.id,
    name: contact.name,
    email: contact.email,
    picture: contact.picture,
  };

  const pushChanges = async () => {
    if (!file) {
      post('/api/contacts/new', body).then((res) => setChangesSaved(true));
      return;
    }

    const base64Image = await toBase64(file);
    await post('/api/pictures/upload', { base64: base64Image })
      .then(
        (res) => post('/api/contacts/new', { ...body, picture: res.url }).then((res) => setChangesSaved(true))
      );
  };

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="text-m">Create a new contact</CardTitle>
        <CardDescription>{`Fill the required information`}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" id="name" placeholder="Adrian Monk" onChange={(e) => {
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
          Create
        </Button>
        {changesSaved && <p>Changes saved!</p>}
      </CardContent>
    </Card>
  )
}