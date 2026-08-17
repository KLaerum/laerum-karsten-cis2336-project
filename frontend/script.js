document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector("#submission");
    form.querySelector('#submitbutton').addEventListener('click', function(s){
        s.preventDefault();
        //alert('Submit the form now?');
        if (form.fullname.value =="")
            alert("Please enter your full name");
        if(form.emailaddress.value ==""||!form.emailaddress.value.includes("@")||!form.emailaddress.value.includes("."))
            alert("Please enter a valid email address");
        if(form.artTitle.value=="")
            alert("Please enter the title of the Artwork");
        if(form.category.value=="")
            alert("Please enter a category for the Artwork");
        if(form.price.value!=null&&form.price.value<0)
            alert("Please enter a valid non-negative price");
        if(form.description.value=="")
            alert("Please enter a description of the Artwork");
        form.submit();
        });
document.querySelector("e1").addEventListener('click', function(){
    
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