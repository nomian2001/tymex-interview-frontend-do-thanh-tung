import { FigureWidget } from './figure-widget.component.tsx';

const figures = [
    {
        name: 'ASSASSIN',
        image: {
            src: '/assets/images/banner/assassin.png',
            alt: 'assassin',
        },
        frame: {
            src: '/assets/images/banner/figure-frame.png',
            alt: 'frame',
        },
    },
    {
        name: 'NEON GUY',
        image: {
            src: '/assets/images/banner/neon-guy.png',
            alt: 'neon-guy',
        },
        frame: {
            src: '/assets/images/banner/figure-frame.png',
            alt: 'frame',
        },
    },
    {
        name: 'MAFIA ENGLAND',
        image: {
            src: '/assets/images/banner/mafia-england.png',
            alt: 'mafia-england',
        },
        frame: {
            src: '/assets/images/banner/figure-frame.png',
            alt: 'frame',
        },
    },
    {
        name: 'BASKETBALL GIRL',
        image: {
            src: '/assets/images/banner/basketball-girl.png',
            alt: 'basketball-girl',
        },
        frame: {
            src: '/assets/images/banner/figure-frame.png',
            alt: 'frame',
        },
    },
];

export const Banner = () => {
    return (
        <div className="relative">
            <div className="relative flex my-16">
                <img className="ml-[178px]" src="/assets/images/banner/new-shop-now.svg" alt="" />
                <img src="/assets/images/banner/arrival.svg" alt="" />
            </div>
            <div className="figure-board w-full relative pl-[148px] pt-[94px] pb-8">
                <img className="absolute top-0 left-0 z-0" src="/assets/images/banner/figure-board.svg" alt="" />
                <div className="relative z-0 flex gap-[68px]">
                    {figures.map(figure => (
                        <FigureWidget key={figure.name} image={figure.image} frame={figure.frame} title={figure.name} />
                    ))}
                </div>
            </div>
            <img className="absolute right-0 bottom-0" src="/assets/images/banner/the-dj.svg" alt="" />
        </div>
    );
};
