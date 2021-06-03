import HttpRequest from './http_request'

class AddOnsProvider extends HttpRequest {
  getAddOns () {
    return this.joyGetAPI('9e70e77f-a7a7-4a9c-80df-a3a707da1f12')
  }
}

export default AddOnsProvider
