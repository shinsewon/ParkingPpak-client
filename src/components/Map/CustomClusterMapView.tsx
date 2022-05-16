import React, {
  forwardRef,
  useState,
  useRef,
  Children,
  useMemo,
  useEffect,
  Ref,
  MutableRefObject,
} from 'react';
import MapView, {Region} from 'react-native-maps';
import {StyleSheet, Dimensions} from 'react-native';
import SuperCluster, {PointFeature} from 'supercluster';
import {GeoJsonProperties} from 'geojson';
import {
  markerToGeoJSONFeature,
  calculateBBox,
  returnMapZoom,
  isMarker,
} from 'utils/map';
import {ClusterMarker} from 'components/Map';
import {palette} from '@/constant';

type CustomClusterMapViewType = ClusterMarkerProperties & {
  radius: number;
  maxZoom: number;
  minZoom: number;
  minPoints: number;
  extent: number;
  nodeSize: number;
  children: JSX.Element;
  otherChildren?: JSX.Element;
  onClusterPress: () => void;
  onRegionChangeComplete: (newRegion: Region) => void;
  region?: Region;
  initialRegion?: Region;
  superClusterRef: {current: SuperCluster | null};
  clusterColor?: string;
  clusterTextColor?: string;
  tracksViewChanges?: boolean;
};

function CustomClusterMapView(
  {
    radius = Dimensions.get('window').width * 0.06,
    maxZoom = 20,
    minZoom = 1,
    minPoints = 5,
    extent = 256,
    nodeSize = 64,
    children,
    onClusterPress = () => console.log('click'),
    onRegionChangeComplete = () => console.log('click'),
    clusterColor = palette.blue_1,
    clusterTextColor = '#FFFFFF',
    tracksViewChanges = false,
    superClusterRef = {current: null},
    ...restProps
  }: CustomClusterMapViewType,
  ref: Ref<MapView> | MapView,
) {
  const [markers, setMarkers] = useState<
    Array<PointFeature<GeoJsonProperties> | null>
  >([]);
  const [otherChildren, setOtherChildren] = useState([]);
  const [superCluster, setSuperCluster] = useState<SuperCluster<
    SuperCluster.AnyProps,
    SuperCluster.AnyProps
  > | null>(null);
  const [currentRegion, setCurrentRegion] = useState(
    restProps.region || restProps.initialRegion,
  );

  const propsChildren = useMemo(() => Children.toArray(children), [children]);

  useEffect(() => {
    const rawData: any = [];
    const otherChildren: any = [];
    propsChildren.forEach((child: any, index: number) => {
      if (isMarker(child)) {
        rawData.push(markerToGeoJSONFeature(child, index));
      } else {
        otherChildren.push(child);
      }
    });

    const superCluster = new SuperCluster({
      radius,
      maxZoom,
      minZoom,
      minPoints,
      extent,
      nodeSize,
    });

    superCluster.load(rawData);
    const bBox = calculateBBox(currentRegion as Region);
    const zoom = returnMapZoom(currentRegion as Region, bBox, minZoom);
    const markers = superCluster.getClusters(bBox, zoom);

    setMarkers(markers);
    setOtherChildren(otherChildren);
    setSuperCluster(superCluster);

    superClusterRef.current = superCluster;
  }, [
    propsChildren,
    currentRegion,
    extent,
    maxZoom,
    minPoints,
    minZoom,
    nodeSize,
    radius,
  ]);

  const _onRegionChangeComplete = (newRegion: Region) => {
    if (superCluster && currentRegion) {
      const bBox = calculateBBox(currentRegion);
      const zoom = returnMapZoom(newRegion, bBox, minZoom);
      const markers = superCluster.getClusters(bBox, zoom);
      setMarkers(markers);
      setCurrentRegion(newRegion);
    }
    onRegionChangeComplete(newRegion);
  };
  const mapRef = useRef<MapView | null>(null);

  return (
    <MapView
      {...restProps}
      ref={map => {
        mapRef.current = map;
        if (ref) {
          (ref as MutableRefObject<any>).current = map;
        }
      }}
      style={styles.map}
      onRegionChangeComplete={_onRegionChangeComplete}>
      {markers.map((marker, idx) =>
        marker?.properties?.point_count === 0 ? (
          propsChildren[marker.properties.index]
        ) : (
          <ClusterMarker
            key={`cluster-${idx}`}
            clusterColor={clusterColor}
            point={marker?.geometry}
            properties={marker?.properties}
            clusterTextColor={clusterTextColor}
            tracksViewChanges={tracksViewChanges}
            onPress={onClusterPress}
          />
        ),
      )}

      {otherChildren}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {flex: 1, width: '100%', height: '100%'},
  customMarker: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default forwardRef(CustomClusterMapView);
