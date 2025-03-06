const API_BASE_URL = "http://localhost:3000/api/v1/apply";

const getAuthToken = () => localStorage.getItem("token"); // Retrieve JWT token

export const submitVolunteerForm = async (formData) => {
  const formDataObject = new FormData(); // ✅ Fix: Use FormData

  Object.entries(formData).forEach(([key, value]) => {
    if (key === 'resume' && value) {
      formDataObject.append(key, value); // ✅ Append file separately
    } else {
      formDataObject.append(key, value);
    }
  });

  const response = await fetch(`${API_BASE_URL}/employees`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${getAuthToken()}`, // ✅ No "Content-Type" (automatically set)
    },
    body: formDataObject, // ✅ Send as FormData
  });

  return response.json();
};
