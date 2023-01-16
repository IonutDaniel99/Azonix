// System Variabiles
import { exec as execGnomeScript } from 'child_process';
// Configs Imports
import { console_gnome_start, weather_gnome_start } from './src/configs/server_start_strings.js';


execGnomeScript(console_gnome_start);
execGnomeScript(weather_gnome_start);


function initiate_server_start() { }
