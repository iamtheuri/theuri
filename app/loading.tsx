export default function Loading() {
  const cardStyles = "w-full ";
  const imageStyles = "w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-800";
  const titleStyles = "w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-900";
  const descriptionStyles = "w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-900";

  return (
    <section>
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="w-2/3 mx-auto h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-16"></div>

          <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded dark:bg-gray-800 pt-30 py-2"></h1>
          <p className="w-full h-2 mx-auto mt-4 bg-gray-200 rounded sm:w-80 dark:bg-gray-700 py-4 mt-8"></p>
          <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded dark:bg-gray-800 py-5 mt-12"></h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-40 xl:mt-12 gap-8 xl:gap-12">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className={cardStyles}>
              <div className={imageStyles}></div>
              <h1 className={titleStyles}></h1>
              <p className={descriptionStyles}></p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 pt-4 xl:mt-12 xl:gap-12 gap-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className={cardStyles}>
              <div className={imageStyles}></div>
            </div>
          ))}
        </div>
        <div className="w-1/3 mx-auto h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-16 mt-16"></div>
      </div>
    </section>
  );
}