'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import NewContactModal from "@/components/NewContactModal/NewContactModal";

export default function NewContact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className="flex flex-row-reverse w-full pb-2 ">
            <Button onClick={() => {
                setIsModalOpen(true);
            }}>New contact</Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <NewContactModal/>
            </Modal>
        </div>
    )
}