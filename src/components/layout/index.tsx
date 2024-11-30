import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = props => {
    const { children } = props;
    return (
        <main className="marketplace-app bg-big-background bg-cover bg-no-repeat min-h-screen ">
            <div className="marketplace-app-content max-w-[1920px] mx-auto h-full">{children}</div>
        </main>
    );
};
