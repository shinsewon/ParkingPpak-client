import {LatLng} from 'react-native-maps';

declare global {
  type Map = 'Map';

  type CustomMarker = {
    id: number;
    name: string;
    src: string;
    description: string;
    area: string;
    place: string;
    food: string;
    location: Location;
    icon: string;
    coordinate?: LatLng;
    stopPropagation?: boolean;
  };

  type Location = {
    latitude: number;
    longitude: number;
  };

  type Region = Location & {
    latitudeDelta: number;
    longitudeDelta: number;
  };

  type MapInfo = {
    MARKERS: CustomMarker[];
    categories: any[];
    region: Region;
  };
  type OIL_STATIONS =
    | 'SKE'
    | 'GSC'
    | 'HDO'
    | 'SOL'
    | 'FRUGAL'
    | 'RTX'
    | 'NHO'
    | 'RTO'
    | 'ETC'
    | 'RTO';

  type OilStationType = {
    UNI_ID: string;
    POLL_DIV_CD: string;
    OS_NM: string;
    PRICE: number;
    DISTANCE: number;
    GIS_X_COOR: number;
    GIS_Y_COOR: number;
  };

  type AroundAllOilStationParamsType = {
    x: number;
    y: number;
    radius: number;
    prodcd: string;
    sort: number;
  };

  type Geometry = {
    type: string;
    coordinates: [number, number];
  };

  type ClusterMarkerProperties = {
    cluster: boolean;
    cluster_id: number;
    point_count: number;
    point_count_abbreviated: number;
  };

  type ViewPropertiesMarkerProps = {
    coordinate: LatLng;
    stopPropagation: boolean;
  };

  type GeoJSONFeatureType = {
    type: string;
    geometry: {
      coordinates: number[];
      type: string;
    };
    properties: {
      coordinate: {
        latitude: number;
        longitude: number;
      };
      stopPropagation: boolean;
      point_count: number;
      index: number;
    };
  };
}
