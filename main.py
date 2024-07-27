import csv
import json

def make_json(csvFilePath, jsonFilePath):
    data = {}
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        headers = csvReader.fieldnames
        print("Headers:", headers)  # Print out the headers to check the column names
        for rows in csvReader:
            key = rows[headers[0]]  # Use the first column as the key, or replace with correct column name
            data[key] = rows
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))

csvFilePath = r'crop_recommendation\Crop_recommendation.csv'
jsonFilePath = r'backend/Crop.json'
make_json(csvFilePath, jsonFilePath)
