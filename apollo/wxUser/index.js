import wxUserinfoGQL from './wxUserinfo.gql'

export async function getWxUserinfo (client, code) {
  const {data} = await client.query({
    query: wxUserinfoGQL,
    variables: { code }
  })
  return data;
}

export default {
  getWxUserinfo
}
