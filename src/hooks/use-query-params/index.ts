import { instanceToPlain, plainToInstance } from 'class-transformer';
import qs from 'qs';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { removeFalsyKeysWithExceptions } from '../../utils';

export function useQueryParams<T>(ModelClass: new () => T, defaultValues?: Partial<T>) {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = useMemo(() => {
        const searchParams = qs.parse(location.search, { ignoreQueryPrefix: true });

        const mergedParams = { ...defaultValues, ...searchParams };

        return plainToInstance(ModelClass, mergedParams, {
            excludeExtraneousValues: true,
        });
    }, [location.search, defaultValues, ModelClass]);

    // Function to update the URL with new query parameters
    const setParams = (newParams: Partial<T>) => {
        const plainParams = instanceToPlain(newParams);

        const cleanedParams = removeFalsyKeysWithExceptions(plainParams);

        const queryString = qs.stringify(cleanedParams, { addQueryPrefix: true, arrayFormat: 'comma' });

        navigate({ search: queryString }, { replace: true });
    };

    return { params: queryParams, setParams };
}
