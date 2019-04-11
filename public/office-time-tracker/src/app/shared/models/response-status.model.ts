import { Employee } from './employee.model';


export interface ResponseStatus {
  status: number;
  message: string;
  body: Employee[];
}
