export const CarForm = () => import('../../components/CarForm.vue' /* webpackChunkName: "components/car-form" */).then(c => wrapFunctional(c.default || c))
export const VehicleCard = () => import('../../components/VehicleCard.vue' /* webpackChunkName: "components/vehicle-card" */).then(c => wrapFunctional(c.default || c))
export const Navigation = () => import('../../components/navigation/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
