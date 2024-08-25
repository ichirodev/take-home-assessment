'use client'
import ContactDetails from "@/components/ContactDetails/ContactDetails";
import ContactList from "@/components/ContactList/ContactList";
import EditContactModal from "@/components/EditContactModal/EditContactModal";
import { ContactDetailsModal } from "@/modals/ContactDetailsModal";
import { User } from "@/models/user";
import NiceModal from "@ebay/nice-modal-react";

export default function Home() {
  const user: User = {
    id: Number(process.env.NEXT_PUBLIC_DEMO_USER_ID),
    name: process.env.NEXT_PUBLIC_DEMO_USER_NAME!,
    email: process.env.NEXT_PUBLIC_DEMO_USER_EMAIL!
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="w-full">
        <ContactList id={user.id} name={undefined} email={undefined} />
      </div>
    </main>
  );
}
