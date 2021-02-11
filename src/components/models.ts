export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Mailer {
  id: string;
  email: string;
  serviceClient: string;
  privateKey: string;
  domainUrl: string;
}
