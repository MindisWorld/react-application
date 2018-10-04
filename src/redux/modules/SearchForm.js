
const initialState = {
  val3: null,
  val4: null,
  loading: false,
  error: null
}

const FETCH_FACILITY_DATA_START = 'FETCH_FACILITY_DATA_START';
const FETCH_FACILITY_DATA_SUCCESS = 'FETCH_FACILITY_DATA_SUCCESS';
const FETCH_FACILITY_DATA_ERROR = 'FETCH_FACILITY_DATA_ERROR';

export const fetchFacilityDataStart = () => {
  return {
    type: FETCH_FACILITY_DATA_START,
    loading: true
  }
}

export const fetchFacilityData = (facilityData) => {
  return {
    type: FETCH_FACILITY_DATA_SUCCESS,
    ...facilityData,
    loading: false
  };
}

export const fetchFacilityDataError = (facilityData) => {
  return {
    type: FETCH_FACILITY_DATA_ERROR,
    ...facilityData,
    loading: false
  };
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FACILITY_DATA_START': {
      return {
        ...state,
        loading: action.loading
      }
      break
    }
    case 'FETCH_FACILITY_DATA_SUCCESS': {
      return {
        ...state,
        val3: action.val3,
        val4: action.val4,
        loading: false
      }
      break;
    }
    case 'FETCH_FACILITY_DATA_ERROR': {
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    }
    default: {
      return state;
    }
  }
};