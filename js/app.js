var fluidscript = document.createElement("script");
fluidscript.innerHTML = `var bubblesize = window.innerWidth/5.8;
var fontsize = bubblesize/4.5 + "px";
var fm = new FluidMeter();
fm.init({
  targetContainer: document.getElementById("html-meter"),
  fillPercentage: 90,
  options: {
    fontFamily: "dosis",
    drawPercentageSign: true,
    drawBubbles: true,
    size: bubblesize,
    fontSize:fontsize,
    borderWidth: 1,
    backgroundColor: "grey",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "red",
      angularSpeed: 100,
      maxAmplitude: bubblesize/23,
      frequency: 30,
      horizontalSpeed: -150
    },
    backgroundFluidLayer: {
      fillStyle: "grey",
      angularSpeed: 100,
      maxAmplitude: bubblesize/23,
      frequency: 10,
      horizontalSpeed: 250
    }
  }
});
var fm2 = new FluidMeter();
fm2.init({
  targetContainer: document.getElementById("js-meter"),
  fillPercentage: 75,
  options: {
    fontFamily: "dosis",
    drawPercentageSign: true,
    drawBubbles: true,
    size: bubblesize,
    fontSize:fontsize,
    borderWidth: 1,
    backgroundColor: "grey",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#fcd303",
      angularSpeed: 100,
      maxAmplitude: bubblesize/23,
      frequency: 30,
      horizontalSpeed: -150
    },
    backgroundFluidLayer: {
      fillStyle: "grey",
      angularSpeed: 100,
      maxAmplitude: bubblesize/23,
      frequency: 90,
      horizontalSpeed: 250
    }
  }
});

var fm3 = new FluidMeter();
fm3.init({
  targetContainer: document.getElementById("css-meter"),
  fillPercentage: 90,
  options: {
    fontFamily: "dosis",
    drawPercentageSign: true,
    drawBubbles: true,
    size: bubblesize,
    fontSize:fontsize,
    borderWidth: 1,
    backgroundColor: "grey",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "rgb(34,219,255)",
      angularSpeed: 100,
      maxAmplitude: bubblesize/23,
      frequency: 30,
      horizontalSpeed: -150
    },
    backgroundFluidLayer: {
      fillStyle: "grey",
      angularSpeed: 100,
      maxAmplitude: bubblesize/23,
      frequency: 90,
      horizontalSpeed: 250
    }
  }
});

var fm4 = new FluidMeter();
fm4.init({
  targetContainer: document.getElementById("python-meter"),
  fillPercentage: 55,
  options: {
    fontFamily: "dosis",
    drawPercentageSign: true,
    drawBubbles: true,
    size: bubblesize,
    fontSize:fontsize,
    borderWidth: 1,
    backgroundColor: "grey",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "tan",
      angularSpeed: 100,
      maxAmplitude: bubblesize/23,
      frequency: 30,
      horizontalSpeed: -150
    },
    backgroundFluidLayer: {
      fillStyle: "grey",
      angularSpeed: 100,
      maxAmplitude: bubblesize/23,
      frequency: 90,
      horizontalSpeed: 250
    }
  }
});`;

var bodytext = document.createElement("section");
bodytext.innerHTML = `<div id="main">
<div id="content-container">
    <div id="work">
        <h1>My Work</h1>
    </div>
   <div id="skills">
       <h1>My Skills</h1>
       <div id="skills-meter">
           <div id="html-container">
               <div id="html-meter"></div>
               <p>HTML5</p>
           </div>
           <div id="css-container">
               <div id="css-meter"></div>
               <p>CSS3</p>
           </div>
           <div id="js-container">
               <div id="js-meter"></div>
               <p>JavaScript</p>
           </div>
           <div id="python-container">
               <div id="python-meter"></div>
               <p>Python</p>
           </div>
       </div>
       <div id="extra-skills">
       </div>
       </div>
       <div id="contact">
           <h1>Contact </h1>
           <form id="main-form" action="https://formsubmit.co/bajajkeshav111@gmail.com" method="post">
               <input type="text" name="name" id="name" placeholder="Name" required><br>
               <input type="email" name="email" id="email" placeholder="Email" required><br>
               <input type="text" name="subject" id="subject" required placeholder="Subject"><br>
               <textarea name="message" id="message" placeholder="Message" required></textarea><br>
               <button type="submit" id="submit">Submit</button>
               <button type="reset" id="reset">Reset</button>
               <div id="contact-btn">
                   <ul>
                  <li style="padding-right: 4px;"><a href="http://github.com/keshav-bajaj" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a></li>
                  <li style="padding-right: 4px;"><a href="https://www.instagram.com/_keshav.bajaj_/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a></li>
                  <li style="padding-right: 4px;"><a href="https://in.linkedin.com/in/keshav-bajaj-3b7462193" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="mailto:bajajkeshav111@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope"></i></a></li>
                   </ul>
              </div>
           </form>
       </div>
 </div>
<footer id="navbar">
<ul>
   <li class="nav-links"><i class="fa fa-home"></i> <br>  Home</li>
   <li class="nav-links"><i class="fa fa-code"></i><br>  My Skills</li>
   <li class="nav-links"><i class="fa fa-briefcase"></i><br>  My Work</li>
   <li onclick="showcontact()" class="nav-links"><i class="fa fa-mobile"></i><br> Contact</li>
</ul>
</footer>
</div>`;

document.body.appendChild(bodytext);
document.body.appendChild(fluidscript);

const extraskills = [
  "Sass",
  "Gsap",
  "jQuery",
  "Bootstrap",
  "Photoshop",
  "VS Code",
];

for (i = 0; i < extraskills.length; i++) {
  var a = document.createElement("i");
  a.classList.add("fa");
  a.classList.add("fa-check");
  a.innerHTML = extraskills[i];
  document.getElementById("extra-skills").appendChild(a);
}

document.getElementsByClassName("nav-links")[1].onclick = function () {
  document.getElementById("skills").style.display = "block";
  document.getElementById("work").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("home").style.display = "none";
};

document.getElementsByClassName("nav-links")[2].onclick = function () {
  document.getElementById("skills").style.display = "none";
  document.getElementById("work").style.display = "block";
  document.getElementById("contact").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.documentElement.style.overflow = "scroll";
};

function showcontact() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("work").style.display = "none";
  document.getElementById("contact").style.display = "block";
  document.getElementById("home").style.display = "none";
}

function showcontactmodal() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("work").style.display = "none";
  document.getElementById("contact").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("modal").style.display = "none";
}

document.getElementsByClassName("nav-links")[0].onclick = function () {
  document.getElementById("skills").style.display = "none";
  document.getElementById("work").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.documentElement.style.overflow = "hidden";
  window.scrollTo(0, 0);
};
const worklinks = [
  "https://keshav-bajaj.github.io/cryptoWriter/",
  "https://locushealth.github.io/",
  "https://keshav-bajaj.github.io/projects/findthecat/",
  "https://keshav-bajaj.github.io/projects/daysyouhavelived/",
  "https://keshav-bajaj.github.io/projects/colorflipper/",
  "https://keshav-bajaj.github.io/projects/drawingtool/",
];
const workwebname = [
  "cryptoWriter.js",
  "Locus Health Website",
  "Find The Cat",
  "Days You Have Lived",
  "Color Flipper",
  "Drawing Tool",
];
for (i = 0; i < worklinks.length; i++) {
  var x = document.createElement("a");
  x.setAttribute("href", worklinks[i]);
  x.setAttribute("target", "_blank");
  x.setAttribute("rel", "noopener noreferrer");
  var y = document.createElement("div");
  y.classList.add("web-box");
  var z = document.createElement("img");
  if(i==0){
    z.setAttribute("src","./assets/0.gif");
  } else {
    z.setAttribute("src", "./assets/" + i + ".png");
  }
  var b = document.createElement("p");
  b.innerHTML = workwebname[i];
  y.appendChild(z);
  y.appendChild(b);
  x.appendChild(y);
  document.getElementById("work").appendChild(x);
}

function hidemodal() {
  document.getElementById("modal").style.display = "none";
}

function getmodal(time) {
  setTimeout(function () {
    document.getElementById("modal").style.display = "block";
  }, time * 1000);
}

function checklog() {
  setInterval(function () {
    var log = new Date().getTime();
    localStorage.setItem("lastLog", log);
  }, 1);
}

function loadfunc() {
  var now = new Date().getTime();
  var lastlog = localStorage.getItem("lastLog");
  if (lastlog === null || now - lastlog >= 43200000) {
    getmodal(15);
  }
  setTimeout(function () {
    checklog();
  }, 2000);
}
function getage() {
  const birthday = new Date(2005, 4, 13, 5, 30, 00);
  const box = document.getElementById("age");
  setInterval(function () {
    var end = new Date();
    var start = birthday.getTime();
    var distance = end.getTime() - start;
    var years = Math.floor(distance / 31556952000);
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) - years * 365;
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    box.innerHTML = years;
    var fullage =
      years +
      "Years " +
      days +
      "Days " +
      hrs +
      "Hours " +
      mins +
      "Minutes " +
      seconds +
      "Seconds";
    box.setAttribute("title", fullage);
  }, 2000);
}

getage();

setTimeout(() => {
  var divspacer = document.createElement("div");
  divspacer.setAttribute("id", "div-spacer");
  document.getElementById("work").appendChild(divspacer);
}, 1000);