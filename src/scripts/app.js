const data = {
    beach: [
        {
            name: "Mirissa Beach",
            description: "Mirissa is a crescent-shaped beach facing the Indian Ocean, perfect for:Swimming and sunbathing,Water sports like surfing and snorkeling,Whale and dolphin watching,Sunset strolls and relaxation,The town blends natural beauty with seaside cafés, restaurants, and nightlife, making it ideal for families, couples, and backpackers alike,Surfing,Swimming & Sunbathing,Parrot Rock,Coconut Tree Hill,Secret Beach,Food & Nightlife.",
            image: "https://assets.telegraphindia.com/telegraph/2023/Aug/1691497505_cms001.jpg",
            hotel: "Ocean View Hotel",
            email: "oceanview@gmail.com",
            phone: "+94 77 123 4567"
        }
    ],
    historical: [
        {
            name: "Sigiriya",
            description: "Ancient rock fortress and UNESCO heritage site.Sigiriya is one of Sri Lanka’s most famous historical landmarks and a UNESCO World Heritage Site. Located in the Matale District of the Central Province, Sigiriya is an ancient rock fortress rising nearly 200 meters above the surrounding plains. It is renowned for its history, architecture, frescoes, and breathtaking views.Sigiriya, also known as Lion Rock, was built in the 5th century AD by King Kashyapa as a royal palace and fortress. Today, it stands as one of the finest examples of ancient urban planning and engineering in South Asia.Visitors climb the massive rock via stairways, passing ancient gardens, mirror walls, and frescoes before reaching the summit. Major Attractions - Sigiriya Frescoes, Mirror Wall, Lion’s Gate, Water Gardens etc.",
            image: "https://tse2.mm.bing.net/th/id/OIP.BEtFavWDiv7iNvt7g3JTfQHaFR?rs=1&pid=ImgDetMain&o=7&rm=3",
            hotel: "Sigiriya Resort",
            email: "sigresort@gmail.com",
            phone: "+94 66 555 7890"
        }
    ],
    forest: [
        {
            name: "Sinharaja Forest",
            description: "Rainforest with rich biodiversity. A UNESCO World Heritage RainforestSinharaja Forest Reserve is Sri Lanka’s last remaining tropical rainforest and one of the country’s most important natural treasures. Located in the south-west lowland wet zone, Sinharaja is a UNESCO World Heritage Site and a global biodiversity hotspot, famous for its rich wildlife and rare plant species.Covering an area of approximately 11,187 hectares, Sinharaja is a dense evergreen rainforest surrounded by misty hills, rivers, and waterfalls. The name “Sinharaja” means “King of the Lions”, symbolizing its importance and majesty in Sri Lankan heritage.This forest is a paradise for nature lovers, researchers, bird watchers, and eco-tourists. Activities for Visitors - Guided rainforest trekking, Bird watching, Nature photography, Educational eco-tours, Stream and waterfall exploration.",
            image: "https://tse2.mm.bing.net/th/id/OIP.Zcf1ziOzWF4hbK54nKIFbAHaE5?rs=1&pid=ImgDetMain&o=7&rm=3",
            hotel: "Rainforest Lodge",
            email: "rainforest@gmail.com",
            phone: "+94 71 987 6543"
        }
    ]
};

function showCategory(category) {
    const container = document.getElementById("places");
    container.innerHTML = "";

    data[category].forEach(place => {
        container.innerHTML += `
            <div class="place-card">
                <img src="${place.image}">
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