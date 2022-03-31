export interface businessProps {
    id: string;
    description: string;
    email: string;
    name: string;
    address: addressProps;
    image: string;
    phone: string;
}
export interface addressProps {
    name: string;
    street: string;
    zip: string;
    city: string;
    country: string;
}
