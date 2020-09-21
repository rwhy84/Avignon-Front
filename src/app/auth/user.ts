import { Etablissement } from '../models/etablissement.model';

export interface user {
  id?: number;
  email: string;
  password: string;
  confirmation?: string;
etablissement?: Etablissement



}
