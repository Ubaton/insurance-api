import { useState } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { Insurance } from "../../types/insurance";
import { useRouter } from "@tanstack/react-router";

// Set base URL for axios requests
axios.defaults.baseURL = "http://localhost:5000";

interface InsuranceOptionsParams {
  salary: number;
  people: Array<{ id: number; age: number }>;
}

const fetchInsuranceOptions = async ({
  salary,
  people,
}: InsuranceOptionsParams) => {
  try {
    console.log("Sending request:", { salary, people });
    const response = await axios.post("/api/insurance-options", {
      salary,
      people,
    });
    console.log("Received response:", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching insurance options:", error.message);
      console.error("Error details:", error.response?.data || error);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

const InsuranceOptions = () => {
  const router = useRouter();
  const [salary, setSalary] = useState("");
  const [people, setPeople] = useState<{ id: number; age: number }[]>([]);
  const [age, setAge] = useState("");

  const { data, error, refetch, isFetching, isError } = useQuery({
    queryKey: ["insuranceOptions", Number(salary), people],
    queryFn: () => fetchInsuranceOptions({ salary: Number(salary), people }),
    enabled: false, // Only run query when triggered manually
    retry: 1,
  });

  const addPerson = () => {
    if (age && !isNaN(Number(age))) {
      setPeople((prevPeople) => [
        ...prevPeople,
        { id: prevPeople.length + 1, age: parseInt(age, 10) },
      ]);
      setAge("");
    }
  };

  const removePerson = (id: number) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (salary && !isNaN(Number(salary))) {
      refetch();
    }
  };

  const handleDetailCover = (coverId: number) => {
    try {
      console.log("Clicked cover id:", coverId);
      router.navigate({ to: `/details/cover/${coverId}` });
    } catch (error) {
      console.error("Failed to navigate using the router", error);
    }
  };

  return (
    <div className="flex-col flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold">
              Find Your Ideal Medical Insurance
            </h1>
            <p className="mt-2 opacity-90">
              Enter your details below to discover the best coverage options for
              you and your loved ones
            </p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Monthly Salary (R)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Enter your salary"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Add Person
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age"
                    min="0"
                    max="100"
                  />
                  <button
                    type="button"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-medium flex-shrink-0"
                    onClick={addPerson}
                  >
                    Add Person
                  </button>
                </div>
              </div>

              {people.length > 0 && (
                <div>
                  <h2 className="text-gray-700 font-medium mb-3">
                    People Added:
                  </h2>
                  <div className="space-y-2">
                    {people.map((p) => (
                      <div
                        key={p.id}
                        className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200"
                      >
                        <span className="font-medium">
                          Person {p.id}:{" "}
                          <span className="text-blue-600">
                            {p.age} years old
                          </span>
                        </span>
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 font-medium focus:outline-none"
                          onClick={() => removePerson(p.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${
                  isFetching
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                }`}
                disabled={!salary || isFetching}
              >
                {isFetching
                  ? "Searching for Options..."
                  : "Get Insurance Options"}
              </button>
            </form>

            {isError && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                {error instanceof Error
                  ? error.message
                  : "Failed to fetch options"}
              </div>
            )}

            {data && data.length === 0 && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                No insurance options available for your salary range.
              </div>
            )}
          </div>
        </div>

        {data && data.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Available Insurance Options
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.map((option: Insurance) => (
                <div
                  key={option.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg text-gray-800">
                        {option.company}
                      </h3>
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </div>
                    </div>
                    <p className="text-gray-600 mt-1">{option.cover}</p>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Monthly Premium</p>
                        <p className="font-bold text-2xl text-green-600">
                          R{option.totalPremium}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDetailCover(option.id)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>

                    <div className="text-sm text-gray-500 border-t border-gray-100 pt-3">
                      <div className="flex justify-between mb-1">
                        <span>Base Premium:</span>
                        <span className="font-medium text-gray-700">
                          R{option.basePremium}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Salary Range:</span>
                        <span className="font-medium text-gray-700">
                          R{option.salaryRange[0]} - R{option.salaryRange[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <InsuranceOptions />
  </QueryClientProvider>
);

export default App;
