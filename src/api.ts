interface EnquiryData {
  name: string;
  email: string;
  message: string;
}

export const sendEnquiry = async (data: EnquiryData) => {
  const response = await fetch("http://localhost:5000/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Failed to send enquiry");
  }

  return response.json();
};
