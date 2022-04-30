import {opinetAPI} from './api';

//아래 코드는 오피넷 API에서 저한테 정해준 코드입니다. 이것도 나중에 .env로 정리하렵니다.
const code = 'F220426124';

const defaultParams = {
  out: 'json',
  code,
};

export const getAroundAllOilStation = async (
  params: AroundAllOilStationParamsType,
) => {
  const response = await opinetAPI.get('/api/aroundAll.do', {
    params: {...defaultParams, ...params},
  });
  return response.RESULT.OIL as OilStationType[];
};
