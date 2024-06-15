'use client'

type ErrorProps = {
  error: Error
  reset: () => void
}
export const ErrorPage = ({ error }: ErrorProps) => {
  return <div>{error.message}</div>
}

export default ErrorPage
