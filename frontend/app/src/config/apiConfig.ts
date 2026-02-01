export const baseConfig = {
  BACKEND_URL: 'http://localhost:3000'
}
export const apiVersion = {
  v1: '/api/v1',
}
export const apiFeature = {
  user: '/user',
  menu: '/menu'
}

export const mainApi = `${baseConfig.BACKEND_URL}${apiVersion.v1}` 
