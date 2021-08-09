import Head from 'next/head'
import { increment } from "../redux/toolkit/toolkitSlice"
import { wrapper } from "../redux/store/store"

export default function NewsPage({ title }) {
    return (
        <div>
            {title}
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {

    return {
        props: {
            title: store.getState().toolkit.todos[store.getState().toolkit.count],
            count: store.getState().toolkit.todos[0],
        },
    };
});