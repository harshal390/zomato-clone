export interface USER {
  name: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  isDeleted: boolean;
  deletedAt: Date | null;
}

export interface ADDRESS {
  userId: number;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  isDeleted: boolean;
  deletedAt: Date | null;
}
