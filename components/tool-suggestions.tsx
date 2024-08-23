const posts = [
  {
    title: "Need an automated solution for sitemap generation and submission?",
    desc: "Hawk JS automate your sitemap generation and deployment. It submits your sitemaps to major search engines like Bing, Google, Yahoo, Yandex, and more, ensuring your site is always up-to-date.",
    img: "/hawk-js.webp",
    href: "https://github.com/cresteem/Hawk-JS",
  },
  {
    title: "How can Richie.js simplify rich result generation?",
    desc: "Generate rich results from your HTML effortlessly. Fully supported by Google, Richie-JS automates the creation of rich results, eliminating manual work and copy-pasting.",
    img: "/richie-js.webp",
    href: "https://github.com/cresteem/Richie-JS",
  },
  {
    title: "Want to compress web resources effectively?",
    desc: "Compress videos, images, HTML, CSS, JavaScript, and SVG files efficiently with Minomax. This powerful Node.js package enhances your website's performance and reduces load times.",
    img: "/minomax.webp",
    href: "https://github.com/cresteem/Minomax",
  },
  {
    title: "How can Div.js enhance web performance?",
    desc: "Improve web performance by splitting CSS into multiple files tailored for different devices. Div.js minimizes network overhead by delivering device-specific CSS files, ensuring faster load times.",
    img: "/div-js.webp",
    href: "https://github.com/iamspdarsan/Div.js",
  },
];

export default () => {
  return (
    <section className="py-32 px-10" id="seo-tools">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            SEO Tools Suggestions
          </h1>
          <p className="text-gray-600">
            Boost your website's performance with these essential SEO tools.
            From generating rich results to compressing web resources, these
            tools will enhance your SEO strategy and deliver measurable results.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <a href={items.href} target="_blank">
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {items.desc}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
