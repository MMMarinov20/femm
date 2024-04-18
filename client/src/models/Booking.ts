export interface Booking {
  id?: number;
  userId: number;
  rentalId: number;
  startDate: Date;
  endDate: Date;
  adults: number;
  createdAt?: Date;
}
