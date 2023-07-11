export interface Opportunity {
  _id: string;
  title: string;
  orderId: number;
  value: number;
  date: string;
  creator: {
    name: string;
    email: string;
    _id: string;
  };
  contact: {
    name: string;
    email?: string;
    phone?: string;
    _id: string;
  };
  organization?: {
    _id: string;
    name?: string;
  };
  products: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
}
