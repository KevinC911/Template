function Events() {

    const eventsData = [
        {
            title: "Gragas Wild Rift",
            image: "https://static1-es.millenium.gg/articles/2/34/01/2/@/157793-kda-gragas-article_cover_bd-1.jpg",
            date: "24/07/2024",
            time: "120",
        },
        {
            title: "Marin Kitagawa",
            image: "https://somoskudasai.com/wp-content/uploads/2023/01/portada_sono-bisque-doll-130.jpg",
            date: "24/07/2024",
            time: "120",
        }
    ]
    return(
        <div className="flex flex-row w-screen h-24 font-rubik">
            {eventsData.map((data) => {
                return (
                    <section className="transition duration-400 shadow-lg ml-2 mr-2 rounded-sm flex flex-col p-2 h-fit w-96 items-center bg-gray-200 hover:shadow-blue-200">
                        <img src={data.image}/>
                        <b>{data.title}</b>
                        <h2>{data.date}</h2>
                        <h2>{data.time} min</h2>
                    </section>
                )
            })}
        </div>
    )
}

export default Events