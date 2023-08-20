import { EditPartner, GetPartner, GetPartners } from '../../requests'
import { EditPartnerSchema, ListSchema, PartnerSchema } from '../../schemas'

export function Partner () {
  return (
    <tag
      name='partner'
      description='Partners of CANT inc.'>
      <endpoint
        method='get'
        path='/partners'
        summary='Returns a list of partners'
        description='You cant use partners as you wish!'>
        <param in='query' name='search'>
          <string />
        </param>
        <response description='Response Description'>
          <ListSchema>
            <PartnerSchema />
          </ListSchema>
        </response>
        <request>
          <GetPartners />
        </request>
      </endpoint>
      <endpoint method='get' path='/partners/{id}'>
        <param in='path' name='id'>
          <uuid />
        </param>
        <response description='Partner Response Description'>
          <PartnerSchema />
        </response>
        <request>
          <GetPartner />
        </request>
      </endpoint>
      <endpoint method='patch' path='/partners/{id}'>
        <param in='path' name='id'>
          <string />
        </param>
        <body type='application/json'>
          <EditPartnerSchema />
        </body>
        <response status={220} description='Partner Response Description'>
          <PartnerSchema />
        </response>
        <request>
          <EditPartner />
        </request>
      </endpoint>
    </tag>
  )
}
