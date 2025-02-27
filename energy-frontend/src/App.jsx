import './App.css';
import styles from './App.module.css'
import ControlPanel from './Components/ControlPanel/ControlPanel';
import InfoPanel from './Components/Info/Info';
import { FactorProvider, useFactor } from './Components/FactorContext/Factor';
import { useState } from 'react';
import windmillimg from './assets/wind-turbin2.png'
import solarfarmimg from './assets/solarimg2.png'
import hydroimg from './assets/hydro2.png'
import biogas from './assets/biogas.png'
import geothermal from './assets/geo2.png'
import batteryStorage from './assets/battery2.png'
import factory from './assets/factory2.png'
import houses from './assets/house2.png'
import streetAndTrafficLight from './assets/tslight2.png'
import Offices from './assets/office2.png'
import gridController from './assets/gridController.png'
import Statistics from './Components/Statistics/Statistics';
import Adviser from './Components/Adviser/Adviser';

function App() {
  return (
    <FactorProvider>
      <MainComponent />
    </FactorProvider>
  );
}

function MainComponent() {
  const {batteryStatus, activewire,bgColor, h, sunMoonPosition ,solar_energy_predicted,wind_energy_predicted,thermal_energy_predicted,biomass_energy_predicted,hydro_energy_predicted,house_energy_predicted,factory_energy_predicted,stl_energy_predicted,office_energy_predicted} = useFactor();
  const [currPanel, setCurrPanel] = useState('none');
  console.log(batteryStatus);
  

  return (
    <div className='app-container' style={{ backgroundColor: bgColor, transition: "background 0.5s ease" }}>
      <h1 className={styles.mainTitle}>Energy Management in Microgrids using ML/DL</h1>
      <div className={styles.overlayContainer}>
        {currPanel === 'ControlPanel' && <ControlPanel close={setCurrPanel} />}
        {currPanel === 'InfoPanel' && <InfoPanel close={setCurrPanel} />}
        {currPanel === 'Statistics' && <Statistics close={setCurrPanel} />}
        {currPanel === 'Adviser' && <Adviser close={setCurrPanel} />}
      </div>
      
      {h >= 6 && h < 18 ? (
        <div className="sun" style={{ left: `${sunMoonPosition}%` }}></div>
      ) : (
        <div className="moon" style={{ left: `${sunMoonPosition}%` }}></div>
      )}

      <div className={styles.floatBar}>
        <div className={styles.floatItem} onClick={()=>{setCurrPanel('Statistics')}}>
          <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/></svg></div>
          <div className={styles.floatText}><p>Statistics</p></div>
        </div>
        <div className={styles.floatItem} onClick={()=>{setCurrPanel('ControlPanel')}}>
          <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z"/></svg></div>
          <div><p>Control Panel</p></div>
        </div>
        <div className={styles.floatItem} onClick={()=>{setCurrPanel('Adviser')}}>
          <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q20 0 40 1.5t40 4.5v81q-20-4-40-5.5t-40-1.5q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32h320v80H160Zm80-80h320-320Zm240-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80ZM720 0v-200h-80v-240h240l-80 160h80L720 0Z"/></svg></div>
          <div><p>Energy Adviser</p></div>
        </div>
        <div className={styles.floatItem} onClick={()=>{setCurrPanel('InfoPanel')}}>
          <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div>
          <div><p>Info</p></div>
        </div>
      </div>
      <svg id="energy-network" width="100%" height="100%">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Pulse Animation for Text */}
          <radialGradient id="textGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#00ff00" stopOpacity="0.8">
              <animate attributeName="stopOpacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#00ff00" stopOpacity="0">
              <animate attributeName="stopOpacity" values="0;0.2;0" dur="2s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
          
          {/* Text animation for power values */}
          <filter id="textPulse" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Power value animation */}
          <animate id="textFade" attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
        </defs>

        <image x="200" y="200" width="200" height="200" xlinkHref={windmillimg} />
        <text x="230" y="380" fontSize="15" fill="gray">Wind Turbines Farm</text>
        <text x="260" y="250" fontSize="15" className="power-text" fill="#00ff00" filter="url(#textPulse)">
          <tspan>{wind_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="390" y1="360" x2="650" y2="680"
          stroke={(activewire[1]==1)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <image x="1000" y="200" width="200" height="200" xlinkHref={solarfarmimg} />
        <text x="1030" y="380" fontSize="15" fill="gray">Solar Energy Farm</text>
        <text x="1060" y="280" fontSize="15" className="power-text" fill="#00ff00" filter="url(#textPulse)">
          <tspan>{solar_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="990" y1="360" x2="750" y2="680"
          stroke={(activewire[0]==1)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <image x="100" y="400" width="200" height="200" xlinkHref={hydroimg} />
        <text x="130" y="580" fontSize="15" fill="gray">Hydro Energy Plant</text>
        <text x="130" y="420" fontSize="15" className="power-text" fill="#00ff00" filter="url(#textPulse)">
          <tspan>{hydro_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="320" y1="560" x2="650" y2="700"
          stroke={(activewire[2]==1)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <image x="1200" y="400" width="200" height="200" xlinkHref={biogas} />
        <text x="1250" y="600" fontSize="15" fill="gray">Biomass Farm</text>
        <text x="1290" y="400" fontSize="15" className="power-text" fill="#00ff00" filter="url(#textPulse)">
          <tspan>{biomass_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="1190" y1="560" x2="750" y2="700"
          stroke={(activewire[3]==1)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <text x="450" y="730" fontSize="15" fill="gray">Main Grid / Geothermal Power Plant</text>

        <image x="600" y="100" width="200" height="200" xlinkHref={geothermal} />
        <text x="590" y="280" fontSize="15" fill="gray">Main Grid / Geothermal Power Plant</text>
        <text x="680" y="120" fontSize="15" className="power-text" fill="#00ff00" filter="url(#textPulse)">
          <tspan>{thermal_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="695" y1="300" x2="690" y2="680"
          stroke={(activewire[4]==1)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <image x="600" y="600" width="200" height="200" xlinkHref={gridController} />
        <image x="1200" y="1200" width="200" height="200" xlinkHref={batteryStorage} />
        <text x="1380" y="1300" fontSize="15" fill="gray">Battery Storage</text>
        <line x1="1260" y1="1260" x2="760" y2="750"
          stroke={(activewire[5]==1)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />
          <line x1="1290" y1="1460" x2="1295" y2="1355"
          stroke={(1 in batteryStatus)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />
          <line x1="1290" y1="1460" x2="120" y2="1455"
          stroke={(1 in batteryStatus)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />
          <line x1="120" y1="1455" x2="125" y2="1000"
          stroke={(batteryStatus[0]==1)?"lime":"gray"} strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />
          <line x1="720" y1="1455" x2="570" y2="1280"
          stroke={(batteryStatus[1]==1)?"lime":"gray"}  strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />
          <line x1="950" y1="1455" x2="945" y2="1380"
          stroke={(batteryStatus[2]==1)?"lime":"gray"}  strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />
          <line x1="1300" y1="1278" x2="1305" y2="980"
          stroke={(batteryStatus[3]==1)?"lime":"gray"}  strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <image x="1200" y="800" width="200" height="200" xlinkHref={factory} />
        <text x="1400" y="900" fontSize="15" fill="gray">Factories</text>
        <text x="1300" y="850" fontSize="15" className="power-text" fill="cyan" filter="url(#textPulse)">
          <tspan>{factory_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="1190" y1="960" x2="800" y2="730"
          stroke="lime" strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <image x="100" y="900" width="200" height="200" xlinkHref={houses} />
        <text x="180" y="1070" fontSize="15" fill="gray">Houses</text>
        <text x="90" y="920" fontSize="15" className="power-text" fill="cyan" filter="url(#textPulse)">
          <tspan>{house_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="190" y1="960" x2="600" y2="750"
          stroke="lime" strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <image x="400" y="1100" width="200" height="200" xlinkHref={streetAndTrafficLight} />
        <text x="420" y="1310" fontSize="15" fill="gray">Street and Traffic Lights</text>
        <text x="240" y="1210" fontSize="15" className="power-text" fill="cyan" filter="url(#textPulse)">
          <tspan>{stl_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="550" y1="1100" x2="660" y2="750"
          stroke="lime" strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />

        <image x="800" y="1200" width="200" height="200" xlinkHref={Offices} />
        <text x="850" y="1400" fontSize="15" fill="gray">Offices</text>
        <text x="690" y="1240" fontSize="15" className="power-text" fill="cyan" filter="url(#textPulse)">
          <tspan>{office_energy_predicted}(kW/h)</tspan>
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="font-size" values="15;16;15" dur="2s" repeatCount="indefinite" />
        </text>
        <line x1="890" y1="1260" x2="700" y2="750"
          stroke="lime" strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)" />
      </svg>
    </div>
  );
}

export default App;