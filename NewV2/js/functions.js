async function loadFileLeft() {
	console.log("image is in loadfile..");
  	var fileInputElement = document.getElementById("select-file-image");
  	console.log(fileInputElement.files[0]);
    renderImage(fileInputElement.files[0], 'test-image-1');
    //showPredBtn();
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
	//document.getElementById("test-image-1").style.marginRight = "25px";
}

function changeDotToGreen() {
    document.getElementById("dot_top").style.backgroundColor = "rgb(137, 255, 110)";
	document.getElementById("dot_topTxt").innerHTML = "&#10004;";
	document.getElementById("dot_topTxt").style.color = "#000";
	document.getElementById("dot_topTxt").style.fontSize = "16px";
	document.getElementById("dot_topTxt").style.lineHeight = "20px";
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
	
	var unroundedL = Math.round( dataL['dr_raw'] * 1000 + Number.EPSILON ) / 1000;
	var unroundedR = Math.round( dataR['dr_raw'] * 1000 + Number.EPSILON ) / 1000;
	
	if ((dataL['dr_raw'] >= 1.371) && (dataR['dr_raw'] >= 1.371)) {
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>Both values (L: " + unroundedL.toString() + "; R: " + unroundedR.toString() + ") are above our threshold of 1.371, the patient wil be <u>referred</u>! </p>";
	} else if ((dataL['dr_raw'] >= 1.371) && (dataR['dr_raw'] <= 1.371)){
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>The value for the left eye (" + unroundedL.toString() + ") is above our threshold of 1.371, the patient wil be <u>referred</u>! </p>";
	} else if ((dataL['dr_raw'] <= 1.371) && (dataR['dr_raw'] >= 1.371)){
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>The value for the right eye (" + unroundedR.toString() + ") is above our threshold of 1.371, the patient wil be <u>referred</u>!</p>";
	} else {
		document.getElementById("fullResult").innerHTML = "<h3>No referable DR detected!</h3><p>Both values (L: " + unroundedL.toString() + "; R: " + unroundedR.toString() + ") are beneath our threshold of 1.371, the patient wil <u>not</u>  be referred for DR!</p>";
	}	
	
	var unroundedLDME = Math.round( dataL['dme_raw'] * 1000 + Number.EPSILON ) / 1000;
	var unroundedRDME = Math.round( dataR['dme_raw'] * 1000 + Number.EPSILON ) / 1000;
	
	if ((dataL['dme_raw'] >= 0.38) && (dataR['dme_raw'] >= 0.381)) {
		document.getElementById("fullResultDME").innerHTML = "<h3>Referable DME detected!</h3><p>Both values (L: " + unroundedLDME.toString() + "; R: " + unroundedRDME.toString() + ") are above our threshold of 0.38, the patient wil be <u>referred</u>! </p>";
	} else if ((dataL['dme_raw'] >= 0.38) && (dataR['dme_raw'] <= 0.38)){
		document.getElementById("fullResultDME").innerHTML = "<h3>Referable DME detected!</h3><p>The value for the left eye (" + unroundedLDME.toString() + ") is above our threshold of 0.38, the patient wil be <u>referred</u>! </p>";
	} else if ((dataL['dme_raw'] <= 0.38) && (dataR['dme_raw'] >= 0.38)){
		document.getElementById("fullResultDME").innerHTML = "<h3>Referable DME detected!</h3><p>The value for the right eye (" + unroundedRDME.toString() + ") is above our threshold of 0.38, the patient wil be <u>referred</u>!</p>";
	} else {
		document.getElementById("fullResultDME").innerHTML = "<h3>No referable DME detected!</h3><p>Both values (L: " + unroundedLDME.toString() + "; R: " + unroundedRDME.toString() + ") are beneath our threshold of 0.38, the patient wil <u>not</u>  be referred for DME!</p>";
	}
}

function showResultL(data) {
    document.getElementById("resultTxt").style.display = "flex";
	document.getElementById("sliderL").style.display = "flex";
	document.getElementById("resetBtn").style.display = "flex";
	var dr_raw = Math.round( data['dr_raw'] * 10 + Number.EPSILON ) / 10;
	document.getElementById("sliderTxtL").innerHTML = dr_raw.toString();
	var pos = dr_raw/4*95;
	document.getElementById("sliderControlL").style.left = pos.toString() + "%";
	var unrounded = Math.round( data['dr_raw'] * 1000 + Number.EPSILON ) / 1000;
	console.log('L:' + unrounded.toString());
	//document.getElementById("fullResult").innerHTML = unrounded.toString();
}

function showResultR(data) {
	document.getElementById("sliderR").style.display = "flex";
	var dr_raw = Math.round( data['dr_raw'] * 10 + Number.EPSILON ) / 10;
	document.getElementById("sliderTxtR").innerHTML = dr_raw.toString();
	var pos = dr_raw/4*95;
	document.getElementById("sliderControlR").style.left = pos.toString() + "%";
	var unrounded = Math.round( data['dr_raw'] * 1000 + Number.EPSILON ) / 1000;
	console.log('L:' + unrounded.toString());
	//document.getElementById("fullResult").innerHTML = unrounded.toString();
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
        'instances': image.src
    }
	
	let _data2 = {
        'instances': image2.src
    }
    	
	let [data1, data2] = await Promise.all([postData(_data), postData(_data2)]);	
	
	if(data1.hasOwnProperty('message')){
		document.getElementById("error1").innerHTML = 'Error left: ' + data1.message;
		document.getElementById("error1").style.display = "block";
	}
	
	if(data2.hasOwnProperty('message')){
		document.getElementById("error2").innerHTML = 'Error right: ' + data2.message;
		document.getElementById("error2").style.display = "block";
	}
		
		
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

function toggle_about() {
	var x = document.getElementById("about");
	if (x.style.display === "none") {
		x.style.display = "block";
		} else {
		x.style.display = "none";
	}
} 

async function postData(data = {}) {
    // Default options are marked with *
    const response = await fetch('https://mona-health.be', {
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