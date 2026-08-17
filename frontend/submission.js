document.addEventListener('DOMContentLoaded', function () {
        const message =
            document.getElementById(
                "message"
            );
    const form = document.querySelector("#submission");
    form.querySelector('#submitbutton').addEventListener('click', function(s){
        s.preventDefault();
        //alert('Submit the form now?');
        var valid=true;
        var name=form.fullname;
        name.setCustomValidity("");
        var email=form.emailaddress;
        email.setCustomValidity("");
        var title=form.artTitle;
        title.setCustomValidity("");
        var category=form.category;
        category.setCustomValidity("");
        var price=form.price;
        price.setCustomValidity("");
        var description=form.description;
        description.setCustomValidity("");
        if (!name.value.trim()){
            name.setCustomValidity("Please enter your full name");
            valid=false;
            name.reportValidity();
            }
        if(!email.value.trim()||!email.value.includes("@")||!email.value.includes("."))
            {
                email.setCustomValidity("Please enter a valid email address");
                valid=false;
                email.reportValidity();
            }
        if(!title.value.trim())
            {
                title.setCustomValidity("Please enter the title of the Artwork");
                valid=false;
                title.reportValidity();
            }
        if(!category.value.trim())
            {
                category.setCustomValidity("Please enter a category for the Artwork");
                valid=false;
                category.reportValidity();
            }
        if(price.value!=null&&price.value<0)
            {
                price.setCustomValidity("Please enter a valid non-negative price");
                valid=false;
                price.reportValidity();
            }
        if(!description.value.trim())
            {
                description.setCustomValidity("Please enter a description of the Artwork");
                valid=false;
                description.reportValidity();
            }
        if (valid)
            form.submit();
        });
        
});