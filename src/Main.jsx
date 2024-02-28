import React from 'react'
import img from './asserts/logo.png'
import award from './asserts/1.png'
import pic from './asserts/2.png'
import engine from './asserts/3.png'
import './Main.css'
const Main = () => {
  return (
    <div className='container'>
        <div className="header">
            <img src={img} alt="" />
        </div>
        <div className="body">
            <div className="award">
                <img src={award} alt="" />
            </div>
            <div className="para">
                <div className='flex1' >
                <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as 
                        trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency 
                        Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart 
                        pumps with IoT enabled control panel. </li>
                </ul>
                </div>
                <div className='flex2'>
                    <img src={pic} alt="" />
                </div>
                <div className='flex3'>
                Government of India has awarded the <span>"National Energy Conservation Award 2018" </span>. Mr. G. 
                Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker 
                of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </div>
            </div>
        </div>
        <div className="part">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 
        MILLION UNITS OF POWER FOR THE NATION.
            </div>
        <div className="footer">
            
            <div className="part1">
                <img src={engine} alt="" />
            </div>
            <div className='part2'>
                <p> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <hr />
        <div className='part3'>
            <span className='line'> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</span>
            <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE &
                 DEFENCE METAL & MINING FOOD & 
            </p>
            <p> BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING 
                 AGRICULTURE & RESIDENTIAL</p>
        </div>
       

        </div>
    </div>
    
  )
}

export default Main
