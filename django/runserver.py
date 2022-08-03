import subprocess

# Path to your python in the env
pythonBinary = "./venv/bin/python"

# Path to your manage.py file
managePy = "./manage.py"

subprocess.Popen([pythonBinary, managePy, "runserver"])
