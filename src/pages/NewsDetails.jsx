import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(data, news);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-[92%] mx-auto flex   justify-between gap-5">
                <section className="w-[70%] cols-span-9">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    <div className="card bg-base-100  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div>
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="cols-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;