import HttpRequest from './http_request'

class ServiceClassProvider extends HttpRequest {
  getServiceClassTransfer () {
    return this.joyGetAPI('d61acf0a-1c74-44fd-8c6e-fd93a2fe4332')
  }

  getServiceClassCharter () {
    return this.joyGetAPI('feeb210e-d988-4ad4-b5fe-4b40d4529e84')
  }
}

export default ServiceClassProvider
