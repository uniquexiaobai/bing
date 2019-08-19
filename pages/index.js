import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = ({ baseUrl, list }) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className='home'>
        <h1 className='title'>必应图片</h1>

        <ul>
            {list.map((key) => (
                <li key={key}>
                    <Link href={{ pathname: '/detail', query: { key } }}>
                        <img loading="lazy" src={`${baseUrl}${key}.jpeg!s`} alt="" />
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

const getKeyList = (year, month) => {
    const len = new Date(year, month, 0).getDate();
    const list = Array.from({length: len}, (val, index) => {
        const y = '' + year;
        const m = (month < 10 ? '0' : '') + month;
        const d = (index + 1 < 10 ? '0' : '') + (index + 1);
        return y + m + d;
    });

    return list;
};

Home.getInitialProps = () => {
    const baseUrl = 'https://unique-bing.oss-cn-beijing.aliyuncs.com/'

    return {
        baseUrl,
        list: getKeyList(2017, 3) 
    }
}

export default Home
