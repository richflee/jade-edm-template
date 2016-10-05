var jade = require('jade'),
  	fs = require('fs');

var data = {
  preheader: "",
  title: "A demo EDM using a Jade workflow",
  heroImageUrl: "https://pbs.twimg.com/media/BBwy8OoCUAAEYSW.jpg",
  heroImageTitle: "I'm David Brent!",
  heroImageLinkUrl: "http://www.google.com",
  headingCopy: "Hello everyone!",
  bodyCopy: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  copyright: "Suspendisse potenti. Aenean tempor, tortor lacinia ornare sollicitudin, velit sapien lacinia urna, id accumsan nibh est non magna. Etiam lobortis mollis aliquam. Aliquam erat volutpat. Etiam imperdiet hendrerit tortor, vel suscipit est. Suspendisse congue odio quis erat eleifend finibus.",
}


// jade.renderFile

jade.renderFile('index.jade', data, function(error, html) {

  fs.writeFileSync("html/index.html", html); 
  console.log("The file was saved!");
	
});