import innet, { useNewHandler } from 'innet';
import { useContext, useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { tagContext } from '../../../hooks/useTag/useTag.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';

const tag = () => {
    if (useContext(tagContext)) {
        throw Error('You cannot use a <tag> inside another one');
    }
    const { name, description } = useProps();
    const children = useChildren();
    const { docs } = useApi();
    const tag = { name };
    if (description) {
        tag.description = description;
    }
    if (!docs.tags) {
        docs.tags = [tag];
    }
    else if (!docs.tags.find(({ name: tagName }) => tagName === name)) {
        docs.tags.push(tag);
    }
    else {
        throw Error(`You cannot use two tags with the same name (${name})`);
    }
    const handler = useNewHandler();
    handler[tagContext.key] = tag;
    innet(children, handler);
};

export { tag };
