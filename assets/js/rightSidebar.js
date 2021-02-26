function vueRightSidebar() {

	var rightSidebar = new Vue({
		el: '#vueRightSidebar',
		data: {
		},
		computed: {
			mySchoolCodes: {
				get: function() { return store.state.mySchoolCodes; },
				set: function(newValue) {
					store.state.mySchoolCodes = newValue;
				}
			},
			mySchoolList: {
				get: function() { return store.state.mySchoolList; },
				set: function(newValue) {
					store.state.mySchoolList = newValue;
				}
			},
			hasImage: function() {
				if (this.school.hasOwnProperty('Image')) {
					if (this.school.Image.length > 0) {
						return true;
					}
				}
				return false;
			},
			currSchoolCode: { 
				get: function() { 
						console.log("That's what I thought!");
						return store.state.currSchool;
				},
				set: function(newValue) {
					store.state.currSchoolCode = newValue;
				}
			},
			currSchoolIndex : function() {
				return store.state.mySchoolCodes.indexOf(data.state.currSchoolCode);
			},
			school: function() {
				// console.log(store.state.currSchoolCode);
				// console.log(store.state.mySchoolCodes);
				return (store.state.mySchoolList[store.state.mySchoolCodes.indexOf(store.state.currSchoolCode)]);
			},
		},
		watch: {
			currSchool: function(newVal, oldVal) {},
		},
		methods: {
			test123: function() {
				alert("testing");
			},
			refreshRightSidebar: function (schoolCode) {
				// console.log("refreshRSB: " + schoolCode);
				this.currSchoolCode = schoolCode;
				return;
// **** add still_waiting code 
				console.log("refreshRightSidebar2");
				var tmp = {"action":"rightsidebar", "id":"'"+schoolcode+"'"};
				self = this;
				$.getJSON("api/school.cfm", tmp,
					function(response) {
						// console.log(response);
						self.school = response.getSchool[0];                       
						self.school.map = '<div class="mapouter" style="margin-top:10px"><div class="gmap_canvas" style="border: thick #bbb solid"><iframe width="340" height="320" id="gmap_canvas" src="https://maps.google.com/maps?q=' + escape(self.school.shortname) + '&t=&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>';
						// $("#sb_map").html('<div class="mapouter" style="margin-top:10px"><div class="gmap_canvas" style="border: thick #bbb solid"><iframe width="340" height="320" id="gmap_canvas" src="https://maps.google.com/maps?q=' + escape(self.school.shortname) + '&t=&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>');
					},
					function(response) {
						// console.log(resp);
						console.log("Fail getCustomFields");
					}
				);
				event.stopPropagation();
			},
		},
		mounted: function() {
			console.log("Right Sidebar component has been mounted!");
			store.dispatch('getMySchoolsList');
		}
	});

	return rightSidebar;
}