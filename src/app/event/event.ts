import { Etablissement } from '../models/etablissement.model';

export interface event {
  id?: string;
  name: string;
  description: string;
  // coverImage: string;
  imageName: string;
  startEvent: string;
  endEvent: string;
  // comment: string;
  etablissement: Etablissement;



}
