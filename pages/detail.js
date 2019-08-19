import React from 'react'
import Head from 'next/head'

const Detail = ({imageUrl}) => (
    <div>
        <Head>
            <title>Detail</title>
        </Head>

        <img src={imageUrl} alt="" />

        <style global jsx>{`
            body {
                margin: 0;
            }
        `}</style>
        <style jsx>{`
            img {
                width: 100%;
            }
        `}</style>
    </div>
)

Detail.getInitialProps = ({query}) => {
    const imageUrl = `https://unique-bing.oss-cn-beijing.aliyuncs.com/${query.key}.jpeg`;

    return { imageUrl }
}

export default Detail