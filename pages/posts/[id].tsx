import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/common/Layout';
import { getAllPostIds, getPostData } from 'lib/posts';
import Date from '../../components/Date';
import utilStyles from '../../styles/utilStyles.module.scss';

const Post = ({ postData }) => {
    return (
        <Layout home={false}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.id}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
            </article>
        </Layout>
    )
};

export default Post;

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
