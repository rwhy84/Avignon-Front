import { Etablissement } from './etablissement.model';

export interface Event {
  id: string | null;
  name: string;
  description: string;
  coverImage: string;
  comment: any[];
  startEvent: string;
  endEvent: string;
  etablissement: Etablissement;
  imageName: string;
}
