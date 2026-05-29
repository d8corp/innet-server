# Schemas

###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / Schemas [↑](https://github.com/d8corp/innet-server/blob/2.0/readme/README_ELEMENTS.md) [↓](#hooks)

<sup>
<details>
  <summary>&nbsp;📁 <a href="#shared-props">Shared Props</a></summary>
  <blockquote>
    ├ 🏷️ <a href="#title">title</a><br>
    ├ 🏷️ <a href="#description">description</a><br>
    ├ 🏷️ <a href="#deprecated">deprecated</a><br>
    ├ 🏷️ <a href="#ref">ref</a><br>
    ├ 🏷️ <a href="#readonly">readOnly</a><br>
    ├ 🏷️ <a href="#writeonly">writeOnly</a><br>
    ├ 🏷️ <a href="#nullable">nullable</a><br>
    ├ 🏷️ <a href="#example">example</a><br>
    ├ 🏷️ <a href="#examples">examples</a><br>
    ├ 🏷️ <a href="#default">default</a><br>
    ├ 🏷️ <a href="#value">value</a><br>
    └ 🏷️ <a href="#values">values</a><br>
  </blockquote>
</details>
<details>
  <summary>&nbsp;📁 <a href="#collections">Collections</a></summary>
  <blockquote>
    <details>
      <summary>&nbsp;🧩 <a href="#object">&lt;object&gt;</a></summary>
      <blockquote>
        <details>
          <summary>&nbsp;🧩 <a href="#field">&lt;field&gt;</a></summary>
          <blockquote>
            ├ 🏷️ <a href="#field-key">key</a><br>
            └ 🏷️ <a href="#field-optional">optional</a><br>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#array">&lt;array&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#array-minitems">minItems</a><br>
        ├ 🏷️ <a href="#array-maxitems">maxItems</a><br>
        └ 🏷️ <a href="#array-uniqueitems">uniqueItems</a>
      </blockquote>
    </details>
    └ 🧩 <a href="#tuple">&lt;tuple&gt;</a><br>
  </blockquote>
</details>
<details>
  <summary>&nbsp;📁 <a href="#primitives">Primitives</a></summary>
  <blockquote>
    <details>
      <summary>&nbsp;🧩 <a href="#string">&lt;string&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#string-min">min</a><br>
        ├ 🏷️ <a href="#string-max">max</a><br>
        ├ 🏷️ <a href="#string-pattern">pattern</a><br>
        └ 🏷️ <a href="#string-patternid">patternId</a>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#number">&lt;number&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#num-min">min</a><br>
        ├ 🏷️ <a href="#num-max">max</a><br>
        ├ 🏷️ <a href="#num-exclusivemin">exclusiveMin</a><br>
        ├ 🏷️ <a href="#num-exclusivemax">exclusiveMax</a><br>
        └ 🏷️ <a href="#num-multipleof">multipleOf</a>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#integer">&lt;integer&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#int-format">format</a><br>
        ├ 🏷️ <a href="#int-min">min</a><br>
        ├ 🏷️ <a href="#int-max">max</a><br>
        ├ 🏷️ <a href="#int-exclusivemin">exclusiveMin</a><br>
        ├ 🏷️ <a href="#int-exclusivemax">exclusiveMax</a><br>
        └ 🏷️ <a href="#int-multipleof">multipleOf</a>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#date">&lt;date&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#date-min">min</a><br>
        └ 🏷️ <a href="#date-max">max</a>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#binary">&lt;binary&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#binary-accept">accept</a><br>
        ├ 🏷️ <a href="#binary-min">min</a><br>
        └ 🏷️ <a href="#binary-max">max</a>
      </blockquote>
    </details>
    ├ 🧩 <a href="#uuid">&lt;uuid&gt;</a><br>
    ├ 🧩 <a href="#boolean">&lt;boolean&gt;</a><br>
    ├ 🧩 <a href="#null">&lt;null&gt;</a><br>
    └ 🧩 <a href="#any">&lt;any&gt;</a><br>
  </blockquote>
</details>
</sup>

Schemas define the structure and validation rules for your API data. Use declarative elements to describe parameters, request bodies, and response formats. Schemas support primitives, collections, validation constraints, and automatic TypeScript type generation.

## Shared Props
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) [↓](#collections)

<details>
  <summary>&nbsp;🏷️ Props</summary>
  <blockquote>
    🏷️ <a href="#title">title</a><br>
    🏷️ <a href="#description">description</a><br>
    🏷️ <a href="#deprecated">deprecated</a><br>
    🏷️ <a href="#ref">ref</a><br>
    🏷️ <a href="#readonly">readOnly</a><br>
    🏷️ <a href="#writeonly">writeOnly</a><br>
    🏷️ <a href="#nullable">nullable</a><br>
    🏷️ <a href="#example">example</a><br>
    🏷️ <a href="#examples">examples</a><br>
    🏷️ <a href="#default">default</a><br>
    🏷️ <a href="#value">value</a><br>
    🏷️ <a href="#values">values</a><br>
  </blockquote>
</details>

All schema elements support common properties for documentation and behavior control.
Use these props across any schema type (`<string>`, `<number>`, `<object>`, `<array>`, etc.) to provide metadata, validation hints, and type constraints.

### title
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / title [↓](#description)

Human-readable title for the schema.

- **Type:** `string`
- **Default:** -

```typescript jsx
<string title='User Email' />
```

### description
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / description [↑](#title) [↓](#deprecated)

Detailed description of the schema.
Supports CommonMark (Markdown) syntax.

- **Type:** `string`
- **Default:** -

```typescript jsx
<string description='User email address in format `name@domain.com`' />
```

### deprecated
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / deprecated [↑](#description) [↓](#ref)

Mark schema as deprecated.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<string deprecated />
```

### ref
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / ref [↑](#deprecated) [↓](#readOnly)

Reference name for the schema (used for TypeScript type generation).

- **Type:** `string`
- **Default:** -

```typescript jsx
<object ref='Todo'>
  <field key='id'><uuid /></field>
  <field key='title'><string /></field>
  <field key='done'><boolean /></field>
</object>
```

### readOnly
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / readOnly [↑](#ref) [↓](#writeOnly)

Mark schema as read-only (responses only).

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<field key='createdAt' readOnly>
  <date />
</field>
```

### writeOnly
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Shared Props](#shared-props) / writeOnly [↑](#readOnly) [↓](#nullable)

Mark schema as write-only (requests only).

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

Default value if not specified.

- **Type:** `T`
- **Default:** -

```typescript jsx
<string default='anonymous' />
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
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) [↑](#shared-props) [↓](#primitives)

<details>
  <summary>&nbsp;🧩 Components</summary>
  <blockquote>
    <details>
      <summary>&nbsp;🧩 <a href="#object">&lt;object&gt;</a></summary>
      <blockquote>
        <details>
          <summary>&nbsp;🧩 <a href="#field">&lt;field&gt;</a></summary>
          <blockquote>
            ├ 🏷️ <a href="#field-key">key</a><br>
            └ 🏷️ <a href="#field-optional">optional</a><br>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#array">&lt;array&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#array-minitems">minItems</a><br>
        ├ 🏷️ <a href="#array-maxitems">maxItems</a><br>
        └ 🏷️ <a href="#array-uniqueitems">uniqueItems</a>
      </blockquote>
    </details>
    └ 🧩 <a href="#tuple">&lt;tuple&gt;</a><br>
  </blockquote>
</details>

Collection types for building complex, structured schemas. Use these to define objects with named fields, arrays of items, or fixed-length tuples with specific types for each position.

### Object
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / Object [↓](#array)

<details>
  <summary>&nbsp;🧩 Components</summary>
  <blockquote>
    <details>
      <summary>&nbsp;🧩 <a href="#field">&lt;field&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#field-key">key</a><br>
        └ 🏷️ <a href="#field-optional">optional</a><br>
      </blockquote>
    </details>
  </blockquote>
</details>

Objects represent structured data with named fields. 
Use `<object>` to define complex schemas with multiple properties, each with its own type and validation rules.
Objects can be nested to create deeply structured data models.

```typescript jsx
<object description='User object'>
  <field key='id' readOnly>
    <uuid />
  </field>
  <field key='name' required>
    <string min={1} max={100} />
  </field>
  <field key='email' required>
    <string format='email' />
  </field>
  <field key='role' optional default='user'>
    <string values={['admin', 'user', 'guest']} />
  </field>
</object>
```

### Field
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Object](#object) / Field [↑](#object) [↓](#array)

<details>
  <summary>&nbsp;🏷 Props</summary>
  <blockquote>
    ├ 🏷️ <a href="#field-key">key</a><br>
    └ 🏷️ <a href="#field-optional">optional</a><br>
  </blockquote>
</details>

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

<details>
  <summary>&nbsp;🏷️ Props</summary>
  <blockquote>
    ├ 🏷️ <a href="#array-minitems">minItems</a><br>
    ├ 🏷️ <a href="#array-maxitems">maxItems</a><br>
    └ 🏷️ <a href="#array-uniqueitems">uniqueItems</a><br>
  </blockquote>
</details>

Arrays represent collections of items of the same type. Use `<array>` to define lists of primitives or complex objects. Control the number of items with `minItems` and `maxItems`, and ensure uniqueness with `uniqueItems`.

```typescript jsx
<array minItems={1} maxItems={10} uniqueItems>
  <string />
</array>
```

#### minItems
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Array](#array) / minItems [↓](#array-maxitems)

Minimum number of items in the array.

- **Type:** `number`
- **Default:** -

```typescript jsx
<array minItems={1}>
  <string />
</array>
```

#### maxItems
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Array](#array) / maxItems [↑](#array-minitems) [↓](#array-uniqueitems)

Maximum number of items in the array.

- **Type:** `number`
- **Default:** -

```typescript jsx
<array maxItems={10}>
  <string />
</array>
```

#### uniqueItems
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Collections](#collections) / [Array](#array) / uniqueItems [↑](#array-maxitems)

All items must be unique.

- **Type:** `boolean`
- **Default:** `false`

```typescript jsx
<array uniqueItems>
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

<details>
  <summary>&nbsp;🧩 Components</summary>
  <blockquote>
    <details>
      <summary>&nbsp;🧩 <a href="#string">&lt;string&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#string-min">min</a><br>
        ├ 🏷️ <a href="#string-max">max</a><br>
        ├ 🏷️ <a href="#string-pattern">pattern</a><br>
        └ 🏷️ <a href="#string-patternid">patternId</a><br>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#number">&lt;number&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#num-min">min</a><br>
        ├ 🏷️ <a href="#num-max">max</a><br>
        ├ 🏷️ <a href="#num-exclusivemin">exclusiveMin</a><br>
        ├ 🏷️ <a href="#num-exclusivemax">exclusiveMax</a><br>
        └ 🏷️ <a href="#num-multipleof">multipleOf</a><br>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#integer">&lt;integer&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#int-format">format</a><br>
        ├ 🏷️ <a href="#int-min">min</a><br>
        ├ 🏷️ <a href="#int-max">max</a><br>
        ├ 🏷️ <a href="#int-exclusivemin">exclusiveMin</a><br>
        ├ 🏷️ <a href="#int-exclusivemax">exclusiveMax</a><br>
        └ 🏷️ <a href="#int-multipleof">multipleOf</a><br>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#date">&lt;date&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#date-min">min</a><br>
        └ 🏷️ <a href="#date-max">max</a><br>
      </blockquote>
    </details>
    <details>
      <summary>&nbsp;🧩 <a href="#binary">&lt;binary&gt;</a></summary>
      <blockquote>
        ├ 🏷️ <a href="#binary-accept">accept</a><br>
        ├ 🏷️ <a href="#binary-min">min</a><br>
        └ 🏷️ <a href="#binary-max">max</a><br>
      </blockquote>
    </details>
    ├ 🧩 <a href="#uuid">&lt;uuid&gt;</a><br>
    ├ 🧩 <a href="#boolean">&lt;boolean&gt;</a><br>
    ├ 🧩 <a href="#null">&lt;null&gt;</a><br>
    └ 🧩 <a href="#any">&lt;any&gt;</a><br>
  </blockquote>
</details>

Primitive data types are the building blocks of your API schemas. They represent single values like strings, numbers, booleans, and dates. All primitives support common properties like title, description, examples, defaults, and validation rules. Use them to define the data types for parameters, request bodies, and responses.

All primitives support: `title`, `description`, `deprecated`, `readOnly`, `writeOnly`, `example`, `default`, `nullable`

### String
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/README.md) / [Schemas](#schemas) / [Primitives](#primitives) / String [↓](#number)

<details>
  <summary>&nbsp;🏷️ Props</summary>
  <blockquote>
    ├ 🏷️ <a href="#string-min">min</a><br>
    ├ 🏷️ <a href="#string-max">max</a><br>
    ├ 🏷️ <a href="#string-pattern">pattern</a><br>
    └ 🏷️ <a href="#string-patternid">patternId</a><br>
  </blockquote>
</details>

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

<details>
  <summary>&nbsp;🏷️ Props</summary>
  <blockquote>
    ├ 🏷️ <a href="#num-min">min</a><br>
    ├ 🏷️ <a href="#num-max">max</a><br>
    ├ 🏷️ <a href="#num-exclusivemin">exclusiveMin</a><br>
    ├ 🏷️ <a href="#num-exclusivemax">exclusiveMax</a><br>
    └ 🏷️ <a href="#num-multipleof">multipleOf</a><br>
  </blockquote>
</details>

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

<details>
  <summary>&nbsp;🏷️ Props</summary>
  <blockquote>
    ├ 🏷️ <a href="#int-format">format</a><br>
    ├ 🏷️ <a href="#int-min">min</a><br>
    ├ 🏷️ <a href="#int-max">max</a><br>
    ├ 🏷️ <a href="#int-exclusivemin">exclusiveMin</a><br>
    ├ 🏷️ <a href="#int-exclusivemax">exclusiveMax</a><br>
    └ 🏷️ <a href="#int-multipleof">multipleOf</a><br>
  </blockquote>
</details>

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

<details>
  <summary>&nbsp;🏷️ Props</summary>
  <blockquote>
    ├ 🏷️ <a href="#date-min">min</a><br>
    └ 🏷️ <a href="#date-max">max</a><br>
  </blockquote>
</details>

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

<details>
  <summary>&nbsp;🏷️ Props</summary>
  <blockquote>
    ├ 🏷️ <a href="#binary-accept">accept</a><br>
    ├ 🏷️ <a href="#binary-min">min</a><br>
    └ 🏷️ <a href="#binary-max">max</a><br>
  </blockquote>
</details>

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

