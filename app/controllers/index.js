//<!--Alonso-->
var controls=require('controls');

var menuView=controls.getMenuView();
var mainView=controls.getMainView();


//main view and menu view controllers and information.-----------------------------------------------------------------------------------------
//pulls the information from the 'lib' folder.


var Cloud = require('ti.cloud');
Cloud.debug = true;




// get main and menu view as objects. pulls from the controls.js

//attach event listener to menu button
//goes to the mainView function in the controls.js
//selects the menuButton id from mainview.xml.
//executes the getMenuButton function in the controls.js
//finish this


//create an if statement that only shows all of this bottom code if the success is true
//if it's false, we don't show this and open up a login view.

if(Alloy.Globals.loggedIn == true){

mainView.menuButton.add(controls.getMenuButton({
	h: '60',
	w: '60'
}));

//Minor changes to click event. Update the menuOpen status;
mainView.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget

//Bryan's code

$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});




//$.list.setMarker({sectionIndex:0,itemIndex:100});

var plainTemplate = {
    childTemplates: [ {
        type: "Ti.UI.Label",
        bindId: "area",
        properties: {
            backgroundColor: "white",
            right: "10dp",
            top: "10dp",
            bottom: "12dp",
            left: "75dp",
            borderColor : 'black',
            borderRadius: "5dp",
            separatorColor: "#253640"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
        	height: Ti.UI.FILL,
            width: Ti.UI.FILL,
            color: "#565656",
            font: {
                fontFamily: "Arial",
                fontSize: "18dp"
            },
            left: "120dp",
            top: "20dp"
        },
        separatorColor: "#253640"
    }, {
        type: "Ti.UI.Label",
        bindId: "textDetails",
        properties: {
        	height: Ti.UI.FILL,
            width: Ti.UI.FILL,
            color: "black",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "50dp",
            bottom : "12dp"
        }
    }, {
    	type: "Ti.UI.Label",
    	bindId: "date",
    	properties:{
    	height:"50dp",
    	left: "6dp",
    	width: "60dp",
    	top: "5dp",
    	right: "200dp", 
    	color: "black",
    	borderRadius: "3dp",
    	backgroundColor : "white",
    	separatorColor: "#253640"
    	}
    },
    
     ]
};

var listView = Ti.UI.createListView({
	templates : {
		uncheck : plainTemplate
	},
	
	defaultItemTemplate : "uncheck"
});

var section = Ti.UI.createListSection();
 listView.sections = [ section];
 
 var data = [];
 var sectionViews = [];

var eventList = ['554c492a4fe125098c09187b'];


for ( var i = 0; i < eventList.length; i++) {
Cloud.Events.show({
    event_id: eventList[i]
}, function (e) {
    if (e.success) {
        var event = e.events[0];
		    var moment = require('alloy/moment');
			var day = moment(event.start_time, "YYYY-MM-DD:HH:mm:ssZZ");
			var newDate = day.format("MM-DD");
  
    data.push({
    	        area : {},
            	title : { text: event.name},
            	textDetails: { text: event.details},
            	date: {text: newDate},
    	
 
        
    });
}
     section.setItems(data);
           });
           eventList[i] = Ti.UI.createView();        
           eventList[i].add(listView);
           		}

var scrollableView = Ti.UI.createScrollableView({
  views:eventList,
  showPagingControl:true
});          
  
 sectionView = Ti.UI.createView();
 sectionView.add(scrollableView);
 mainView.mainView.add(sectionView);

//end of mainView and menuView controllers and information----------------------------------------------------------------------------------------------------




// get config view through the contols.js
var projects=controls.getProjectsView();
var calendar=controls.getCalendarView();
var industry=controls.getIndustryView();
var contacts=controls.getContactsView();
var configView=controls.getConfigView();




//settings view and controllers-----------------------------------------------------------------------------------------------------------------------------------

//add menu view to ConfigView exposed by widget
configView.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
configView.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget



configView.logoutBtn.addEventListener('click', logoutBtnClicked);

function logoutBtnClicked()  {
		//override the success variable to equal to false and then open up the index.
		var index = Alloy.createController("index").getView();
		index.open();
  };



//end of the settings view and controller-------------------------------------------------------------------------------------------------------------------



//projects view and controller------------------------------------------------------------------------------------------------------------------------------

//projects view and the menu button!!!
projects.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
projects.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget


//end of project view---------------------------------------------------------------------------------------------------------------------------------------




//calendar view and controller--------------------------------------------------------------------------------------------------------------------------------

//beginning of the calendar view and menu button!!!
calendar.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
calendar.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget


//end of the calendar view-----------------------------------------------------------------------------------------------------------------------------------------



//beginning of the industry view and controller--------------------------------------------------------------------------------------------------------------------
industry.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
industry.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget


//end of the industry view----------------------------------------------------------------------------------------------------------------------------------------





//beginning of the contacts view and controller-------------------------------------------------------------------------------------------------------------------
contacts.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
contacts.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget



var plainTemplate1 = {
    childTemplates: [ {
        type: "Ti.UI.Label",
        bindId: "username",
        properties: {
            backgroundColor: "#00B100",
            width: "260dp",
            top: "11dp",
            bottom: "10dp",
            left: "100dp",
            borderRadius: "5dp",
            separatorColor: "#253640"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "email",
        properties: {
            color: "#565656",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "20dp"
        },
        separatorColor: "#253640"
    }, {
        type: "Ti.UI.Label",
        bindId: "firstname",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "70dp"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "lastname",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "60dp"
        }
    },
    
     ]
};

var listView1 = Ti.UI.createListView({
	templates : {
		uncheck : plainTemplate1
	},
	
	defaultItemTemplate : "uncheck"
});

var section1 = Ti.UI.createListSection();
 listView1.sections = [ section1];
 
 var data1 = [];
 var sectionViews1 = [];

var userList = ['554c490b7eead2291705f43c'];


for ( var i = 0; i < userList.length; i++) {
Cloud.Users.show({
    user_id: userList[i]
}, function (e) {
    if (e.success) {
        var user = e.users[0];
  
    data1.push({
            	username : { text: user.username},
            	email: { text: user.email},
            	firstname : {text: user.first_name},
            	lastname : {text: user.last_name},
    	
 
        
    });
}
     section1.setItems(data1);
           });
           userList[i] = Ti.UI.createView();        
           userList[i].add(listView1);
           		}

var scrollableView1 = Ti.UI.createScrollableView({
  views:userList,
  showPagingControl:true
});          
  
 sectionView1 = Ti.UI.createView();
 sectionView1.add(scrollableView1);
 contacts.mainView.add(sectionView1);
 
 



//end of the contacts view and controller and information--------------------------------------------------------------------------------------------------------


$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});



//variable to controller that open/close slide
var activeView = 1;

// add event listener in this context
menuView.menuTable.addEventListener('click',function(e){
    $.drawermenu.showhidemenu();
    $.drawermenu.menuOpen = false; //update menuOpen status to prevent inconsistency.
    //this is the event listener for the home screen.
    if(e.rowData.id==="row1"){
        if(activeView!=1){
            //These event listeners are removed to expose the home screen/feed screen.
            $.drawermenu.drawermainview.remove(projects.getView());//removes the projects page.
            $.drawermenu.drawermainview.remove(calendar.getView());
            $.drawermenu.drawermainview.remove(industry.getView());
            $.drawermenu.drawermainview.remove(contacts.getView());
            $.drawermenu.drawermainview.remove(configView.getView());//removes the settings page. 
            
            $.drawermenu.drawermainview.add(mainView.getView());          
            activeView = 1;
        } else {
            activeView = 1;
        }
    } 
    //this is the event listener for the projects.
    if(e.rowData.id==="row2"){
        if(activeView!=2){
        	//removes all of the other views from the screen
        	$.drawermenu.drawermainview.remove(calendar.getView());
        	$.drawermenu.drawermainview.remove(industry.getView());
        	$.drawermenu.drawermainview.remove(contacts.getView());
        	$.drawermenu.drawermainview.remove(configView.getView());
        	$.drawermenu.drawermainview.remove(mainView.getView());
            //displays the projects view.
            $.drawermenu.drawermainview.add(projects.getView());
            activeView = 2;
        } else{
            activeView = 2;
        }
    }
    //this is the event listener for the calendar
    if(e.rowData.id==="row3"){
    	if(activeView!=3){
    		//removes all of the other views from the screen
    		$.drawermenu.drawermainview.remove(projects.getView());
    		$.drawermenu.drawermainview.remove(industry.getView());
    		$.drawermenu.drawermainview.remove(contacts.getView());
    		$.drawermenu.drawermainview.remove(configView.getView());
    		$.drawermenu.drawermainview.remove(mainView.getView());
    		//displays the calendar view.
    		$.drawermenu.drawermainview.add(calendar.getView());
    		activeView = 3;
    	} else {
    		activeView = 3;
    	}
    }
    //this is the event listener for the industry
    if (e.rowData.id==="row4"){
    	if (activeView!=4){
    		//removes all of the other views from the screen.
    		$.drawermenu.drawermainview.remove(projects.getView());
    		$.drawermenu.drawermainview.remove(calendar.getView());
    		$.drawermenu.drawermainview.remove(contacts.getView());
    		$.drawermenu.drawermainview.remove(configView.getView());
    		$.drawermenu.drawermainview.remove(mainView.getView());
    		//displays the industry view
    		$.drawermenu.drawermainview.add(industry.getView());
    		activeView = 4;
    	} else {
    		activeView = 4;
    	}
    }
    //this is the event listener for the contacts
    
    if (e.rowData.id==="row5"){
    	if (activeView!=5){
    		//removes all of the other views from the screen.
    		$.drawermenu.drawermainview.remove(projects.getView());
    		$.drawermenu.drawermainview.remove(calendar.getView());
    		$.drawermenu.drawermainview.remove(industry.getView());
    		$.drawermenu.drawermainview.remove(configView.getView());
    		$.drawermenu.drawermainview.remove(mainView.getView());
    		//displays the contacts view.
    		$.drawermenu.drawermainview.add(contacts.getView());
    		activeView = 5;
    	} else {
    		activeView = 5;
    	}
    }
    //this is the event listener for the settings.
    if (e.rowData.id==="row6"){
    	if (activeView!=6){
    		//removes all of the other views from the screen.
    		$.drawermenu.drawermainview.remove(projects.getView());
    		$.drawermenu.drawermainview.remove(calendar.getView());
    		$.drawermenu.drawermainview.remove(industry.getView());
    		$.drawermenu.drawermainview.remove(contacts.getView());
    		$.drawermenu.drawermainview.remove(mainView.getView());
    		//displays the settings view or configView.
    		$.drawermenu.drawermainview.add(configView.getView());
    		activeView = 6;
    	} else {
    		activeView = 6;
    	}
    }
    // on Android the event is received by the label, so watch out!
    Ti.API.info(e.rowData.id); 
});
} else {
	
$.index.open();

var displayLoginView = Alloy.createController("loginview").getView();
displayLoginView.open();

}




//<!--Alonso-->