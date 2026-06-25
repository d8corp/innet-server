import { type HandlerPlugin, innet, useHandler } from 'innet'
import { useProps } from '@innet/jsx'

export interface EnvProps {
  /** Conditionally execute content based on environment variables */
  children?: any

  /**
   * Environment variable value to match.
   *
   * If the current environment variable value matches the specified value(s), the content inside the `<env>` component will be executed.
   * You can provide a single string or an array of strings to match against the environment variable.
   * @example
   * ```tsx
   * <env is="production">
   *   {...}
   * </env>
   * <env is={['development', 'staging']}>
   *   {...}
   * </env>
   * ```
   * */
  is: string | string[]

  /**
   * Environment variable name to check.
   *
   * @default 'NODE_ENV'
   *
   * @example
   * ```tsx
   * <env of="APP_ENV" is="production">
   *   {...}
   * </env>
   * ```
   *  */
  of?: string
}

export const env: HandlerPlugin = () => {
  const {
    children,
    is,
    of = 'NODE_ENV',
  } = useProps<EnvProps>()

  if (Array.isArray(is) ? is.includes(process.env[of] as string) : process.env[of] === is) {
    innet(children, useHandler())
  }
}
