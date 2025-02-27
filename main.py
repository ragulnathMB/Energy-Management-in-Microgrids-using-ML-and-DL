from fastapi import FastAPI
import numpy as np
import joblib
import os
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf

app = FastAPI()

# Define allowed origins (your frontend URL)
origins = [
    "http://localhost:5174",
    "http://127.0.0.1:5174",
    "http://127.0.0.1:5173",
    "http://localhost:5173",
    "*"
]

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the folder where your models are stored
MODEL_DIR = r"D:\Energy_Management_Microgrids_Using_DL\models"

# Load XGBoost models using joblib
solar_model = joblib.load(os.path.join(MODEL_DIR, "solar_energy_model.pkl"))
wind_model = joblib.load(os.path.join(MODEL_DIR, "wind_energy_xgboost.pkl"))
hydro_model = joblib.load(os.path.join(MODEL_DIR, "xgboost_hydro_model.pkl"))
biomass_model = joblib.load(os.path.join(MODEL_DIR, "xgboost_biomass_model.pkl"))
thermal_model = joblib.load(os.path.join(MODEL_DIR, "xgboost_thermal_model.pkl"))

house_model = joblib.load(os.path.join(MODEL_DIR, "xgboost_house_energy_model (1).pkl"))
factory_model = joblib.load(os.path.join(MODEL_DIR, "xgboost_factory_power.pkl"))
office_model = joblib.load(os.path.join(MODEL_DIR, "xgboost_office_power.pkl"))
stl_model = joblib.load(os.path.join(MODEL_DIR, "xgboost_street_light_power.pkl"))

energy_management_model = tf.keras.models.load_model(os.path.join(MODEL_DIR, "energy_management_model.h5"))

# Load the scaler
scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))

@app.get("/")
def home():
    return {"message": "Energy Management API is running"}

@app.post("/predict/solar-energy")
def predict_solar_energy(data: dict):
    features = np.array(data["features"]).reshape(1, -1)
    prediction = solar_model.predict(features).tolist()
    print("1")
    return {"solar_energy_prediction": prediction[0]}

@app.post("/predict/wind-energy")
def predict_wind_energy(data: dict):
    features = np.array(data["features"]).reshape(1, -1)
    prediction = wind_model.predict(features).tolist()
    print(2)
    return {"wind_energy_prediction": prediction[0]}

@app.post("/predict/hydro-energy")
def predict_hydro_energy(data: dict):
    features = np.array(data["features"]).reshape(1, -1)
    prediction = hydro_model.predict(features).tolist()
    print(3)
    return {"hydro_energy_prediction": prediction[0]}

@app.post("/predict/biomass-energy")
def predict_biomass_energy(data: dict):  # Corrected function name
    features = np.array(data["features"]).reshape(1, -1)
    prediction = biomass_model.predict(features).tolist()
    print(9)
    return {"biomass_energy_prediction": prediction[0] * 1000}

@app.post("/predict/thermal-energy")
def predict_thermal_energy(data: dict):  # Corrected function name
    features = np.array(data["features"]).reshape(1, -1)
    prediction = thermal_model.predict(features).tolist()  # Corrected model
    print(4)
    return {"thermal_energy_prediction": prediction[0] * 1000}

@app.post("/predict/house-energy")
def predict_house_energy(data: dict):
    features = np.array(data["features"]).reshape(1, -1)
    print(features)
    prediction = house_model.predict(features).tolist()
    print(5)
    return {"house_energy_prediction": prediction[0]}

@app.post("/predict/factory-energy")
def predict_factory_energy(data: dict):
    features = np.array(data["features"]).reshape(1, -1)
    prediction = factory_model.predict(features).tolist()
    print(6)
    return {"factory_energy_prediction": prediction[0]}

@app.post("/predict/office-energy")
def predict_office_energy(data: dict):
    features = np.array(data["features"]).reshape(1, -1)
    prediction = office_model.predict(features).tolist()
    print(7)
    return {"office_energy_prediction": prediction[0]}

@app.post("/predict/stl-energy")
def predict_st_light_energy(data: dict):
    features = np.array(data["features"]).reshape(1, -1)
    print(8)
    prediction = stl_model.predict(features).tolist()
    return {"stl_energy_prediction": prediction[0]}


@app.post("/predict/deep-learning-energy")
def predict_energy(data: dict):
    try:
        # Convert input data to NumPy array and reshape
        features = np.array(data["features"]).reshape(1, -1)

        # Apply scaling
        features_scaled = scaler.transform(features)

        # Make a prediction using the `.h5` model
        prediction = energy_management_model.predict(features_scaled)

        # Convert the output to a list (rounding to 4 decimal places)
        prediction = prediction.flatten().tolist()
        prediction = [round(value, 4) for value in prediction]

        return {"deep_learning_energy_prediction": prediction}

    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error in prediction: {str(e)}")

