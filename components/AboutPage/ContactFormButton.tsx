"use client";
import { Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { useState } from "react";
import { ContactFormModal } from "./ContactFormModal";

export const ContactFormButton = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    return (
        <>
            <Button variant="outline" onClick={() => setIsContactModalOpen(true)}>
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
            </Button>
            <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

