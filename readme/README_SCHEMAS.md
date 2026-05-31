# Schemas

###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / Schemas [↑](https://github.com/d8corp/innet-server/blob/2.0/readme/README_ELEMENTS.md) [↓](#hooks)

<sub>
  <details>
    <summary>&nbsp;📁 <a href="#shared-props">Shared Props</a></summary>
    <blockquote>
      <p></p>
      <p>├ 🏷️ <a href="#title">title</a></p>
      <p>├ 🏷️ <a href="#description">description</a></p>
      <p>├ 🏷️ <a href="#deprecated">deprecated</a></p>
      <p>├ 🏷️ <a href="#ref">ref</a></p>
      <p>├ 🏷️ <a href="#readonly">readOnly</a></p>
      <p>├ 🏷️ <a href="#writeonly">writeOnly</a></p>
      <p>├ 🏷️ <a href="#nullable">nullable</a></p>
      <p>├ 🏷️ <a href="#example">example</a></p>
      <p>├ 🏷️ <a href="#examples">examples</a></p>
      <p>├ 🏷️ <a href="#default">default</a></p>
      <p>├ 🏷️ <a href="#value">value</a></p>
      <p>└ 🏷️ <a href="#values">values</a></p>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;📁 <a href="#collections">Collections</a></summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#object">&lt;object&gt;</a></summary>
        <blockquote>
          <p></p>
          <details>
            <summary>&nbsp;🧩 <a href="#field">&lt;field&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├ 🏷️ <a href="#field-key">key</a></p>
              <p>└ 🏷️ <a href="#field-optional">optional</a></p>
            </blockquote>
          </details>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#array">&lt;array&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#array-minitems">minItems</a></p>
          <p>├ 🏷️ <a href="#array-maxitems">maxItems</a></p>
          <p>└ 🏷️ <a href="#array-uniqueitems">uniqueItems</a></p>
        </blockquote>
      </details>
      <p>└ 🧩 <a href="#tuple">&lt;tuple&gt;</a></p>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;📁 <a href="#primitives">Primitives</a></summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#string">&lt;string&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#string-min">min</a></p>
          <p>├ 🏷️ <a href="#string-max">max</a></p>
          <p>├ 🏷️ <a href="#string-pattern">pattern</a></p>
          <p>└ 🏷️ <a href="#string-patternid">patternId</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#number">&lt;number&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#num-min">min</a></p>
          <p>├ 🏷️ <a href="#num-max">max</a></p>
          <p>├ 🏷️ <a href="#num-exclusivemin">exclusiveMin</a></p>
          <p>├ 🏷️ <a href="#num-exclusivemax">exclusiveMax</a></p>
          <p>└ 🏷️ <a href="#num-multipleof">multipleOf</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#integer">&lt;integer&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#int-format">format</a></p>
          <p>├ 🏷️ <a href="#int-min">min</a></p>
          <p>├ 🏷️ <a href="#int-max">max</a></p>
          <p>├ 🏷️ <a href="#int-exclusivemin">exclusiveMin</a></p>
          <p>├ 🏷️ <a href="#int-exclusivemax">exclusiveMax</a></p>
          <p>└ 🏷️ <a href="#int-multipleof">multipleOf</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#date">&lt;date&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#date-min">min</a></p>
          <p>└ 🏷️ <a href="#date-max">max</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#binary">&lt;binary&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#binary-accept">accept</a></p>
          <p>├ 🏷️ <a href="#binary-min">min</a></p>
          <p>└ 🏷️ <a href="#binary-max">max</a></p>
        </blockquote>
      </details>
      <p>├ 🧩 <a href="#uuid">&lt;uuid&gt;</a></p>
      <p>├ 🧩 <a href="#boolean">&lt;boolean&gt;</a></p>
      <p>├ 🧩 <a href="#null">&lt;null&gt;</a></p>
      <p>└ 🧩 <a href="#any">&lt;any&gt;</a></p>
    </blockquote>
  </details>
</sub>

Schemas define the structure and validation rules for your API data. Use declarative elements to describe parameters, request bodies, and response formats. Schemas support primitives, collections, validation constraints, and automatic TypeScript type generation.

## Shared Props
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / Shared Props [↓](#collections)
<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>🏷️ <a href="#title">title</a></p>
      <p>🏷️ <a href="#description">description</a></p>
      <p>🏷️ <a href="#deprecated">deprecated</a></p>
      <p>🏷️ <a href="#ref">ref</a></p>
      <p>🏷️ <a href="#readonly">readOnly</a></p>
      <p>🏷️ <a href="#writeonly">writeOnly</a></p>
      <p>🏷️ <a href="#nullable">nullable</a></p>
      <p>🏷️ <a href="#example">example</a></p>
      <p>🏷️ <a href="#examples">examples</a></p>
      <p>🏷️ <a href="#default">default</a></p>
      <p>🏷️ <a href="#value">value</a></p>
      <p>🏷️ <a href="#values">values</a></p>
    </blockquote>
  </details>
</sub>

All schema elements support common properties for documentation and behavior control.
Use these props across any schema type (`<string>`, `<number>`, `<object>`, `<array>`, etc.)

### title
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / title [↓](#description)

Human-readable title for the schema element.

- **Type:** `string`
- **Default:** -

```typescript jsx
<string title='User Email' />
```

### description
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / description [↑](#title) [↓](#deprecated)

Detailed description of the schema element.
Supports CommonMark (Markdown) syntax.

- **Type:** `string`
- **Default:** -

```typescript jsx
<string description='User email address in format `name@domain.com`' />
```

### deprecated
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / deprecated [↑](#description) [↓](#ref)

Mark schema element as deprecated.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<string deprecated />
```

### ref
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / ref [↑](#deprecated) [↓](#readOnly)

When you assign a `ref` to a schema, the system registers it as a reusable component in the OpenAPI specification under `components/schemas` and generates a corresponding TypeScript type with that name. This allows you to reference the same schema across multiple endpoints without duplication, and import the generated type in your code for type-safe development.

Use `ref` for schemas that appear in multiple places in your API. The name must be unique across your entire API and will be used as-is for the TypeScript interface or type alias name.

- **Type:** `string`
- **Default:** -

```typescript jsx
function Todo () {
  return (
    <object ref='Todo'>
      <field key='id'><uuid /></field>
      <field key='title'><string /></field>
      <field key='done'><boolean /></field>
    </object>
  )
}
```

### readOnly
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / readOnly [↑](#ref) [↓](#writeOnly)

Elements marked with `readOnly` are returned in response bodies but cannot be used in request bodies.
This is useful for fields that are generated by the server and should not be modified by clients, such as identifiers, creation timestamps, or computed values.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<field key='createdAt' readOnly>
  <date />
</field>
```

### writeOnly
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / writeOnly [↑](#readOnly) [↓](#nullable)

Elements marked with `writeOnly` can be used in request bodies but are never returned in response bodies.
This is essential for sensitive data that should only be sent to the server and never exposed back to clients, such as passwords, API keys, or other confidential information.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<field key='password' writeOnly>
  <string />
</field>
```

### nullable
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / nullable [↑](#writeOnly) [↓](#example)

Allow `null` as a valid value.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<string nullable />
```

### example
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / example [↑](#nullable) [↓](#examples)

Single example value for documentation.

- **Type:** `T`
- **Default:** -

```typescript jsx
<string example='user@example.com' />
```

### examples
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / examples [↑](#example) [↓](#default)

Array of example values for documentation.

- **Type:** `T[]`
- **Default:** -

```typescript jsx
<string examples={['john@example.com', 'jane@test.com']} />
```

### default
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / default [↑](#examples) [↓](#value)

When a field with a `default` value is not provided in the request, the system automatically uses the default value instead.
The default value is also displayed in API documentation to help developers understand the expected behavior.

- **Type:** `T`
- **Default:** -

```typescript jsx
<number default={1} />
```

### value
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / value [↑](#default) [↓](#values)

Constant value (only this value is allowed).

- **Type:** `T`
- **Default:** -

```typescript jsx
<string value='active' />
```

### values
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / values [↑](#value)

Enumeration of allowed values.

- **Type:** `T[]`
- **Default:** -

```typescript jsx
<string values={['active', 'inactive', 'pending']} />
```

## Collections
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / Collections [↑](#shared-props) [↓](#primitives)

<sub>
  <details>
    <summary>&nbsp;🧩 Components</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#object">&lt;object&gt;</a></summary>
        <blockquote>
          <p></p>
          <details>
            <summary>&nbsp;🧩 <a href="#field">&lt;field&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├ 🏷️ <a href="#field-key">key</a></p>
              <p>└ 🏷️ <a href="#field-optional">optional</a></p>
            </blockquote>
          </details>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#array">&lt;array&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#array-minitems">minItems</a></p>
          <p>├ 🏷️ <a href="#array-maxitems">maxItems</a></p>
          <p>└ 🏷️ <a href="#array-uniqueitems">uniqueItems</a></p>
        </blockquote>
      </details>
      <p>└ 🧩 <a href="#tuple">&lt;tuple&gt;</a></p>
    </blockquote>
  </details>
</sub>

Collection types for building complex, structured schemas. Use these to define objects with named fields, arrays of items, or fixed-length tuples with specific types for each position.

### Object
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / Object [↓](#array)

<sub>
  <details>
    <summary>&nbsp;🧩 Components</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#field">&lt;field&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#field-key">key</a></p>
          <p>└ 🏷️ <a href="#field-optional">optional</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

Objects represent structured data with named fields. 
Use `<object>` to define complex schemas with multiple properties, each with its own type and validation rules.
Objects can be nested to create deeply structured data models.

```typescript jsx
<object description='User object'>
  <field key='id' readOnly>
    <uuid />
  </field>
  <field key='name'>
    <string min={1} max={100} />
  </field>
  <field key='email'>
    <string format='email' />
  </field>
  <field key='role' optional default='user'>
    <string values={['admin', 'user', 'guest']} />
  </field>
</object>
```

### Field
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Object](#object) / Field [↑](#object) [↓](#array)

<sub>
  <details>
    <summary>&nbsp;🏷 Props</summary>
    <blockquote>
      <p></p>
      <p>├ 🏷️ <a href="#field-key">key</a></p>
      <p>└ 🏷️ <a href="#field-optional">optional</a></p>
    </blockquote>
  </details>
</sub>

Defines a single field within an `<object>`.

```typescript jsx
<object>
  <field key='id' readOnly>
    <uuid />
  </field>
  <field key='password' writeOnly>
    <string min={8} />
  </field>
  <field key='nickname' optional>
    <string />
  </field>
</object>
```

#### key
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Field](#field) / key [↓](#optional)

Field name (required).

- **Type:** `string`
- **Required:** Yes

```typescript jsx
<field key='email'>
  <string format='email' />
</field>
```

#### optional
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Field](#field) / optional [↑](#key)

Mark field as optional (not required).

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<field key='nickname' optional>
  <string />
</field>
```

### Array
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / Array [↑](#object) [↓](#tuple)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├ 🏷️ <a href="#array-min">min</a></p>
      <p>├ 🏷️ <a href="#array-max">max</a></p>
      <p>└ 🏷️ <a href="#array-unique">unique</a></p>
    </blockquote>
  </details>
</sub>

Arrays represent collections of items of the same type. Use `<array>` to define lists of primitives or complex objects. Control the number of items with `min` and `max`, and ensure uniqueness with `unique`.

```typescript jsx
<array min={1} max={10} unique>
  <string />
</array>
```

<h4 id="array-min">min</h4>

###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Array](#array) / min [↓](#array-max)

Minimum number of items in the array.

- **Type:** `number`
- **Default:** -

```typescript jsx
<array min={1}>
  <string />
</array>
```

<h4 id="array-max">max</h4>

###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Array](#array) / max [↑](#array-min) [↓](#array-unique)

Maximum number of items in the array.

- **Type:** `number`
- **Default:** -

```typescript jsx
<array max={10}>
  <string />
</array>
```

<h4 id="array-unique">unique</h4>

###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Array](#array) / unique [↑](#array-max)

All items must be unique.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<array unique>
  <string />
</array>
```

### Tuple
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / Tuple [↑](#array)

A fixed-length array with specific types for each position.

```typescript jsx
<tuple>
  <string />
  <number />
  <boolean />
</tuple>
```

## Primitives
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) [↑](#collections)

<sub>
  <details>
    <summary>&nbsp;🧩 Components</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#string">&lt;string&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#string-min">min</a></p>
          <p>├ 🏷️ <a href="#string-max">max</a></p>
          <p>├ 🏷️ <a href="#string-pattern">pattern</a></p>
          <p>└ 🏷️ <a href="#string-patternid">patternId</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#number">&lt;number&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#num-min">min</a></p>
          <p>├ 🏷️ <a href="#num-max">max</a></p>
          <p>├ 🏷️ <a href="#num-exclusivemin">exclusiveMin</a></p>
          <p>├ 🏷️ <a href="#num-exclusivemax">exclusiveMax</a></p>
          <p>└ 🏷️ <a href="#num-multipleof">multipleOf</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#integer">&lt;integer&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#int-format">format</a></p>
          <p>├ 🏷️ <a href="#int-min">min</a></p>
          <p>├ 🏷️ <a href="#int-max">max</a></p>
          <p>├ 🏷️ <a href="#int-exclusivemin">exclusiveMin</a></p>
          <p>├ 🏷️ <a href="#int-exclusivemax">exclusiveMax</a></p>
          <p>└ 🏷️ <a href="#int-multipleof">multipleOf</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#date">&lt;date&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#date-min">min</a></p>
          <p>└ 🏷️ <a href="#date-max">max</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#binary">&lt;binary&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├ 🏷️ <a href="#binary-accept">accept</a></p>
          <p>├ 🏷️ <a href="#binary-min">min</a></p>
          <p>└ 🏷️ <a href="#binary-max">max</a></p>
        </blockquote>
      </details>
      <p>├ 🧩 <a href="#uuid">&lt;uuid&gt;</a></p>
      <p>├ 🧩 <a href="#boolean">&lt;boolean&gt;</a></p>
      <p>├ 🧩 <a href="#null">&lt;null&gt;</a></p>
      <p>└ 🧩 <a href="#any">&lt;any&gt;</a></p>
    </blockquote>
  </details>
</sub>

Primitive data types are the building blocks of your API schemas. They represent single values like strings, numbers, booleans, and dates. All primitives support common properties like title, description, examples, defaults, and validation rules. Use them to define the data types for parameters, request bodies, and responses.

All primitives support: `title`, `description`, `deprecated`, `readOnly`, `writeOnly`, `example`, `default`, `nullable`

### String
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / String [↓](#number)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├ 🏷️ <a href="#string-min">min</a></p>
      <p>├ 🏷️ <a href="#string-max">max</a></p>
      <p>├ 🏷️ <a href="#string-pattern">pattern</a></p>
      <p>└ 🏷️ <a href="#string-patternid">patternId</a></p>
    </blockquote>
  </details>
</sub>

Text data with optional validation.

```typescript jsx
<param in='query' name='email'>
  <string format='email' min={1} max={255} />
</param>
```

#### min
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [String](#string) / min [↓](#string-max)

Minimum length of the string.

- **Type:** `number`
- **Default:** -

```typescript jsx
<string min={1} />
```

#### max
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [String](#string) / max [↑](#string-min) [↓](#string-pattern)

Maximum length of the string.

- **Type:** `number`
- **Default:** -

```typescript jsx
<string max={255} />
```

#### pattern
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [String](#string) / pattern [↑](#string-max) [↓](#string-patternid)

Regex pattern for validation.

- **Type:** `string`
- **Default:** -

```typescript jsx
<string pattern='^[A-Z]{3}$' />
```

#### patternId
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [String](#string) / patternId [↑](#string-pattern)

Pattern identifier for error messages.

- **Type:** `string`
- **Default:** -

```typescript jsx
<string pattern='^\d{5}$' patternId='zipCode' />
```

### Number
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / Number [↑](#string) [↓](#integer)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├ 🏷️ <a href="#num-min">min</a></p>
      <p>├ 🏷️ <a href="#num-max">max</a></p>
      <p>├ 🏷️ <a href="#num-exclusivemin">exclusiveMin</a></p>
      <p>├ 🏷️ <a href="#num-exclusivemax">exclusiveMax</a></p>
      <p>└ 🏷️ <a href="#num-multipleof">multipleOf</a></p>
    </blockquote>
  </details>
</sub>

Decimal number with optional validation.

```typescript jsx
<param in='query' name='price'>
  <number min={0} max={10000} multipleOf={0.01} />
</param>
```

#### min
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Number](#number) / min [↓](#num-max)

Minimum value.

- **Type:** `number`
- **Default:** -

```typescript jsx
<number min={0} />
```

#### max
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Number](#number) / max [↑](#num-min) [↓](#num-exclusivemin)

Maximum value.

- **Type:** `number`
- **Default:** -

```typescript jsx
<number max={100} />
```

#### exclusiveMin
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Number](#number) / exclusiveMin [↑](#num-max) [↓](#num-exclusivemax)

Value must be greater than (not equal to) the minimum.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<number min={0} exclusiveMin />
```

#### exclusiveMax
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Number](#number) / exclusiveMax [↑](#num-exclusivemin) [↓](#num-multipleof)

Value must be less than (not equal to) the maximum.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<number max={100} exclusiveMax />
```

#### multipleOf
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Number](#number) / multipleOf [↑](#num-exclusivemax)

Value must be a multiple of the specified number.

- **Type:** `number`
- **Default:** -

```typescript jsx
<number multipleOf={0.01} />
```

### Integer
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / Integer [↑](#number) [↓](#date)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├ 🏷️ <a href="#int-format">format</a></p>
      <p>├ 🏷️ <a href="#int-min">min</a></p>
      <p>├ 🏷️ <a href="#int-max">max</a></p>
      <p>├ 🏷️ <a href="#int-exclusivemin">exclusiveMin</a></p>
      <p>├ 🏷️ <a href="#int-exclusivemax">exclusiveMax</a></p>
      <p>└ 🏷️ <a href="#int-multipleof">multipleOf</a></p>
    </blockquote>
  </details>
</sub>

Whole number with optional validation.

```typescript jsx
<param in='query' name='age'>
  <integer min={0} max={150} />
</param>
```

#### format
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Integer](#integer) / format [↓](#int-min)

Integer format: `'int32'` (default) or `'int64'` for BigInt.

- **Type:** `'int32' | 'int64'`
- **Default:** `'int32'`

```typescript jsx
<integer format='int64' />
```

#### min
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Integer](#integer) / min [↑](#int-format) [↓](#int-max)

Minimum value.

- **Type:** `number`
- **Default:** -

```typescript jsx
<integer min={0} />
```

#### max
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Integer](#integer) / max [↑](#int-min) [↓](#int-exclusivemin)

Maximum value.

- **Type:** `number`
- **Default:** -

```typescript jsx
<integer max={150} />
```

#### exclusiveMin
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Integer](#integer) / exclusiveMin [↑](#int-max) [↓](#int-exclusivemax)

Value must be greater than (not equal to) the minimum.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<integer min={0} exclusiveMin />
```

#### exclusiveMax
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Integer](#integer) / exclusiveMax [↑](#int-exclusivemin) [↓](#int-multipleof)

Value must be less than (not equal to) the maximum.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<integer max={100} exclusiveMax />
```

#### multipleOf
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Integer](#integer) / multipleOf [↑](#int-exclusivemax)

Value must be a multiple of the specified number.

- **Type:** `number`
- **Default:** -

```typescript jsx
<integer multipleOf={5} />
```

### Date
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / Date [↑](#integer) [↓](#binary)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├ 🏷️ <a href="#date-min">min</a></p>
      <p>└ 🏷️ <a href="#date-max">max</a></p>
    </blockquote>
  </details>
</sub>

ISO 8601 date format.

```typescript jsx
<param in='query' name='birthDate'>
  <date min='1900-01-01' max='now' />
</param>
```

#### min
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Date](#date) / min [↓](#date-max)

Minimum date.

- **Type:** `string`
- **Default:** -

```typescript jsx
<date min='1900-01-01' />
```

#### max
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Date](#date) / max [↑](#date-min)

Maximum date.

- **Type:** `string`
- **Default:** -

```typescript jsx
<date max='now' />
```

### Binary
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / Binary [↑](#date) [↓](#uuid)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├ 🏷️ <a href="#binary-accept">accept</a></p>
      <p>├ 🏷️ <a href="#binary-min">min</a></p>
      <p>└ 🏷️ <a href="#binary-max">max</a></p>
    </blockquote>
  </details>
</sub>

File upload or binary data. Typically used with multipart/form-data.

```typescript jsx
<field key='avatar'>
  <binary accept='image/*' min={1024} max={5242880} />
</field>
```

#### accept
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Binary](#binary) / accept [↓](#binary-min)

File type filter (MIME types).

- **Type:** `string`
- **Default:** -

```typescript jsx
<binary accept='image/*' />
```

#### min
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Binary](#binary) / min [↑](#binary-accept) [↓](#binary-max)

Minimum file size in bytes.

- **Type:** `number`
- **Default:** -

```typescript jsx
<binary min={1024} />
```

#### max
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / [Binary](#binary) / max [↑](#binary-min)

Maximum file size in bytes.

- **Type:** `number`
- **Default:** -

```typescript jsx
<binary max={5242880} />
```

### UUID
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / UUID [↑](#binary) [↓](#boolean)

Universally unique identifier in UUID format.

```typescript jsx
<param in='cookie' name='sessionId'>
  <uuid default='new' />
</param>
```

### Boolean
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / Boolean [↑](#uuid) [↓](#null)

True or false value.

```typescript jsx
<param in='query' name='active'>
  <boolean default={true} />
</param>
```

### Null
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / Null [↑](#boolean) [↓](#any)

Represents a null value explicitly.

```typescript jsx
<param in='query' name='nothing'>
  <null />
</param>
```

### Any
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / Any [↑](#null)

Accepts any value type. Useful when you want to allow flexible input without strict type validation.

```typescript jsx
<param in='query' name='data'>
  <any />
</param>
```

