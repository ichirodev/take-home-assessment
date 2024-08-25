'use client'

import ContactCard from "@/components/ContactCard/ContactCard";
import { ContactModel as Contact } from "@/models/contact";
import { User } from "@/models/user";
import { fetcherPost } from "@/util/fetcher";
import useSWR from "swr";

export default function ContactList({
    id,
} : User) {
    const body = {
        userId: id
    }

    const {
        data,
        error,
        isLoading
    } = useSWR(['/api/contacts/all', body], ([url, body]) => fetcherPost(url, body));

    const renderContactList = (contacts: Array<Contact>) => {
        return contacts.map((model, index) => {
            return <ContactCard key={`contact-${index}`} id={model.id} email={model.email} name={model.name} picture={model.picture} lastContact={model.lastContact} />
        });
    }

    if (error) return (
        <>error</>
    )

    if (isLoading) return (
        <>carregando</>
    )

    if (data) return (
        <div className="flex flex-col gap-y-2 p-2">
            {renderContactList(data)}
        </div>
    );
}
