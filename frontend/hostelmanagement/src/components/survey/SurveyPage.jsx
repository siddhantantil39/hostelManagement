import styles from "./style.module.css";
import { Component, useState } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";

Survey.StylesManager.applyTheme("modern");

class SurveyPage extends Component {
  constructor() {
    super();
  }

  render() {
    const json = {
      title: "Student Survey Form",
      showProgressBar: "top",
      pages: [
        {
          basicInfo: [
            {
              type: "text",
              name: "name",
              title: "Please Enter your name:",
              placeHolder: "Mario 64",
              isRequired: true,
              autoComplete: "name",
            },
            {
              type: "text",
              name: "USN",
              title: "Please Enter your USN:",
              placeHolder: "1SI18CS064",
              isRequired: true,
              autoComplete: "USN",
            },
            {
              type: "dropdown",
              name: "Branch",
              title: "What is your Branch?",
              isRequired: true,
              colCount: 0,
              hasNone: true,
              choices: [
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
                "IEM",
              ],
            },
            {
              type: "dropdown",
              name: "State",
              title: "What is your State of Origin?",
              isRequired: true,
              colCount: 0,
              hasNone: true,
              choices: [
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
                "Ladakh",
              ],
            },
            {
              type: "dropdown",
              name: "Year",
              title: "What is your Year?",
              isRequired: true,
              colCount: 0,
              hasNone: true,
              choices: ["I", "II", "III", "IV", "Others"],
            },
            {
              name: "bdate",
              type: "text",
              inputType: "date",
              title: "Your Date of Birth :",
              isRequired: true,
              autoComplete: "bdate",
            },
          ],
        },
        {
          Interests: [
            {
              type: "radiogroup",
              name: "Nature",
              title: "Do you find yourslef Introverted or Extroverted?",
              choices: ["Extrovert", "Introvert"],
            },

            {
              type: "radiogroup",
              name: "sports",
              title: "Do you like Sports?",
              choices: ["Yes", "No"],
            },

            {
              type: "radiogroup",
              name: "Nature",
              title: "Do you like Singing, Acting or any Othee form of Art?",
              choices: ["Yes", "No"],
            },
            {
              type: "radiogroup",
              name: "Nature",
              title: "Do you like Reading/Writing?",
              choices: ["Yes", "No"],
            },
            {
              type: "radiogroup",
              name: "Nature",
              title: "Do you usually sleep Early?",
              choices: ["Yes", "No"],
            },
            {
              type: "radiogroup",
              name: "Nature",
              title:
                "Do you like watching Movies or any form of diigtal content in the room often?",
              choices: ["Yes", "No"],
            },
          ],
        },
      ],
    };

    const survey = new Survey.Model(json);

    return <Survey.Survey model={survey} />;
  }
}

export default SurveyPage;
