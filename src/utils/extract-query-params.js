export function extractQueryParams(query) {
  return query.substring(1).split('&').reduc((queryPrams,param)=> {
    const [key,value] = param.split('=')

    queryPrams[key] = value
    return queryPrams
  },{})
}