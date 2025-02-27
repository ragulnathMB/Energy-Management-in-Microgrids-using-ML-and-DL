import styles from './Adviser.module.css';
import EnergyAdviserImg from '../../assets/EnergyAdviser.png';
import { useFactor } from '../FactorContext/Factor';
import { useEffect, useState } from 'react';

const Adviser = ({ close }) => {
    const {
        solar_energy_predicted,
        wind_energy_predicted,
        thermal_energy_predicted,
        biomass_energy_predicted,
        hydro_energy_predicted,
        house_energy_predicted,
        factory_energy_predicted,
        stl_energy_predicted,
        office_energy_predicted,
        currBatteryCapacity,
        maxBatteryCapacity
    } = useFactor();

    // Define energy costs per kWh for each source
    const costArray = [2.1, 2.5, 3.9, 5.2, 4.8, 6.5]; // Solar, Wind, Hydro, Biomass, Battery, Thermal
    const sourceNames = ["Solar", "Wind", "Hydro", "Biomass", "Battery", "Thermal"];
    
    // Create copies of energy sources and demands for allocation
    const energySources = [
        { name: "Solar", amount: solar_energy_predicted, cost: costArray[0], index: 0 },
        { name: "Wind", amount: wind_energy_predicted, cost: costArray[1], index: 1 },
        { name: "Hydro", amount: hydro_energy_predicted, cost: costArray[2], index: 2 },
        { name: "Biomass", amount: biomass_energy_predicted, cost: costArray[3], index: 3 },
        { name: "Battery", amount: currBatteryCapacity, cost: costArray[4], index: 4 },
        { name: "Thermal", amount: thermal_energy_predicted, cost: costArray[5], index: 5 }
    ];
    
    const consumers = [
        { name: "Households", demand: house_energy_predicted, index: 0 },
        { name: "Offices", demand: office_energy_predicted, index: 1 },
        { name: "Street Lights", demand: stl_energy_predicted, index: 2 },
        { name: "Factories", demand: factory_energy_predicted, index: 3 }
    ];
    
    // Initialize allocation and cost trackers
    const resourceAllocation = Array(consumers.length).fill().map(() => []);
    const allocationDetails = Array(consumers.length).fill().map(() => []);
    const totalCost = Array(consumers.length).fill(0);
    
    // Calculate total energy values
    const totalDemand = consumers.reduce((sum, consumer) => sum + consumer.demand, 0);
    const totalProduction = energySources.reduce((sum, source) => sum + source.amount, 0);
    
    // Determine energy status
    let energyStatus = "";
    let batteryUsage = 0;
    
    if (totalProduction >= totalDemand) {
        if (totalProduction > totalDemand) {
            energyStatus = "Energy is sufficient. Excess energy will be stored in the battery.";
        } else {
            energyStatus = "Energy is exactly sufficient.";
        }
    } else {
        energyStatus = "Energy is insufficient. Additional power sources will be needed.";
    }
    
    // Sort energy sources by cost (cheapest first)
    const sortedEnergySources = [...energySources].sort((a, b) => a.cost - b.cost);
    
    // Allocate energy to each consumer
    consumers.forEach(consumer => {
        let remainingDemand = consumer.demand;
        
        // Skip if no demand
        if (remainingDemand === 0) return;
        
        // Try to allocate energy from each source
        for (const source of sortedEnergySources) {
            if (source.amount <= 0 || remainingDemand <= 0) continue;
            
            // Calculate how much can be allocated from this source
            const allocated = Math.min(source.amount, remainingDemand);
            
            if (allocated > 0) {
                // Record allocation
                resourceAllocation[consumer.index].push(source.index);
                allocationDetails[consumer.index].push({
                    source: source.name,
                    amount: allocated,
                    cost: allocated * source.cost
                });
                
                // Update remaining values
                source.amount -= allocated;
                remainingDemand -= allocated;
                totalCost[consumer.index] += allocated * source.cost;
            }
        }
        
        // If we still have demand but no more sources, record the shortage
        if (remainingDemand > 0) {
            allocationDetails[consumer.index].push({
                source: "Shortage",
                amount: remainingDemand,
                cost: 0
            });
        }
    });
    console.log(resourceAllocation,"resource");
    
    // Calculate battery usage
    batteryUsage = energySources[4].amount - currBatteryCapacity;
    if (batteryUsage < 0) batteryUsage = 0; // Battery wasn't used
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}><p>Energy Advisor</p></div>
            <div className={styles.body}>
                <img className={styles.img} src={EnergyAdviserImg} alt='Energy Adviser' />
                <p>After analyzing the current situation, we observe:</p>
                <h3>Energy Sources</h3>
                <ul>
                    <li>Solar Energy: {solar_energy_predicted} kWh</li>
                    <li>Wind Energy: {wind_energy_predicted} kWh</li>
                    <li>Hydro Energy: {hydro_energy_predicted} kWh</li>
                    <li>Biomass Energy: {biomass_energy_predicted} kWh</li>
                    <li>Thermal Energy: {thermal_energy_predicted} kWh</li>
                </ul>
                
                <h3>Energy Demands</h3>
                <ul>
                    <li>Household Demand: {house_energy_predicted} kWh</li>
                    <li>Office Demand: {office_energy_predicted} kWh</li>
                    <li>Factory Demand: {factory_energy_predicted} kWh</li>
                    <li>Street Lights Demand: {stl_energy_predicted} kWh</li>
                </ul>
                
                <h3>Battery Status</h3>
                <ul>
                    <li>Battery Storage: {currBatteryCapacity}/{maxBatteryCapacity} kWh</li>
                </ul>
                
                <div>
                    <h3>Optimal Energy Allocation</h3>
                    {consumers.map((consumer, index) => (
                        <div key={index}>
                            <h4>{consumer.name} ({consumer.demand} kWh needed)</h4>
                            {allocationDetails[index].length > 0 ? (
                                <ul>
                                    {allocationDetails[index].map((detail, i) => (
                                        <li key={i}>
                                            {detail.source}: {detail.amount.toFixed(2)} kWh (Rs.{detail.cost.toFixed(2)})
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No energy needed</p>
                            )}
                        </div>
                    ))}
                </div>
                
                <div>
                    <h3>Cost Breakdown</h3>
                    <ul>
                        <li>Households: Rs.{totalCost[0].toFixed(2)}</li>
                        <li>Offices: Rs.{totalCost[1].toFixed(2)}</li>
                        <li>Street Lights: Rs.{totalCost[2].toFixed(2)}</li>
                        <li>Factories: Rs.{totalCost[3].toFixed(2)}</li>
                        <li>Total Cost: Rs.{(totalCost.reduce((sum, val) => sum + val, 0)).toFixed(2)}</li>
                    </ul>
                </div>
                
                <div>
                    <h3>Battery Usage</h3>
                    <p>{batteryUsage > 0 ? `Battery will be used to supply ${batteryUsage.toFixed(2)} kWh of energy.` : "Battery usage is not required."}</p>
                </div>
                
                <div>
                    <h3>Final Status</h3>
                    <p>{energyStatus}</p>
                </div>
            </div>
            <button className={styles.submitBtn} onClick={() => close('none')}>Close</button>
        </div>
    );
}

export default Adviser;