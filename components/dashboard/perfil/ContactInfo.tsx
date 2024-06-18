import React from 'react';
import { Label, LabelInputContainer } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ContactInfo = ({ formValues, handleChange, isEditing }: any) => (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" placeholder="micorreo@gmail.com" type="text" value={formValues.email} onChange={handleChange} readOnly={!isEditing} />
        </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="phoneNumber">Número Telefónico</Label>
            <Input id="phoneNumber" placeholder="+51 987 654 321" type="text" value={formValues.phoneNumber} onChange={handleChange} readOnly={!isEditing} />
        </LabelInputContainer>
    </div>
);

export default ContactInfo;