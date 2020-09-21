export interface Etablissement {
  id: string | null;
  name: string;
  adress: string;
  description: string;
  lat: number;
  lng: number;
  coverImage: string;
  category: { name: string; }

}
