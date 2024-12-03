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
            <div className="my-8 lg:my-16 pl-10 lg:pl-[120px]" >
                <img src="assets/images/banner/new-arrival.png" alt="new-arrival" className="w-[180px] lg:w-fit" />
            </div>
            <div className="w-full relative  pb-8 flex items-center">
                <figure className="h-[185px] lg:h-[300px] bg-banner-figure-background w-full">
                    <div className="flex z-0 absolute bottom-1/2 transform translate-y-1/2 -translate-x-[100px]  lg:pl-60 lg:pr-12 w-full">
                        <div className="scale-[0.4] lg:scale-100 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[68px] sm:gap-[68px]">
                            {figures.map(figure => (
                                <FigureWidget
                                    key={figure.name}
                                    image={figure.image}
                                    frame={figure.frame}
                                    title={figure.name}
                                />
                            ))}
                        </div>
                    </div>
                </figure>
                <img
                    className="absolute right-0 bottom-8 w-[180px] lg:w-fit"
                    src="/assets/images/banner/the-dj.svg"
                    alt=""
                />
            </div>
        </div>
    );
};
