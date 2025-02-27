import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import styles from "./Statistics.module.css";
import { useFactor } from "../FactorContext/Factor";

const Statistics = ({close}) => {
  const {
    solar_energy_predicted,
    wind_energy_predicted,
    hydro_energy_predicted,
    biomass_energy_predicted,
    thermal_energy_predicted,
    predictHouseEnergy,
    predictFactoryEnergy,
    predictstlEnergy,
    predictOfficeEnergy,
    h,
  } = useFactor();

  const [consumptionData, setConsumptionData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ensure data is numeric - convert any string or undefined values to numbers
  const ensureNumeric = (value) => {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
  };

  // Fixed color scheme for consistent visualization
  const COLORS = {
    solar: '#FFD700',    // Gold
    wind: '#1E90FF',     // Dodger Blue
    biomass: '#8B4513',  // Saddle Brown
    thermal: '#FF4500',  // Orange Red
    hydro: '#4169E1',    // Royal Blue
    house: '#FF5733',    // Coral
    factory: '#FFD700',  // Gold
    stl: '#33A8FF',      // Light Blue
    office: '#8A2BE2',   // Violet
    total: '#FF4500'     // Orange Red
  };

  // Create energy data with default values to prevent empty charts
  const energyData = [
    { source: 'Solar', power: Math.max(0.1, ensureNumeric(solar_energy_predicted)), color: COLORS.solar },
    { source: 'Wind', power: Math.max(0.1, ensureNumeric(wind_energy_predicted)), color: COLORS.wind },
    { source: 'Biomass', power: Math.max(0.1, ensureNumeric(biomass_energy_predicted)), color: COLORS.biomass },
    { source: 'Thermal', power: Math.max(0.1, ensureNumeric(thermal_energy_predicted)), color: COLORS.thermal },
    { source: 'Hydro', power: Math.max(0.1, ensureNumeric(hydro_energy_predicted)), color: COLORS.hydro },
  ];

  // Calculate total energy production for the pie chart
  const totalEnergyProduction = energyData.reduce((sum, item) => sum + item.power, 0);

  // Fetch consumption forecast data on component mount
  useEffect(() => {
    async function fetchConsumptionData() {
      try {
        setLoading(true);
        
        let currentHour = h || 0;
        const house24forecast = [];
        const factory24forecast = [];
        const stl24forecast = [];
        const office24forecast = [];
        
        // Fetch 24 hours of forecast data
        for (let count = 0; count < 24; count++) {
          const hour = (currentHour + count) % 24;
          
          // Await each prediction function call
          if (predictHouseEnergy) {
            const housePrediction = await predictHouseEnergy(hour);
            house24forecast.push(ensureNumeric(housePrediction));
          } else {
            house24forecast.push(1); // Default value if function unavailable
          }
          
          if (predictFactoryEnergy) {
            const factoryPrediction = await predictFactoryEnergy(hour);
            factory24forecast.push(ensureNumeric(factoryPrediction));
          } else {
            factory24forecast.push(1); // Default value if function unavailable
          }
          
          if (predictstlEnergy) {
            const stlPrediction = await predictstlEnergy(hour);
            stl24forecast.push(ensureNumeric(stlPrediction));
          } else {
            stl24forecast.push(1); // Default value if function unavailable
          }
          
          if (predictOfficeEnergy) {
            const officePrediction = await predictOfficeEnergy(hour);
            office24forecast.push(ensureNumeric(officePrediction));
          } else {
            office24forecast.push(1); // Default value if function unavailable
          }
        }
        
        // Create hourly consumption data objects with total calculation
        const formattedData = Array.from({ length: 24 }, (_, index) => {
          const hour = (currentHour + index) % 24;
          const house = house24forecast[index];
          const factory = factory24forecast[index];
          const stl = stl24forecast[index];
          const office = office24forecast[index];
          
          return {
            hour,
            house,
            factory,
            stl,
            office,
            total: house + factory + stl + office
          };
        });
        
        setConsumptionData(formattedData);
      } catch (error) {
        console.error("Error fetching consumption data:", error);
        // Set fallback data if there's an error
        setConsumptionData(Array.from({ length: 24 }, (_, index) => ({
          hour: (h + index) % 24,
          house: 1,
          factory: 1,
          stl: 1,
          office: 1,
          total: 4
        })));
      } finally {
        setLoading(false);
      }
    }
    
    fetchConsumptionData();
  }, [h, predictHouseEnergy, predictFactoryEnergy, predictstlEnergy, predictOfficeEnergy]);

  // Custom tooltip for the pie chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className={styles.customTooltip}>
          <p className={styles.label}>{`${data.source}: ${data.power.toFixed(2)} kW`}</p>
          <p className={styles.percent}>{`(${((data.power / totalEnergyProduction) * 100).toFixed(1)}%)`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.statisticsContainer}>
      <button className={styles.submitBtn} onClick={()=>{close('none')}}>Close</button>
      <h2 className={styles.heading}>Energy Statistics</h2>
      
      {/* Power Production Bar Chart */}
      <div className={styles.scrollContainer}>
        <h3 className={styles.chartTitle}>Power Production by Source (kW)</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={energyData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value.toFixed(2)} kW`, 'Power']} />
              <Legend />
              <Bar 
                dataKey="power" 
                name="Power (kW)" 
                isAnimationActive={false}
              >
                {energyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Power Production Pie Chart */}
      <div className={styles.scrollContainer}>
        <h3 className={styles.chartTitle}>Power Distribution by Source</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={energyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="power"
                nameKey="source"
                label={({source, percent}) => `${source} ${(percent * 100).toFixed(0)}%`}
              >
                {energyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Consumption Forecast */}
      <div className={styles.scrollContainer}>
        <h3 className={styles.chartTitle}>Predicted Consumption (Next 24 Hours)</h3>
        {loading ? (
          <p>Loading consumption data...</p>
        ) : (
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={consumptionData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" label={{ value: 'Hour', position: 'bottom' }} />
                <YAxis label={{ value: 'kW', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value.toFixed(2)} kW`]} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="house" 
                  stroke={COLORS.house} 
                  name="House" 
                  isAnimationActive={false} 
                  dot={true}
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="stl" 
                  stroke={COLORS.stl} 
                  name="STL" 
                  isAnimationActive={false} 
                  dot={true}
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="factory" 
                  stroke={COLORS.factory} 
                  name="Factory" 
                  isAnimationActive={false} 
                  dot={true}
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="office" 
                  stroke={COLORS.office} 
                  name="Office" 
                  isAnimationActive={false} 
                  dot={true}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Total Consumption Chart */}
      <div className={styles.scrollContainer}>
        <h3 className={styles.chartTitle}>Total Energy Consumption (Next 24 Hours)</h3>
        {loading ? (
          <p>Loading consumption data...</p>
        ) : (
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={consumptionData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" label={{ value: 'Hour', position: 'bottom' }} />
                <YAxis label={{ value: 'kW', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value.toFixed(2)} kW`]} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="total" 
                  stroke={COLORS.total} 
                  strokeWidth={3} 
                  name="Total Consumption" 
                  isAnimationActive={false} 
                  dot={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;