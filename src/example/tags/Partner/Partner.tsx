import { GetPartner } from '../../requests'
import { ListSchema, PartnerSchema } from '../../schemas'

export function Partner () {
  return (
    <tag name='partner' description='Partners of CANT inc.'>
      <endpoint
        method='get'
        path='/partners'
        summary='Returns a list of partners'
        description='You cant use partners as you wish!'>
        <param in='query' name='test'>
          <date example='now' default='now' />
        </param>
        <response description='Response Description'>
          <ListSchema>
            <PartnerSchema />
          </ListSchema>
        </response>
        <request>
          <GetPartner />
        </request>
      </endpoint>
      <endpoint method='get' path='/partners/{id}'>
        <param in='path' name='id'><string min={1} max={10} /></param>
        <response description='Partner Response Description'>
          <PartnerSchema />
        </response>
        <request>
          <GetPartner />
        </request>
      </endpoint>
      <endpoint method='patch' path='/partners/{id}'>
        <param in='path' name='id'><string /></param>
        <body type='application/json'>
          <object>
            <field key='name'><string example='CANTent.' /></field>
            <field key='gift'><boolean /></field>
            <field optional key='addresses'>
              <array>
                <number description='address id' />
              </array>
            </field>
          </object>
        </body>
        <response status={220} description='Partner Response Description'>
          <PartnerSchema />
        </response>
        <request>
          <error>
            {{ test: 'patch partner' }}
          </error>
        </request>
      </endpoint>
    </tag>
  )
}
