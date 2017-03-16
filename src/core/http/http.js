import $ from 'jquery';

const HTTP = {
	get(host, name) {

		/*
		 * @desc ajax return mainContent HTML data
		*/
	
		const ajax = $.ajax({
			url: host + name,
			dataType: "jsonp",
			data: {
				format: "json-pretty"
			},
			success: (response) => {
				return response;
			}
		});

		return ajax;
	}
};

export default HTTP;
