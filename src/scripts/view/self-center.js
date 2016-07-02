var tplSelf_center = require("../templates/self-center.string");
SPA.defineView("self-center",{
	html:tplSelf_center,

	plugins:["delegated"],

	bindActions:{
		'to-sign':function () {
			SPA.open('sign')
		},
		// 'saoyisao':function (e,data) {
		// 	console.log(wx);
		// 		wx.scanQRCode({
		// 		    needResult: 0,
		// 		    scanType: ["qrCode","barCode"],
		// 		    success: function (res) {
		// 		    var result = res.resultStr;
		// 		}
		// 	});
		// }
	}

})
