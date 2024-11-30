import { Banner } from '../components/banner';
import { Filter } from '../components/filter';
import { Layout } from '../components/layout';

const HomePage = () => {
    return (
        <Layout>
            <Banner />
            <div className="flex space-x-4">
                <Filter />

                <div className="w-full">
                    <h1>helo</h1>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
