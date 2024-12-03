import { MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Typography, Image, MenuProps } from 'antd';
import React from 'react';

import { GradientButton } from '../gradient-button';

const { Link } = Typography;

const navbar = [
    {
        key: 'home',
        label: <Link href={'/'}>HOME</Link>,
        name: 'HOME',
        path: '/',
    },
    {
        key: 'aboutUs',
        label: <Link href={'#'}>ABOUT US</Link>,
        name: 'ABOUT US',
        path: '#',
    },
    {
        key: 'ourTeam',
        label: <Link href={'#'}>OUR TEAM</Link>,
        name: 'OUR TEAM',
        path: '#',
    },
    {
        key: 'marketplace',
        label: (
            <Link href={'#'}>
                <span className="bg-gradient-button">MARKETPLACE</span> ROADMAP
            </Link>
        ),
        name: 'MARKETPLACE',
        path: '#',
    },
    {
        key: 'whitepaper',
        label: <Link href={'#'}>WHITE PAPER</Link>,
        name: 'WHITEPAPER',
        path: '#',
    },
];

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'English',
    },
    {
        key: '2',
        label: 'Tiếng Việt',
    },
];

export const Header = () => {
    return (
        <header className="h-[84px] relative">
            <div className="w-full h-[84px] bg-footer-color opacity-[0.7]"></div>
            <div className="w-full absolute z-1 top-1/2 translate -translate-y-1/2 flex justify-between px-2 lg:px-40 items-center">
                <Dropdown menu={{ items: navbar }} className="block lg:hidden">
                    <Button type='text' icon={ <MenuUnfoldOutlined />}>
                       
                    </Button>
                </Dropdown>
                <nav className="hidden lg:block space-x-10">
                    {navbar.map(item => (
                        <React.Fragment key={item.key}>{item.label}</React.Fragment>
                    ))}
                </nav>
                <div className="flex items-center space-x-5 lg:space-x-10">
                    <GradientButton type="primary" isActive>Connect Wallet</GradientButton>
                    <Dropdown menu={{ items }}>
                            <Space className='flex items-center'>
                                <Image
                                    src="/assets/images/header/world-icon.svg"
                                    alt="lang"
                                    width={16}
                                    height={16}
                                    preview={false}
                                ></Image>
                                <DownOutlined />
                            </Space>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};
