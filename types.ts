import React from 'react';

export type DonationCategory = 'food' | 'clothes' | 'furniture' | 'anything' | 'money';

export interface DonationItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

export interface DonorFormState {
  donorName: string;
  email: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  postalCode: string;
  itemDescription: string;
  deliveryOption: 'delivery' | 'pickup';
  date: string;
  time: string;
}

export interface PaymentFormState {
  firstName: string;
  lastName: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  amount: string;
}