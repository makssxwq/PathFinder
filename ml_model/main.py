from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()

# Загрузка модели
model = joblib.load('student_performance_model.pkl')

# Входные данные
class StudentData(BaseModel):
    attendance: float
    study_hours: float

@app.post("/predict")
def predict(data: StudentData):
    prediction = model.predict([[data.attendance, data.study_hours]])
    return {"predicted_score": prediction[0]}