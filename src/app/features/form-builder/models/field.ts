export interface Field {
  type: 'text' | 'textarea' | 'checkbox' | 'select' | 'email' | 'number';
  label: string;
  name: string;
  required: boolean;
  options?: string[];
}

export interface FormData {
  [key: string]: string | boolean | null;
}
