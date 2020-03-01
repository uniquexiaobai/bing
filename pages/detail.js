import React from 'react';
import Head from 'next/head';

const Detail = ({ id }) => {
	const url = `https://unique-bing.oss-cn-beijing.aliyuncs.com/${id}.jpeg`;

	return (
		<div className='detail'>
			<Head>
				<title>Detail</title>
			</Head>

			<img src={url} alt={id} />

			<style jsx>{`
				.detail {
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
				}
				img {
					width: 100%;
					height: 100%;
					vertical-align: middle;
					object-fit: cover;
				}
			`}</style>
		</div>
	);
};

Detail.getInitialProps = ({ query }) => {
	const { id } = query;

	return { id };
};

export default Detail;
