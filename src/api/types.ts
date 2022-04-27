export type OilStationType = {
  UNI_ID: string;
  POLL_DIV_CD: string;
  OS_NM: string;
  PRICE: number;
  DISTANCE: number;
  GIS_X_COOR: number;
  GIS_Y_COOR: number;
};

export type AroundAllOilStationParamsType = {
  x: number;
  y: number;
  radius: number;
  prodcd: string;
  sort: number;
};

