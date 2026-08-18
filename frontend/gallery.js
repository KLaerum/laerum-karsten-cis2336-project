document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('search').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const figures = document.querySelectorAll('.gallery figure');
    figures.forEach(fig => {
        const caption = fig.querySelector('figcaption').textContent.toLowerCase();
        const altText = fig.querySelector('img').alt.toLowerCase();

        if (caption.includes(filter)) {
                fig.style.display = "block";
            } else {
                fig.style.display = "none";
            }
    });
    const loadButton =
            document.getElementById("loadButton");

        const artworkContainer =
            document.getElementById(
                "artworkContainer"
            );

        loadButton.addEventListener("click", function () {

                fetch("/api/artworks")

                    .then(function (response) {
                        return response.json();
                    })

                    .then(function (artworks) {

                        artworkContainer.innerHTML = "";

                        artworks.forEach(
                            function (artwork) {

                                const section =
                                    document.createElement(
                                        "section"
                                    );

                                section.innerHTML = `
                                    <h3>
                                        ${artwork.title}
                                    </h3>

                                    <p>
                                        Artist:
                                        ${artwork.artist}
                                    </p>

                                    <p>
                                        Category:
                                        ${artwork.category}
                                    </p>

                                    <p>
                                        Price:
                                        ${
                                            artwork.price === null
                                                ? "Not for Sale"
                                                : "$" + artwork.price
                                        }
                                    </p>
                                `;

                                artworkContainer
                                    .appendChild(section);

                            }
                        );

                    });

            }
        );
});
});