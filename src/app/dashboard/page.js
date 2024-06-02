//Practice example
import Styles from "@app/app/styles/Page.module.css"
import Header from "@app/app/components/Header"
import React from 'react';
import PropTypes from 'prop-types';
export default function Dashboard (){
return (
  <>
  <Header name= {[12,13]} className={Styles.border}></Header>
  <Header name = "Nuzhat" year= "2021"></Header>
  <p>
    hellp from Dashboard
  </p>
  </>
)
}