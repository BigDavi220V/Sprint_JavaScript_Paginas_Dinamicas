//Array storage class




//class Carousel
let carouselArr = [];

class Carousel {
    constructor(image, text, link) {
        this.image = image;
        this.text = text;
        this.link = link;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._arr = arr;
            Carousel.Show(Carousel._sequence); // mostra primeira imagem
            Carousel._interval = setInterval(() => Carousel.Next(), 2000);

            // adiciona eventos dos botões
            document.getElementById("next").addEventListener("click", () => {
                Carousel.Next(true);
            });

            document.getElementById("prev").addEventListener("click", () => {
                Carousel.Prev(true);
            });
        } else {
            throw "ERRO!";
        }
    }

    static Show(index) {
        let item = Carousel._arr[index];

        // atualiza imagem
        let carouselDiv = document.getElementById("carousel");
        carouselDiv.innerHTML = `<a href="${item.link}">
                                    <img src="./img/${item.image}" alt="carousel image">
                                 </a>`;

        // atualiza título
        let titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = `<p>${item.text}</p>`;
    }

    static Next(stopAuto = false) {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Show(Carousel._sequence);

        if (stopAuto) Carousel.ResetInterval();
    }

    static Prev(stopAuto = false) {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Show(Carousel._sequence);

        if (stopAuto) Carousel.ResetInterval();
    }

    static ResetInterval() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(() => Carousel.Next(), 5000);
    }
}