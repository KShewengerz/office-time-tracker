/**
 * An interface for Employee
 */
export interface Employee {
  id?: number;
  name: string;
  clockIn: Date;
  clockOut: Date;
  active: boolean;
}