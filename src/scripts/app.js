const data = {
    beach: [
        {
            name: "Mirissa Beach",
            description: "Beautiful beach famous for whale watching.Mirissa is a crescent-shaped beach facing the Indian Ocean, perfect for:Swimming and sunbathing,Water sports like surfing and snorkeling,Whale and dolphin watching,Sunset strolls and relaxation,The town blends natural beauty with seaside cafés, restaurants, and nightlife, making it ideal for families, couples, and backpackers alike,Surfing,Swimming & Sunbathing,Parrot Rock,Coconut Tree Hill,Secret Beach,Food & Nightlife.",
            image: "https://assets.telegraphindia.com/telegraph/2023/Aug/1691497505_cms001.jpg",
            hotel: "Ocean View Hotel",
            email: "oceanview@gmail.com",
            phone: "+94 77 123 4567"
        },
        {
            name: "Unawatuna Beach",
            description: "Golden sandy beach ideal for swimming and snorkeling.Unawatuna Beach is located on the southern coast of Sri Lanka, near the city of Galle.It is famous for its golden sand, clear blue water, and calm atmosphere.The beach is ideal for swimming, snorkeling, and relaxing.Unawatuna is a popular destination for both local and foreign tourists.Located near Galle on Sri Lanka’s southern coast.Famous for its golden sands, calm turquoise waters, and vibrant coral reefs.Popular activities: swimming, snorkeling, diving, and boat trips.Surrounded by small restaurants, cafes, and shops, making it ideal for tourists.Known for its sunsets—a perfect spot for photography.Nearby attractions: Japanese Peace Pagoda, Jungle Beach, and Galle Fort (a UNESCO site).",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2ejqf5316P6sP5FklQ9IdyZNOhestEoIwA&s",
            hotel: "Sunset Bay Hotel",
            email: "sunsetbay@gmail.com",
            phone: "+94 76 222 3344"
        }
    ],

    historical: [
        {
            name: "Sigiriya",
            description: "Ancient rock fortress and UNESCO heritage site.Ancient rock fortress and UNESCO heritage site.Sigiriya is one of Sri Lanka’s most famous historical landmarks and a UNESCO World Heritage Site. Located in the Matale District of the Central Province, Sigiriya is an ancient rock fortress rising nearly 200 meters above the surrounding plains. It is renowned for its history, architecture, frescoes, and breathtaking views.Sigiriya, also known as Lion Rock, was built in the 5th century AD by King Kashyapa as a royal palace and fortress. Today, it stands as one of the finest examples of ancient urban planning and engineering in South Asia.Visitors climb the massive rock via stairways, passing ancient gardens, mirror walls, and frescoes before reaching the summit. Major Attractions - Sigiriya Frescoes, Mirror Wall, Lion’s Gate, Water Gardens etc.",
            image: "https://tse2.mm.bing.net/th/id/OIP.BEtFavWDiv7iNvt7g3JTfQHaFR?rs=1&pid=ImgDetMain&o=7&rm=3",
            hotel: "Sigiriya Resort",
            email: "sigresort@gmail.com",
            phone: "+94 66 555 7890"
        },
        {
            name: "Polonnaruwa",
            description: "Ancient city with well-preserved ruins.Polonnaruwa is an ancient city and a UNESCO World Heritage Site in Sri Lanka.It was once the capital of the country and is known for its well-preserved ruins.Famous attractions include ancient temples, stupas, and the Gal Vihara stone statues.Polonnaruwa represents the rich history and culture of Sri Lanka.Ancient capital of Sri Lanka (11th–13th century).UNESCO World Heritage Site with well-preserved ruins.Key highlights:Gal Vihara – Four giant Buddha statues carved in granite,Parakrama Samudra – Massive ancient reservoir,Royal Palace and Lotus Bath.Offers insight into Sri Lankan history, architecture, and ancient irrigation systems.Easily accessible by bike or tuk-tuk around the archaeological park.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlD2JlOQz52h23sEUl2adEEeMU05NLPjuO3A&s",
            hotel: "Heritage Inn",
            email: "heritageinn@gmail.com",
            phone: "+94 27 333 8899"
        }
    ],

    forest: [
        {
            name: "Sinharaja Forest",
            description: "Rainforest with rich biodiversity.Rainforest with rich biodiversity. A UNESCO World Heritage RainforestSinharaja Forest Reserve is Sri Lanka’s last remaining tropical rainforest and one of the country’s most important natural treasures. Located in the south-west lowland wet zone, Sinharaja is a UNESCO World Heritage Site and a global biodiversity hotspot, famous for its rich wildlife and rare plant species.Covering an area of approximately 11,187 hectares, Sinharaja is a dense evergreen rainforest surrounded by misty hills, rivers, and waterfalls. The name “Sinharaja” means “King of the Lions”, symbolizing its importance and majesty in Sri Lankan heritage.This forest is a paradise for nature lovers, researchers, bird watchers, and eco-tourists. Activities for Visitors - Guided rainforest trekking, Bird watching, Nature photography, Educational eco-tours, Stream and waterfall exploration.",
            image: "https://tse2.mm.bing.net/th/id/OIP.Zcf1ziOzWF4hbK54nKIFbAHaE5?rs=1&pid=ImgDetMain&o=7&rm=3",
            hotel: "Rainforest Lodge",
            email: "rainforest@gmail.com",
            phone: "+94 71 987 6543"
        },
        {
            name: "Udawalawa National Park",
            description: "Famous for elephants and wildlife safaris.Udawalawa National Park is one of the best wildlife parks in Sri Lanka.It is especially famous for its large population of wild elephants.Visitors can enjoy jeep safaris and see animals such as elephants, deer, crocodiles, and many bird species.The park is an important conservation area and a popular eco-tourism destination.Located in southern Sri Lanka, near Rathnapura and Embilipitiya.Famous for its elephant population and wildlife safaris.Other animals: leopards, sloth bears, crocodiles, deer, and various bird species.The Udawalawa reservoir attracts wildlife, making sightings common.Safari tours available in jeeps, usually early morning or late afternoon.Important for wildlife conservation and eco-tourism.",
            image: "https://www.srilankanexpeditions.lk/tour_img/1490159014udawalawe_camp_18.jpg",
            hotel: "Safari Lodge",
            email: "safarilodge@gmail.com",
            phone: "+94 78 444 5566"
        }
    ]
};

function showCategory(category) {
    const container = document.getElementById("places");
    container.innerHTML = "";

    data[category].forEach(place => {
        container.innerHTML += `
            <div class="place-card">
                <img src="${place.image}" alt="${place.name}">
                <div class="content">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                    <h4>Nearby Hotel</h4>
                    <p><b>${place.hotel}</b></p>
                    <p>Email: ${place.email}</p>
                    <p>Phone: ${place.phone}</p>
                </div>
            </div>
        `;
    });
}
