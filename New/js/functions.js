async function loadFile() {
	console.log("image is in loadfile..");
  	var fileInputElement = document.getElementById("select-file-image");
  	console.log(fileInputElement.files[0]);
    renderImage(fileInputElement.files[0]);
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

function renderImage(file) {
  var reader = new FileReader();
  console.log("image is here..");
  reader.onload = function(event) {
    img_url = event.target.result;
    console.log("image is here2..");
    document.getElementById("test-image").src = img_url;
  }
  reader.readAsDataURL(file);
}

function showPredBtn() {
    document.getElementById("predBtn").style.display = "flex";
}

function showResult(data) {
    document.getElementById("resultTxt").style.display = "flex";
	document.getElementById("slider").style.display = "flex";
	var prediction = Math.round( data['prediction'] * 10 + Number.EPSILON ) / 10
	document.getElementById("sliderTxt").innerHTML = prediction.toString();
	var pos = data['prediction']/4*95	
	document.getElementById("sliderControl").style.left = pos.toString() + "%";
	document.getElementById("prediction").innerHTML = "Prediction: " + data['prediction'].toString() + "</b>"
	
}

function predBtn() {
    let image  = document.getElementById("test-image");
    console.log('xxxx')
    console.log(image)

    let _data = {
        input: [image.src]
    }
    	
    postData(_data).then(data => showResult(data))

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