/**
 * Represents a house listing in the application
 */
export interface House {
  /** Unique identifier for the house */
  id: number;
  /** Street address of the house */
  address: string;
  /** Country where the house is located */
  country: string;
  /** Formatted price of the house */
  price: string;
} 