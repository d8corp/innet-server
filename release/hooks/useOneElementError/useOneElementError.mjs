import { useApp } from 'innet';

function useOneElementError() {
    const { type } = useApp();
    throw Error(`You can use only one <${type}> in <api>`);
}

export { useOneElementError };
