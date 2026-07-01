import { useNewHandler, innet } from 'innet';
import { useContext, useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { tagContext } from '../../../hooks/useTag/useTag.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';

const TAG_GROUP_NAME = 'x-tagGroups';
const tag = () => {
    if (useContext(tagContext)) {
        throw Error('You cannot use a <tag> inside another one');
    }
    const { children, description, group, name, } = useProps();
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
    if (group) {
        if (docs[TAG_GROUP_NAME]) {
            const groups = docs[TAG_GROUP_NAME];
            const tagGroup = groups.find(({ name }) => name === group);
            if (tagGroup) {
                tagGroup.tags.push(name);
            }
            else {
                groups.push({ name: group, tags: [name] });
            }
        }
        else {
            // @ts-expect-error Custom field
            docs[TAG_GROUP_NAME] = [{ name: group, tags: [name] }];
        }
    }
    const handler = useNewHandler();
    handler[tagContext.key] = tag;
    innet(children, handler);
};

export { TAG_GROUP_NAME, tag };
