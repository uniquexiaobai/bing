import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {format, subDays} from 'date-fns'

const getKeyList = (page = 1) => {
    const now = new Date();
    const offset = 30 * (page - 1);
    const formatStr = 'yyyyMMdd';
    const keyList = Array.from({length: 30}, (_, i) => format(subDays(now, i + offset), formatStr));

    return keyList;
}

const Home = ({page}) => {
    const baseUrl = 'https://unique-bing.oss-cn-beijing.aliyuncs.com/';
    const list = getKeyList(page);

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <div className='home'>
                <h1 className='title'>必应图片</h1>

                <ul>
                    {list.map((key) => (
                        <li key={key}>
                            <Link href={{pathname: '/detail', query: {key}}}>
                                <img src={`${baseUrl}${key}.jpeg!s`} alt={key} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <style global jsx>{`
                body {
                    margin: 0;
                }
            `}</style>
            <style jsx>{`
                .title {
                    text-align: center;
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
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
    )
}

Home.getInitialProps = ({query}) => {
    const {page = 1} = query;

    return {page}
}

export default Home
