from os import system


weather_path = 'start /B start cmd.exe @cmd /k python microservices/weather/start.py'
console_path = 'start /B start cmd.exe @cmd /k python microservices/console/start.py'

if __name__ == '__main__':
    system(weather_path)
    system(console_path)
