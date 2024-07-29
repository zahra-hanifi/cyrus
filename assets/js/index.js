setTimeout(function () {
    $(".loading-container").hide();
}, 2700);
setTimeout(function () {
    $(".landing-content").show();
    AOS.refresh();
}, 2700);

/*$(window).on('load', function(){
    $(".landing-content").hide();
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( ".loading-container" ).fadeOut(function() {
        // fadeOut complete. Remove the loading div
        $( ".loading-container" ).remove(); //makes page more lightweight
        $(".landing-content").show();
        AOS.refresh();
    });
}*/

const navMain = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navMain.classList.add("bg-nav");
    } else {
        navMain.classList.remove("bg-nav");
    }
});

$("#submit_btn").click(function (e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name != "" && email != "" && message != "") {
        const Http = new XMLHttpRequest();
        const url = `https://api.cyruscoin.io/home/sendemailuser?email=${email}&message=${message}&name=${name}`;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            // console.log(Http);
            if (Http.responseText) {
                var name = $("#name").val("");
                var email = $("#email").val("");
                var message = $("#message").val("");
                $("#msg2").css("display", "block");
            }
            else {
                $("#msg3").css("display", "block");
            }
        };
    } else {
        // console.log("nok");
        $("#msg").css("display", "block");
        //$("#msg").setAttribute(display, block);
    }
    e.preventDefault()
});

const links = document.querySelectorAll(".navbar-nav .nav-link");
links.forEach((value) => {
    value.addEventListener("click", (e) => {
        links.forEach((element) => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});
