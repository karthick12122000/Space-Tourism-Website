
///////----------------header
var navBar = document.getElementById("navBar");
let logo = document.createElement("img");
logo.src = "./assets/shared/logo.svg";
let hr = document.createElement("hr");
let navContainer = document.createElement("div");
navContainer.classList.add("navContainer");
navContainer.classList.add("navText");
navContainer.innerHTML = ' <ul>   <li class="menu active" id="home"><a href="./index.html"> <span style="font-weight: bold;">00</span> <span>Home</span></a></li>    <li  class="menu" id="destination"><a href="./destination-moon.html"> <span style="font-weight: bold;">01</span> <span>Destination</span></a></li>    <li  class="menu" id="crew"><a href="./crew-commander.html"><span style="font-weight: bold;">02</span> <span>Crew</span></a></li>    <li  class="menu" id="technology"><a href="./technology-vehicle.html"><span style="font-weight: bold;">03</span> <span>Technology</span></a></li>  </ul>';
navBar.appendChild(logo);
navBar.appendChild(hr);
navBar.appendChild(navContainer);



////////////////////------------------mobile header

var hamburger = "./assets/shared/icon-hamburger.svg";
var humb = document.createElement("img");
humb.setAttribute("id", "humb");
humb.src = hamburger
var navCon = document.querySelector(".navContainer");
var closeI = "./assets/shared/icon-close.svg";
var close = document.createElement("img");
close.setAttribute("id", "Close");
close.src = closeI;



if (window.innerWidth < 710) {

    navBar.appendChild(humb);

    navCon.style = "height:" + window.innerHeight + "px; display:none";
    navCon.appendChild(close);
    document.getElementById("humb").addEventListener("click", () => {
        navCon.style = "height:" + window.innerHeight + "px ;display:block";
    })
    document.getElementById("Close").addEventListener("click", () => {
        navCon.style = "height:" + window.innerHeight + "px; display:none";
    })
}

addEventListener("resize", (event) => {

    if (window.innerWidth < 710) {
        navBar.appendChild(humb);

        navCon.style = "height:" + window.innerHeight + "px; display:none";
        navCon.appendChild(close);
        document.getElementById("humb").addEventListener("click", () => {
            navCon.style = "height:" + window.innerHeight + "px ;display:block";
        })
        document.getElementById("Close").addEventListener("click", () => {
            navCon.style = "height:" + window.innerHeight + "px; display:none";
        })


    }
    else {
        navCon.style = "height:96px;display:flex";

        let closeX = document.getElementById("Close");
        let humbX = document.getElementById("humb");
        

        if (closeX != null || humbX != null) {
            navBar.removeChild(humbX);
            navCon.removeChild(closeX);
        }
    }
});
///////////------------ active class
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1);

if (filename.startsWith("index")) {
    document.getElementById("home").classList.add("active");
}
else if (filename.startsWith("destination")) {
    document.getElementById("home").classList.remove("active")

    document.getElementById("destination").classList.add("active");
}
else if (filename.startsWith("technology")) {
    document.getElementById("home").classList.remove("active")
    document.getElementById("technology").classList.add("active");
}
else if (filename.startsWith("crew")) {
    document.getElementById("home").classList.remove("active")
    document.getElementById("crew").classList.add("active");
}

var body = document.querySelector(".container");


/////////////////////////////------------------------destination
var container = document.createElement("div");
container.id = "descontainer";



var subContainer = document.createElement("div");
subContainer.classList.add("subContainer");
var subContainer1 = document.createElement("div");
subContainer1.classList.add("subContainer");

//////////////-----get data.json 
function fetchDataAndPopulateContent() {
    const data = fetch("./data.json").then(response => response.json()).then((data) => {

        // console.log(data);
        ///////////////--------------sub title

        var subTitle = document.getElementsByClassName("subTitle");
        var img = document.createElement("img");
        img.classList.add("destImg");
        var role = document.createElement("P");
        var destTitle = document.createElement("P");
        var description = document.createElement("span");
        description.classList.add("bodyText");
        let hr = document.createElement("hr");
        hr.style = "margin-top:54px;border: 1px solid #383B4B";

        if (filename.startsWith("destination")) {
            ////////////////////////-------------sub menu
            body.appendChild(container);
            var subNavbar = document.createElement("div");
            subNavbar.classList.add("subNav", "navText");
            subNavbar.id = "subNav";
            subNavbar.innerHTML = ' <ul><li class="menu" id="moon"><a href="./destination-moon.html">  <span>MOON</span></a></li><li  class="menu" id="mars"><a href="./destination-mars.html"> <span>MARS</span></a></li><li  class="menu" id="europa"><a href="./destination-europa.html"> <span>EUROPA</span></a></li><li  class="menu" id="titan"><a href="./destination-titan.html"> <span>TITAN</span></a></li>  </ul>';
            subContainer1.appendChild(subNavbar);
            container.appendChild(subContainer1);
            //////////////////////====================



            destTitle.classList.add("h2");
            let destination = data.destinations;
            destTitle.style = "margin-top:37px";
            description.style = "margin-top:14px";

            let distance = "";

            let travel = "";
            if (filename.startsWith("destination-moon")) {
                ///////////------------ Sub active class
                document.getElementById("moon").classList.add("active");
                //////////////---------------content


                img.src = destination[0].images.webp;
                destTitle.innerText = destination[0].name.toUpperCase();
                description.innerText = destination[0].description;
                distance = destination[0].distance;
                travel = destination[0].travel;
            }
            else if (filename.startsWith("destination-mars")) {

                document.getElementById("mars").classList.add("active");
                img.src = destination[1].images.webp;
                destTitle.innerText = destination[1].name.toUpperCase();
                description.innerText = destination[1].description;
                distance = destination[1].distance;
                travel = destination[1].travel;
            }
            else if (filename.startsWith("destination-europa")) {

                document.getElementById("europa").classList.add("active");
                img.src = destination[2].images.webp;
                destTitle.innerText = destination[2].name.toUpperCase();
                description.innerText = destination[2].description;
                distance = destination[2].distance;
                travel = destination[2].travel;
            }
            else if (filename.startsWith("destination-titan")) {

                document.getElementById("titan").classList.add("active");
                img.src = destination[3].images.webp;
                destTitle.innerText = destination[3].name.toUpperCase();
                description.innerText = destination[3].description;
                distance = destination[3].distance;
                travel = destination[3].travel;
            }


            container.appendChild(subContainer);
            container.appendChild(subContainer1);
            subContainer.appendChild(img);
            subContainer1.appendChild(destTitle);

            subContainer1.appendChild(description);
            subContainer1.appendChild(hr);
            subContainer1.innerHTML += "<div id='estimation'><div><p class='subHeading2'>AVG. DISTANCE</p><p class='subHeading1'>" + distance.toUpperCase() + "</p></div><div><p class='subHeading2'>EST. TRAVEL TIME</p><p class='subHeading1'>" + travel.toUpperCase() + "</p></div></div>"
        }
        else if (filename.startsWith("crew")) {
            body.appendChild(container);
            destTitle.classList.add("h3");
            role.classList.add("h4");
            role.style = "margin-top:154px";
            destTitle.style = "margin-top:15px";
            description.style = "margin-top:27px";
            let crew = data.crew;
            var Carousel = '<div class="Carousel"><a href="./crew-commander.html"><span id="commander"></span></a><a href="./crew-specialist.html"><span id="specialist"></span>  </a><a href="./crew-pilot.html"><span id="pilot"></span></a><a href="./crew-engineer.html"><span id="engineer"></span></a></div>';

            let id = "";
            if (filename.startsWith("crew-commander")) {
                img.src = crew[0].images.webp;
                destTitle.innerText = crew[0].name.toUpperCase();
                role.innerText = crew[0].role.toUpperCase();
                description.innerText = crew[0].bio;


                //////////////---------------active
                // document.getElementById("commander").classList.add("active");
                id = "commander";

            }
            else if (filename.startsWith("crew-specialist")) {

                // document.getElementById("specialist").classList.add("active");
                id = "specialist";
                img.src = crew[1].images.webp;
                role.innerText = crew[1].role.toUpperCase();
                destTitle.innerText = crew[1].name.toUpperCase();
                description.innerText = crew[1].bio;

            }
            else if (filename.startsWith("crew-pilot")) {

                // document.getElementById("pilot").classList.add("active");
                id = "pilot";

                img.src = crew[2].images.webp;
                role.innerText = crew[2].role.toUpperCase();
                destTitle.innerText = crew[2].name.toUpperCase();
                description.innerText = crew[2].bio;

            }
            else if (filename.startsWith("crew-engineer")) {
                id = "engineer";


                img.src = crew[3].images.webp;
                role.innerText = crew[3].role.toUpperCase();
                destTitle.innerText = crew[3].name.toUpperCase();
                description.innerText = crew[3].bio;
            }

            container.appendChild(subContainer);
            container.appendChild(subContainer1);
            subContainer1.appendChild(img);
            subContainer.appendChild(role);
            subContainer.appendChild(destTitle);
            subContainer.appendChild(description);
            subContainer.innerHTML += Carousel;

            document.getElementById(id).classList.add("active");


        }
        else if (filename.startsWith("technology")) {
            let technology = data.technology;
            body.appendChild(container);
            destTitle.classList.add("h3");
            role.classList.add("navText");
            destTitle.style = "margin-top:11px";
            description.style = "margin-top:17px";
            description.style = "width:444px";

            var Carousel = '<div class="Carousel" ><a href="./technology-vehicle.html"><div id="vehicle">1</div></a><a href="./technology-spaceport.html"><div id="spaceport">2</div>  </a><a href="./technology-capsule.html"><div id="capsule">3</div></a></div>';

            let id = "";
            role.innerText = "THE TERMINOLOGY…";
            if (filename.startsWith("technology-vehicle")) {

                img.src = technology[0].images.portrait;
                destTitle.innerText = technology[0].name.toUpperCase();
                description.innerText = technology[0].description;


                id = "vehicle";

            }
            else if (filename.startsWith("technology-spaceport")) {


                id = "spaceport";
                img.src = technology[1].images.portrait;

                destTitle.innerText = technology[1].name.toUpperCase();
                description.innerText = technology[1].description;

            }
            else if (filename.startsWith("technology-capsule")) {


                id = "capsule";

                img.src = technology[2].images.portrait;

                destTitle.innerText = technology[2].name.toUpperCase();
                description.innerText = technology[2].description;

            }
            container.innerHTML += Carousel;
            container.appendChild(subContainer);
            container.appendChild(subContainer1);
            subContainer1.appendChild(img);
            subContainer.appendChild(role);
            subContainer.appendChild(destTitle);
            subContainer.appendChild(description);


            document.getElementById(id).classList.add("active");
        }


    }).catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching data:', error);
    });


}
document.addEventListener('DOMContentLoaded', fetchDataAndPopulateContent);
