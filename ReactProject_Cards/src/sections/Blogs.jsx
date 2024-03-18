import Blog from '../components/Blog'


// const data1 = {
//     author: "John Doe",
//     title: "Data 1",
//     imgSrc: "https://ivkovic.me/themes/pluton/images/Team1.png"
// }
// const data2 = {
//     author: "Johnathan",
//     title: "Data 2",
//     imgSrc: "https://ivkovic.me/themes/pluton/images/Team2.png"
// }
// const data3 = {
//     author: "John Doe 3",
//     title: "Data 3",
//     imgSrc: "https://ivkovic.me/themes/pluton/images/Team3.png"
// }

const blogsData = [
    {
        author: "John Doe",
        title: "Data 1",
        imgSrc: "https://ivkovic.me/themes/pluton/images/Team1.png"
    },
    {
        author: "Johnathan",
        title: "Data 2",
        imgSrc: "https://ivkovic.me/themes/pluton/images/Team2.png"
    },
    {
        author: "John Doe 3",
        title: "Data 3",
        imgSrc: "https://ivkovic.me/themes/pluton/images/Team3.png"
    }
]


function Blogs() {
    return (
        <section className="bg-black text-white text-center p-6 h-screen">
            <h1 className=" text-4xl font-normal mb-3"> Who We Are?</h1>
            <p className="text-amber-500 mb-3">Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
            <hr />
            <div className="flex px-20 mt-16 gap-6">
                {/* <Blog data={data1} />
                <Blog data={data2} />
                <Blog data={data3} /> */}
                {blogsData.map((blog, index) => {
                    return <Blog data={blog} key={index} />
                })}
            </div>
        </section>
    )
}


export default Blogs