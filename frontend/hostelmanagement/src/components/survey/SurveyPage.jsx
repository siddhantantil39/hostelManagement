import axios from "axios";
import { Component} from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import Navbar from "../navbar/Navbar";

Survey.StylesManager.applyTheme("modern");

//Not in use AnyWhere
// function doOnCurrentPageChanged(survey) {
//     document
//         .getElementById('pageSelector')
//         .value = survey.currentPageNo;
//     document
//         .getElementById('surveyPrev')
//         .style
//         .display = !survey.isFirstPage
//             ? "inline"
//             : "none";
//     document
//         .getElementById('surveyNext')
//         .style
//         .display = !survey.isLastPage
//             ? "inline"
//             : "none";
//     document
//         .getElementById('surveyComplete')
//         .style
//         .display = survey.isLastPage
//             ? "inline"
//             : "none";
//     document
//         .getElementById('surveyProgress')
//         .innerText = "Page " + (
//     survey.currentPageNo + 1) + " of " + survey.visiblePageCount + ".";
//     if (document.getElementById('surveyPageNo')) 
//         document
//             .getElementById('surveyPageNo')
//             .value = survey.currentPageNo;
//     }




class SurveysubPage extends Component{

    render(){


        const json = {
            "title": "Basic Student survey",
            "showProgressBar": "top",
            "pages":[
                {

            "elements": [
              {
               
                  
                      "type" : "text",
                      "name" : "name",
                      "title" : "Please Enter your name:",
                      "placeHolder" : "Mario 64",
                      "isRequired" : true ,
                      "autoComplete" : "name"
                                          },
                  {
                      "type" : "text",
                      "name" : "USN",
                      "title" : "Please Enter your USN:",
                      "placeHolder" : "1SI18CS064",
                      "isRequired" : true ,
                      "autoComplete" : "USN"
                  },
                  {
                      "type": "dropdown",
                      "name": "Branch",
                      "title": "What is your Branch?",
                      "isRequired": true,
                      "colCount": 0,
                      "hasNone": true,
                      "choices": [
                              "CSE",
                              "ISE",
                              "AI and DS",
                              "ECE",
                              "EEE",
                              "CE",
                              "CHE",
                              "ME",
                              "BE",
                              "TE",
                              "EIE",
                              "IEM"
          
                                  ]
                  },
                  {
                      "type": "dropdown",
                      "name": "State",
                      "title": "What is your State of Origin?",
                      "isRequired": true,
                      "colCount": 0,
                      "hasNone": true,
                      "choices": [
                          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chhattisgarh",
          "Goa",
          "Gujarat",
          "Haryana",
          "Himachal Pradesh",
          "Jharkhand",
          "Karnataka",
          "Kerala",
          "Madhya Pradesh",
          "Maharashtra",
          "Manipur",
          "Meghalaya",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Punjab",
          "Rajasthan",
          "Sikkim",
          "Tamil Nadu",
          "Telangana",
          "Tripura",
          "Uttarakhand",
          "Uttar Pradesh",
          "West Bengal",
          "Andaman and Nicobar Islands",
          "Chandigarh",
          "Dadra and Nagar Haveli",
          "Daman and Diu",
          "Delhi",
          "Lakshadweep",
          "Puducherry",
          "Jammu and Kashmir",
          "Ladakh"
                      ]
          },
          {
              "type": "dropdown",
                      "name": "Year",
                      "title": "What is your Year?",
                      "isRequired": true,
                      "colCount": 0,
                      "hasNone": true,
                      "choices": [
                              "I",
                              "II",
                              "III",
                              "IV",
                              "Others"]
                           
          },
          {
              "name": "bdate",
              "type": "text",
              "inputType": "date",
              "title": "Your Date of Birth :",
              "isRequired": true,
              "autoComplete": "bdate"
          }
        ]
    },
    {
        "elements": [
          
                  {
                      "type" : "radiogroup",
                      "name" : "Nature",
                      "title" : "Do you find yourslef Introverted or Extroverted?",
                      "choices" : ["Extrovert", "Introvert"]
                  },
          
                  {
                      "type" : "radiogroup",
                      "name" : "sports",
                      "title" : "Do you like Sports?",
                      "choices" : ["Yes", "No"]
                  },
          
                  {
                      "type" : "radiogroup",
                      "name" : "singing",
                      "title" : "Do you like Singing, Acting or any Othee form of Art?",
                      "choices" : ["Yes", "No"]
                  },
                  {
                      "type" : "radiogroup",
                      "name" : "reading",
                      "title" : "Do you like Reading/Writing?",
                      "choices" : ["Yes", "No"]
                  },
                  {
                      "type" : "radiogroup",
                      "name" : "sleep",
                      "title" : "Do you usually sleep Early?",
                      "choices" : ["Yes", "No"]
                  },
                  {
                      "type" : "radiogroup",
                      "name" : "movies",
                      "title" : "Do you like watching Movies or any form of diigtal content in the room often?",
                      "choices" : ["Yes", "No"]
                  }
            ]
    }
                
            ]
          };
        const survey = new Survey.Model(json);

        survey.onComplete.add(async function (sender) {
          console.log(sender);
          console.log(sender.data);
          const data = {
            usn:sender.data.USN,
          state:sender.data.State,
          branch: sender.data.Branch,
          nature: sender.data.Nature,
          sleepEarly: sender.data.sleep,
          sportslike: sender.data.sports,
          study: sender.data.reading,
          birthdate: sender.data.bdate,
          name:sender.data.name,
          singing: sender.data.singing,
          movies: sender.data.movies,
          year: sender.data.Year
          }

          await SubmitData(data);

        });

        const SubmitData = async (data) => {
          try {
            const url = "http://localhost:8080/api/survey";
            const response = await axios.post(url, data);
            console.log(response.data);
            window.location = "/recommended";
          } catch (error) {
            console.log(error.message);
            alert(error.message);
          }
        };


        return (
            <Survey.Survey
                model={survey}
            />
        );


    }
}



function SurveyPage() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <SurveysubPage/>
        </div>
    </div>
  )
}

export default SurveyPage;

