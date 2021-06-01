import HttpRequest from './http_request'

class GeoProvider extends HttpRequest {
  getGeoList (text) {
    return this.mapBoxAPI(`/geocoding/v5/mapbox.places/${text}.json`)
  }
}

export default GeoProvider
