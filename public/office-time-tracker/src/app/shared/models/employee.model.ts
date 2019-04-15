export interface Employee {
  id?: number;
  name: string;
  clockIn: string;
  clockOut: string;
  active: boolean;
  
  action?: string;
}
