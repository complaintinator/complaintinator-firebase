function Cards({ instance }) {
  return (
    <div className="md:container md:mx-auto flex justify-center">
      <section className="p-10 w-full md:w-1/2 block bg-gray-700">
        <p className="text-white text-3xl font-bold">{instance.title}</p>
        <p className="text-gray-200 text-lg mt-2">{instance.description}</p>
      </section>
    </div>
  );
}

export default Cards;
