import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from "../redux/toolkit/toolkitSlice"
import { Header } from "../component"
import { wrapper } from "../redux/store/store"

export default function Main({ bake }) {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  return (
    <>
      <Head>
        <title>ZAKON KZ</title>
      </Head>

      <div>
        <Header />
      </div>

    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {

  store.dispatch(increment())

  return {
    props: {
      bake: "SUPS",
      count: store.getState().toolkit.count,
    },
  };
});