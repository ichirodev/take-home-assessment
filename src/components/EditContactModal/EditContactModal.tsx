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
import { ContactModel as Contact} from "@/models/contact"


export default function EditContactModal({
  id,
  email,
  name,
  picture,
  lastContact,
}: Contact) {
  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="text-m">Edit contact</CardTitle>
        <CardDescription>{`Modify the details of ${name}`}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" id="name" placeholder="Adrian Monk" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <Button className="w-fit">
          Save changes
        </Button>
      </CardContent>
    </Card>
  )
}