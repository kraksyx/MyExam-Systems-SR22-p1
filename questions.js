const questions = [
  {
    "question": "1. What is the speed for VR according to the POH?",
    "options": ["64kts", "73kts", "108kts", "205kts"],
    "correct": 1
  },
  {
    "question": "2. What is the speed for VY according to the POH?",
    "options": ["73kts", "108kts", "64kts", "205kts"],
    "correct": 1
  },
  {
    "question": "3. What is the speed for VSO according to the POH?",
    "options": ["64kts", "108kts", "205kts", "73kts"],
    "correct": 0
  },
  {
    "question": "4. What is the speed for VS according to the POH?",
    "options": ["74kts", "205kts", "108kts", "64kts"],
    "correct": 0
  },
  {
    "question": "5. What is the speed for VPD according to the POH?",
    "options": ["205kts", "64kts", "74kts", "140kts"],
    "correct": 3
  },
  {
    "question": "6. What is the speed for VG according to the POH?",
    "options": ["92kts", "64kts", "140kts", "74kts"],
    "correct": 0
  },
  {
    "question": "7. What is the speed for VX according to the POH?",
    "options": ["88kts", "140kts", "64kts", "92kts"],
    "correct": 0
  },
  {
    "question": "8. What is the speed for VNO according to the POH?",
    "options": ["64kts", "92kts", "176kts", "88kts"],
    "correct": 2
  },
  {
    "question": "9. What is the speed for VO according to the POH?",
    "options": ["140kts", "88kts", "64kts", "176kts"],
    "correct": 3
  },
  {
    "question": "10. What is the speed for VFE 50% according to the POH?",
    "options": ["140kts", "88kts", "150kts", "176kts"],
    "correct": 2
  },
  {
    "question": "11. What is the speed for VFE 100% according to the POH?",
    "options": ["110kts", "176kts", "88kts", "150kts"],
    "correct": 0
  },
  {
    "question": "12. What are the maximum cranking intervals for the starter?",
    "options": ["Crank for 10 seconds and wait for 20 seconds", "Crank for 20 seconds and wait for 40 seconds", "Crank for 5 seconds and wait for 10 seconds", "Crank for 15 seconds and wait for 30 seconds"],
    "correct": 0
  },
  {
    "question": "13. Is it true that you need to maintain at least 1000 RPM while taxiing the aircraft?",
    "options": ["Only when the aircraft is on the ground", "True", "False", "Only during takeoff"],
    "correct": 1
  },
  {
    "question": "14. What is the probable cause if no drop in RPM is noted during the magneto check?",
    "options": ["The magneto is not grounded", "The fuel mixture is too rich", "The propeller is not engaged", "The engine is overheating"],
    "correct": 0
  },
  {
    "question": "15. At or above what minimum speed should flap retraction from 50% to 0% be done after takeoff?",
    "options": ["176kts", "140kts", "64kts", "90kts"],
    "correct": 3
  },
  {
    "question": "16. Is it true that normal landings are not allowed with 0% or 50% flaps?",
    "options": ["Only during crosswind landings", "Only in emergency situations", "False", "True"],
    "correct": 2
  },
  {
    "question": "17. Is it possible to have an asymmetrical flap deployment in a Cirrus aircraft?",
    "options": ["Only during maintenance", "Only if the aircraft is on the ground", "True", "False, because the flaps are connected by one rod"],
    "correct": 3
  },
  {
    "question": "18. What will cause an oil warning light to illuminate?",
    "options": ["High fuel temperature", "Low battery voltage", "Low or high oil pressure", "Low fuel pressure"],
    "correct": 2
  },
  {
    "question": "19. What additional factor will cause an oil warning light to illuminate?",
    "options": ["Low fuel quantity", "High engine RPM", "Low oil temperature", "High oil temperature"],
    "correct": 3
  },
  {
    "question": "20. What pulls the fuel from the collector tanks?",
    "options": ["The engine-driven fuel pump", "The fuel filter", "The auxiliary fuel pump", "The fuel injector"],
    "correct": 0
  },
  {
    "question": "21. What situation will cause the fuel quantity caution light to illuminate?",
    "options": ["The total fuel quantity is ≤ 14 gallons", "The total fuel quantity is ≤ 20 gallons", "The total fuel quantity is > 14 gallons", "The total fuel quantity is > 50 gallons"],
    "correct": 0
  },
  {
    "question": "22. When only battery 1 is turned on, which buses are energized?",
    "options": ["Main bus 1, main bus 2, and essential bus", "Main distribution bus 1 only", "Essential distribution bus only", "Main bus 2 and essential bus"],
    "correct": 0
  },
  {
    "question": "23. What is the certified mass gross weight of the aircraft?",
    "options": ["3700 lb", "3600 lb", "3800 lb", "3500 lb"],
    "correct": 1
  },
  {
    "question": "24. What does the green arc on the airspeed indicator represent?",
    "options": ["Stall speed range", "Maximum flap speed range", "Maximum cruising speed range", "Normal operating range"],
    "correct": 3
  },
  {
    "question": "25. What speed defines the lower limit of the green arc on the airspeed indicator?",
    "options": ["176 kts", "90 kts", "80 kts", "74 kts"],
    "correct": 3
  },
  {
    "question": "26. What speed defines the upper limit of the green arc on the airspeed indicator?",
    "options": ["80 kts", "90 kts", "176 kts", "74 kts"],
    "correct": 2
  },
  {
    "question": "27. What is the maximum take-off altitude for the aircraft?",
    "options": ["11,000 ft", "9,000 ft", "10,000 ft", "8,000 ft"],
    "correct": 2
  },
  {
    "question": "28. What does Vpd represent on the aircraft?",
    "options": ["Minimum landing speed", "Maximum flap deployment speed", "Maximum cruising speed", "Maximum parachute deployment speed"],
    "correct": 3
  },
  {
    "question": "29. Why might you not see Vpd in other aircraft?",
    "options": ["Because other aircraft don’t have flaps", "Because other aircraft have different landing gear", "Because other aircraft don’t have parachutes", "Because other aircraft are slower"],
    "correct": 2
  },
  {
    "question": "30. Is the aircraft certified for aerobatics?",
    "options": ["Yes, but only with special permission", "No, but limited aerobatics are allowed", "No, aerobatics are strictly prohibited", "Yes, aerobatics are allowed"],
    "correct": 2
  },
  {
    "question": "31. What is the approved fuel type for the aircraft?",
    "options": ["100 Grade Aviation Fuel", "95 Grade Aviation Fuel", "100 LL Grade Aviation Fuel", "90 LL Grade Aviation Fuel"],
    "correct": 2
  },
  {
    "question": "32. What is the total fuel capacity of the aircraft?",
    "options": ["92 U.S. gallons", "94.5 U.S. gallons", "93 U.S. gallons", "95 U.S. gallons"],
    "correct": 1
  },
  {
    "question": "33. What is the total usable fuel for the aircraft?",
    "options": ["91 U.S. gallons", "90 U.S. gallons", "93 U.S. gallons", "92 U.S. gallons"],
    "correct": 3
  },
  {
    "question": "34. What is the maximum allowable fuel imbalance for the aircraft?",
    "options": ["9 U.S. gallons", "10 U.S. gallons", "11 U.S. gallons", "8 U.S. gallons"],
    "correct": 0
  },
  {
    "question": "35. What is the emergency landing speed with flaps up?",
    "options": ["80 kts", "95 kts", "90 kts", "85 kts"],
    "correct": 3
  },
  {
    "question": "36. What is the emergency landing speed with flaps at 50?",
    "options": ["90 kts", "95 kts", "80 kts", "85 kts"],
    "correct": 3
  },
  {
    "question": "37. What is the emergency landing speed with flaps at 100?",
    "options": ["80 kts", "90 kts", "85 kts", "95 kts"],
    "correct": 2
  },
  {
    "question": "38. According to the POH, what is the landing speed range with flaps up?",
    "options": ["90–95 kts", "85–90 kts", "80–85 kts", "95–100 kts"],
    "correct": 0
  },
  {
    "question": "39. According to the POH, what is the landing speed range with flaps at 50?",
    "options": ["90–95 kts", "75–80 kts", "85–90 kts", "80–85 kts"],
    "correct": 2
  },
  {
    "question": "40. According to the POH, what is the landing speed range with flaps at 100?",
    "options": ["90–95 kts", "75–80 kts", "80–85 kts", "85–90 kts"],
    "correct": 2
  },
  {
    "question": "41. A governor failure can cause which of the following situations?",
    "options": ["Oil high pressure and oil high temperature", "Oil high pressure and low fuel pressure", "Oil low pressure and high engine speed", "Oil high temperature and low fuel capacity"],
    "correct": 2
  },
  {
    "question": "42. What is the overall range for Essential Bus Volts?",
    "options": ["0 – 36 Volts", "0 – 32 Volts", "0 – 24 Volts", "24.5 – 32 Volts"],
    "correct": 0
  },
  {
    "question": "43. What is the red arc minimum for Essential Bus Volts?",
    "options": ["> 32 Volts", "0 – 24.4 Volts", "24.5 – 32 Volts", "0 – 36 Volts"],
    "correct": 1
  },
  {
    "question": "44. What is the normal range for Essential Bus Volts?",
    "options": ["24.5 – 32 Volts", "0 – 36 Volts", "0 – 24.4 Volts", "> 32 Volts"],
    "correct": 0
  },
  {
    "question": "45. What is the red arc maximum for Essential Bus Volts?",
    "options": ["24.5 – 32 Volts", "0 – 36 Volts", "0 – 24.4 Volts", "> 32 Volts"],
    "correct": 2
  },
  {
    "question": "46. What is the overall range for Main Bus 1 Voltage?",
    "options": ["0 – 32 Volts", "0 – 36 Volts", "24.5 – 32 Volts", "0 – 24 Volts"],
    "correct": 1
  },
  {
    "question": "47. What is the yellow arc minimum caution range for Main Bus 1 Voltage?",
    "options": ["> 32 Volts", "0 – 36 Volts", "0 – 24.4 Volts", "24.5 – 32 Volts"],
    "correct": 2
  },
  {
    "question": "48. What is the normal range for Main Bus 1 Voltage?",
    "options": ["> 32 Volts", "0 – 36 Volts", "0 – 24.4 Volts", "24.5 – 32 Volts"],
    "correct": 3
  },
  {
    "question": "49. What is the red arc maximum for Main Bus 1 Voltage?",
    "options": ["0 – 24.4 Volts", "24.5 – 32 Volts", "> 32 Volts", "0 – 36 Volts"],
    "correct": 2
  },
  {
    "question": "50. What is the overall range for Main Bus 2 Voltage?",
    "options": ["0 – 36 Volts", "0 – 32 Volts", "24.5 – 32 Volts", "0 – 24 Volts"],
    "correct": 0
  },
  {
    "question": "51. What is the yellow arc minimum caution range for Main Bus 2 Voltage?",
    "options": ["0 – 24.4 Volts", "> 32 Volts", "24.5 – 32 Volts", "0 – 36 Volts"],
    "correct": 0
  },
  {
    "question": "52. What is the normal range for Main Bus 2 Voltage?",
    "options": ["24.5 – 32 Volts", "0 – 36 Volts", "> 32 Volts", "0 – 24.4 Volts"],
    "correct": 0
  },
];
