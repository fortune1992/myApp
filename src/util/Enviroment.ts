export function isProductionEnv(): boolean {
  return process.env.NODE_ENV === 'production';
}

export function isDevelopmentEnv(): boolean {
  return process.env.NODE_ENV === 'development';
}