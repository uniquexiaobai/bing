import React from 'react';
import Link from 'next/link';

const Pagination = ({total, page = 1}) => {
    return (
        <div className="pagination">
            {page && +page > 1 ? (
                <Link href={{pathname: '/', query: {page: +page - 1}}}>
                    <a className="button">上一页</a>
                </Link>
            ) : (
                <a className="button disable">上一页</a>
            )}
            
            <span className="page">{page}/{total}</span>

            <Link href={{pathname: '/', query: {page: +page + 1}}}>
                <a className="button">下一页</a>
            </Link>

            <style jsx>{`
                .pagination {
                    padding: 30px 0;
                    text-align: center;
                    color: rebeccapurple;
                    display: flex;
                    justify-content: center;
                    height: 35px;
                    line-height: 35px;
                }
                .page {
                    margin: 0 20px;
                }
                .button {
                    padding: 0 15px;
                    color: white;
                    background: rebeccapurple;
                    border-radius: 3px;
                }
                .disable {
                    opacity: .5;
                }
            `}</style>
        </div>
    );
};

export default Pagination;
