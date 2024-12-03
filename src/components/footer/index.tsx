import { Divider, Input, theme, Typography, Image } from 'antd';

import { GradientButton } from '../gradient-button';

const { Link, Title } = Typography;

export const Footer = () => {
    const {
        token: { colorBgBase, colorBgContainer },
    } = theme.useToken();

    console.log(colorBgBase, colorBgContainer);

    return (
        <footer className="bg-footer-color pb-[208px] px-8 pt-10 lg:px-40 lg:pt-[60px]">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Footer Navigation */}
                <nav className="flex flex-col mb-8 md:mb-0 w-full md:w-1/3  space-y-[30px]">
                    <Title className="!text-xl font-bold uppercase mb-6 md:text-2xl mb-[30px]">Navigation</Title>
                    <div className="flex space-x-8">
                        <div className="flex flex-col space-y-6">
                            <Link href={'/'} className="text-base">
                                Home
                            </Link>
                            <Link href={'#'} className="text-base">
                                About Us
                            </Link>
                            <Link href={'#'} className="text-base">
                                Our Teams
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <Link href={'/'} className="text-base">
                                Whitepaper
                            </Link>
                            <Link href={'#'} className="text-base">
                                MarketPlace
                            </Link>
                            <Link href={'#'} className="text-base">
                                Roadmap
                            </Link>
                        </div>

                        <div className="flex flex-col space-y-6">
                            <Link href={'/'} className="text-base">
                                FAQs
                            </Link>
                            <Link href={'#'} className="text-base">
                                News
                            </Link>
                            <Link href={'#'} className="text-base">
                                Community
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Footer Contact */}
                <div className="flex flex-col mb-8 md:mb-0 w-full md:w-1/3  space-y-[30px]">
                    <Title className="!text-xl font-bold uppercase mb-6 md:text-2xl  mb-[30px]">Contact Us</Title>
                    <div className="flex items-center mb-4">
                        <Image
                            src="/assets/images/phone-icon.svg"
                            alt="phone contact"
                            width={20}
                            height={20}
                            className="mr-3"
                        />
                        <span className="text-base">012345678910</span>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/assets/images/mail-icon.svg"
                            alt="email contact"
                            width={20}
                            height={20}
                            className="mr-3"
                        />
                        <span className="text-base">Tymex-talent@tyme.com</span>
                    </div>
                </div>

                {/* Footer Subscribe */}
                <div className="flex flex-col w-full md:w-1/3 space-y-[30px]">
                    <Title className="!text-xl font-bold uppercase mb-6 md:text-2xl">
                        {' '}
                        Subscribe to receive our latest update
                    </Title>

                    <div className="flex items-center">
                        <Input placeholder="Your email address" className="w-full mr-2" />
                        <GradientButton isActive>Subcribe</GradientButton>
                    </div>
                </div>
            </div>

            <Divider />

            {/* Copyright Section */}
            <div className="flex flex-col items-center md:flex-row justify-between text-center">
                <div className="mb-4 md:mb-0">©2023 Tyme - Edit. All Rights Reserved.</div>
                <div className="space-x-6">
                    <Link href={'#'} className="text-sm">
                        Security
                    </Link>
                    <Link href={'#'} className="text-sm">
                        Legal
                    </Link>
                    <Link href={'#'} className="text-sm">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
};
