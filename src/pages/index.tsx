import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Loading from "../components/loading";

const Website = dynamic(() => import("../components/website"), {
  ssr: false,
  loading: () => <Loading />,
});

const DarkCtx = dynamic(() => import("../context/darkCtx"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="bg-slate-100 h-screen dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <DarkCtx>
        <Website />
      </DarkCtx>
    </div>
  );
};

export default Home;
