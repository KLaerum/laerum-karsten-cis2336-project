document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('submit').addEventListener('click', function(s){
        s.preventDefault();
        alert('Submit the form now?');
    
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
        });
        });
document.querySelector("e1").addEventListener('click', function(){
    console.log("hello");
    alert("hello");
});
document.getElementById('search').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const figures = document.querySelectorAll('.gallery figure');
    figures.forEach(fig => {
        const caption = fig.querySelector('figcaption').textContent.toLowerCase();
        const altText = fig.querySelector('img').alt.toLowerCase();

        if (caption.includes(filter)) {
            fig.remove("hidden");
        } else {
           fig.add("hidden");
        }
    });
const artworkContainer =
            document.getElementById(
                "artworkContainer"
            );
});
});