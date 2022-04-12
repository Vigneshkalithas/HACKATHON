
// CREATE HTML ELEMENTS THOROUGH DOM METHOD IN JAVASCRIPT

 var headDiv =elementcreate("div","headiv");
 var heaDer=elementcreate("header","header");
 var dIv1 = creaTEelement("div","container-fluid");
 var dIv2=creaTEelement("div","row box-center");
 var navBar=creaTEelement("nav","navbar navbar-dark bg-dark");
 var divInsideNavbar=creaTEelement("div","container-fluid");
 var anchorInsideNavbar=createElementWithValues("a","navbar-brand","NATIONAL");
 var formInsideNavbar=creaTEelement("div","d-flex");
 var inputfield=createInput("input","inputBox","form-control me-2","search","Search","Search","inputName");
 var buttonfield=createButton("button","btn btn-warning","submit","Search");





// FUNCTION ARE USED TO CREATE ELEMENTS AND  ALSO REDUCE THE CODE


//THIS FUNCTION CREATE ELEMENT DIV AND SET ID ATTRIBUTE 

function elementcreate(elementName,idname){
    var element = document.createElement(elementName);
    element.setAttribute("id",idname)
    return element;
}

//THIS FUNCTION CREATE ELEMENT AND SET CLASS ATTRIBUTE 

function creaTEelement(element,classname){
    var element = document.createElement(element);
     element.setAttribute("class",classname); 
     return element;
}
//THIS FUNCTION CREATE ELEMENT AND SET CLASS ATTRIBUTE ALSO INNERHTML 

function createElementWithValues(element,classname,Value){
    var element = document.createElement(element);
     element.setAttribute("class",classname); 
     element.innerHTML=Value;
     return element;

}

//THIS FUNCTION CREATE INPUT ELEMENT WITH FULL DETAILS

function createInput(elementName,idValue,classname,attribute1,attribute2,attribute3,value){
    var element = document.createElement(elementName);
    element.setAttribute("id",idValue);
    element.className=classname;
    element.setAttribute("type",attribute1);
    element.setAttribute("placeholder",attribute2);
    element.setAttribute("aria-label",attribute3);
    element.setAttribute("name",value);
    return element;
}

//THIS FUNCTOION USED TO CREATE IMAGE TAG FOR CARD ELEMENT 

function createImg(elementName,classname,source,alterNate){
    var element = document.createElement(elementName);
    element.className=classname;
    element.setAttribute("src",source);
    element.setAttribute("alt",alterNate);
    return element;
}

//THIS FUNCTION IS USED TO CRATE A BUTTON WITH EVENTS

function createButton(elementName,classname,attribute1,Value){
    var element =document.createElement(elementName);
    element.className=classname;
    element.setAttribute("type",attribute1);
    element.innerHTML=Value;
    element.addEventListener('click',viewData);
    return element;

}

// AYNC FUNCTION USED TO AVOID SYUNC OPERATIONS AND FETCH THI API AND FILL

async function viewData(){
       
try{
  const endpointName =document.getElementById("inputBox").value;
  const result = await fetch(`https://api.nationalize.io/?name=${endpointName}`);
  const result1 = await result.json();
  console.log(result1);
    
  //THIS BELOW IS USED TO CAPTALIZE FIRST LETTER
    var capsName = result1.name;
    var finalName = capsName.charAt(0).toUpperCase() + capsName.slice(1);

    // WANT TWO DETAILS SO WE CREATE TWO CARDS USING FOR LOOP

    for(let i=0; i<=1; i++){

    //TO CREATE RESPONSIVE CARD THIS BELOW IS CARD DESIGN 

    var dIv3=creaTEelement("div","col col-lg-6 col-sm-12 col-md-12");
    var dIv4=creaTEelement("div","card text-white card-has-bg click-col");
    dIv4.style.backgroundImage="url('https://source.unsplash.com/600x900/?tech,stree')";
    var dIv5=createImg("img","card-img d-none","https://source.unsplash.com/600x900/?tech,street","BackgroundImage");
    var dIv6=creaTEelement("div","card-img-overlay d-flex flex-column");
    var dIv7=creaTEelement("div","card-body");
    var titleName=createElementWithValues("h4","card-title mt-0",`<a class="text-white" herf="#">Name : ${finalName}</a>`);
    var country=document.createElement("h6").innerHTML= `Country-Id : ${result1.country[i].country_id}`;
    var cardfooter=creaTEelement("div","card-footer");
    var cardinsideFooter=creaTEelement("div","media");
    var cardInside=creaTEelement("div","media-body");
    var probability=createElementWithValues("h6","my-0 text-white d-block",`Probability : ${result1.country[i].probability}`);

    //APPEND THE CARD DESIGN 

    cardInside.append(probability);
    cardinsideFooter.append(cardInside);
    cardfooter.append(cardinsideFooter);
    dIv7.append(titleName,country);
    dIv6.append(dIv7,cardfooter);
    dIv4.append(dIv5,dIv6);
    dIv3.append(dIv4);
    dIv2.append(dIv3);
    

    }
    // APPEND CARD DESIGN IN ROW
    dIv1.append(dIv2);
    

        

}
//ERROR HANDLING STATEMENT
catch(error){
    console.log(error);
}
        





}
// APPEND THE ALL DETAILS TO BODY

formInsideNavbar.append(inputfield,buttonfield);
divInsideNavbar.append(anchorInsideNavbar,formInsideNavbar);
navBar.append(divInsideNavbar);
heaDer.append(navBar);

headDiv.append(heaDer,dIv1);
document.body.append(headDiv);