import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {format, subDays, differenceInDays} from 'date-fns';
import Pagination from '../components/pagination';

import '../styles/base.css';

const getIdList = (page = 1) => {
    const now = new Date();
    const offset = 30 * (page - 1);
    const formatStr = 'yyyyMMdd';
    const list = Array.from({length: 30}, (_, i) => format(subDays(now, i + offset), formatStr));

    return list;
};

const Home = ({page}) => {
    const baseUrl = 'https://unique-bing.oss-cn-beijing.aliyuncs.com/';
    const totalPage = Math.floor(differenceInDays(new Date(), new Date(2017, 0, 1)) / 30);
    const list = getIdList(page);

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <div className='home'>
                <div className='title'>
                    <h1>必应图片</h1>
                </div>

                <ul>
                    {list.map((id) => (
                        <li key={id}>
                            <Link href={{pathname: '/detail', query: {id}}}>
                                <img src={`${baseUrl}${id}.jpeg!s`} alt={id} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <Pagination total={totalPage} page={page} />

            <style jsx>{`
                .home {
                    margin-bottom: 10px;
                }
                .title {
                    text-align: center;
                    color: white;
                    background: rebeccapurple;
                    padding: 1px;
                }
                li {
                    display: inline-block;
                    width: calc(100% / 3);
                    margin: 0;
                }
                @media only screen and (max-width: 980px) {
                    li {
                        width: 50%;
                    }
                }
                @media only screen and (max-width: 640px) {
                    li {
                        width: 100%;
                    }
                }
                img {
                    width: 100%;
                    vertical-align: middle;
                }
            `}</style>
        </div>
    );
};

Home.getInitialProps = ({query}) => {
    const {page = 1} = query;

    return {page};
};

export default Home;
