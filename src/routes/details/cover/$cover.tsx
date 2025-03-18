import {
  createFileRoute,
  useParams,
  // useRouter,
} from "@tanstack/react-router";
import { insuranceOptions } from "../../../data/comapany-data";

export const Route = createFileRoute("/details/cover/$cover")({
  component: RouteComponent,
});

function RouteComponent() {
  // const router = useRouter();

  // Get the "cover" parameter from the URL
  const coverId = useParams({
    from: "/details/cover/$cover",
    select: (params) => params.cover,
  });

  // Convert to a number for lookup
  const coverIdNumber = Number(coverId);

  // Lookup the cover details from our sample data
  const coverData = insuranceOptions.find(
    (option) => option.id === coverIdNumber
  );

  // If no matching cover is found, display an error UI
  if (!coverData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="p-8 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Cover Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            We couldn’t find the details for this cover.
          </p>
          <button
            // onClick={() => router.back()}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Render the details page with an enriched UI/UX
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <h1 className="text-3xl font-bold">{coverData.company}</h1>
          <p className="mt-2 text-lg">{coverData.cover}</p>
        </div>
        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-gray-600">Base Premium:</p>
              <p className="text-2xl font-bold text-green-600">
                R{coverData.basePremium}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Salary Range:</p>
              <p className="text-2xl font-bold text-gray-800">
                R{coverData.salaryRange[0]} - R{coverData.salaryRange[1]}
              </p>
            </div>
            {coverData.coverageLimit && (
              <div className="space-y-2">
                <p className="text-gray-600">Coverage Limit:</p>
                <p className="text-2xl font-bold text-gray-800">
                  R{coverData.coverageLimit}
                </p>
              </div>
            )}
            {coverData.deductible && (
              <div className="space-y-2">
                <p className="text-gray-600">Deductible:</p>
                <p className="text-2xl font-bold text-gray-800">
                  R{coverData.deductible}
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          {coverData.description && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Plan Description
              </h2>
              <p className="text-gray-700">{coverData.description}</p>
            </div>
          )}

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coverData.coPay && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Co-Pay</h3>
                <p className="text-gray-700">{coverData.coPay}</p>
              </div>
            )}
            {coverData.waitingPeriod && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Waiting Period
                </h3>
                <p className="text-gray-700">{coverData.waitingPeriod}</p>
              </div>
            )}
            {coverData.policyTerm && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Policy Term
                </h3>
                <p className="text-gray-700">{coverData.policyTerm}</p>
              </div>
            )}
          </div>

          {/* Additional Benefits */}
          {coverData.additionalBenefits && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Additional Benefits
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {coverData.additionalBenefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Network Hospitals */}
          {coverData.networkHospitals && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Network Hospitals
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {coverData.networkHospitals.map((hospital, index) => (
                  <li key={index}>{hospital}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Claim Process & Eligibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverData.claimProcess && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Claim Process
                </h2>
                <p className="text-gray-700">{coverData.claimProcess}</p>
              </div>
            )}
            {coverData.eligibilityCriteria && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Eligibility
                </h2>
                <p className="text-gray-700">{coverData.eligibilityCriteria}</p>
              </div>
            )}
          </div>

          {/* Customer Rating & Reviews */}
          {coverData.customerRating && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Customer Rating
              </h2>
              <p className="text-gray-700">{coverData.customerRating} / 5</p>
            </div>
          )}
          {coverData.reviews && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Reviews
              </h2>
              <div className="space-y-4">
                {coverData.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <p className="font-semibold text-gray-800">
                      {review.reviewer}
                    </p>
                    <p className="text-gray-700">Rating: {review.rating} / 5</p>
                    <p className="text-gray-600 mt-1">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-8 flex justify-end">
            <button
              // onClick={() => router.back()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg"
            >
              Back to Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
