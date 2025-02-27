import { createContext, useContext, useState,useEffect } from "react";
import axios from 'axios';

const FactorContext = createContext();

export const FactorProvider = ({ children }) => {
    const [hour, set_hour] = useState("12:00"); // Default to noon
    const [bgColor, setBgColor] = useState("#ffffff"); // Default to white
    const [sunMoonPosition, setSunMoonPosition] = useState(50); // 50% (center)
    const [h,seth]=useState(12);
    const [currBatteryCapacity,setCurrBatteryCapacity]=useState(20);
    const [maxBatteryCapacity,setMaxBatteryCapacity]=useState(300);
    const [activewire,setActiveWire]=useState([0,0,0,0,0,0,0])
    const [batteryStatus,setBatteryStatus]=useState([0,0,0,0])

    // Update background and sun/moon position
    const sunMoonPositions = [
        64, 72, 80, 88, 96, 0, 8, 16, 24, 32, 40, 48, // 6 AM - 6 PM (Sunrise to Sunset)
        56, 64, 72, 80, 88, 0, 8, 16, 24, 32, 40, 48,  // 6 PM - 6 AM (Moonrise to Moonset)
      ];
      
      const updateSunMoonPosition = (hour) => {
          const position = sunMoonPositions[hour % 24]; // Ensure it wraps around correctly
          setSunMoonPosition(position);
      };

     
      
    useEffect(() => {
        seth(parseInt(hour.split(":")[0]));
      updateBackground(h);
      console.log(h)
      updateSunMoonPosition(h);
    }, [hour]);

    const updateBackground = (hour) => {
        const grayScaleMap = [
            "rgb(5, 5, 5)",     // 00:00 - Deep night (almost black)
            "rgb(10, 10, 10)",  // 01:00
            "rgb(15, 15, 15)",  // 02:00
            "rgb(20, 20, 20)",  // 03:00
            "rgb(30, 30, 30)",  // 04:00 - Pre-dawn dark gray
    
            "rgb(50, 50, 50)",  // 05:00 - Slightly lighter dark gray
            "rgb(80, 80, 80)",  // 06:00 - Early morning gray
            "rgb(110, 110, 110)",  // 07:00 - Morning dim gray
            "rgb(140, 140, 140)",  // 08:00 - Morning brighter gray
            "rgb(160, 160, 160)",  // 09:00
            "rgb(180, 180, 180)",  // 10:00
            "rgb(200, 200, 200)",  // 11:00
            "rgb(246, 242, 242)",  // 12:00 - **Brightest (white)**
            "rgb(230, 230, 230)",  // 13:00
            "rgb(225, 225, 225)",  // 14:00
    
            "rgb(210, 210, 210)",  // 15:00 - Soft dimming
            "rgb(190, 190, 190)",  // 16:00
            "rgb(160, 160, 160)",  // 17:00 - Evening soft gray
            "rgb(120, 120, 120)",  // 18:00 - Sunset gray
            "rgb(90, 90, 90)",     // 19:00 - Darker gray
    
            "rgb(70, 70, 70)",  // 20:00 - Dark evening
            "rgb(50, 50, 50)",  // 21:00
            "rgb(30, 30, 30)",  // 22:00
            "rgb(10, 10, 10)"   // 23:00 - Almost black
        ];
    
        setBgColor(grayScaleMap[hour]);
        console.log(hour)
    };
    
    
    
    // Household
    const [num_houses, set_num_houses] = useState(300); // 100 houses in a town 
    const [avg_power_per_house, set_avg_power_per_house] = useState(2); // 2 kWh avg per house
    const [total_power_consumed_household, set_total_power_consumed_household] = useState(200); // 100 houses * 2 kWh
    const [house_energy_predicted,set_house_energy_predicted]=useState(0)

    // Factory
    const [num_factories, set_num_factories] = useState(5); // 5 factories
    const [avg_power_kwh_factory, set_avg_power_kwh_factory] = useState(250); // 250 kWh per factory
    const [total_power_consumed_factory, set_total_power_consumed_factory] = useState(1250); // 5 * 250 kWh
    const [factory_energy_predicted,set_factory_energy_predicted]=useState(0);

    // Street Lights
    const [num_street_lights, set_num_street_lights] = useState(50); // 50 street lights
    const [num_traffic_lights, set_num_traffic_lights] = useState(20); // 20 traffic lights
    const [street_light_power_kwh, set_street_light_power_kwh] = useState(0.28); // 280W per street light
    const [traffic_light_power_kwh, set_traffic_light_power_kwh] = useState(0.15); // 150W per traffic light
    const [total_power_consumption_ts_light, set_total_power_consumption_ts_light] = useState(17.6); // (50*0.28 + 20*0.15) kWh
    const [stl_energy_predicted,set_stl_energy_predicted]=useState(0);

    // Wind Energy
    const [Wind_Speed, set_Wind_Speed] = useState(8); // 8 m/s wind speed (moderate wind)
    const [Air_Density, set_Air_Density] = useState(1.225); // kg/m³ at sea level
    const [Blade_Length, set_Blade_Length] = useState(40); // 40 meters long blades
    const [Turbine_Efficiency_Wind, set_Turbine_Efficiency_Wind] = useState(40); // 40% efficiency
    const [Number_of_Turbines_Wind, set_Number_of_Turbines_Wind] = useState(2); // 10 wind turbines
    const [power_output_manufactured, set_power_output_manufactured] = useState(1500); // 1.5 MW per turbine
    const [total_power_produced_wind, set_total_power_produced_wind] = useState(15000); // 10 turbines * 1.5 MW
    const [wind_energy_predicted,set_wind_energy_predicted]=useState(30)

    // Hydro Energy
    const [water_flow_rate, set_water_flow_rate] = useState(500); // 500 m³/s
    const [water_head_m, set_water_head_m] = useState(50); // 50m head
    const [Turbine_Efficiency_Water, set_Turbine_Efficiency_Water] = useState(0.8); // 80% efficiency
    const [Number_of_Turbines_Water, set_Number_of_Turbines_Water] = useState(3); // 3 hydro turbines
    const [Energy_Generated_kWh_Water, set_Energy_Generated_kWh_Water] = useState(10000); // 10,000 kWh
    const [hydro_energy_predicted,set_hydro_energy_predicted]=useState(0);

    // Solar Energy
    const [Solar_Irradiance, set_Solar_Irradiance] = useState(1000); // 1000 W/m² (standard test condition)
    const [Temperature, set_Temperature] = useState(25); // 25°C standard temperature
    const [Cloud_Cover, set_Cloud_Cover] = useState(20); // 20% cloud cover
    const [Panel_Tilt, set_Panel_Tilt] = useState(30); // 30-degree tilt angle
    const [Panel_Efficiency, set_Panel_Efficiency] = useState(0.18); // 18% efficiency
    const [Number_of_Panels, set_Number_of_Panels] = useState(500); // 500 solar panels
    const [Panel_Area, set_Panel_Area] = useState(2); // 2 m² per panel
    const [Energy_Generated_Solar, set_Energy_Generated_Solar] = useState(90000); // 90,000 kWh total
    const [humidity,setHumidity]=useState(70);
    const [precipitation,setPrecipitation]=useState(0);
    const [solar_energy_predicted,set_solar_energy_predicted]=useState(0);

    //Biomass Energy
    const [Biomass_Input_Tons,set_Biomass_Input_Tons] =useState(210);
    const [Calorific_value,set_calorific_value]=useState(11.3);
    const [Boiler_Efficiency_biomass,set_Boiler_Efficiency_biomass]=useState(0.7);
    const [Steam_Pressure_biomass,set_Steam_Pressure_biomass]=useState(17.9);
    const [turbine_efficiency_biomass,set_turbine_efficiency_biomass]=useState(0.8);
    const [cooling_efficiency_biomass,set_cooling_efficiency_biomass]=useState(0.8);
    const [biomass_energy_predicted,set_biomass_energy_predicted]=useState(0);

    //Thermal Energy
    const [Fuel_Input_Energy,set_Fuel_Input_Energy]=useState(135);
    const [Boiler_Efficiency_Thermal,set_Boiler_Efficiency_Thermal]=useState(0.76);
    const [Steam_Pressure_thermal,set_Steam_Pressure_thermal]=useState(16);
    const [Steam_Temperature,set_steam_temperature]=useState(529);
    const [turbine_efficiency_thermal,set_turbine_efficiency_thermal]=useState(0.87);
    const [cooling_efficiency_thermal,set_cooling_efficiency_thermal]=useState(0.71);
    const [thermal_energy_predicted,set_thermal_energy_predicted]=useState(0);

    //Office Energy
    const [num_offices,set_num_offices]=useState(100);
    const [avg_power_consumed_per_office,set_avg_power_consumed_per_office]=useState(5.1);
    const [office_energy_predicted,set_office_energy_predicted]=useState(0);



    const [wind_direction,set_Wind_direction]=useState(94);
    const [Rotor_Diameter,set_Rotor_Diameter]=useState(88);
    const [Hub_Height,set_Hub_Height]=useState(115);
    const [flagf,setflagf]=useState(0);
    

    const predictSolarEnergy = async (h) => {
        // Convert all features to numbers using Number() instead of parseFloat
        const solarData = {
            features: [
                Number(h),
                Number(Panel_Area),
                Number(Number_of_Panels),
                Number(Solar_Irradiance),
                Number(Temperature),
                Number(humidity),
                Number(Cloud_Cover),
                Number(Wind_Speed),
                Number(precipitation)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            console.log("solar",solarData,h,"hojr")
            const response = await axios.post("http://127.0.0.1:8000/predict/solar-energy", solarData);
            
            // Log the prediction
            console.log("Solar Energy Prediction:", response.data.solar_energy_prediction);
    
            return Number(response.data.solar_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0; // Return 0 instead of null for numeric consistency
        }
    };
    
    const predictWindEnergy = async () => {
        // Convert all features to numbers
        const windData = {
            features: [
                Number(Wind_Speed),
                Number(wind_direction),
                Number(Air_Density),
                Number(Rotor_Diameter),
                Number(Hub_Height),
                Number(Temperature),
                Number(Number_of_Turbines_Wind)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            const response = await axios.post("http://127.0.0.1:8000/predict/wind-energy", windData);
            
            // Log the prediction
            console.log("Wind Energy Prediction:", response.data.wind_energy_prediction);
    
            return Number(response.data.wind_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };
    
    const predictHydroEnergy = async () => {
        // Convert all features to numbers
        const hydroData = {
            features: [
                Number(water_head_m),
                Number(water_flow_rate),
                Number(Number_of_Turbines_Water),
                Number(Turbine_Efficiency_Water)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            const response = await axios.post("http://127.0.0.1:8000/predict/hydro-energy", hydroData);
            
            // Log the prediction
            console.log("Hydro Energy Prediction:", response.data.hydro_energy_prediction);
    
            return Number(response.data.hydro_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };
    
    const predictBiomassEnergy = async () => {
        // Convert all features to numbers
        const biomassData = {
            features: [
                Number(Biomass_Input_Tons),
                Number(Calorific_value),
                Number(Boiler_Efficiency_biomass),
                Number(Steam_Pressure_biomass),
                Number(turbine_efficiency_biomass),
                Number(cooling_efficiency_biomass)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            const response = await axios.post("http://127.0.0.1:8000/predict/biomass-energy", biomassData);
            
            // Log the prediction
            console.log("Biomass Energy Prediction:", response.data.biomass_energy_prediction);
    
            return Number(response.data.biomass_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };
    
    const predictThermalEnergy = async () => {
        // Convert all features to numbers
        const thermalData = {
            features: [
                Number(Fuel_Input_Energy),
                Number(Boiler_Efficiency_Thermal),
                Number(Steam_Pressure_thermal),
                Number(Steam_Temperature),
                Number(turbine_efficiency_thermal),
                Number(cooling_efficiency_thermal)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            console.log(thermalData);
            const response = await axios.post("http://127.0.0.1:8000/predict/thermal-energy", thermalData);
            
            // Log the prediction
            console.log("Thermal Energy Prediction:", response.data.thermal_energy_prediction);
    
            return Number(response.data.thermal_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };
    
    const predictHouseEnergy = async (h) => {
        // Convert all features to numbers
        const houseData = {
            features: [
                Number(h),
                Number(num_houses),
                Number(avg_power_per_house)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            const response = await axios.post("http://127.0.0.1:8000/predict/house-energy", houseData);
            
            // Log the prediction
            console.log("House Energy Prediction:", response.data.house_energy_prediction);
    
            return Number(response.data.house_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };
    
    const predictFactoryEnergy = async (h) => {
        // Convert all features to numbers
        const factoryData = {
            features: [
                Number(h),
                Number(num_factories),
                Number(avg_power_kwh_factory)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            const response = await axios.post("http://127.0.0.1:8000/predict/factory-energy", factoryData);
            
            // Log the prediction
            console.log("Factory Energy Prediction:", response.data.factory_energy_prediction);
    
            return Number(response.data.factory_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };
    
    const predictstlEnergy = async (h) => {
        // Convert all features to numbers
        const stlData = {
            features: [
                Number(h),
                Number(num_traffic_lights),
                Number(num_street_lights)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            console.log("stl",stlData)
            const response = await axios.post("http://127.0.0.1:8000/predict/stl-energy", stlData);
            
            // Log the prediction
            console.log("STL Energy Prediction:", response.data.stl_energy_prediction);
            
    
            return Number(response.data.stl_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };
    
    const predictOfficeEnergy = async (h) => {
        // Convert all features to numbers
        const officeData = {
            features: [
                Number(h),
                Number(num_offices),
                Number(avg_power_consumed_per_office)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            const response = await axios.post("http://127.0.0.1:8000/predict/office-energy", officeData);
            
            // Log the prediction
            console.log("Office Energy Prediction:", response.data.office_energy_prediction);
    
            return Number(response.data.office_energy_prediction);
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };

    const predictMangementEnergy = async () => {
        // Convert all features to numbers
        const mangaementData = {
            features: [
                Number(solar_energy_predicted),
                Number(wind_energy_predicted),
                Number(hydro_energy_predicted),
                Number(biomass_energy_predicted),
                Number(thermal_energy_predicted),
                Number(currBatteryCapacity),
                Number(house_energy_predicted),
                Number(factory_energy_predicted),
                Number(office_energy_predicted),
                Number(stl_energy_predicted)
            ]
        };
    
        try {
            // Make a POST request to FastAPI
            const response = await axios.post("http://127.0.0.1:8000/predict/deep-learning-energy", mangaementData);
            
            // Log the prediction
            console.log("Office Energy Prediction:", response.data.deep_learning_energy_prediction);
    
            return response.data.deep_learning_energy_prediction;
        } catch (error) {
            console.error("API Error:", error);
            return 0;
        }
    };
    const handleUpdate = async () => {
    try {
        // Fetch energy predictions
        const solarEnergy = await predictSolarEnergy(h);
        console.log("Solar Energy:", solarEnergy);
        set_solar_energy_predicted(solarEnergy);

        const windEnergy = await predictWindEnergy();
        console.log("Wind Energy:", windEnergy);
        set_wind_energy_predicted(windEnergy);

        const hydroEnergy = await predictHydroEnergy();
        console.log("Hydro Energy:", hydroEnergy);
        set_hydro_energy_predicted(hydroEnergy);

        const biomassEnergy = await predictBiomassEnergy();
        console.log("Biomass Energy:", biomassEnergy);
        set_biomass_energy_predicted(biomassEnergy);

        const thermalEnergy = await predictThermalEnergy();
        console.log("Thermal Energy:", thermalEnergy);
        set_thermal_energy_predicted(thermalEnergy);

        const houseEnergy = await predictHouseEnergy(h);
        console.log("House Energy:", houseEnergy);
        set_house_energy_predicted(houseEnergy);

        const factoryEnergy = await predictFactoryEnergy(h);
        console.log("Factory Energy:", factoryEnergy);
        set_factory_energy_predicted(factoryEnergy);

        const stlEnergy = await predictstlEnergy(h);
        console.log("STL Energy:", stlEnergy);
        set_stl_energy_predicted(stlEnergy);

        const officeEnergy = await predictOfficeEnergy(h);
        console.log("Office Energy:", officeEnergy);
        set_office_energy_predicted(officeEnergy);

        const manageData = await predictMangementEnergy();
        console.log("Management Data:", manageData);

        // Define energy costs per kWh
        const costArray = [2.1, 2.5, 3.9, 5.2, 4.8, 6.5]; // Solar, Wind, Hydro, Biomass, Battery, Thermal

        // Energy sources and demands
        const energySources = [
            { name: "Solar", amount: solarEnergy, cost: costArray[0], index: 0 },
            { name: "Wind", amount: windEnergy, cost: costArray[1], index: 1 },
            { name: "Hydro", amount: hydroEnergy, cost: costArray[2], index: 2 },
            { name: "Biomass", amount: biomassEnergy, cost: costArray[3], index: 3 },
            { name: "Battery", amount: currBatteryCapacity, cost: costArray[4], index: 4 },
            { name: "Thermal", amount: thermalEnergy, cost: costArray[5], index: 5 }
        ];

        const consumers = [
            { name: "Households", demand: houseEnergy, index: 0 },
            { name: "Offices", demand: officeEnergy, index: 1 },
            { name: "Street Lights", demand: stlEnergy, index: 2 },
            { name: "Factories", demand: factoryEnergy, index: 3 }
        ];

        // Initialize allocation data
        const resourceAllocation = Array(consumers.length).fill().map(() => []);
        const allocationDetails = Array(consumers.length).fill().map(() => []);
        const totalCost = Array(consumers.length).fill(0);

        // Calculate total demand and production
        const totalDemand = consumers.reduce((sum, consumer) => sum + consumer.demand, 0);
        const totalProduction = energySources.reduce((sum, source) => sum + source.amount, 0);

        let act = [0, 0, 0, 0, 0, 0, 0]; // Active wire state tracker
        let battery = [0, 0, 0, 0]; // Battery usage tracker

        // Determine energy sufficiency
        let energyStatus = totalProduction >= totalDemand
            ? totalProduction > totalDemand
                ? "Energy is sufficient. Excess energy will be stored in the battery."
                : "Energy is exactly sufficient."
            : "Energy is insufficient. Additional power sources will be needed.";

        // Sort energy sources by cost (cheapest first)
        const sortedEnergySources = [...energySources].sort((a, b) => a.cost - b.cost);

        // Allocate energy to each consumer
        consumers.forEach(consumer => {
            let remainingDemand = consumer.demand;

            if (remainingDemand === 0) return;

            for (const source of sortedEnergySources) {
                if (source.amount <= 0 || remainingDemand <= 0) continue;

                const allocated = Math.min(source.amount, remainingDemand);

                if (allocated > 0) {
                    resourceAllocation[consumer.index].push(source.index);

                    // Track battery usage when thermal energy is used (index 5)
                    if (source.index === 4) {
                        battery[consumer.index] = 1;
                    }

                    // Activate wire states
                    if (Array.isArray(activewire) && activewire[source.index] === 0) {
                        act[source.index] = 1;
                    }

                    allocationDetails[consumer.index].push({
                        source: source.name,
                        amount: allocated,
                        cost: allocated * source.cost
                    });

                    source.amount -= allocated;
                    remainingDemand -= allocated;
                    totalCost[consumer.index] += allocated * source.cost;
                }
            }

            // Handle unmet demand
            if (remainingDemand > 0) {
                allocationDetails[consumer.index].push({
                    source: "Shortage",
                    amount: remainingDemand,
                    cost: 0
                });
                act[5] = 1; // Indicate shortage
            }
        });

        console.log("Resource Allocation:", resourceAllocation);
        console.log("Battery before updating state:", battery);

        // Calculate battery usage
        let batteryUsage = energySources[4].amount - currBatteryCapacity;
        if (batteryUsage < 0) {
            batteryUsage = 0;
        } else {
            act[6] = 1;
        }

        console.log("Final Active Wire State Before Update:", act);

        // Update state correctly
        setActiveWire([...act]);
        setBatteryStatus([...battery]); // Ensure battery status updates correctly

        console.log("Updated Active Wire State:", act);
        console.log("Updated Battery Status:", battery);

    } catch (error) {
        console.error("Error in handleUpdate:", error);
    }
};

    
    
    useEffect(()=>{
        handleUpdate();
    },[]);



    return (
        <FactorContext.Provider
            value={{
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
                Blade_Length, set_Blade_Length,
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
                Energy_Generated_Solar, set_Energy_Generated_Solar

                ,bgColor,sunMoonPosition,h,handleUpdate,
                wind_direction,Rotor_Diameter,Hub_Height,set_Wind_direction,set_Rotor_Diameter,set_Hub_Height,
                precipitation,humidity,setPrecipitation,setHumidity,
                Biomass_Input_Tons,Calorific_value,Boiler_Efficiency_biomass,Steam_Pressure_biomass,turbine_efficiency_biomass,cooling_efficiency_biomass,
                set_Biomass_Input_Tons,set_calorific_value,set_Boiler_Efficiency_biomass,set_Steam_Pressure_biomass,set_turbine_efficiency_biomass,set_cooling_efficiency_biomass,
                Fuel_Input_Energy,Boiler_Efficiency_Thermal,Steam_Pressure_thermal,Steam_Temperature,turbine_efficiency_thermal,cooling_efficiency_thermal,
                set_Fuel_Input_Energy,set_Boiler_Efficiency_Thermal,set_Steam_Pressure_thermal,set_steam_temperature,set_turbine_efficiency_thermal,set_cooling_efficiency_thermal,
                num_offices,avg_power_consumed_per_office,set_num_offices,set_avg_power_consumed_per_office,
                predictBiomassEnergy,predictFactoryEnergy,predictHouseEnergy,predictHydroEnergy,predictOfficeEnergy,predictSolarEnergy,predictThermalEnergy,predictWindEnergy,predictstlEnergy,
                solar_energy_predicted,wind_energy_predicted,thermal_energy_predicted,biomass_energy_predicted,hydro_energy_predicted,house_energy_predicted,factory_energy_predicted,stl_energy_predicted,office_energy_predicted,
                currBatteryCapacity,setCurrBatteryCapacity,maxBatteryCapacity,setMaxBatteryCapacity,activewire,batteryStatus
                
            }
        }
        >
            {children}
        </FactorContext.Provider>
    );
};

export const useFactor = () => useContext(FactorContext);
