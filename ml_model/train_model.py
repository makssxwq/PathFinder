import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib

# Загрузка данных
data = pd.read_csv('student_data.csv')  # Датасет учеников
X = data[['attendance', 'study_hours']]
y = data['score']

# Разделение на обучающую и тестовую выборки
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Обучение модели
model = LinearRegression()
model.fit(X_train, y_train)

# Сохранение модели
joblib.dump(model, 'student_performance_model.pkl')
