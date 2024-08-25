'use client'
import ContactDetails from '@/components/ContactDetails/ContactDetails';
import { ContactModel } from '@/models/contact';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Modal, Button, Drawer, Space } from 'antd';

export const ContactDetailsModal = NiceModal.create(({
    email,
    name,
    picture,
    lastContact
}: ContactModel) => {
    const modal = useModal();
    return (
        <Modal>
            <button onClick={() => modal.remove}>esconder ajua</button>
        </Modal>
    )
});