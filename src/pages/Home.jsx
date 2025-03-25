import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Welcome to Todo App
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
        Stay organized and boost your productivity with our simple yet powerful
        todo list application. Easily manage your tasks, set priorities, and
        never miss a deadline!
      </p>
    </div>
  );
}

export default Home;
