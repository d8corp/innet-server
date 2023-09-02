import { useApp } from 'innet';

function useComponentName() {
    const { type } = useApp();
    return type.name;
}

export { useComponentName };
