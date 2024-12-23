import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-x-2">
        <Mail className="h-5 w-5 text-gray-400" />
        <span className="text-sm text-gray-300">{CONTACT_INFO.email}</span>
      </div>
      <div className="flex items-center gap-x-2">
        <Phone className="h-5 w-5 text-gray-400" />
        <span className="text-sm text-gray-300">{CONTACT_INFO.phone}</span>
      </div>
      <div className="flex items-center gap-x-2">
        <MapPin className="h-5 w-5 text-gray-400" />
        <span className="text-sm text-gray-300">{CONTACT_INFO.address}</span>
      </div>
    </div>
  );
}