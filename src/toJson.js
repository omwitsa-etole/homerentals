export default function formDataToJson(formData) {
  const json = {};
  formData.forEach((value, key) => {
    // Check if the key already exists in the JSON object
    if (json.hasOwnProperty(key)) {
      // If the key already exists, convert the value into an array
      // and push the new value into the array
      if (!Array.isArray(json[key])) {
        json[key] = [json[key]];
      }
      json[key].push(value);
    } else {
      // If the key doesn't exist, simply assign the value
      json[key] = value;
    }
  });
  return json;
}