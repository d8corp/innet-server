import { useApp } from 'innet';
import { placeholder } from '@cantinc/utils';

function useThrow(message) {
    const { type } = useApp();
    throw Error(placeholder(message, { type: typeof type === 'string' ? type : type.name }));
}

export { useThrow };
