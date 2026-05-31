# Components
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / Components [↑](https://github.com/d8corp/innet-server/blob/2.0/readme/QUICK_START.md) [↓](https://github.com/d8corp/innet-server/blob/2.0/readme/ELEMENTS.md)

Components are reusable, composable building blocks.
Create custom components to encapsulate business logic and share them across your application.

Here's an example of a custom component:

*src/components/ApiResponse.tsx*
```typescript jsx
interface ApiResponseProps {
  data: any;
  status?: number;
}

export const ApiResponse = ({ data, status = 200 }: ApiResponseProps) => (
  <return>
    <success status={status}>{data}</success>
  </return>
);
```

Use the component in your API:

```typescript jsx
<endpoint method='get' path='/users'>
  <ApiResponse data={users} />
</endpoint>
```
