'use client'

import ContactList from "@/components/ContactList/ContactList";
import NewContact from "@/components/NewContact/NewContact";
import { Separator } from "@/components/ui/separator"
import useUserStore from "@/hooks/stores/useUserStore";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="content-center min-w-20">
        <NewContact />
        <Separator />
        <ContactList />
        <div id="modal"></div>
      </div>
    </main>
  );
}
