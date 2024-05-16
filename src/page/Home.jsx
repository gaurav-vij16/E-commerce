import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

function Home() {
    const API_URL = "https://fakestoreapi.com/products";

    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(API_URL);
                const responseData = await res.json();
                setPosts(responseData);
            } catch (error) {
                console.error("API call error:", error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <div>
                    {posts.length === 0 ? (
                        <div className="flex justify-center items-center">No data found</div>
                    ) : (
                        <div className="grid grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5">
                            {posts.map((post) => (
                                <ProductCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;
