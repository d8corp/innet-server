import '../field/index.mjs';
import { field } from '../field/field.mjs';

function formatObjectChildren(children) {
    if (!Array.isArray(children)) {
        return children;
    }
    const result = [];
    let keyTemp = '';
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (typeof child !== 'string') {
            result.push(child);
            continue;
        }
        keyTemp += child.trim();
        if (typeof children[i + 1] === 'string')
            continue;
        if (!keyTemp.endsWith(':')) {
            result.push(child);
            continue;
        }
        const optional = keyTemp.endsWith('?:');
        const key = keyTemp.slice(0, optional ? -2 : -1);
        result.push({
            props: {
                children: children[i + 1],
                key,
                optional,
            },
            type: field,
        });
        i++;
        keyTemp = '';
    }
    return result;
}

export { formatObjectChildren };
