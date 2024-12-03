import { HeartFilled } from '@ant-design/icons';
import { Image, Button, Card, Typography, Avatar, theme } from 'antd';
import classNames from 'classnames';

import { ProductModel } from '../../models';
import { ENFT_CATEGORY } from '../../types';
import { camelCaseToNormal } from '../../utils';

interface CardNftCoverProps {
    imageSrc: string;
    className?: string;
    style?: React.CSSProperties;
    category: ENFT_CATEGORY;
}

const imageSource: Record<number, string> = {
    0: '/assets/images/card/assassin-card.png',
    1: '/assets/images/card/basketball-girl-card.png',
    2: '/assets/images/card/mafia-england-card.png',
    3: '/assets/images/card/neon-guy-card.png',
};

const CardNftCover: React.FC<CardNftCoverProps> = props => {
    const { imageSrc, className, style, category } = props;
    return (
        <div className={classNames('p-4 !flex justify-center', className)}>
            <figure style={style} className="w-[160px] h-[140px] lg:w-[210px] lg:h-[209px] xl:w-[235px] xl:h-[233px] rounded relative ">
                <div className="text-xs lg:text-sm absolute top-2 left-2 bg-[#313B4580] py-1 px-3 rounded">
                    {camelCaseToNormal(category)}
                </div>
                <img className={'absolute bottom-0'} src={imageSrc} alt="" />
                <Button type="text" icon={<HeartFilled />} className="absolute top-2 right-2" />
            </figure>
        </div>
    );
};

interface CardNftProps {
    containerClassName?: string;
    product: ProductModel;
}

export const CardNft: React.FC<CardNftProps> = props => {
    const { product, containerClassName } = props;

    const {
        token: { colorWhite, colorBgContainer },
    } = theme.useToken();

    const renderCategoryBackground = (category: ProductModel['category']) => {
        const defaultBackground = 'linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)';

        const categoryBackground: { [key in ProductModel['category']]: string } = {
            [ENFT_CATEGORY.EPIC]: 'linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)',
            [ENFT_CATEGORY.LEGENDARY]: 'linear-gradient(90.13deg, #FE955A 0%, #F1DA63 100%)',
            [ENFT_CATEGORY.MYTHIC]: 'linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)',
            [ENFT_CATEGORY.RARE]: 'linear-gradient(90deg, #43A6F6 0%, #5868F3 100%)',
            [ENFT_CATEGORY.UPPER_BODY]: defaultBackground,
            [ENFT_CATEGORY.LOWER_BODY]: defaultBackground,
            [ENFT_CATEGORY.ACCESSORY]: defaultBackground,
            [ENFT_CATEGORY.HAT]: defaultBackground,
            [ENFT_CATEGORY.SHOES]: defaultBackground,
            [ENFT_CATEGORY.ALL]: defaultBackground,
        };
        return categoryBackground[category];
    };

    const renderIconAvatar = (status: ProductModel['author']['onlineStatus']) => {
        switch (status) {
            case 'online': {
                return 'assets/images/card/icon-verify.png';
            }
            default: {
                return 'assets/images/card/icon-verify-red.png';
            }
        }
    };

    return (
        <Card
            className={classNames('custom-card', containerClassName)}
            cover={
                <CardNftCover
                    style={{ background: renderCategoryBackground(product.category) }}
                    imageSrc={imageSource[product.imageId % 4]}
                    category={product.category}
                />
            }
        >
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                    <Typography.Text className="text-sm lg:text-base">{product.title}</Typography.Text>
                    <span className="text-xs lg:text-sm inline-flex items-center">
                        <Image
                            src="assets/images/card/ethereum-logo.svg"
                            alt="Etherium"
                            preview={false}
                            width={8}
                        ></Image>
                        <span className="ml-2">{product.price} ETH</span>
                    </span>
                </div>
                <div className="flex space-x-2 items-center">
                    <div className="relative">
                        <Avatar src={product.author.avatar} style={{ backgroundColor: colorWhite }} />
                        <figure
                            style={{ backgroundColor: colorBgContainer }}
                            className="absolute -bottom-1 -right-1 rounded-full p-[2px]"
                        >
                            <img
                                src={renderIconAvatar(product.author.onlineStatus)}
                                alt={product.author.onlineStatus}
                                width={12}
                            />
                        </figure>
                    </div>
                    <Typography.Text className="text-xs	">{product.author.fullName}</Typography.Text>
                </div>
            </div>
        </Card>
    );
};
