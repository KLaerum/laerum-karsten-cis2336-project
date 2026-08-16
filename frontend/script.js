document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submit').addEventListener('click', function(s){
        s.preventDefault();
        alert('Submit the form now?');

      //  if (confirm('Submit the form for processing now?')){
           //                document.querySelector('form').submit();
        //}
    
    const form = document.querySelector("#submission");
    form.addEventListener('click' , function(s)
        {
            const name=s.target.fullname.value;
            const email=s.target.emailaddress.value;
            const title=s.target.artTitle.value;
            const category=s.target.category.value;
            const price=s.target.price.value;
            const description=s.target.description.value;
            if(name.trim()==="")
                {   
                    alert("Please enter your full name");
                    console.log("Please enter your full name");
                }
        })
        })
function enlargeImg(figure) {
    figure.style.transform = "scale(1.5)";
    figure.style.transition =
        "transform 0.25s ease";
}
function normal(figure){
    figure.style.transform="scale(1.0)";
    figure.style.transition =
        "transform 0.25s ease";
}
document.getElementById('search').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const figures = document.querySelectorAll('.gallery figure');
    figures.forEach(fig => {
        const caption = fig.querySelector('figcaption').textContent.toLowerCase();
        const altText = fig.querySelector('img').alt.toLowerCase();

        if (caption.includes(filter)) {
            figure.classList.remove("hidden");
        } else {
           figure.classList.add("hidden");
        }
    });
});
function show(fig){
    const extraText = document.getElementById('extraText');
    // Toggle text visibility on click
     fig.addEventListener('click', () => {
        fig.classList.toggle('show-caption');
    });
}
});