import React, { useState } from "react";
import AddBlogs from "../AddBlogs/AddBlogs";

const Blogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const blogs = [
    {
      image: "https://via.placeholder.com/600x400",
      title: "Exploring the Mountains",
      description:
        "Join us on an adventure as we explore the breathtaking mountain ranges.",
      author: "John Doe",
      date: "2023-10-01",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "The Wonders of the Ocean",
      description:
        "Dive into the deep blue sea and discover the wonders of marine life.",
      author: "Jane Smith",
      date: "2023-10-05",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "A Journey Through the Forest",
      description:
        "Experience the tranquility and beauty of nature in the forest.",
      author: "Emily Johnson",
      date: "2023-10-10",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Culinary Delights Around the World",
      description:
        "Taste your way through different cultures with these delicious recipes.",
      author: "Michael Brown",
      date: "2023-10-15",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Tech Trends to Watch",
      description:
        "Stay ahead of the curve with the latest trends in technology.",
      author: "Sarah Davis",
      date: "2023-10-20",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "The Art of Photography",
      description:
        "Capture the world through your lens and learn the art of photography.",
      author: "David Wilson",
      date: "2023-10-25",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Mindfulness and Meditation",
      description:
        "Discover the benefits of mindfulness and how to incorporate it into your life.",
      author: "Laura Martinez",
      date: "2023-10-30",
    },
  ];

  return (
    <>
      {isOpen && <AddBlogs setOpen={setIsOpen} />}
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="m-2 bg-blue-500 text-white p-2 rounded"
      >
        Add New
      </button>
      <div className="flex flex-wrap justify-center items-center">
        {blogs.map((elem, index) => {
          return (
            <>
              <div className="m-2 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img
                  className="w-full h-48 object-cover"
                  src={elem.image}
                  alt={elem.title}
                />
                <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2 text-gray-800">
                    {elem.title}
                  </h2>
                  <p className="text-gray-700 text-base mb-4">
                    {elem.description}
                  </p>
                  <h4 className="text-gray-600 text-sm mb-1">{elem.author}</h4>
                  <h5 className="text-gray-500 text-xs">{elem.date}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
