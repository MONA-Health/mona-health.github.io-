async function loadFileLeft() {
	console.log("image is in loadfile..");
  	var fileInputElement = document.getElementById("select-file-image");
  	console.log(fileInputElement.files[0]);
    renderImage(fileInputElement.files[0], 'test-image-1');
    showPredBtn();
	showImgDiv();
	//hideUploadAndReq();
	//changeDotToGreen();
}

async function loadFileRight() {
	console.log("image is in loadfile..");
	var fileInputElement = document.getElementById("select-file-image-2");
  	console.log(fileInputElement.files[0]);
    renderImage(fileInputElement.files[0], 'test-image-2');
    showPredBtn();
	showImgDiv();
	hideUploadAndReq();
	changeDotToGreen();
}

function changeDotToGreen() {
    document.getElementById("dot_top").style.backgroundColor = "rgb(137, 255, 110)";
	document.getElementById("dot_top").innerHTML = "&#10004;";
}

function showImgDiv() {
    document.getElementById("imgDiv").style.display = "flex";
}

function hideUploadAndReq() {
    document.getElementById("uploadBtn").style.display = "none";
	document.getElementById("reqDiv").style.display = "none";
}

function renderImage(file, id) {
  var reader = new FileReader();
  console.log("image is here..");
  reader.onload = function(event) {
    img_url = event.target.result;
    console.log("image is here2..");
    document.getElementById(id).src = img_url;
  }
  reader.readAsDataURL(file);
}

function showPredBtn() {
    document.getElementById("predBtn").style.display = "flex";
}

function showResults(dataL, dataR) {
	showResultL(dataL);
	showResultR(dataR);
	stopLoad();
	document.getElementById("predBtn").style.display = "none";
}

function showResultL(data) {
    document.getElementById("resultTxt").style.display = "flex";
	document.getElementById("sliderL").style.display = "flex";
	document.getElementById("resetBtn").style.display = "flex";
	var prediction = Math.round( data['prediction'] * 10 + Number.EPSILON ) / 10;
	document.getElementById("sliderTxtL").innerHTML = prediction.toString();
	var pos = prediction/4*95;
	document.getElementById("sliderControlL").style.left = pos.toString() + "%";
	var unrounded = Math.round( data['prediction'] * 10000 + Number.EPSILON ) / 10000;
	console.log('L:' + unrounded.toString());
	document.getElementById("fullResult").innerHTML = unrounded.toString();
}

function showResultR(data) {
	document.getElementById("sliderR").style.display = "flex";
	var prediction = Math.round( data['prediction'] * 10 + Number.EPSILON ) / 10;
	document.getElementById("sliderTxtR").innerHTML = prediction.toString();
	var pos = prediction/4*95;
	document.getElementById("sliderControlR").style.left = pos.toString() + "%";
	var unrounded = Math.round( data['prediction'] * 10000 + Number.EPSILON ) / 10000;
	console.log('L:' + unrounded.toString());
	document.getElementById("fullResult").innerHTML = unrounded.toString();
}

function startLoad() {
	document.getElementById("content").style.display = "none";
	document.getElementById("loader").style.display = "flex";
}

function stopLoad() {
	document.getElementById("content").style.display = "block";
	document.getElementById("loader").style.display = "none";
}

async function predBtn() {
	startLoad();
    let image  = document.getElementById("test-image-1");
	let image2  = document.getElementById("test-image-2");
    //console.log('xxxx')
    //console.log(image)

    let _data = {
        input: [image.src]
    }
	
	let _data2 = {
        input: [image2.src]
    }
    	
	let [data1, data2] = await Promise.all([postData(_data), postData(_data2)]);	
	
	showResults(data1, data2);

//     fetch('https://doynj7ndmjy4ibntttu3zuhcji.apigateway.eu-frankfurt-1.oci.customer-oci.com/demo/pred', {
//             method: "POST",
//             body: JSON.stringify(_data),
//             headers: {"Content-type": "application/json"}
//         })
//         .then(response => response.json())  // convert to json
//         .then(json => console.log(json))    //print data to console
//         .catch(err => console.log('Request Failed', err)); // Catch errors
}

async function postData(data = {}) {
    // Default options are marked with *
    const response = await fetch('https://doynj7ndmjy4ibntttu3zuhcji.apigateway.eu-frankfurt-1.oci.customer-oci.com/demo/pred', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },      
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response.json();
    // console.log(jsonResp)
    // document.getElementById("prediction").innerHTML = "Prediction: " + jsonResp['prediction'].toString() + "</b>";
}