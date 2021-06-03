import GeoProvider from './geo_provider'
import ServiceClassProvider from './serviceClass_provider'
import ServiceProvider from './service_provider'
import AddOnsProvider from './addOns_provider'

export const GeoService = new GeoProvider()
export const ServiceClassService = new ServiceClassProvider()
export const ServiceService = new ServiceProvider()
export const AddOnsService = new AddOnsProvider()
