# Medical Assistant

Welcome to the Medical Assistant Project! This project is designed to simplify healthcare navigation by providing a comprehensive recommendation system. It uses Flask for the backend and HTML/CSS for the frontend.

## Project Overview
Finding the right doctor often involves multiple steps, such as researching symptoms, identifying potential diseases, and searching for specialists with matching schedules. This system streamlines these processes by:

- **Symptom Analysis**: Users can enter their symptoms, and the system predicts potential illnesses using mock data and disease predictor databases.
- **Specialist Recommendations**: The system recommends specialists based on the predicted disease and user preferences. It uses healthcare provider databases and user ratings to find suitable doctors.
- **Self-Care Guidance**: Along with doctor recommendations, the system offers suggestions for initial condition management, such as exercises, dietary plans, medications, and preventative measures.

This comprehensive approach helps users find the right healthcare providers and offers guidance on managing their health.

https://github.com/tejaswijadhav2003/Medical_Assitant/assets/94731975/f06587b1-f711-48ce-ad36-5a92fadbee47


## Prerequisites

To run this project, ensure you have the following:

- Python 3.7 or later
- A virtual environment tool (like `venv` or `virtualenv`)
- Flask and other required packages (listed below)

## Getting Started

### Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

flask run


