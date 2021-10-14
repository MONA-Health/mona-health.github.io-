window.jsPDF = window.jspdf.jsPDF
function btnTest() {
	const doc = new jsPDF({unit: 'px', hotfixes: ["px_scaling"]});
	const bg = "data:image/png;base64,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"
	const scale = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAB8CAQAAABQtVKnAAAAAmJLR0QA/4ePzL8AAA+uSURBVBgZ7cELtF0FYefh39m5eT+FEFFqaC4SUEsCaMqABAmNGAwUW2HaqkjRjrDqslanLboYRDC16nRaFOxYW6VCpdRHHUnUggLyEBRDIUUCSaDImyAJ5EEScrn3N3NX1l0h2Jx9zs3J7LPv+n9fg5a5mPPZYVljCTFiuJjz2WFZYwkxgriY89lhWWMJMYK4mPPZYVljCTGiuJjz2WFZYwkt6qF1MziKHe4lRpIZHMUO9xIjywyOYod7iZFlBkexw73ESDODo9jhXlpWEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbXXw3DM8Txi5DiSIXM8jxhJjmTIHM8jRpIjGTLH84iR5UiGoUHLPIsvExEREf+//EPjLFpUEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbXXw3CsYCkxcszlFHZYwVJiJJnLKeywgqXESDKXU9hhBUuJkWUup7A3eZZDLiNGEM9yyGXEiOJZDrmMGFE8yyGXESOMZznkMlpWEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVXEBEREbVX0LpJDBlPjCSjGDLZ8cRIMpEhE2wQI0nBkMlOJEaW8QyZaEGLGpRwIgtYwNEcwj7stInV3M4NXNdYT9SUs1nI8czlIEYxRB5mJTdxPT9tSNSS43gTCziG1zCdnbawiju4gR80niJqy14WcjyH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"
	const marker = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACgCAMAAADw11iiAAABWVBMVEUAAADbJEnfQGDjOVXmM03qK1XrJ07jK1XkNlHmM1nnMVXoLlHpLFnqNVXgM1LiMVjjL1XiM1fjMFPkL1flLlXjLVXjMlPkMVHkMFXlL1PmLlLnMFLjL1XjLlPlMFTlMFLmLlTlMVPmL1TmL1PmMlXnMVTjMFPkMFXkL1TlLlPlMVXmMFTkL1PkL1XkMVTlMFTlMFXlMFTlL1PmL1TmMVTmMFPkMFTkMFTlMVTlMFTmL1TmMVPlL1TlMVPlMFTmL1TkMVTlMFTlMFTkL1PmMFXmMFTkMFTlMFXlMFTlMFXlMFTlL1XmMFTlMVXlMFTlMFTlMFXlMFTmMVTkMFXlMFTlMFPlMFTmMFPkMFTlMFTlMFPlMFTlMFTmMFTlL1TlMFTlMFTlMFTlMFTlMFTlMFTmMFTlMFTlMFTlMFTlMFTlMFTlMFTlL1TlMFTmMFTlMFTlMFTlMFT///911GOpAAAAcXRSTlMABwgJCgwNEhMUFRYXGBkaGyMlJictLi8wMTI1Njc6Oz1ERkdISUpLTE1OcHFyc3R1gIGCg4SFhoiJjI2Rk5WXmJqbor6/wMHDxMXHyM3Oz9DR0tPY2drc3d7f4OXm5+rr7O3u7/Dx8vP09fb3+Pr7/Ea15Q0AAAABYktHRHI2Dg1YAAACYklEQVR42u3aW1sSURQG4C/QwY4eUjtbkgN2GJBQ7EAJpZZmCZSRhaVWCqLg+v83XaAPKIyCzV7rovX9gfcB9uzZe30ArrHsaHo+v7ZFZ8jWWn4+HRmz0HFuTC9V6Z9TfZ+41onaM/GJPEsu2tMmezH2hzxNKdnXBtuV2CPPszvlP819+I2MZHX8RNaXJGN50+XuDmbJYDIDbu7tdTKaX3dbu6NFMpydcCs3XCHjqYSa3TslYki56dse3CSWbBxbYb5lYkru6FaSJra8anQfEGMalrZ/lRP+Xt/Cpok1Tw7d3j1euHz5AH5BzHlWcwNFbrh0HgAwQeyJAABy/HAGAG6SQIb5n6VaJgEsScCLgFWVgKsWbBLJfURl4Md4LQOn8FYGnsMXGfgzfsjABRRl4G3sy8D7cp9Y7DcWW9VCz/Es51G+MTOIyMCPMCYDB2FVJNyqJXQCWQCQkIDjAK5LwEMAkOV3lwFA4vDj1O5O29xusXZ3wnNu+OnBNfXKLvP9+NLhzXyKF47VZyBfOd28rz59GeeE7cZ5U4rPfXl0sveRy80eKwmubvC46/1NU3KW4+bOSPPcOMQxr7ZbTuiNb52lUOtu4NZPs+7miFsbMmB0bX/od+9/zpnsnU4u28KGds+8fVrH54+XDbyPYr42as0Lsd8ev/eTvW0WuQEn4+H5ygl00l0PTy56MHmrLMSHOm/ru4NOam6lcLb/CBRWZlNOsBte510Dcg+MUVhhhRVWWGGFFVZYYYUVVlhhhRVWWGGFFVZYYYUVVlhhhRVWWGGFFVZYYYUVVlhhhRVW+L+H/wK8AF5quTmRVwAAAABJRU5ErkJggg=="
	const im1 = document.getElementById("test-image-1").src;
	const im2 = document.getElementById("test-image-2").src;

	let img = new Image(bg);
	img.src = im1;
	console.log(img.naturalWidth);

	doc.addImage(bg,'PNG',0,0,793,1123);
	doc.addImage(im1,'JPEG',0,0,50,50);
	doc.addImage(scale,'PNG',100,100,250,31,'scale1');
	var x = 91 + parseFloat(document.getElementById("sliderControlL").style.left)/95.0 * (328-91);
	console.log(document.getElementById("sliderControlL").style.left);
	doc.addImage(marker,'PNG',x,72,30,40,'marker1'); //Min = 91, max = 328
	doc.text("Hello world!", 100, 100);
	doc.save("a4.pdf");
}

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
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>Both values (L: " + unroundedL.toString() + "; R: " + unroundedR.toString() + ") are above our threshold of 1.371, the patient will be <u>referred</u>! </p>";
	} else if ((dataL['dr_raw'] >= 1.371) && (dataR['dr_raw'] <= 1.371)){
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>The value for the left eye (" + unroundedL.toString() + ") is above our threshold of 1.371, the patient will be <u>referred</u>! </p>";
	} else if ((dataL['dr_raw'] <= 1.371) && (dataR['dr_raw'] >= 1.371)){
		document.getElementById("fullResult").innerHTML = "<h3>Referable DR detected!</h3><p>The value for the right eye (" + unroundedR.toString() + ") is above our threshold of 1.371, the patient will be <u>referred</u>!</p>";
	} else {
		document.getElementById("fullResult").innerHTML = "<h3>No referable DR detected!</h3><p>Both values (L: " + unroundedL.toString() + "; R: " + unroundedR.toString() + ") are beneath our threshold of 1.371, the patient will <u>not</u>  be referred for DR!</p>";
	}	
	
	var unroundedLDME = Math.round( dataL['dme_raw'] * 1000 + Number.EPSILON ) / 1000;
	var unroundedRDME = Math.round( dataR['dme_raw'] * 1000 + Number.EPSILON ) / 1000;
	
	if ((dataL['dme_raw'] >= 0.38) && (dataR['dme_raw'] >= 0.381)) {
		document.getElementById("fullResultDME").innerHTML = "<h3>Referable DME detected!</h3><p>Both values (L: " + unroundedLDME.toString() + "; R: " + unroundedRDME.toString() + ") are above our threshold of 0.38, the patient will be <u>referred</u>! </p>";
	} else if ((dataL['dme_raw'] >= 0.38) && (dataR['dme_raw'] <= 0.38)){
		document.getElementById("fullResultDME").innerHTML = "<h3>Referable DME detected!</h3><p>The value for the left eye (" + unroundedLDME.toString() + ") is above our threshold of 0.38, the patient will be <u>referred</u>! </p>";
	} else if ((dataL['dme_raw'] <= 0.38) && (dataR['dme_raw'] >= 0.38)){
		document.getElementById("fullResultDME").innerHTML = "<h3>Referable DME detected!</h3><p>The value for the right eye (" + unroundedRDME.toString() + ") is above our threshold of 0.38, the patient will be <u>referred</u>!</p>";
	} else {
		document.getElementById("fullResultDME").innerHTML = "<h3>No referable DME detected!</h3><p>Both values (L: " + unroundedLDME.toString() + "; R: " + unroundedRDME.toString() + ") are beneath our threshold of 0.38, the patient will <u>not</u>  be referred for DME!</p>";
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