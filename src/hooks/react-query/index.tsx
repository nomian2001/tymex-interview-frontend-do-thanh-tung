import {
    useQuery as useTanstackQuery,
    QueryClient,
    QueryClientProvider as TanstackQueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: 0,
        },
    },
});

const QueryClientProvider = ({ children }: { children?: React.ReactNode }) => {
    return <TanstackQueryClientProvider client={queryClient}>{children}</TanstackQueryClientProvider>;
};

const useQuery = useTanstackQuery;


export { queryClient,QueryClientProvider, useQuery };
