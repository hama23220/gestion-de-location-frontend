export interface Menu{
  active?: boolean;
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  sousMenu?: Array<Menu>;
}
