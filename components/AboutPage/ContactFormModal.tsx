"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { CheckCircle, XCircle } from "lucide-react";

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const [state, handleSubmit, reset] = useForm("mdkdporg");
    React.useEffect(() => {
        if (state.succeeded) {
            const timer = setTimeout(() => {
                onClose();
                reset();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded, onClose]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                {state.succeeded ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                        <p className="text-lg font-semibold">Thanks for your message!</p>
                        <p className="text-muted-foreground">I'll get back to you shortly.</p>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle>Contact Me</DialogTitle>
                            <DialogDescription>
                                Send me a message directly. I'll get back to you as soon as possible.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Your Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Your message here..."
                                    className="w-full"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant={"noir"}
                                disabled={state.submitting}
                                className="w-full"
                            >
                                {state.submitting ? "Sending..." : "Send Message"}
                            </Button>
                            {state.errors && (
                                <div className="text-red-500 text-sm text-center flex items-center justify-center gap-2 mt-2">
                                    <XCircle className="w-4 h-4" />
                                    <span>Please correct the errors above.</span>
                                </div>
                            )}
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
