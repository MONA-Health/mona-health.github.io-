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
	
	var unroundedL = Math.round( dataL['prediction'] * 1000 + Number.EPSILON ) / 1000;
	var unroundedR = Math.round( dataR['prediction'] * 1000 + Number.EPSILON ) / 1000;
	
	if ((dataL['prediction'] >= 1.371) && (dataR['prediction'] >= 1.371)) {
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>Both values (L: " + unroundedL.toString() + "; R: " + unroundedR.toString() + ") are above our threshold of 1.371, the patient wil be <u>referred</u>! </p>";
	} else if ((dataL['prediction'] >= 1.371) && (dataR['prediction'] <= 1.371)){
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>The value for the left eye (" + unroundedL.toString() + ") is above our threshold of 1.371, the patient wil be <u>referred</u>! </p>";
	} else if ((dataL['prediction'] <= 1.371) && (dataR['prediction'] >= 1.371)){
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>The value for the right eye (" + unroundedR.toString() + ") is above our threshold of 1.371, the patient wil be <u>referred</u>!</p>";
	} else {
		document.getElementById("fullResult").innerHTML = "<h3>No referable DR detected!</h3><p>Both values (L: " + unroundedL.toString() + "; R: " + unroundedR.toString() + ") are beneath our threshold of 1.371, the patient wil <u>not</u>  be referred!</p>";
	}	
}

function showResultL(data) {
    document.getElementById("resultTxt").style.display = "flex";
	document.getElementById("sliderL").style.display = "flex";
	document.getElementById("resetBtn").style.display = "flex";
	var prediction = Math.round( data['prediction'] * 10 + Number.EPSILON ) / 10;
	document.getElementById("sliderTxtL").innerHTML = prediction.toString();
	var pos = prediction/4*95;
	document.getElementById("sliderControlL").style.left = pos.toString() + "%";
	var unrounded = Math.round( data['prediction'] * 1000 + Number.EPSILON ) / 1000;
	console.log('L:' + unrounded.toString());
	//document.getElementById("fullResult").innerHTML = unrounded.toString();
}

function showResultR(data) {
	document.getElementById("sliderR").style.display = "flex";
	var prediction = Math.round( data['prediction'] * 10 + Number.EPSILON ) / 10;
	document.getElementById("sliderTxtR").innerHTML = prediction.toString();
	var pos = prediction/4*95;
	document.getElementById("sliderControlR").style.left = pos.toString() + "%";
	var unrounded = Math.round( data['prediction'] * 1000 + Number.EPSILON ) / 1000;
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

async function prime() {
    // Default options are marked with *
    const response = await fetch('https://doynj7ndmjy4ibntttu3zuhcji.apigateway.eu-frankfurt-1.oci.customer-oci.com/demo/pred', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },      
      body: JSON.stringify({input: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAgCAMAAACvkzHFAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZ5QTFRFAAAA5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5C5T5S9S5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5C5R5i9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S5S5C9U5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9U5S9T5S9T5S9T5i5T5S9T5S9T6C5V5y1U5S9T5S9S5S9T5S9T5S9T5S9T5i5U5TBT5S9T5S9T5S9T5S9T5S9T5S9T5i9T5S9T5S9T5S9S5S9T5S9T5TBU5i9T5S9T5S9T5SxP5S9T5S9T5S9T5S9T5S9U5i9S5S5T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5S9T5i9T5i9T5S9T5S9T5C9S5TBS5S9T5S9T5S9S5S5T5S5T5S9T5S9T5S9T5DBT5DBU5S9T5S9T5S9T5S9T5S9T5S9T5TBU5i9T5S9T5S9T5S9T5i5TshOvjwAAAIp0Uk5TAEevwTJFz541G53z/+JNAwhp7u2AD0zk+48LGbP90jNQ8sclQN/rO2f+96z4QVPbnGtLT3Om3AvhdhMfjsgEBKIRIHI0nwoUueUakKgHE9dkF9roHTb2uwNX/H6qLhM6ZsC+lZO6p7iSveM4eucbM/WkBhHTmwkRDx3ecQ8biZZJbaDwQFdEIYUUi9qoewAAAYxJREFUeJyNlGVXAkEUhq8iBg4WqKigYlCKYq2Fgd2YIFjY3d2K/a+FiQ128Xi/7Lx3nj0ztwaAWUKiKokX6uSUVIi1NE06QtqMTCyysnMQ0ulzpUhePoqaoaAwIoqMJqyKS8RIqRlRKyuHikomLFYBsdkRb44qgyCqnQyp0VGXqdZVV+9saGzSMoijxzVz1NHS2kb/anez3zo6o7rLRWW3R3TDHhX19kZVn4OI/gFJpINDxD08EhGjZD02HpOxCS/ZmASYmsarmVlZWud8eMc/D4EgXi3IEIBFkqQlcOOFeVmBWcFps4dgFTNrCggAKdA6FOPvhiKzSaIBklK9IrOF97b/xZCzdv48i9x5V5HZo3emsXsUkH0WO83hQdzrRHJIa3F4JEOOT1gtWE1Pz2KQ8wu+pnxvXF5JkGujqDf4HtPciJBbv7jHhF69u3+gxOOThfpIr4p6Puh9DqmtL69hfno4fsRsSLA4swMQ8DGvZAbf3sVRfJDjpLPMfUqz8RWWvQnfP7K0xn9bfgE3yUjozJrnnAAAAABJRU5ErkJggg=="]}) // body data type must match "Content-Type" header
    });

    return response.json();
    // console.log(jsonResp)
    // document.getElementById("prediction").innerHTML = "Prediction: " + jsonResp['prediction'].toString() + "</b>";
}