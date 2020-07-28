# cv_project
A prototype using adonis,express,pug

Install adonis.js and paste the below api to routes.js file and start the server.
/*
'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {         
    name: 'Muhammad Hasnain',
    title: "Software Engineer",
    description: "A highly organized and hard-working individual looking for a responsible position to gain practical experience.Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.",
    education:{  degree: ["Bacholar of Software Engineering","Intermediate","Matriculation"],
                 institute:["Militry College of Signals(NUST)","Superior group of colleges(Sargodha)","Govt High School Laskseen"],
                 year:["10/2016 to 07/2020","05/2014 to 08/2016","05/2012 to 06/2014"],
                 gpa:["CGP/Percentage:83%","CGP/Percentage:92%","CGP/Percentage:87%"] },
     
     experience:{
                  designation:["intern","intern"],
                  company:["XFLOW RESEARCH INC.","Pakistan red crescent Society, Sargodha"],
                  year:["08/2019 to 09/2019","08/2017 to 09/2017"],
                  tasks:["Basic liux","networking","virtualization","web development",
                "Reception","visitors orientaion","visitors logs","call handling,stock management"],
     },
     contact:{
                  email:"hasnainfaiz67@gmail.com",
                  mobile:"+923236104289",
                  address:"P/O: Lakseen, Tehsil: Kot-momin, Sargodha",
     },
     skills:["Java","c++","sql","nodejs","Express","data science in R and python",
    "GNS3","openstack","Ubuntu","virtualization"],
    projects:{
                 title:["Hospital management system","Rice sorter"],
                  detail:["This project specifically aims to the total computerization of the Hospital day to day operation. With the total automation of Hospital, the manual dependency is minimized to a large extent. It inherits all the properties of computerizing a system which includes quick response, less processing time, non-diligence, fast recovery, robustness, flexibility, reliability, scalability Modules: Hospital Details, Department Details, Room Type Details, Room Details, Designation Master, Staff Education, Staff Master, Staff Personal Details, Out Patient, Out Patient Consultancy Charge Entry, Consultancy Report, In Patient Master, Patient Admission, Charges Master, Bill Entry and Print",
                "Input material is loaded in the sorter via in-feed hopper. With the help of vibration the material flows along the chute (an inclined plane or horizontal plane with moving belt) to the distribution channels. Then the product gets into the inspection zone, where is checked by the cameras. Cameras, having capture the picture of selected material, are processed with the Personal Computer. Depending on the signals received the computer control system sends the command to open the ejector which blows away the material based on color. The desired product directly flows into the goods product hopper. The rejected is blown off to the discharging hopper. Re-pass option ensuring more accurate sorting of the grain and minimizing losses of the good product"],
                  technology:["JAVAFX / My SQL /Seanbuilder","Python,Opencv,keras"],
    },
    languages:{
                  name:["English","Urdu","Punjabi"],
                  proficiency:["Full professional proficiency   ","Native or Bilingual proficiency","Native or Bilingual proficiency"] 
    },
    interest:["Cricket","Music","Gaming"],

    
    }
})
*/

NOTE: now you just need to modify the api route inside index.js file in express. Specify the route on whice adonis.js is serving api. You can get data from there.












