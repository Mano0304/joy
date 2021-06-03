import HttpRequest from './http_request'

class ServiceProvider extends HttpRequest {
  getService () {
    return this.joyGetAPI('81b4f4a4-d961-4cd5-b89a-fe4e8b6be23d')
  }
}

export default ServiceProvider
