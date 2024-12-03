import { Image } from 'antd';

import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';
import { NftFeeds } from '../features/nft-feeds';

const HomePage = () => {
    return (
        <Layout>
            <Header />
            <Banner />
            <NftFeeds />
            <Image preview={false} className="mt-[54px]" src="/assets/images/frame.svg" alt="" />
            <Footer />
        </Layout>
    );
};

export default HomePage;
