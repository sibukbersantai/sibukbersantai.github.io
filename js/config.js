export const sanityConfig = {
  projectId: 'diz7kk6p',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true
}

export const buildSanityUrl = (query) => {
  const { projectId, dataset, apiVersion } = sanityConfig
  return `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`
}
