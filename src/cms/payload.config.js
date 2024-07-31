import { buildConfig } from 'payload/config'
import { graphql } from 'payload/plugins'

export default buildConfig({
  plugins: [
    graphql({
      disablePlaygroundInProduction: false,
    }),
  ],
  // Other configurations
})
