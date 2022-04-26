export {};

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
  type GAS_STATIONS = 'SKC' | 'GS' | 'HDO' | 'SOIL' | 'FRUGAL';
}
