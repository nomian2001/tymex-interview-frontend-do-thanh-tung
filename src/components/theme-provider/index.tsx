import { App, ConfigProvider, theme } from 'antd';

import { useAppConfigContextStore } from '../../hooks/app-config/context.tsx';

interface IThemeProvider {
    children: React.ReactNode;
}

export const AntdConfigProvider: React.FC<IThemeProvider> = props => {
    const { children } = props;
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const isDarkMode = useAppConfigContextStore(state => state.isDarkMode);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                token: {
                    fontFamily: 'Inter',
                    colorLink: "white",
                    colorLinkHover: "#ccc"
                },
            }}
        >
            <App>{children}</App>
        </ConfigProvider>
    );
};
