import { useFactor } from '../FactorContext/Factor';
import styles from './ControlPanel.module.css'


const ControlPanel=({close})=>{
    const {
        num_houses, set_num_houses,
        hour, set_hour,
        avg_power_per_house, set_avg_power_per_house,
        total_power_consumed_household, set_total_power_consumed_household,

        num_factories, set_num_factories,
        avg_power_kwh_factory, set_avg_power_kwh_factory,
        total_power_consumed_factory, set_total_power_consumed_factory,

        num_street_lights, set_num_street_lights,
        num_traffic_lights, set_num_traffic_lights,
        street_light_power_kwh, set_street_light_power_kwh,
        traffic_light_power_kwh, set_traffic_light_power_kwh,
        total_power_consumption_ts_light, set_total_power_consumption_ts_light,

        Wind_Speed, set_Wind_Speed,
        Air_Density, set_Air_Density,
        Turbine_Efficiency_Wind, set_Turbine_Efficiency_Wind,
        Number_of_Turbines_Wind, set_Number_of_Turbines_Wind,
        power_output_manufactured, set_power_output_manufactured,
        total_power_produced_wind, set_total_power_produced_wind,

        water_flow_rate, set_water_flow_rate,
        water_head_m, set_water_head_m,
        Turbine_Efficiency_Water, set_Turbine_Efficiency_Water,
        Number_of_Turbines_Water, set_Number_of_Turbines_Water,
        Energy_Generated_kWh_Water, set_Energy_Generated_kWh_Water,

        Solar_Irradiance, set_Solar_Irradiance,
        Temperature, set_Temperature,
        Cloud_Cover, set_Cloud_Cover,
        Panel_Tilt, set_Panel_Tilt,
        Panel_Efficiency, set_Panel_Efficiency,
        Number_of_Panels, set_Number_of_Panels,
        Panel_Area, set_Panel_Area,
        Energy_Generated_Solar, set_Energy_Generated_Solar,
        wind_direction,Rotor_Diameter,Hub_Height,set_Wind_direction,set_Rotor_Diameter,set_Hub_Height,
        precipitation,humidity,setPrecipitation,setHumidity,
        Biomass_Input_Tons,Calorific_value,Boiler_Efficiency_biomass,Steam_Pressure_biomass,turbine_efficiency_biomass,cooling_efficiency_biomass,
        set_Biomass_Input_Tons,set_calorific_value,set_Boiler_Efficiency_biomass,set_Steam_Pressure_biomass,set_turbine_efficiency_biomass,
        set_cooling_efficiency_biomass,
        Fuel_Input_Energy,Boiler_Efficiency_Thermal,Steam_Pressure_thermal,Steam_Temperature,turbine_efficiency_thermal,cooling_efficiency_thermal,
        set_Fuel_Input_Energy,set_Boiler_Efficiency_Thermal,set_Steam_Pressure_thermal,set_steam_temperature,set_turbine_efficiency_thermal,set_cooling_efficiency_thermal,
        num_offices,avg_power_consumed_per_office,set_num_offices,set_avg_power_consumed_per_office,
        predictBiomassEnergy,predictFactoryEnergy,predictHouseEnergy,predictHydroEnergy,predictOfficeEnergy,predictSolarEnergy,predictThermalEnergy,predictWindEnergy,predictstlEnergy,
        handleUpdate,currBatteryCapacity,setCurrBatteryCapacity
    } = useFactor();

   
    return (
        <div className={styles.mainBody}>
            <div className={styles.header}>
                <div><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z"/></svg></div>
                <div><p>Control Panel</p></div>
            </div>
            <div className={styles.subBody}>
            <form className={styles.formstyle}>
                    <div><p>Biomass Energy Factors</p></div>
                    
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
                            <label>Biomass Input(ton):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Biomass_Input_Tons} onChange={(e)=>{set_Biomass_Input_Tons(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                            <label>Calorific Value(MJ/Kg):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Calorific_value} onChange={(e)=>{set_calorific_value(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                            <label>Boiler Efficiency:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Boiler_Efficiency_biomass} onChange={(e)=>{set_Boiler_Efficiency_biomass(e.target.value)}}/>
                        </div>
                    </div>
                    
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-400v-80h640v80H160Zm0-120v-80h640v80H160ZM440-80v-128l-64 64-56-56 160-160 160 160-56 56-64-62v126h-80Zm40-560L320-800l56-56 64 64v-128h80v128l64-64 56 56-160 160Z"/></svg>
                            <label>Steam Presure (MPa):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Steam_Pressure_biomass} onChange={(e)=>{set_Steam_Pressure_biomass(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                            <label>Turbine Efficiency:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={turbine_efficiency_biomass} onChange={(e)=>{set_turbine_efficiency_biomass(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-246 337-145q-11 11-27.5 11T282-146q-12-11-12-27.5t12-28.5l158-158v-80h-80L201-281q-11 11-27.5 11T145-282q-11-11-11-27.5t11-27.5l101-103H119q-17 0-28-11.5T80-480q0-17 11.5-28.5T120-520h126L145-622q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l158 158h80v-80L281-758q-11-11-11-27.5t12-28.5q11-11 27.5-11t27.5 11l103 100v-126q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v126l102-100q11-11 27.5-11t28.5 11q11 12 11 28.5T678-758L520-600v80h80l158-158q11-11 27.5-11t28.5 12q11 11 11 27.5T814-622L714-520h126q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H714l100 103q11 11 11 27.5T814-282q-12 12-28.5 12T758-282L600-440h-80v80l158 159q11 11 11 27.5T677-145q-11 11-27.5 11T622-145L520-246v127q0 17-11.5 28T480-80q-17 0-28.5-11.5T440-120v-126Z"/></svg>
                            <label>Cooling Efficiency:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={cooling_efficiency_biomass} onChange={(e)=>{set_cooling_efficiency_biomass(e.target.value)}}/>
                        </div>
                    </div>
                </form>
                <form className={styles.formstyle}>
                    <div><p>Thermal Energy Factors</p></div>
                    
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
                            <label>Fuel Input Energy (GJ):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Fuel_Input_Energy} onChange={(e)=>{set_Fuel_Input_Energy(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                            <label>Boiler Efficiency:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Boiler_Efficiency_Thermal} onChange={(e)=>{set_Boiler_Efficiency_Thermal(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-400v-80h640v80H160Zm0-120v-80h640v80H160ZM440-80v-128l-64 64-56-56 160-160 160 160-56 56-64-62v126h-80Zm40-560L320-800l56-56 64 64v-128h80v128l64-64 56 56-160 160Z"/></svg>
                            <label>Steam Pressure (MPa):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Steam_Pressure_thermal} onChange={(e)=>{set_Steam_Pressure_thermal(e.target.value)}}/>
                        </div>
                    </div>
                    
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z"/></svg>
                            <label>Steam Temperature (<sup>o</sup>C):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Steam_Temperature} onChange={(e)=>{set_steam_temperature(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                            <label>Turbine Efficiency:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={turbine_efficiency_thermal} onChange={(e)=>{set_turbine_efficiency_thermal(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-246 337-145q-11 11-27.5 11T282-146q-12-11-12-27.5t12-28.5l158-158v-80h-80L201-281q-11 11-27.5 11T145-282q-11-11-11-27.5t11-27.5l101-103H119q-17 0-28-11.5T80-480q0-17 11.5-28.5T120-520h126L145-622q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l158 158h80v-80L281-758q-11-11-11-27.5t12-28.5q11-11 27.5-11t27.5 11l103 100v-126q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v126l102-100q11-11 27.5-11t28.5 11q11 12 11 28.5T678-758L520-600v80h80l158-158q11-11 27.5-11t28.5 12q11 11 11 27.5T814-622L714-520h126q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H714l100 103q11 11 11 27.5T814-282q-12 12-28.5 12T758-282L600-440h-80v80l158 159q11 11 11 27.5T677-145q-11 11-27.5 11T622-145L520-246v127q0 17-11.5 28T480-80q-17 0-28.5-11.5T440-120v-126Z"/></svg>
                            <label>Cooling Efficiency:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={cooling_efficiency_thermal} onChange={(e)=>{set_cooling_efficiency_thermal(e.target.value)}}/>
                        </div>
                    </div>
                </form>
                <form className={styles.formstyle}>
                    <div><p>Hydro Energy Factors</p></div>
                    
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M80-146v-78q29 0 49.5-9t41.5-19.5q21-10.5 46.5-19T280-280q38 0 62.5 8.5t45.5 19q21 10.5 42 19.5t50 9q29 0 50-9t42-19.5q21-10.5 46-19t62-8.5q38 0 63 8.5t46 19q21 10.5 42 19.5t49 9v78q-38 0-63.5-9T770-174.5q-21-10.5-41-19t-49-8.5q-28 0-48.5 8.5t-41 19Q570-164 544.5-155t-64.5 9q-39 0-64.5-9t-46-19.5Q349-185 329-193.5t-49-8.5q-28 0-48.5 8.5t-41.5 19Q169-164 143.5-155T80-146Zm0-178v-78q29 0 49.5-9t41.5-19.5q21-10.5 46.5-19T280-458q38 0 62.5 8.5t45.5 19q21 10.5 42 19.5t50 9q29 0 50-9t42-19.5q21-10.5 46-19t62-8.5q38 0 63 8.5t46 19q21 10.5 42 19.5t49 9v78q-38 0-63.5-9T770-352.5q-21-10.5-41-19t-49-8.5q-29 0-49.5 8.5t-41 19Q569-342 544-333t-64 9q-39 0-64.5-9t-46-19.5Q349-363 329-371.5t-49-8.5q-28 0-48.5 8.5t-41.5 19Q169-342 143.5-333T80-324Zm0-178v-78q29 0 49.5-9t41.5-19.5q21-10.5 46.5-19T280-636q38 0 62.5 8.5t45.5 19q21 10.5 42 19.5t50 9q29 0 50-9t42-19.5q21-10.5 46-19t62-8.5q38 0 63 8.5t46 19q21 10.5 42 19.5t49 9v78q-38 0-63.5-9T770-530.5q-21-10.5-41-19t-49-8.5q-28 0-48.5 8.5t-41 19Q570-520 544.5-511t-64.5 9q-39 0-64.5-9t-46-19.5Q349-541 329-549.5t-49-8.5q-28 0-48.5 8.5t-41.5 19Q169-520 143.5-511T80-502Zm0-178v-78q29 0 49.5-9t41.5-19.5q21-10.5 46.5-19T280-814q38 0 62.5 8.5t45.5 19q21 10.5 42 19.5t50 9q29 0 50-9t42-19.5q21-10.5 46-19t62-8.5q38 0 63 8.5t46 19q21 10.5 42 19.5t49 9v78q-38 0-63.5-9T770-708.5q-21-10.5-41-19t-49-8.5q-28 0-48.5 8.5t-41 19Q570-698 544.5-689t-64.5 9q-39 0-64.5-9t-46-19.5Q349-719 329-727.5t-49-8.5q-28 0-48.5 8.5t-41.5 19Q169-698 143.5-689T80-680Z"/></svg>
                            <label>Water Flow Rate(m<sup>3</sup>/s):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={water_flow_rate} onChange={(e)=>{set_water_flow_rate(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z"/></svg>
                            <label>Water Head (m):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={water_head_m} onChange={(e)=>{set_water_head_m(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                            <label>Turbine Efficieny:</label>
                        </div>
                        <div>
                            <input min={0.01} max={1.0} step={0.01} className={styles.numInput} type='number' required value={Turbine_Efficiency_Water} onChange={(e)=>{set_Turbine_Efficiency_Water(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 35.5-36t18.5-47l-12-6q-6-3-11-7l-92 33q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q26 0 51 11.5t41 35.5q14 22 36 35.5t47 18.5l6-12q3-6 7-11l-33-92q-6-17-10-33t-4-32q0-64 55-112.5T536-880q51 0 77.5 30.5T640-781q0 26-11.5 51T593-689q-22 14-35.5 36T539-606l12 6q6 3 11 7l92-34q17-6 32.5-9.5T719-640q81 0 121 67t40 149q0 51-32 77.5T777-320q-25 0-48.5-11.5T689-367q-14-22-36-35.5T606-421l-6 12q-3 6-7 11l33 92q6 16 10 30.5t4 30.5q1 65-54 115T424-80Zm56-340q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm-46-192q6-2 12.5-3.5T459-618q8-42 30.5-78t59.5-60q5-4 8-10t3-15q0-8-6-13.5t-18-5.5q-38 0-86 16.5T400-719q0 9 2.5 17t4.5 15l27 75ZM240-400q14 0 33-7l75-27q-2-6-3.5-12.5T342-459q-42-8-78-30.5T204-549q-4-5-10.5-8t-14.5-3q-9 0-14 6t-5 18q0 54 20.5 95t59.5 41Zm184 240q47 0 92.5-19t43.5-66q0-8-2.5-15t-4.5-13l-27-75q-6 2-12.5 3.5T501-342q-8 42-30.5 78T411-204q-5 4-8.5 10.5T400-180q1 8 6 14t18 6Zm353-240q9 0 16-5t7-19q0-38-16-86.5T719-560q-9 0-17 2t-15 4l-75 28q2 6 3.5 12.5T618-501q42 8 78 30.5t60 59.5q3 5 9 8t12 3ZM618-501ZM459-618ZM342-459Zm159 117Z"/></svg>
                            <label>Number of Turbines:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Number_of_Turbines_Water} onChange={(e)=>{set_Number_of_Turbines_Water(e.target.value)}}/>
                        </div>
                    </div>
                    <div><p>Solar Energy Factors</p></div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                            <label>Solar Irradiance(w/m<sup>2</sup>):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Solar_Irradiance} onChange={(e)=>{set_Solar_Irradiance(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                            <label>Panel Efficiency:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Panel_Efficiency} onChange={(e)=>{set_Panel_Efficiency(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M800-560v-120H680v-80h120q33 0 56.5 23.5T880-680v120h-80Zm-720 0v-120q0-33 23.5-56.5T160-760h120v80H160v120H80Zm600 360v-80h120v-120h80v120q0 33-23.5 56.5T800-200H680Zm-520 0q-33 0-56.5-23.5T80-280v-120h80v120h120v80H160Z"/></svg>
                            <label>Panel Area (m<sup>2</sup>):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Panel_Area} onChange={(e)=>{set_Panel_Area(e.target.value)}}/>
                        </div>
                    </div>
                    
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m80-80 80-400h640l80 400H80Zm40-720v-80h120v80H120Zm58 640h262v-80H194l-16 80Zm67-427-57-56 85-85 57 56-85 85Zm-35 267h230v-80H226l-16 80Zm270-360q-83 0-141.5-58.5T280-880h80q0 50 35 85t85 35q50 0 85-35t35-85h80q0 83-58.5 141.5T480-680Zm0-200Zm-40 360v-120h80v120h-80Zm80 360h262l-16-80H520v80Zm0-160h230l-16-80H520v80Zm195-267-84-85 56-56 85 84-57 57Zm5-213v-80h120v80H720Z"/></svg>
                            <label>Number of Panels:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Number_of_Panels} onChange={(e)=>{set_Number_of_Panels(e.target.value)}}/>
                        </div>
                    </div>
                </form>
                <form className={styles.formstyle}>
                    <div><p>Wind Energy Factors</p></div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg>
                            <label>Wind Speed (m/s):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Wind_Speed} onChange={(e)=>{set_Wind_Speed(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M295-119q-36-1-68.5-18.5T165-189q-40-48-62.5-114.5T80-440q0-83 31.5-156T197-723q54-54 127-85.5T480-840q83 0 156 32t127 87q54 55 85.5 129T880-433q0 77-25 144t-71 113q-28 28-59 42.5T662-119q-18 0-36-4.5T590-137l-56-28q-12-6-25.5-9t-28.5-3q-15 0-28.5 3t-25.5 9l-56 28q-19 10-37.5 14.5T295-119Zm2-80q9 0 18.5-2t18.5-7l56-28q21-11 43.5-16t45.5-5q23 0 46 5t44 16l57 28q9 5 18 7t18 2q19 0 36-10t34-30q32-38 50-91t18-109q0-134-93-227.5T480-760q-134 0-227 94t-93 228q0 57 18.5 111t51.5 91q17 20 33 28.5t34 8.5Zm183-281Zm0 120q33 0 56.5-23.5T560-440q0-8-1.5-16t-4.5-16l50-67q10 13 17.5 27.5T634-480h82q-15-88-81.5-144T480-680q-88 0-155 56.5T244-480h82q14-54 57-87t97-33q17 0 32 3t29 9l-51 69q-2 0-5-.5t-5-.5q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Z"/></svg>
                            <label>Wind Direction <sup>o</sup>:</label>
                        </div>
                        <div>
                            <input  className={styles.numInput} type='number' required value={wind_direction} onChange={(e)=>{set_Wind_direction(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M295-119q-36-1-68.5-18.5T165-189q-40-48-62.5-114.5T80-440q0-83 31.5-156T197-723q54-54 127-85.5T480-840q83 0 156 32t127 87q54 55 85.5 129T880-433q0 77-25 144t-71 113q-28 28-59 42.5T662-119q-18 0-36-4.5T590-137l-56-28q-12-6-25.5-9t-28.5-3q-15 0-28.5 3t-25.5 9l-56 28q-19 10-37.5 14.5T295-119Zm2-80q9 0 18.5-2t18.5-7l56-28q21-11 43.5-16t45.5-5q23 0 46 5t44 16l57 28q9 5 18 7t18 2q19 0 36-10t34-30q32-38 50-91t18-109q0-134-93-227.5T480-760q-134 0-227 94t-93 228q0 57 18.5 111t51.5 91q17 20 33 28.5t34 8.5Zm183-281Zm0 120q33 0 56.5-23.5T560-440q0-8-1.5-16t-4.5-16l50-67q10 13 17.5 27.5T634-480h82q-15-88-81.5-144T480-680q-88 0-155 56.5T244-480h82q14-54 57-87t97-33q17 0 32 3t29 9l-51 69q-2 0-5-.5t-5-.5q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Z"/></svg>
                            <label>Air Density (kg/m<sup>3</sup>):</label>
                        </div>
                        <div>
                            <input  className={styles.numInput} type='number' required value={Air_Density} onChange={(e)=>{set_Air_Density(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H680v160h-80v-160h-80v160h-80v-160h-80v160h-80v-160H160v320Zm120-160h80-80Zm160 0h80-80Zm160 0h80-80Zm-120 0Z"/></svg>
                            <label>Rotor Diameter (m):</label>
                        </div>
                        <div>
                            <input  className={styles.numInput} type='number' required value={Rotor_Diameter} onChange={(e)=>{set_Rotor_Diameter(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z"/></svg>
                            <label>Hub Height(m):</label>
                        </div>
                        <div>
                            <input  className={styles.numInput} type='number' required value={Hub_Height} onChange={(e)=>{set_Hub_Height(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-80v-40q0-32 24-53.5t56-26.5v-286q-22-8-38.5-23T374-544l-76 20q-36 8-68.5-6T188-578l174-44q8-41 38-68t72-30l24-90q10-35 38.5-55.5T598-878l-50 180q25 16 38.5 42t13.5 56q0 13-3 25.5t-7 24.5l54 56q25 26 29.5 61T654-374L534-494q-3 3-6.5 4.5T520-486v286q32 5 56 26.5t24 53.5v40H360Zm120-460q25 0 42.5-17.5T540-600q0-25-17.5-42.5T480-660q-25 0-42.5 17.5T420-600q0 25 17.5 42.5T480-540Z"/></svg>
                            <label>Number of Turbines:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={Number_of_Turbines_Wind} onChange={(e)=>{set_Number_of_Turbines_Wind(e.target.value)}}/>
                        </div>
                    </div>
                </form>
                <form className={styles.formstyle}>
                    <div><p>General</p></div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z"/></svg>
                            <label>Temperature (°C):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' value={Temperature} onChange={(e)=>{set_Temperature(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"/></svg>
                            <label>Time (HH:MM):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='time' value={hour} onChange={(e)=>{set_hour(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg>
                            <label>Cloud Cover (%):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' min={0} max={100} required value={Cloud_Cover} onChange={(e)=>{set_Cloud_Cover(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M558-84q-15 8-30.5 2.5T504-102l-60-120q-8-15-2.5-30.5T462-276q15-8 30.5-2.5T516-258l60 120q8 15 2.5 30.5T558-84Zm240 0q-15 8-30.5 2.5T744-102l-60-120q-8-15-2.5-30.5T702-276q15-8 30.5-2.5T756-258l60 120q8 15 2.5 30.5T798-84Zm-480 0q-15 8-30.5 2.5T264-102l-60-120q-8-15-2.5-30.5T222-276q15-8 30.5-2.5T276-258l60 120q8 15 2.5 30.5T318-84Zm-18-236q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z"/></svg>
                            <label>Precipation (mm):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number'  required value={precipitation} onChange={(e)=>{setPrecipitation(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z"/></svg>
                            <label>Humidity (%):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number'  required value={humidity} onChange={(e)=>{setHumidity(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M660-80v-120H560l140-200v120h100L660-80Zm-300-80Zm-40 80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v280q-21 0-41 3.5T600-466v-254H360v560h94q8 23 19.5 43T501-80H320Z"/></svg>
                            <label>Current Battery Power(kW):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number'  required value={currBatteryCapacity} onChange={(e)=>{setCurrBatteryCapacity(e.target.value)}}/>
                        </div>
                    </div>
                </form>
                <form className={styles.formstyle}>
                    <div><p>Factories</p></div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M80-80v-481l280-119v80l200-80v120h320v480H80Zm80-80h640v-320H480v-82l-200 80v-78l-120 53v347Zm280-80h80v-160h-80v160Zm-160 0h80v-160h-80v160Zm320 0h80v-160h-80v160Zm280-320H680l40-320h120l40 320ZM160-160h640-640Z"/></svg>
                            <label>Number of Factories:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={num_factories} onChange={(e)=>{set_num_factories(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
                            <label>Avg. Power Consumed by a Factory(kWh):</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={avg_power_kwh_factory} onChange={(e)=>{set_avg_power_kwh_factory(e.target.value)}}/>
                        </div>
                    </div>
                    <div><p>Households</p></div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z"/></svg>
                            <label>Number of HouseHolds:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={num_houses} onChange={(e)=>{set_num_houses(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
                            <label>Avg. Power Consumed By a Household:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={avg_power_per_house} onChange={(e)=>{set_avg_power_per_house(e.target.value)}}/>
                        </div>
                    </div>
                    
                    
                </form>
                
                
                <form className={styles.formstyle}>
                <div><p>Offices</p></div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M80-120v-650l200-150 200 150v90h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm240-240v-80h160v80H560Zm0 160v-80h160v80H560ZM400-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/></svg>
                            <label>Number of Offices:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={num_offices} onChange={(e)=>{set_num_offices(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
                            <label>Avg. Power Consumed By a Office:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={avg_power_consumed_per_office} onChange={(e)=>{set_avg_power_consumed_per_office(e.target.value)}}/>
                        </div>
                    </div>
                    <div><p>Street & Traffic Lights</p></div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M520-120v-80h320v80H520ZM221-600h139v-160h-69l-70 160Zm419 360v-400q0-17-11.5-28.5T600-680H440v120q0 17-11.5 28.5T400-520H160q-22 0-34-18t-3-38l95-216q10-22 29.5-35t43.5-13h69q33 0 56.5 23.5T440-760h160q50 0 85 35t35 85v400h-80ZM221-600h139-139Z"/></svg>
                            <label>No. of Street Lights:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={num_street_lights} onChange={(e)=>{set_num_street_lights(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.factorItem}>
                        <div className={styles.itemHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-240q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-180q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-180q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM280-360v-46q-51-14-85.5-56T160-560h120v-46q-51-14-85.5-56T160-760h120q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760h120q0 56-34.5 98T680-606v46h120q0 56-34.5 98T680-406v46h120q0 56-34.5 98T680-206v6q0 33-23.5 56.5T600-120H360q-33 0-56.5-23.5T280-200v-6q-51-14-85.5-56T160-360h120Zm80 160h240v-560H360v560Zm0 0v-560 560Z"/></svg>
                            <label>No. of Traffic Lights:</label>
                        </div>
                        <div>
                            <input className={styles.numInput} type='number' required value={num_traffic_lights} onChange={(e)=>{set_num_traffic_lights(e.target.value)}}/>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.submitBtn} onClick={()=>{handleUpdate()}}>Update</button>
                <button className={styles.submitBtn} onClick={()=>{close('none')}}>Close</button>
            </div>
            
        </div>
    );
}
export default ControlPanel;