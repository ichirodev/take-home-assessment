'use client'

import ContactCard from "@/components/ContactCard/ContactCard";
import useUserStore from "@/hooks/stores/useUserStore";
import { ContactModel as Contact } from "@/models/contact";
import { fetcherPost } from "@/util/fetcher";
import useSWR from "swr";

export default function ContactList() {
    const user = useUserStore((state: any) => state.user);

    const {
        data,
        error,
        isLoading
    } = useSWR(['/api/contacts/all', { userId: user.id}], ([url, body]) => fetcherPost(url, body));

    const renderContactList = (contacts: Array<Contact>) => {
        return contacts.map((model, index) => {
            return (
                <ContactCard key={`contact-${index}`} id={model.id} email={model.email} name={model.name} picture={model.picture} lastContact={model.lastContact} />
            )
        });
    }

    if (error) return (
        <div className="flex flex-col gap-y-2 p-2 text-center">
            <p className="text-xl text-red-600">Error: An evil corporation is trying to stop us from showing you this!</p>
        </div>
    )

    if (isLoading) return (
        <div className="flex flex-col gap-y-2 p-2">
            <p className="text-xl">Loading...</p>
        </div>
    )

    if (data) return (
        <div className="flex flex-col gap-y-2 p-2">
            {renderContactList(data)}
        </div>
    );
}
