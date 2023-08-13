import { useComponentName } from '../../../../hooks'

export function LocationSchema () {
  const ref = useComponentName()

  return (
    <tuple
      example={[40.741895, -73.989308]}
      description='GPS Coordinates'>
      <number
        description='Latitude'
        example={40.741895}
      />
      <number
        description='Longitude'
        example={-73.989308}
      />
    </tuple>
  )
}
